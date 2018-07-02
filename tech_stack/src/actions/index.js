export const selectLibrary = (libraryId) => {
  // this function is called Action Creator
  return {
    type: 'select_library',
    payload: libraryId
  };
};
