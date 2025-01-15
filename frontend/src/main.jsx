import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/post/:id" element={<h1>Post</h1>} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/*" element={<h1>Page not found</h1>} />
    </Routes>
  </BrowserRouter>
);
