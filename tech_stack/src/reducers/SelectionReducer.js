export default (state = null, action) => {
  // return single selected item index from reducer and need not to be underfined
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state; // when receive an action we are not interested, just return the previous value
  }
};
