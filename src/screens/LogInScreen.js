import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { Button, Input, Card, CardSection } from '../components/index';

const LogInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card>
      <CardSection>
      <Input
        label="Email"
        placeholder="hello@gmail.com"
        autoCapitalise="none"
        style={styles.inputStyle}
        autoCorrect={false}
        onChangeText={(email) => setEmail(email)}
      />
      </CardSection>

      <CardSection>
      <Input
        label="Password"
        placeholder="hello@gmail.com"
        autoCapitalise="none"
        style={styles.inputStyle}
        autoCorrect={false}
        onChangeText={(password) => setPassword(password)}
      />
      </CardSection>
    </Card>
  )

};

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 0.5,
    borderColor: '#ffd58c',
    marginBottom: 30
  }
});


export default LogInScreen;
