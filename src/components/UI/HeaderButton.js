import React from 'react';
import Colors from '../../constants/Colors';
import {HeaderButton} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.white}
    />
  );
};

export default CustomHeaderButton;
