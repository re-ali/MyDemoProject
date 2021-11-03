import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/Navigation/Navigation';

import Child from './src/Screens/Child';
import Parent from './src/Screens/Parent';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <Parent /> */}
        <Navigation />
      </SafeAreaView>
    );
  }
}

export default App;
