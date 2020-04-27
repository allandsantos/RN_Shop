import React, {useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Button, Text} from 'native-base';
import Colors from '../../constants/Colors';
import DefaultText from '../../components/utils/DefaultText';

const ProductDetailScreen = (props) => {
  const {navigation, onAddToCart} = props;
  const product = navigation.getParam('product');

  useEffect(() => {
    navigation.setParams({title: product.title});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={{uri: product.imageUrl}} />
      <View style={styles.container}>
        <Button dark button onPress={onAddToCart}>
          <Text>ADD TO CART</Text>
        </Button>
      </View>
      <View style={styles.descriptionContainer}>
        <DefaultText bold style={styles.price}>
          $ {product.price}
        </DefaultText>
      </View>
      <View style={styles.descriptionContainer}>
        <DefaultText bold style={styles.description}>
          {product.description}
        </DefaultText>
      </View>
    </View>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  const title = navData.navigation.getParam('title');
  return {
    headerTitle: title,
  };
};
export default ProductDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  price: {
    alignSelf: 'center',
    marginTop: 30,
    color: Colors.gray,
    fontSize: 20,
  },
  descriptionContainer: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
  },
  description: {
    textAlign: 'center',
  },
});
