/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MeuComponente extends Component{
render(){
  return(
    <View style={styles.container}>
      <Text>{this.props.propried}</Text>
      <Text>{this.props.zyx}</Text>
    </View>
  );
}

}

export default class app3 extends Component {
  render() {
    return (
        <MeuComponente propried='banana' zyx='teste'></MeuComponente>

    );
  }
}

const styles = StyleSheet.create({
  container: {
   
  }
});

AppRegistry.registerComponent('app3', () => app3);
