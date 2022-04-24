import { NavItem, Signup } from "../Navbar/Navbar.styles"

const NavUnlogged = () => {
  return (
    <>
        <NavItem to="/login">Login</NavItem>
        <Signup to="/signup">Signup</Signup>
    </>
  )
}

export default NavUnlogged