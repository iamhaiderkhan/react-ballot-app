import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 10px;
  margin: 10px 10px 0px 0px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts};
  width: auto;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = ({ text, onPress, ...rest }) => (
  <Btn onClick={onPress} {...rest}>
    {text}
  </Btn>
);
