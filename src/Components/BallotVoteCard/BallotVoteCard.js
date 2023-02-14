import React from "react";
import styled from "styled-components";
import { Button } from "../Button";

const BallotVoteCardConatiner = styled.div`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.green : theme.colors.secondary};
  padding: 10px;
  margin: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 250px;
  &:hover {
    background-color: ${({ theme, selected }) =>
      selected ? theme.colors.green : theme.colors.tertiary};
  }
`;

const Img = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const BallotVoteCard = ({ nomine, onPressNomine, selected }) => {
  console.log(selected);
  const onPresshandler = (nomineName) => () => {
    if (typeof onPressNomine === "function") {
      onPressNomine(nomineName);
    }
  };
  return (
    <BallotVoteCardConatiner selected={selected}>
      <h6>{nomine.title}</h6>
      <Img className="vote-image" src={`${nomine.photoUrL}`} alt="nomine img" />
      <Button
        text={selected ? "voted" : "vote"}
        onPress={onPresshandler(nomine.title)}
      />
    </BallotVoteCardConatiner>
  );
};

export default BallotVoteCard;
