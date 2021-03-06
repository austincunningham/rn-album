/**
 * Created by austin on 27/01/2018.
 */
import React from 'react';
import { View } from 'react-native';


// Create a component
const Card = (props)=> {
  return (
      <View style={styles.containerStyle} >
        { props.children }
      </View>
  );
};

// styling
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

// export
export default Card;