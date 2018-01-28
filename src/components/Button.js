/**
 * Created by austin on 27/01/2018.
 */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Create a component
const Button = ({ onPress, children })=> {
  const { textStyle, buttonStyle } = styles;
  return (
      <TouchableOpacity onPress={ onPress } style={ buttonStyle }>
        <Text style={textStyle}>
          { children }
        </Text>
      </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    elevation: 2
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#007aff',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

// Make the component available to other parts of the app
export default Button;
