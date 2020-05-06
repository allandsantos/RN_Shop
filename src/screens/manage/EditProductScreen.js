/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect, useReducer} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Form, Item, Label, Input} from 'native-base';
import {useDispatch} from 'react-redux';
import * as ProductActions from '../../store/actions/products';
import {HeaderButtons, Item as Itm} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import Product from '../../models/product';
import produce from 'immer';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = produce((state, action) => {
  switch (action.type) {
    case FORM_INPUT_UPDATE:
      state.inputValues[action.inputIdentifier] = action.value;
      state.inputValidities[action.inputIdentifier] = action.isValid;
      let formIsValid = true;
      for (const key in state.inputValidities) {
        formIsValid = formIsValid && key;
      }
      state.formIsValid = formIsValid;
      return state;
    default:
      return state;
  }
});

const EditProductScreen = (props) => {
  let product = props.navigation.getParam('product');

  const {formState, dispatchFormState} = useReducer(formReducer, {
    inputValues: {
      title: product.title,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price.toString(),
    },
    inputValidities: {
      title: product ? true : false,
      description: product ? true : false,
      imageUrl: product ? true : false,
      price: product ? true : false,
    },
    formIsValid: product ? true : false,
  });

  if (!product) {
    product = new Product('', '', '', '', '', 0.0);
  }

  console.log(formState);

  const {title, description, imageUrl, price} = formState.inputValues;

  const submitHandler = useCallback(() => {
    const isNewProduct = product.id === '' ? true : false;
    const itemId = product.id === '' ? new Date().toString() : product.id;

    const item = new Product(
      itemId,
      'u1',
      title,
      imageUrl,
      description,
      parseFloat(price),
    );
    if (isNewProduct) {
      dispatch(ProductActions.newProduct(item));
    } else {
      dispatch(ProductActions.editProduct(item));
    }
    dispatch(props.navigation.goBack());
  }, [title, description, imageUrl, price]);

  const dispatch = useDispatch();

  useEffect(() => {
    props.navigation.setParams({submit: submitHandler});
  }, [submitHandler]);

  const textChangeHandler = (text, inputIdentifier) => {
    let isValid = false;
    if (text.trim().length > 0) {
      if (
        (inputIdentifier === 'price' && parseFloat(text) >= 0) ||
        inputIdentifier !== 'price'
      ) {
        isValid = true;
      }
    }
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      isValid,
      inputIdentifier,
    });
  };

  return (
    <View style={styles.screen}>
      <Form style={styles.form}>
        <Item floatingLabel>
          <Label>Title</Label>
          <Input
            value={title}
            onChangeText={(text) => textChangeHandler(text, 'title')}
            autoCapitalize="sentences"
            returnKeyType="next"
          />
        </Item>
        <Item floatingLabel>
          <Label>Description</Label>
          <Input
            value={description}
            onChangeText={(text) => textChangeHandler(text, 'description')}
            autoCorrect
            multiline={true}
          />
        </Item>
        <Item floatingLabel>
          <Label>Image URL</Label>
          <Input
            value={imageUrl}
            onChangeText={(text) => textChangeHandler(text, 'imageUrl')}
            multiline={true}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Price</Label>
          <Input
            value={price}
            onChangeText={(text) => textChangeHandler(text, 'price')}
            keyboardType="decimal-pad"
          />
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
  errorMessage: {
    paddingLeft: 10,
  },
});
