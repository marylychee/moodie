import React from 'react';
import { View } from 'react-native';
import { offwhite } from '../../Styles'

const Card = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={[containerStyle, props.style]}>
        {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: offwhite,
    elevation: 1
  }
};

export { Card };
