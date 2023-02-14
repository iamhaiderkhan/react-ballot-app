import React from "react";
import { Modal } from "react-responsive-modal";
import { getSelectedNominee } from "../../redux/ballots/selectors";
import { useSelector } from "react-redux";
import styled from "styled-components";
import map from "lodash/map";
import startCase from "lodash/startCase";
import { Row } from "../Grid";
export const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;
export const SubHeading = styled.h5`
  color: ${({ theme }) => theme.colors.primary};
  padding-left: 10px;
`;
export const ResultModal = ({ isVisiable, onCloseHandler }) => {
  const selectedNominees = useSelector(getSelectedNominee);
  return (
    <Modal open={isVisiable} onClose={onCloseHandler} center>
      <Heading>Results</Heading>
      {map(Object.keys(selectedNominees), (item) => (
        <Row>
          <Heading>{startCase(item)}: </Heading>
          <SubHeading>{selectedNominees[item]}</SubHeading>
        </Row>
      ))}
    </Modal>
  );
};
