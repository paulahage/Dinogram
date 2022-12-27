import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { SidebarProvider } from "./context/SidebarContext";
import { FeedPostsProvider } from "./context/FeedPostsContext";
import { LikesProvider } from "./context/LikesContext";
import { SinglePostProvider } from "./context/SinglePostContext";
import { PreviewProfileProvider } from "./context/PreviewProfileContext";
import { PostOptionsMenuProvider } from "./context/PostOptionsMenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FeedPostsProvider>
      <LikesProvider>
        <SidebarProvider>
          <PreviewProfileProvider>
            <SinglePostProvider>
              <PostOptionsMenuProvider>
                <App />
              </PostOptionsMenuProvider>
            </SinglePostProvider>
          </PreviewProfileProvider>
        </SidebarProvider>
      </LikesProvider>
    </FeedPostsProvider>
  </React.StrictMode>
);
