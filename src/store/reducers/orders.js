import {SAVE_NEW_ORDER} from '../actions/orders';
import Order from '../../models/order';
const initialState = {
  orders: [],
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NEW_ORDER:
      const {cart} = action;
      const newOrder = new Order(
        new Date().toString(),
        cart.items,
        cart.totalAmmount,
        new Date(),
      );
      state.orders.push(newOrder);
      return {...state};
    default:
      return state;
  }
};
