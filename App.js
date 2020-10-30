/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text, 
  StatusBar,
} from 'react-native';

import Search from './screens/Search'


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor = "#00aaff" />
      <Search/>
      
    </>
  );
};


export default App;
