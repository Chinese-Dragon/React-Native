// reducer(a function): take action and old state if any (default []) and return a NEW updated state from taking the action
const reducer = (state = [], action) => {
  if (action.type === 'split_string') {
    return action.payload.split('');
  } else if (action.type === 'add_character') {
    return [...state, action.payload];
  }

  return state;
};

// A store holds the whole state tree of your application.
const store = Redux.createStore(reducer);

// Returns the current state tree (all stats in a JSON) of your application.
store.getState();

//
const action = {
  type: 'split_string',
  payload: 'asdf'
};

store.dispatch(action);

store.getState();

const action2 = {
  type: 'add_character',
  payload: 'a'
};

store.dispatch(action2);

store.getState();
