import styled from "styled-components";

export const Row = styled.div`
  flex-direction: row;
  display: flex;
`;

function getWidthString(span) {
  if (!span) return;
  let width = (span / 12) * 100;
  console.log(width, "==========");
  return `width: ${width}%`;
}

export const Column = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.xs}) {
    ${({ xs }) => xs && getWidthString(xs)}
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    ${({ sm }) => sm && getWidthString(sm)}
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    ${({ md }) => md && getWidthString(md)}
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    ${({ lg }) => lg && getWidthString(lg)}
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.xlg}) {
    ${({ xlg }) => xlg && getWidthString(xlg)}
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.xxlg}) {
    ${({ xxlg }) => xxlg && getWidthString(xxlg)}
  }
`;
