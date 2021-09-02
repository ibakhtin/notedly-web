import styled, { css } from 'styled-components'

const outline = css`
  color: #333;
  background-color: #fff;
  border-color: #ddd;
  
  &:hover {
    //color: #fcfcfc;
    background-color: #fff;
    border-color: #999;
  }
`

const round = css`
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 9999px;
`

// TODO: Add danger and quiet buttons


const Button = styled.button`
  padding-left: 20px;
  padding-right: 20px;
  min-width: 5em;
  border: 1px solid #666;
  border-radius: 6px;
  color: #fff;
  background-color: #666;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  height: 32px;
  
  :hover, :focus {
    background-color: #555;
    border-color: #555;
  }
  
  ${props => props.outline && outline}
  ${props => props.round && round}
`

export default Button