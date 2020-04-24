import {ADD_ITEMS_TO_CART} from '../actions/cart';

const initialState = {
  items: {},
  totalAmmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action) {
    case ADD_ITEMS_TO_CART:
      const {item} = action;
      if (state.items[item.id]) {
        item.quantity++;
        item.price += state.items[item.id].price;
        return {
          ...state,
          items: {...state.items, [item.id]: item},
          totalAmmount: state.totalAmmount + item.price,
        };
      }
      return {
        ...state,
        items: {...state.items, [item.id]: item},
        totalAmmount: state.totalAmmount + item.price,
      };

    default:
      return state;
  }
};
