
/* eslint-disable */
import Header from "./Header";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import Profile from "./Profile/Profile";
import Cart from "./Cart/Cart";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />

   

      <Routes>
        <Route path='/Profile' element={<Profile/>} /> 
        <Route path='/Cart' element={<Cart />} />
      </Routes>

   <div style={{ height: "1000px" }}></div>
      <Footer />
    </>
  );
}

export default App;
