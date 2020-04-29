import PRODUCTS from '../../data/dummy-data';
import {EDIT_PRODUCT, REMOVE_PRODUCT} from '../actions/products';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      return {...state};
    case REMOVE_PRODUCT:
      console.log('INDEEEX');
      console.log(indexToRemove);
      const indexToRemove = state.availableProducts.findIndex(
        (prod) => prod.id === action.id,
      );
      console.log('INDEEEX');
      console.log(indexToRemove);
      state.availableProducts.splice(indexToRemove);
      return {...state};
    default:
      return state;
  }
};
