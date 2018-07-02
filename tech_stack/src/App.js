import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'; //do not need to specify index.js
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

// 1: Store holds the states;
// 2: Provider is the communication glue to React
// 3: put reducer in store
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="ollll" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
