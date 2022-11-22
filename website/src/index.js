import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { SidebarProvider } from './context/SidebarContext';
import { FeedPostsProvider } from './context/FeedPostsContext';
import { LikesProvider } from './context/LikesContext';
import { SinglePostProvider } from './context/SinglePostContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FeedPostsProvider>
      <LikesProvider>
        <SidebarProvider>
          <SinglePostProvider>
            <App />
          </SinglePostProvider>
        </SidebarProvider>
      </LikesProvider>
    </FeedPostsProvider>
  </React.StrictMode>
);
