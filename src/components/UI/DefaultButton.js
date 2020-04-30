import React from 'react';
import {Button, Text} from 'native-base';
import Colors from '../../constants/Colors';

const DefaultButton = (props) => {
  const {color} = props;
  const btnStyle = {
    backgroundColor: color ? color : Colors.mainApp,
  };
  const textStyle = {
    color: Colors.textOnMainApp,
  };
  return (
    <Button {...props} style={{...props.style, ...btnStyle}}>
      <Text style={textStyle}>{props.children}</Text>
    </Button>
  );
};

export default DefaultButton;
