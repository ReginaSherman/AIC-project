import React from 'react'
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap'

const NavBar = () => {
    return (
      <div>
        <Navbar color="light" expand="md"light>
          <Nav pills>
            <NavItem>
              <NavLink active href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='right' href="/categories">Categories</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        
      </div>
      
    )
}

export default NavBar
