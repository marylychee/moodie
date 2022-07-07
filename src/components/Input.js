import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { orange } from '../../Styles';

const Input = (props) => {
  const { label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize } = props;
  const { inputStyle, labelStyle, containerStyle, borderStyle } = styles;

  return (
    <View style={containerStyle}>
      <View style={[borderStyle, props.style]}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          style={inputStyle}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          autoCapitalize={autoCapitalize}
        />
        </View>
    </View>
  );
};

const styles = {
  borderStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'start',
    paddingBottom: 10
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'start',
    paddingLeft: 20,
    paddingRight: 20
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    color: orange,
    fontWeight: 'bold'
  }
};


export { Input };
