import {ADD_ITEMS_TO_CART, REMOVE_ITEM_FROM_CART} from '../actions/cart';

const initialState = {
  items: [],
  totalAmmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS_TO_CART:
      const {item} = action;

      state.totalAmmount += item.productPrice;
      state.totalAmmount = parseFloat(state.totalAmmount.toFixed(2));

      const existsProdIndex = state.items.findIndex(
        (itm) => itm.productId === item.productId,
      );

      console.log(existsProdIndex);

      if (existsProdIndex >= 0) {
        state.items[existsProdIndex].quantity++;
        state.items[existsProdIndex].sum += item.productPrice;
        return {
          ...state,
        };
      }
      state.items.push(item);
      return {
        ...state,
      };
    case REMOVE_ITEM_FROM_CART:
      const indexToDelete = state.items.findIndex(
        (itm) => itm.productId === action.itemId,
      );
      const itemForExclude = state.items[indexToDelete];
      if (itemForExclude.quantity > 1) {
        itemForExclude.quantity -= 1;
        itemForExclude.sum = parseFloat(
          (itemForExclude.quantity * itemForExclude.productPrice).toFixed(2),
        );
      } else {
        state.items.splice(indexToDelete, 1);
      }
      state.totalAmmount = parseFloat(
        (state.totalAmmount - itemForExclude.productPrice).toFixed(2),
      );

      return {...state};
    default:
      return state;
  }
};
