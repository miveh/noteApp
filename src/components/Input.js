import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  placeholder: props.$placeHolder,
}))`
  background: transparent;
  border: none;
  width: 90%;
  color: #9a9a9a;
  font-family: Nunito;
  font-size: ${(props) => props.$size};
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  outline: none;
`;

export default Input;
