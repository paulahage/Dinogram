import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { SidebarProvider } from "./context/SidebarContext";
import { FeedAndPostsProvider } from "./context/FeedAndPostsContext";
import { LikesProvider } from "./context/LikesContext";
import { SinglePostProvider } from "./context/SinglePostContext";
import { PostOptionsMenuProvider } from "./context/PostOptionsMenuContext";
import { SavedPostProvider } from "./context/SavedPostContext";
import { CommentProvider } from "./context/CommentContext";
import { SearchUserProvider } from "./context/SearchUserContext";
import { UserLoggedProvider } from "./context/UserLoggedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserLoggedProvider>
      <FeedAndPostsProvider>
        <LikesProvider>
          <SavedPostProvider>
            <SidebarProvider>
              <SearchUserProvider>
                  <CommentProvider>
                    <SinglePostProvider>
                      <PostOptionsMenuProvider>
                        <App />
                      </PostOptionsMenuProvider>
                    </SinglePostProvider>
                  </CommentProvider>
              </SearchUserProvider>
            </SidebarProvider>
          </SavedPostProvider>
        </LikesProvider>
      </FeedAndPostsProvider>
    </UserLoggedProvider>
  </React.StrictMode>
);
