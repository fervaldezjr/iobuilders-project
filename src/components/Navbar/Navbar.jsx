import { Nav, LogoImage, NavContainer } from "./Navbar.styles"
import Logo from '../../assets/logowallet.png'
import NavUnlogged from "../NavUnlogged/NavUnlogged"
import NavLogged from "../NavLogged/NavLogged"
import { useState } from "react"

const Navbar = () => {
    const [logged, setLogged] = useState(true)

  return (
    <NavContainer>
        <LogoImage src={Logo} alt={Logo} />
        <Nav>
            {
                !logged
                ? <NavUnlogged />
                : <NavLogged />
            }
        </Nav>
    </NavContainer>
  )
}

export default Navbar