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

constructor(props)
{
  super(props);
  this.state ={texto:'Testando'}
}

render(){
  return(
    <View style={styles.container}>
      <Text>{this.props.teste}</Text>
    </View>
  );
}
alteraTexto() {
  this.setState({texto:'Outra coisa'})
}

}


export default class app3 extends Component {
  render() {
    return (
      <View>
        <MeuComponente teste={this.state.texto}></MeuComponente>
          <button onPress={ ()=>alteraTexto} title="Botão"  />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   
  }
});

AppRegistry.registerComponent('app3', () => app3);
