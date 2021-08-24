import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  padding: 2em;
  background-color: inherit;

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: 100%;
    overflow-y: scroll;
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
    color: #444;
  }

  a:visited {
    color: #444;
  }

  a:hover,
  a:focus {
    color: #000;
  }
`

const Sidebar = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mynotes">My Notes</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </NavList>
    </Nav>
  )
}

export default Sidebar