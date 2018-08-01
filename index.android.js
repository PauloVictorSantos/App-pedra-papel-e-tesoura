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
  View,
  Button
} from 'react-native';


class MeuComponente extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.props.teste}</Text>
      </View>
    );
  }
}


export default class app3 extends Component {

  constructor(props)
  {
    super(props);
    this.state ={texto:'Testando'};
  }
  
    alteraTexto() {
      this.setState({texto:'Outra coisa'});
    }

  render() {
    return (
      <View>
        <MeuComponente teste={this.state.texto}></MeuComponente>
          <Button onPress={()=>{this.alteraTexto()}} title="Botão"  />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   
  }
});

AppRegistry.registerComponent('app3', () => app3);
