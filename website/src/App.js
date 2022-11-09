import { BrowserRouter,Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import DirectMessage from "./pages/Direct_Message";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/direct_message" element={<DirectMessage/>}/>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
