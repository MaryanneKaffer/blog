import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ReadPost from "./pages/readPost";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route path="/post/:id" element={<ReadPost />} />
    </Routes>
  );
}

export default App;
