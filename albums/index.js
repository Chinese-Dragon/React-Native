// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a functional component
const App = () => (
  <View>
    <Header headerText={'hello'} />
    <AlbumList />
  </View>
);

// Render component to device
// only the root component use AppRegistry
AppRegistry.registerComponent('albums', () => App);
