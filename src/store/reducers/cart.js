import {
  ADD_ITEMS_TO_CART,
  REMOVE_ITEM_FROM_CART,
  RESET_CART,
} from '../actions/cart';
import {REMOVE_PRODUCT} from '../actions/products';
import {produce} from 'immer';

const initialState = {
  items: [],
  totalAmount: 0,
};

export const cartReducer = produce((draft, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_ITEMS_TO_CART:
      const {item} = action;

      draft.totalAmount += item.productPrice;
      draft.totalAmount = parseFloat(draft.totalAmount.toFixed(2));

      const existsProd = draft.items.find(
        (itm) => itm.productId === item.productId,
      );

      if (existsProd) {
        existsProd.quantity++;
        existsProd.sum = parseFloat(
          (existsProd.sum + item.productPrice).toFixed(2),
        );
        return draft;
      }

      draft.items.push(item);

      return draft;
    case REMOVE_ITEM_FROM_CART:
      const indexToDelete = draft.items.findIndex(
        (itm) => itm.productId === action.itemId,
      );
      const itemForExclude = draft.items[indexToDelete];
      if (itemForExclude.quantity > 1) {
        itemForExclude.quantity -= 1;
        itemForExclude.sum = parseFloat(
          (itemForExclude.quantity * itemForExclude.productPrice).toFixed(2),
        );
      } else {
        draft.items.splice(indexToDelete, 1);
      }

      draft.totalAmount = parseFloat(
        (draft.totalAmount - itemForExclude.productPrice).toFixed(2),
      );

      return draft;

    case RESET_CART:
      return initialState;
    case REMOVE_PRODUCT:
      const indexToRemove = draft.items.findIndex(
        (itm) => itm.productId === action.productId,
      );
      if (indexToRemove >= 0) {
        draft.totalAmount -= draft.items[indexToRemove].sum;
        draft.items.splice(indexToRemove, 1);
      }
      return draft;
    default:
      return draft;
  }
}, initialState);
