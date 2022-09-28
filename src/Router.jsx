import { Routes, Route } from "react-router-dom";
import App from "./App";
import AllProduct from "./AllProduct"
import Mobile from "./Mobile";
import Prime from "./Prime";
import Computers from "./Computers";
import Pantry from "./Pantry";
import Electronics from "./Electronics";
import Login from "./Login";
import Order from "./Order";


export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<App />}></Route>
      <Route path="/All" exact element={<AllProduct/>}></Route>
      <Route path="/Mobile" exact element={<Mobile/>}></Route>
      <Route path="/Prime" exact element={<Prime/>}></Route>
      <Route path="/Computers" exact element={<Computers/>}></Route>
      <Route path="/Pantry" exact element={<Pantry/>}></Route>
      <Route path="/Electronics" exact element={<Electronics/>}></Route>
      <Route path="/Login" exact element={<Login />}></Route>
      <Route path="/Order" exact element={<Order />}></Route>
    </Routes>
  );
}
