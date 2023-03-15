/* eslint-disable */
import Header from "./Header";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Profile from "./Profile/Profile";
import Cart from "./Cart/Cart";
import Footer from "./Footer";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
