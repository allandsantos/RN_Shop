import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Card, CardItem, Body, Left, Right, Button, Text} from 'native-base';
import DefaultText from '../utils/DefaultText';
import Colors from '../../constants/Colors';

const OrderItem = (props) => {
  const {order} = props;
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Card style={styles.card}>
      <CardItem>
        <View style={styles.basicInfoContainer}>
          <DefaultText bold style={styles.totalAmount}>
            ${order.totalAmount}
          </DefaultText>
          <DefaultText style={styles.date}>{order.readableDate}</DefaultText>
        </View>
      </CardItem>
      <CardItem>
        <Body style={styles.buttonContainer}>
          <Button
            danger
            bordered
            activeOpacity={0.2}
            onPress={() => {
              setShowDetails((currentState) => !currentState);
            }}>
            <Text>{showDetails ? 'Hide Details' : 'Show Details'}</Text>
          </Button>
        </Body>
      </CardItem>
      <CardItem>
        {showDetails && (
          <View style={styles.listItems}>
            <FlatList
              data={order.items}
              keyExtractor={(item) => item.productId}
              renderItem={({item}) => (
                <View style={styles.itemContainer}>
                  <View style={styles.itemInfoContainer}>
                    <DefaultText bold>
                      <DefaultText style={styles.quantity}>
                        {item.quantity}
                        {'  '}
                      </DefaultText>
                      {item.productTitle}
                    </DefaultText>
                    <DefaultText bold>${item.sum}</DefaultText>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      </CardItem>
    </Card>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  basicInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalAmount: {
    fontSize: 18,
  },
  date: {
    color: Colors.gray,
    fontSize: 14,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  listItems: {
    width: '100%',
  },
  itemContainer: {
    width: '80%',
    alignSelf: 'center',
    padding: 5,
    marginBottom: 15,
  },
  itemInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantity: {
    color: Colors.gray,
  },
});
