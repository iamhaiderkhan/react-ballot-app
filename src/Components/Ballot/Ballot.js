import React, { useEffect } from "react";
import { getBallots } from "../../redux/ballots/service";
import {
  getBallotsList,
  resultModalStatus,
} from "../../redux/ballots/selectors";
import { toggleResultModal, selectedNominee } from "../../redux/ballots/slice";
import { useDispatch, useSelector } from "react-redux";
import BallotCategories from "../BallotCategories/BallotCategories";
import { ResultModal } from "../ResultModal";

const Ballot = () => {
  const dispatch = useDispatch();
  const ballotList = useSelector(getBallotsList);
  const showModal = useSelector(resultModalStatus);

  const showModalHandler = (status) => () => {
    dispatch(toggleResultModal(status));
    dispatch(selectedNominee({}));
  };

  const fetchBallots = async () => {
    await dispatch(getBallots());
  };
  useEffect(() => {
    fetchBallots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ResultModal
        isVisiable={showModal}
        onCloseHandler={showModalHandler(false)}
      ></ResultModal>
      <BallotCategories categories={ballotList}></BallotCategories>
    </>
  );
};

export default Ballot;
