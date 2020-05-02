/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Form, Item, Label, Input} from 'native-base';
import DefaultButton from '../../components/UI/DefaultButton';
import {useDispatch} from 'react-redux';
import * as ProductActions from '../../store/actions/products';
import {HeaderButtons, Item as Itm} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import Product from '../../models/product';

const EditProductScreen = (props) => {
  let product = props.navigation.getParam('product');
  if (!product) {
    product = new Product('', '', '', '', '', 0.0);
  }
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);
  const [price, setPrice] = useState(product.price.toString());

  console.log('Preço atual ' + price);
  const submitHandler = useCallback(() => {
    const itemId = product ? product.id : new Date().toString();
    console.log('Preço alterado ' + price);
    const item = new Product(
      itemId,
      'u1',
      title,
      imageUrl,
      description,
      parseFloat(price),
    );
    if (product) {
      dispatch(ProductActions.editProduct(item));
    } else {
      dispatch(ProductActions.newProduct(item));
    }
  }, [title, description, imageUrl, price]);

  const dispatch = useDispatch();

  useEffect(() => {
    props.navigation.setParams({submit: submitHandler});
  }, [submitHandler]);

  return (
    <View style={styles.screen}>
      <Form style={styles.form}>
        <Item floatingLabel>
          <Label>Title</Label>
          <Input value={title} onChangeText={(text) => setTitle(text)} />
        </Item>
        <Item floatingLabel>
          <Label>Description</Label>
          <Input
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </Item>
        <Item floatingLabel>
          <Label>Image URL</Label>
          <Input value={imageUrl} onChangeText={(text) => setImageUrl(text)} />
        </Item>
        <Item floatingLabel last>
          <Label>Price</Label>
          <Input value={price} onChangeText={(text) => setPrice(text)} />
        </Item>
      </Form>
    </View>
  );
};

EditProductScreen.navigationOptions = (navData) => {
  const sumbmitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: navData.navigation.getParam('product')
      ? 'Edit Product'
      : 'Add Product',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Itm title="Add" iconName="md-checkmark" onPress={sumbmitFn} />
      </HeaderButtons>
    ),
  };
};

export default EditProductScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  form: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 20,
  },
  input: {
    borderWidth: 3,
  },
  button: {
    marginTop: 30,
  },
});
