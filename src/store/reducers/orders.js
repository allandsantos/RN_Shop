import {SAVE_NEW_ORDER} from '../actions/orders';
import Order from '../../models/order';
import {produce} from 'immer';

const initialState = {
  orders: [],
};

export const ordersReducer = produce((draft, action) => {
  switch (action.type) {
    case SAVE_NEW_ORDER:
      const {cart} = action;
      const newOrder = new Order(
        new Date().toString(),
        cart.items,
        cart.totalAmount,
        new Date(),
      );
      draft.orders.push(newOrder);
      return draft;
    default:
      return draft;
  }
}, initialState);
