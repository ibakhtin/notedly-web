import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: 0.5em 1.25em;
  border-radius: 500px;
  border-width: 2px;
  border-color: black;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  cursor: pointer;
  
  :hover {
    opacity: 0.75;
  }
`;

export default Button;