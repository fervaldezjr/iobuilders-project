import { useDispatch } from "react-redux"
import { setLogin } from "../../redux/actions"
import { Logout, NavItem } from "../Navbar/Navbar.styles"

const NavLogged = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(setLogin([]))
  };

  return (
    <>
        <NavItem to="/balance">Balance</NavItem>
        <NavItem to="/send">Send</NavItem>
        <NavItem to="/deposit">Deposit</NavItem>
        <NavItem to="/transactions">Transactions</NavItem>
        <Logout to="/login" onClick={handleLogout}>Logout</Logout>
    </>
  )
};

export default NavLogged