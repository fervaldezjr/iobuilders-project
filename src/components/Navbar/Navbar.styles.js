import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3em;
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
  background-color: rgb(32, 129, 226);
  border-radius: 20px;
`;

export const Logout = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 0.5em;
  padding: 0.7em;
  font-weight: 500;
  font-size: 1em;
  background-color: tomato;
  border-radius: 20px;
`;
