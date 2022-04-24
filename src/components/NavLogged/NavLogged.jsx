import { Logout, NavItem } from "../Navbar/Navbar.styles"

const NavLogged = () => {

  return (
    <>
        <NavItem to="/balance">Balance</NavItem>
        <NavItem to="/send">Send</NavItem>
        <NavItem to="/deposit">Deposit</NavItem>
        <NavItem to="/transactions">Transactions</NavItem>
        <Logout to="/login">Logout</Logout>
    </>
  )
}

export default NavLogged