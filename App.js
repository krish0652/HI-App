import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HeaderComponent from './components/structure/headerComponent';
import { appStyles } from './styles/App.style';

class App extends Component {
  render() {
    return (
      <View style={appStyles.container}>
        <HeaderComponent/>
        <Text>Open up App.js to start working on your app updated!</Text>
      </View>
    );
  }
}

export default App;
