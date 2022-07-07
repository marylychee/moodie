import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView } from 'react-native';

import { Button } from '../components/index';
import { lightGrey, orange, grey, lightPurp } from '../../Styles'

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { textInput, login, loginSection, labelStyle, footer, errorView, forgot, link, lightLink } = styles;

  return (
    <KeyboardAvoidingView behavior="padding" style={login}>
      <View style={loginSection}>
        <Text style={labelStyle}>Email</Text>
        <TextInput
          placeholder="your@email.com"
          autoCapitalise="none"
          style={textInput}
          autoCorrect={false}
          value={email}
          onChangeText={(email) => setEmail(email)}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={loginSection}>
        <Text style={labelStyle}>Password</Text>
        <TextInput
          label="Password"
          autoCapitalise="none"
          style={textInput}
          autoCorrect={false}
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={errorView}>

      </View>

      <View style={forgot}>
        <Text style={lightLink} onPress={() => navigation.navigate('Sign Up')}>Forgot Password?</Text>
      </View>

      <View style={loginSection}>
        <Button>Log in</Button>
      </View>

      <View style={footer}>
          <Text style={{ color: grey }}>Don't have an account? </Text>
          <Text style={link} onPress={() => navigation.navigate('Sign Up')}>Sign Up</Text>
      </View>
    </KeyboardAvoidingView>
  )

};

const styles = StyleSheet.create({
  errorView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 55,
  },
  forgot: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    color: orange,
    fontWeight: 'bold'
  },
  lightLink: {
    color: lightPurp,
  },
  link: {
    color: lightPurp,
    fontWeight: "bold",
  },
  login: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 20,
    paddingTop: 60,
  },
  loginSection: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderColor: '#ffd58c',
    flex: 2,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
  }
});


export default LogInScreen;
