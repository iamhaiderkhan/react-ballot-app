import React from "react";
import styled from "styled-components";
const MainContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts};
  display: flex;
  @media (min-width: ${({ theme }) => theme.breakPoints.xs}) {
    width: 100%;
    justify-content: center;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 100%;
    justify-content: center;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 720px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    width: 960px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.xlg}) {
    width: 1140px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.xxlg}) {
    width: 1320px;
  }
`;

export const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};
