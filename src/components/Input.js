import styled from 'styled-components'

const Input = styled.input`
  line-height: 2em;
  width: 100%;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border: 1px solid #ddd;
  border-radius: 6px;

  :focus {
    outline: none;
    border: 1px solid #bbb;
  }
`

export default Input