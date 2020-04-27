import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Fonts from '../../constants/Fonts';

const DefaultText = (props) => {
  const setStyle = props.bold ? styles.bold : styles.default;
  return (
    <Text {...props} style={{...props.style, ...setStyle}}>
      {props.children}
    </Text>
  );
};

export default DefaultText;

const styles = StyleSheet.create({
  default: {
    fontFamily: Fonts.openSans,
  },
  bold: {
    fontFamily: Fonts.openSansBold,
  },
});
