import styled from "styled-components";

const Button = styled.button`
  display: block;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  background-color: #000;
  cursor: pointer;
  
  :hover {
    opacity: 0.75;
  }
`;

export default Button;