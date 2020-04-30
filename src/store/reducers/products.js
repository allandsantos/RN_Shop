import PRODUCTS from '../../data/dummy-data';
import {EDIT_PRODUCT, REMOVE_PRODUCT} from '../actions/products';
import {produce} from 'immer';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export const productsReducer = produce((draft, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      return draft;
    case REMOVE_PRODUCT:
      const indexToRemove = draft.availableProducts.findIndex(
        (prod) => prod.id === action.id,
      );
      draft.availableProducts.splice(indexToRemove, 1);
      const indexOfuserProducts = draft.userProducts.findIndex(
        (prod) => prod.id === action.id,
      );
      if (indexOfuserProducts >= 0) {
        draft.userProducts.splice(indexOfuserProducts, 1);
      }
      return draft;
    default:
      return draft;
  }
}, initialState);
