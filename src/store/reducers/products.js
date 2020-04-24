import PRODUCTS from '../../data/dummy-data';
import {EDIT_PRODUCT} from '../actions/products';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export const productsReducer = (state = initialState, action) => {
  switch (action) {
    case EDIT_PRODUCT:
      return {...state};
    default:
      return state;
  }
};
