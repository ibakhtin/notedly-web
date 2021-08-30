import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'

const Wrapper = styled.div`
  background-color: #f5f5f5;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
    flex: auto;
  }
`

const Main = styled.main`
  background-color: inherit;
  position: fixed;
  width: 100%;
  padding: 1em;
  overflow-y: scroll;

  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: 100%;
    width: calc(100% - 220px);
  }
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar/>
      <Main>{ children }</Main>
    </Wrapper>
  )
}

export default Layout