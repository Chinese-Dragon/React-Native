// Import a library to help create a component
import React from 'react';
import { AppRegistery, Text } from 'react-native';

// Create a functional component
const App = () => (
  <Text>Hello World</Text>
);

// Render component to device
AppRegistery.registerComponent('albums', () => App);
