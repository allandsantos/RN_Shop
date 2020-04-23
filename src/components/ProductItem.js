import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import Colors from '../constants/Colors';

const ProductItem = (props) => {
  const {prod} = props;
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{uri: prod.imageUrl}} />
      <View style={styles.infosContainer}>
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.title}>${prod.price}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonDetails}>
          <Button title="DETAILS" color="white" raised={true}>
            <Text style={styles.buttonText} />
          </Button>
        </View>
        <View style={styles.buttonCart}>
          <Button title="TO CART" color="white" />
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.26,
    elevation: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
    backgroundColor: Colors.white,
    paddingBottom: 30,
  },
  image: {
    width: '100%',
    height: 150,
  },
  infosContainer: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {},
  buttonDetails: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  buttonCart: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
});
