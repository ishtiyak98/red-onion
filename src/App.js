import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Checkout/Checkout";
import Breakfast from "./Pages/DishSection/Breakfast/Breakfast";
import Lunch from "./Pages/DishSection/Lunch/Lunch";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="breakfast" element={<Breakfast></Breakfast>}></Route>
          <Route path="lunch" element={<Lunch></Lunch>}></Route>
          <Route path="checkout" element={<Checkout></Checkout>}></Route>
        </Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
