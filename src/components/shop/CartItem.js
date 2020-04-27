import React from 'react';
import {Card, CardItem, Body, Grid, Row, Col, Button, Icon} from 'native-base';
import DefaultText from '../utils/DefaultText';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../../constants/Colors';

const CartItem = (props) => {
  const {item} = props;
  return (
    <Card style={styles.item}>
      <CardItem cardBody>
        <View style={styles.flexRow}>
          <View style={styles.flexRow}>
            <DefaultText bold style={styles.quantity}>
              {item.quantity}
              {'  '}
            </DefaultText>
            <DefaultText bold style={styles.title}>
              {item.productTitle}
            </DefaultText>
          </View>
          <View style={{...styles.flexRow, ...styles.alignRight}}>
            <DefaultText style={styles.price}>$ {item.sum}</DefaultText>
            <Button danger transparent>
              <Icon name="ios-trash" />
            </Button>
          </View>
        </View>
      </CardItem>
    </Card>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  item: {
    padding: 5,
    alignSelf: 'center',
    width: '80%',
  },
  quantity: {
    fontSize: 14,
    color: Colors.gray,
  },
  title: {
    fontSize: 14,
    color: 'black',
  },
  price: {
    fontSize: 14,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignRight: {
    justifyContent: 'flex-end',
  },
});
