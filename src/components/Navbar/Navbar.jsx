import { Nav, LogoImage, NavContainer } from "./Navbar.styles"
import Logo from '../../assets/logowallet.png'
import NavUnlogged from "../NavUnlogged/NavUnlogged"
import NavLogged from "../NavLogged/NavLogged"
import { useSelector } from "react-redux"


const Navbar = () => {
    const userLogged = useSelector(state => state.logged.email)

  return (
    <NavContainer>
        <LogoImage src={Logo} alt={Logo} />
        <Nav>
            {
                !userLogged
                ? <NavUnlogged />
                : <NavLogged />
            }
        </Nav>
    </NavContainer>
  )
}

export default Navbar