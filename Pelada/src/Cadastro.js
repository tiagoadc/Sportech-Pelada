import React, { Component } from 'react';
import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'react-native-firebase'

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' },
      this.state = { senha: '' },
      this.state = { nome: '' },
      this.state = { confirmacao: '' }
    this.state = { isAuthenticated: false }

  }

  cadastrar = async () => {
    const { email, senha } = this.state;

    try {
      if (this.state.confirmacao == this.state.senha) {
        const user = await firebase.auth()
          .createUserWithEmailAndPassword(email, senha)
        this.setState({ isAuthenticated: true })
        this.state.isAuthenticated
          ? this.alerta() : null

        console.log(user);
      } else {
        this.errado()
      }

    } catch (e) {
      console.error(e.message)
    }
  }

  alerta() {
    alert('cadastrado com sucesso')
  }
  errado() {
    alert('nao cadastrado /n email ou senha invalido')
  }



  render() {
    return (
      <View >
        <ImageBackground
          source={require('../src/img/cadastro.jpg')}
          style={{
            width: '100%', height: '100%', position: 'relative', top: 0,
            left: 0
          }}
        >


          <View style={{ alignItems: "center" }}>

            <Image
              source={require('../src/img/iconeB.png')}
              style={{
                width: '19%', height: '15%', marginBottom: 40, top: 30
              }}
            />


            <TextInput
              style={styles.imput_text}
              placeholder="Nome"
              onChangeText={(nome) => this.setState({ nome })}
              value={this.state.nome}
            />
            <TextInput
              style={styles.imput_text}
              placeholder="Email"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />

            <TextInput
              style={styles.imput_text}
              placeholder="Senha"
              onChangeText={(senha) => this.setState({ senha })}
              value={this.state.senha}
              secureTextEntry={true}
            />

            <TextInput
              style={styles.imput_text}
              placeholder="Confirme sua senha"
              onChangeText={(confirmacao) => this.setState({ confirmacao })}
              value={this.state.confirmacao}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.Buton} onPress={this.cadastrar}

            >
              <Text style={styles.texto} > Cadastrar </Text>

            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>



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

Cadastro.navigationOptions = {

  headerStyle: {
    backgroundColor: '#000',
  },
  title: 'Cadastro',
  headerTintColor: '#fff',


}