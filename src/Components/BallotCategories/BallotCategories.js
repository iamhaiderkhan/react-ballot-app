import React from "react";
import map from "lodash/map";
import "./styles.css";
import BallotVoteCard from "../BallotVoteCard/BallotVoteCard";
import { selectedNominee } from "../../redux/ballots/slice";
import { getSelectedNominee } from "../../redux/ballots/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "../Grid";
import styled from "styled-components";
import { Button } from "../Button";
import { toggleResultModal } from "../../redux/ballots/slice";

const CategoriesRow = styled(Row)`
  flex-wrap: wrap;
`;

const Nav = styled.div`
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
`;

const ResultButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
`;

const BallotCategories = ({ categories }) => {
  const dispatch = useDispatch();
  const selectedNominees = useSelector(getSelectedNominee);

  const onPressVote = (categoryType) => async (votedNomine) => {
    console.log(categoryType, votedNomine);
    await dispatch(
      selectedNominee({ ...selectedNominees, [categoryType]: votedNomine })
    );
  };

  const showModalHandler = (status) => () =>
    dispatch(toggleResultModal(status));

  return (
    <div>
      <Nav>
        <h1>AWARDS 2021</h1>
        <ResultButton
          disabled={Object.keys(selectedNominees).length === 0}
          text="Show Result"
          onPress={showModalHandler(true)}
        />
      </Nav>
      {map(categories, (item) => (
        <div>
          <h3>{item.title}</h3>
          <CategoriesRow>
            {map(item.items, (nomine) => (
              <BallotVoteCard
                nomine={nomine}
                onPressNomine={onPressVote(item.id)}
                selected={selectedNominees[item.id] === nomine.title}
              />
            ))}
          </CategoriesRow>
        </div>
      ))}
    </div>
  );
};

export default BallotCategories;
