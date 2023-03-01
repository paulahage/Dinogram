import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { SidebarProvider } from "./context/SidebarContext";
import { FeedAndPostsProvider } from "./context/FeedAndPostsContext";
import { LikesProvider } from "./context/LikesContext";
import { SinglePostProvider } from "./context/SinglePostContext";
import { PreviewProfileProvider } from "./context/PreviewProfileContext";
import { PostOptionsMenuProvider } from "./context/PostOptionsMenuContext";
import { SavedPostProvider } from "./context/SavedPostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FeedAndPostsProvider>
      <LikesProvider>
        <SavedPostProvider>
          <SidebarProvider>
            <PreviewProfileProvider>
              <SinglePostProvider>
                <PostOptionsMenuProvider>
                  <App />
                </PostOptionsMenuProvider>
              </SinglePostProvider>
            </PreviewProfileProvider>
          </SidebarProvider>
        </SavedPostProvider>
      </LikesProvider>
    </FeedAndPostsProvider>
  </React.StrictMode>
);
