import React from 'react'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { BsList } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import {ReactComponent as DiscordIcon} from '../assets/img/discord-brands3.svg'

export default function Header({ isMobile }) {
  return(
    <Navbar className='header-container'>
      <Navbar.Brand href="" className={isMobile ? 'logo-mobile' : 'logo-pc'}>
        <img
          src='logo.png'
          alt='logo'
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {
          isMobile
          ? <Nav className='nav-container'>
              <NavDropdown title={<BsList/>}>
                <NavDropdown.Item href="">Transcode</NavDropdown.Item>
                <NavDropdown.Item href="">Discord</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          : <Nav className='nav-container'>
              <Nav.Link href=""> 
                <img
                  src='discord_icon.png'
                  alt='discord_icon'
                  className='discord-icon'
                />

              </Nav.Link>
              <Nav.Link href="">Discord</Nav.Link>
            </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}
