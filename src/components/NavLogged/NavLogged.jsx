import { useState } from "react";
import { useDispatch } from "react-redux"
import { setLogin } from "../../redux/actions"
import { Logout, MenuHamburguesa, NavItem, NavLoggedContainer } from "../Navbar/Navbar.styles"

const NavLogged = ({handleToggle, isOpen}) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(setLogin([]))
  };

  return (
    <>
    <MenuHamburguesa onClick={handleToggle}/>
    <NavLoggedContainer isOpen={isOpen} onClick={handleToggle}>
        <NavItem to="/balance">Balance</NavItem>
        <NavItem to="/send">Send</NavItem>
        <NavItem to="/deposit">Deposit</NavItem>
        <NavItem to="/transactions">Transactions</NavItem>
        <Logout to="/login" onClick={handleLogout}>Logout</Logout>
    </NavLoggedContainer>
    </>
  )
};

export default NavLogged