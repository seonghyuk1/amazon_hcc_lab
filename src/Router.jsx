import { Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Order from "./Order";

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<App />}></Route>
      <Route path="/Login" exact element={<Login />}></Route>
      <Route path="/Order" exact element={<Order />}></Route>
    </Routes>
  );
}
