import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums by Header2 !</Text>
      <Text style={textStyle}>Albums by Header3 !</Text>
      <Text style={textStyle}>Albums by Header4 !</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    //backgroundColor: '#F9F9F9',
    backgroundColor: '#78d8d4',
    // backgroundColor: 'gray',
//have the component expand and shrink dynamically based on
//available space. Ex)flex: 1, fill all available space,
//shared evenly amongst each other component with
//the same parent.
//The larger the flex given, the higher the ratio of space
//a component will take compared to its siblings.
    //flex: 0.5,
//Should the children be organized horizontally (row)
//or vertically (column)? The default is column.
    // flexDirection: 'row',  // causes error
//Determines the distribution of children along the primary axis.
//(Default is row)
//Should children be distributed at the start, the center,
//the end,or spaced evenly? Available options are
//flex-start, center, flex-end, space-around, space-between
//and space-evenly.
    justifyContent: 'space-around',
//determines the alignment of children along the secondary axis
//(if the primary axis is row, then the secondary is column,
//( and vice versa).
//Options: flex-start, center, flex-end, and stretch
    alignItems: 'center',
    height: 100,
    paddingTop: 15,
    // shadowColor: '#000'   //for ios
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.2
    elevation: 3,  //android for shadow
    position: 'relative'
  },
  textStyle: {
    fontSize: 12
  }
};
export default Header;
