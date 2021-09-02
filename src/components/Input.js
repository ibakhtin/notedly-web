import styled from 'styled-components'

const StyledInput = styled.input`
  height: 32px;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;

  :focus {
    outline: none;
    border: 1px solid #0af;
  }
`

const Input = (props) => <StyledInput {...props} />

export default Input