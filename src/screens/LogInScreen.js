import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView } from 'react-native';

import { Button, Input, Card, CardSection } from '../components/index';
import { lightGrey, orange, grey, lightPurp } from '../../Styles'

const LogInScreen = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { textInputStyle, login, loginSection, labelStyle, footer } = styles;

  return (
    <KeyboardAvoidingView behavior="padding" style={login}>
      <View style={loginSection}>
        <Text style={labelStyle}>Email</Text>
        <TextInput
          placeholder="your@email.com"
          autoCapitalise="none"
          style={textInputStyle}
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
          style={textInputStyle}
          autoCorrect={false}
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.errorViewStyle}>

      </View>

      <View style={loginSection}>
        <Button> Log in </Button>
      </View>

      <View style={footer}>
          <Text style={{ color: grey }}>Do you need an account? </Text>
          <Text style={{ color: lightPurp }} onPress={() => this.props.navigation.navigate('Signup')}>Sign Up</Text>
      </View>

    </KeyboardAvoidingView>
  )

};

const styles = StyleSheet.create({
  errorViewStyle: {
    height: 60,
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
  labelStyle: {
    fontSize: 18,
    flex: 1,
    color: orange,
    fontWeight: 'bold'
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
  textInputStyle: {
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
