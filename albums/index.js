// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header.js';

// Create a functional component
const App = () => (
  <Header />
);

// Render component to device
// only the root component use AppRegistry
AppRegistry.registerComponent('albums', () => App);
