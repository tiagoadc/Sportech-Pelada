import React, { Component } from 'react';
import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

export default class Perf extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' },
      this.state = { senha: '' },
      this.state = { nome: '' },
      this.state = { confirmacao: '' }

  }

  render() {
    return (
      <View >
        <ImageBackground
          source={require('../src/img/perfil5.jpg')}
          style={{
            width: '100%', height: '100%', position: 'relative', top: 0,
            left: 0
          }}
        >
           <View style={{
            flex: 1.2,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image
              source={require('../src/img/tiago.jpg')}
              style={{
                width: '28%', height: '17%', top: -100, borderRadius: 50
              }}
            >
            </Image>
            <TextInput  style={{fontSize: 15, color: '#ffffff',textAlign: "center"}}>
              (15) 99698-7496</TextInput>
            <TextInput style={{fontSize: 15, color: '#ffffff',textAlign: "center"}}>
              ttiagoadc@gmail.com</TextInput>
              <TextInput style={{fontSize: 15, color: '#ffffff',textAlign: "center"}}>
                 tiago/araujo.facebook.com</TextInput>
            
            </View>
           
            <Image
              source={require('../src/img/whats.png')}
              style={{
                width: '10%', height: '6%', top: -270, borderRadius: 50, marginLeft: 40
              }}
            >
            </Image>
            <Image
              source={require('../src/img/email.png')}
              style={{
                width: '10%', height: '6%', top: -260, borderRadius: 50, marginLeft: 40
              }}
            >
            </Image>
            <Image
              source={require('../src/img/facebook.png')}
              style={{
                width: '10%', height: '6%', top: -245, borderRadius: 50, marginLeft: 40
              }}
            >
            </Image>
            
            

        </ImageBackground>
        
      </View>



    );

  }

}
const styles = StyleSheet.create({
  texto: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: "center",
    marginTop: -190
    
    
  },
  Buton: {
    marginTop: 40,
    padding: 1,
    backgroundColor: '#106b34',
    borderRadius: 4
  },
  texto2: {
    fontSize: 25,
    color: '#106b34',
    textAlign: "center"
  },
  Buton2: {
    marginTop: 30,
    padding: 1,
    backgroundColor: '#ffffff',
    borderRadius: 4
  },
  imput_text: {
    height: 40, marginTop: 20, width: '90%',
    borderWidth: 1, borderColor: '#333', backgroundColor: '#EFE',
    borderRadius: 4

  }
})

Perf.navigationOptions = {

  headerStyle: {
    backgroundColor: '#000',
  },
  title: 'Perfil',
  headerTintColor: '#fff',


}