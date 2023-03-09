import { BrowserRouter,Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import DirectMessage from "./pages/Direct_Message";
import SavedPosts from "./pages/SavedPosts";
//import SinglePost from "./components/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/post/:postId" element={<SinglePost />} /> */}
          <Route path="/search" element={<Search />} />
          <Route path=":userId" element={<Profile />} />
          <Route path="/direct/inbox" element={<DirectMessage />} />
          <Route path="/settings/saved" element={<SavedPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
