import PRODUCTS from '../../data/dummy-data';
import {
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
  CREATE_PRODUCT,
} from '../actions/products';
import {produce} from 'immer';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export const productsReducer = produce((draft, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      const {product} = action;
      const produt4Edit = draft.availableProducts.find(
        (prd) => prd.id === product.id,
      );

      produt4Edit.title = product.title;
      produt4Edit.description = product.description;
      produt4Edit.imageUrl = product.imageUrl;
      produt4Edit.price = product.price;

      const userProd4Edit = draft.userProducts.find(
        (prd) => prd.id === product.id,
      );
      if (userProd4Edit) {
        userProd4Edit.title = product.title;
        userProd4Edit.description = product.description;
        userProd4Edit.imageUrl = product.imageUrl;
        userProd4Edit.price = product.price;
      }
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
    case CREATE_PRODUCT:
      const productAdd = action.product;
      draft.userProducts.push(productAdd);
      draft.availableProducts.push(productAdd);
      return draft;
    default:
      return draft;
  }
}, initialState);
