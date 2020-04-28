import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from './HeaderButton';

const MenuDrawer = (props) => {
  const {navData} = props;
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  );
};

export default MenuDrawer;
