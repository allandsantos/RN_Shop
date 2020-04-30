import React from 'react';
import {Button, Text} from 'native-base';
import Colors from '../../constants/Colors';

const DefaultOutlineButton = (props) => {
  const {color} = props;
  const btnStyle = {
    borderColor: color ? color : Colors.mainApp,
    borderWidth: 1,
  };
  const textStyle = {
    color: color ? color : Colors.mainApp,
  };
  return (
    <Button transparent {...props} style={{...props.style, ...btnStyle}}>
      <Text style={textStyle}>{props.children}</Text>
    </Button>
  );
};

export default DefaultOutlineButton;
