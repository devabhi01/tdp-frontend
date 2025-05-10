import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AdminLogin from "../pages/AdminLogin";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
