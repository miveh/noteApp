import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
  onClick: props.$onClick,
}))`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #3b3b3b;
  border: none;
  cursor: pointer;
`;

export default Button;
