import {
  ADD_ITEMS_TO_CART,
  REMOVE_ITEM_FROM_CART,
  RESET_CART,
} from '../actions/cart';

const initialState = () => {
  return {
    items: [],
    totalAmount: 0,
  };
};

export const cartReducer = (state = initialState(), action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_ITEMS_TO_CART:
      const {item} = action;

      state.totalAmount += item.productPrice;
      state.totalAmount = parseFloat(state.totalAmount.toFixed(2));

      const existsProd = state.items.find(
        (itm) => itm.productId === item.productId,
      );

      if (existsProd) {
        existsProd.quantity++;
        existsProd.sum = parseFloat(
          (existsProd.sum + item.productPrice).toFixed(2),
        );
        return {...state};
      }

      state.items.push(item);

      return {...state};
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

      state.totalAmount = parseFloat(
        (state.totalAmount - itemForExclude.productPrice).toFixed(2),
      );

      return {...state};

    case RESET_CART:
      return initialState();
    default:
      return state;
  }
};
