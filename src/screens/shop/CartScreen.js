import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import CartItem from '../../components/shop/CartItem';
import DefaultText from '../../components/utils/DefaultText';
import {Card, CardItem, Text, Button} from 'native-base';
import Colors from '../../constants/Colors';

const CartScreen = (props) => {
  const {items: cartItems, totalAmmount} = useSelector((state) => state.cart);
  const buttonProps = {
    disabled: cartItems.length > 0 ? false : true,
    transparent: cartItems.length > 0 ? false : true,
  };
  return (
    <View style={styles.screen}>
      <Card style={styles.cardContainer}>
        <CardItem cardBody>
          <View style={styles.totalContainer}>
            <DefaultText style={styles.totalLabel} bold>
              Total:{'   '}
              <DefaultText bold style={styles.totalValue}>
                $ {totalAmmount}
              </DefaultText>
            </DefaultText>
            <Button dark {...buttonProps} rounded>
              <Text style={styles.buttonText}>Order Now</Text>
            </Button>
          </View>
        </CardItem>
      </Card>
      <View>
        {cartItems.map((item) => (
          <CartItem key={item.productId} item={item} />
        ))}
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
  },
  cardContainer: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  totalContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalValue: {
    color: Colors.red,
    fontSize: 16,
  },
  totalLabel: {
    fontSize: 16,
  },
  buttonText: {
    fontSize: 12,
  },
});
