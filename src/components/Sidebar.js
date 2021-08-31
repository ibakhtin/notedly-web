import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'


const Brand = styled.h1`
  font-size: 1.5em;
  margin: 0 0 1em;
`

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
const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`

const NavListItem = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
)

const Sidebar = () => {
  const { data } = useQuery(IS_LOGGED_IN)

  return (
    <Nav>
      <Brand>Notedly</Brand>
      <NavList>
        <NavListItem to="/">Home</NavListItem>
        <NavListItem to="/mynotes">My Notes</NavListItem>
        <NavListItem to="/favorites">Favorites</NavListItem>
      </NavList>
      {data.isLoggedIn ? (
        <p>Log Out</p>
      ) : (
        <NavListItem to="/signup">Sign Up</NavListItem>
      )}
    </Nav>
  )
}

export default Sidebar