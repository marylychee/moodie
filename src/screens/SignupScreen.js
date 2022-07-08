import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { Button, Input } from '../components/index';
import { lightGrey, orange, grey, lightPurp } from '../../Styles'

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const { textInputStyle, signup, signupSection, labelStyle, footer, foot, link } = styles;

  return (
    <KeyboardAvoidingView behavior="padding" style={signup}>
      <View style={signupSection}>
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
      <View style={signupSection}>
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

      <View style={signupSection}>
        <Button>Sign Up</Button>
      </View>

      <View style={footer}>
          <Text style={foot}> Already have an account? </Text>
          <Text style={link} onPress={() => navigation.navigate('Log In')}>Log In</Text>
      </View>

    </KeyboardAvoidingView>
  )

};

const styles = StyleSheet.create({
  errorViewStyle: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  foot: {
    color: grey,
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
  link: {
    color: lightPurp,
    fontWeight: "bold",
  },
  signup: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 20,
    paddingTop: 60,
  },
  signupSection: {
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

export default SignUpScreen;
