import styled from "styled-components"
import { Container } from "../../globalStyles"
import { Link } from "react-router-dom"

export const Nav = styled.div`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;
`
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`
export const MenuIcon = styled.div`
  display: block;
  position: relative;
  padding-top: 21px;
  padding-right: 10px;
  justify-self: flex-end;
  top: 0;
  right: 0;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 80px;
  left: ${({ click }) => (click ? 0 : "-100%")};
  opacity: 1;
  transition: all 0.5s ease;
  background: #101522;
`

export const NavItem = styled.li`
  height: 90px;
  border-bottom: 2px solid transparent;
  width: 100%;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  h1 {
    color: #fff;
    text-overflow: none;
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;
`
