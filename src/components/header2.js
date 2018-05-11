import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      <Text style={textStyle}>{props.headerText2}</Text>
      <Text style={textStyle}>{props.headerText3}</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    //backgroundColor: '#F9F9F9',
    backgroundColor: '#78d8d4',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    paddingTop: 15,
    elevation: 3,  //android for shadow
    position: 'relative'
  },
  textStyle: {
    fontSize: 15
  }
};
export default Header;
