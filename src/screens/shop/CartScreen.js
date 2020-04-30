import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../components/shop/CartItem';
import DefaultText from '../../components/utils/DefaultText';
import {Card, CardItem, Text, Button} from 'native-base';
import Colors from '../../constants/Colors';
import * as CartActions from '../../store/actions/cart';
import * as OrdersActions from '../../store/actions/orders';

const CartScreen = (props) => {
  const dispatch = useDispatch();
  const {items: cartItems, totalAmount} = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
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
                $ {totalAmount}
              </DefaultText>
            </DefaultText>
            <Button
              color={Colors.mainApp}
              {...buttonProps}
              rounded
              onPress={() => {
                dispatch(OrdersActions.saveNewOrder(cart));
                dispatch(CartActions.resetCart());
              }}>
              <Text style={styles.buttonText}>Order Now</Text>
            </Button>
          </View>
        </CardItem>
      </Card>
      <View>
        {cartItems.map((item) => (
          <CartItem
            key={item.productId}
            item={item}
            onRemove={() => {
              dispatch(CartActions.removeItemsFromCart(item.productId));
            }}
          />
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
