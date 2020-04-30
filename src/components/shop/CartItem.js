import React from 'react';
import {Card, CardItem, Icon} from 'native-base';
import DefaultText from '../utils/DefaultText';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CartItem = (props) => {
  const {item, onRemove} = props;
  return (
    <Card style={styles.item}>
      <CardItem cardBody>
        <View style={styles.infosContainer}>
          <View style={styles.flexRow70}>
            <DefaultText bold style={styles.quantity}>
              {item.quantity}
              {'  '}
            </DefaultText>
            <DefaultText numberOfLines={1} bold style={styles.title}>
              {item.productTitle}
            </DefaultText>
          </View>
          <View style={styles.flexRow}>
            <DefaultText style={styles.price}>$ {item.sum}</DefaultText>
            <TouchableOpacity onPress={onRemove}>
              <Icon name="ios-trash" style={styles.trashIcon} />
            </TouchableOpacity>
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
    borderRadius: 10,
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
    marginRight: 15,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRow70: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',
  },
  infosContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trashIcon: {
    color: 'red',
  },
});
