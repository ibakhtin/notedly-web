import styled, { css } from 'styled-components'

const outline = css`
  color: #666;
  background-color: transparent;
  
  &:hover {
    color: #fcfcfc;
    background-color: #666;
  }
`

const round = css`
  padding: 4px 18px 6px;
  border-radius: 500px;
`

const Button = styled.button`
  padding: 4px 14px 6px;
  min-width: 5em;
  border: 2px solid #666;
  border-radius: 6px;
  color: #fcfcfc;
  background-color: #666;
  cursor: pointer;
  
  :hover {
    background-color: #555;
  }
  
  ${props => props.outline && outline}
  ${props => props.round && round}
`

export default Button