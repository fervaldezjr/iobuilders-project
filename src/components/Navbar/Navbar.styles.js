import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3em;
`;

export const MenuHamburguesa = styled(HiMenu)`
  font-size: 2em;
  position: fixed;
  z-index: 3;
  cursor: pointer;

  @media (min-width: 500px) {
    display: none;
  }
`;

export const NavLoggedContainer = styled.nav`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
    position: fixed;
    background-color: white;
    padding-top: 2em;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 1;
    width: 100%;
    transition: 0.3s ease-in-out;
    top: ${({ isOpen }) => (isOpen ? "0%" : "-120%")};
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  }
`;

export const LogoImage = styled.img`
  max-width: 3em;
`;
export const Nav = styled.div`
  display: flex;
`;
export const NavItem = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0.5em;
  padding: 0.7em;
  font-weight: 500;
  font-size: 1em;
`;

export const Signup = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 0.5em;
  padding: 0.7em;
  font-weight: 500;
  font-size: 1em;
  background-image: linear-gradient(
    -225deg,
    #77ffd2 0%,
    #6297db 48%,
    #1eecff 100%
  );
  border-radius: 20px;
`;

export const Logout = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 0.5em;
  padding: 0.7em;
  font-weight: 500;
  font-size: 1em;
  background-image: linear-gradient(25deg, #d64c7f, #ee4758 50%);
  border-radius: 20px;
`;
