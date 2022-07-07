import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { grey, lightPurp } from '../../Styles';

const WelcomeScreen = ({ navigation }) => {
    const { welcomeSection, welcome, prompt, or } = styles;

  return (
    <KeyboardAvoidingView behavior="padding" style={welcome}>
      <View style={welcomeSection}>
      </View>

      <View style={welcomeSection}>
          <Text style={prompt} onPress={() => navigation.navigate('Log In')}>Log In</Text>
          <Text style={or}> or </Text>
          <Text style={prompt} onPress={() => navigation.navigate('Sign Up')}>Sign Up</Text>
      </View>

    </KeyboardAvoidingView>
  )

};

const styles = StyleSheet.create({
  welcomeSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 55,
  },
  welcome: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 20,
    paddingTop: 60,
  },
  prompt: {
    color: lightPurp,
    fontSize: 18,
  },
  or: {
    fontSize: 18,
    color: grey,
  }
});


export default WelcomeScreen;
