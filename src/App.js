import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/LogIn/Login";
import Signup from "./pages/SignUp/Signup";
import Send from "./pages/Send/Send";
import Transactions from "./pages/Transactions/Transactions";
import Balance from "./pages/Balance/Balance";
import Deposit from "./pages/Deposit/Deposit";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />

        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/send" element={<Send />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/deposit" element={<Deposit />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
