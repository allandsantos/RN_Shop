import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MenuDrawer from '../../components/UI/MenuDrawer';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import OrderItem from '../../components/manage/OrderItem';

const OrdersScreen = () => {
  const {orders} = useSelector((state) => state.orders);

  return (
    <View>
      <View style={styles.cardContainer}>
        <FlatList
          data={orders}
          renderItem={({item}) => <OrderItem order={item} />}
        />
      </View>
    </View>
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Orders',
    headerLeft: <MenuDrawer navData={navData} />,
  };
};

export default OrdersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  noOrders: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    marginTop: 10,
    width: '85%',
    alignSelf: 'center',
  },
});
