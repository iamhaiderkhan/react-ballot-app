const getState = (state) => state?.ballots;

export const getBallotsList = (state) => getState(state)?.ballots;
export const isLoading = (state) => getState(state)?.isLoading;
export const getSelectedNominee = (state) => getState(state)?.selectedNominee;
export const resultModalStatus = (state) => getState(state)?.showResultModal;
