import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { SidebarProvider } from "./context/SidebarContext";
import { FeedPostsProvider } from "./context/FeedPostsContext";
import { LikesProvider } from "./context/LikesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FeedPostsProvider>
    <LikesProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </LikesProvider>
  </FeedPostsProvider>
);
