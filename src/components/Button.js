import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { white, brightOrange } from '../../Styles';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={props.onPress} style={[buttonStyle, props.style]}>
      <Text style={[textStyle, props.textStyle]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: white,
    fontSize: 19,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    elevation: 0,
    alignSelf: 'stretch',
    backgroundColor: brightOrange,
    borderRadius: 25,
    borderWidth: 0,
    borderColor: white,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,

  }
};

export { Button };
