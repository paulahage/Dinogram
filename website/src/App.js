import { BrowserRouter,Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SavedPosts from "./pages/SavedPosts";
//import SinglePost from "./components/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/post/:postId" element={<SinglePost />} /> */}
          <Route path=":userId" element={<Profile />} />
          <Route path="/settings/saved" element={<SavedPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
