import { Nav, LogoImage, NavContainer } from "./Navbar.styles"
import Logo from '../../assets/logowallet.png'
import NavUnlogged from "../NavUnlogged/NavUnlogged"
import NavLogged from "../NavLogged/NavLogged"
import { useSelector } from "react-redux"
import { useState } from "react"


const Navbar = () => {
    const userLogged = useSelector(state => state.logged.email)
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
      console.log('estoy abriendo el menu');
      console.log(isOpen);
    };
    

  return (
    <NavContainer>
        <LogoImage src={Logo} alt={Logo} />
        <Nav>
            {
                !userLogged
                ? <NavUnlogged />
                : <NavLogged  isOpen={isOpen} handleToggle={handleToggle}/>
            }
        </Nav>
    </NavContainer>
  )
}

export default Navbar