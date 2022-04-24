import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/LogIn/Login";
import Signup from "./pages/SignUp/Signup";
import Send from "./pages/Send/Send";
import Transactions from "./pages/Transactions/Transactions";
import Balance from "./pages/Balance/Balance";
import Deposit from "./pages/Deposit/Deposit";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/send" element={<Send />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/deposit" element={<Deposit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
