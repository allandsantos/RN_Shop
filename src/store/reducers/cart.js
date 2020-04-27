import {ADD_ITEMS_TO_CART} from '../actions/cart';

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

    default:
      return state;
  }
};
