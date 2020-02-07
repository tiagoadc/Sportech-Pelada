import React, { Component } from 'react';
import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Cadastro from './Cadastro'
import Perf from './Perf'
import firebase from 'react-native-firebase'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' },
      this.state = { senha: '' },
      this.state = { isAuthenticated: false }
    this.state = { isDisabled: true }

  }

  logar = async () => {
    const { email, senha } = this.state;

    try {
      const user = await firebase.auth()
        .signInWithEmailAndPassword(email, senha)
      this.setState({ isAuthenticated: true })
      this.state.isAuthenticated
        ? this.Entrar() : null
      this.textInput.clear()


      console.log(user);
    } catch (err) {
      this.alerta()
    }
  }
  alerta() {
    alert('Senha/email invalido')
  }


  Entrar = () => {
    this.props.navigation.navigate('Perfil')
  }

  habilitar = () => {
    this.setState({ isDisabled: false })
  }


  render() {
    return (
      <View >
        <ImageBackground
          source={require('../src/img/login3.jpg')}
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
              source={require('../src/img/iconefot.png')}
              style={{
                width: '28%', height: '17%', top: -30
              }}
            >
            </Image>

            <TextInput
              selectTextOnFocus={true}
              id='eml'
              style={styles.imput_text}
              placeholder="Email"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              ref={sen => { this.textInput = sen }}
              style={styles.imput_text}
              placeholder="Senha"
              onChangeText={(senha) => this.setState({ senha })}
              value={this.state.senha}
              secureTextEntry={true}
            />
            <TouchableOpacity
              //disabled={this.state.isDisabled}
              style={styles.Buton} onPress={this.logar}
            >
              <Text style={styles.texto}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Buton2}
              onPress={() => this.props.navigation.navigate('Cad')}
            >
              <Text style={styles.texto2}> Cadastrar-se </Text>
            </TouchableOpacity>

           



          </View>

        </ImageBackground>
      </View >

    );


  }
}



const styles = StyleSheet.create({
  texto: {
    fontSize: 25,
    color: '#ffffff',
    textAlign: "center"
  },
  Buton: {
    marginTop: 30,
    padding: 1,
    backgroundColor: '#0B2161',
    borderRadius: 4
  },
  texto2: {
    fontSize: 25,
    color: '#0B2161',
    textAlign: "center"
  },
  Buton2: {
    marginTop: 30,
    padding: 1,
    backgroundColor: '#ffffff',
    borderRadius: 4
  },
  imput_text: {
    height: 40, marginTop: 50, width: '90%',
    borderWidth: 1, borderColor: '#333', backgroundColor: '#EFE',
    borderRadius: 4

  }
})

const appNavigator = createStackNavigator(
  {
    Home: {
      screen: Login
    },
    Cad: {
      screen: Cadastro
    },
    Perfil: {
      screen: Perf
    }




  },
  {
    initialRouteName: 'Perfil'
  }
)
const AppContainer = createAppContainer(appNavigator);

export default class inicial extends Component {
  render() {
    return <AppContainer />;
  }
}

Login.navigationOptions = {
  headerStyle: {
    backgroundColor: '#000',
  },
  title: 'Login',
  headerTintColor: '#fff',


}