import React, { useState } from "react"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.element"
import { FaTimes, FaBars } from "react-icons/fa"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">{process.env.REACT_APP_NAME}</NavLogo>
          <MenuIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MenuIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/">Profile</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/account">Account</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
