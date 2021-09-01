import styled from 'styled-components'

const StyledInput = styled.input`
  display: block;
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

const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
`

const Input = (props) => (
  <>
    <StyledLabel>{props.label}</StyledLabel>
    <StyledInput {...props} />
  </>
)

export default Input