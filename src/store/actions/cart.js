export const ADD_ITEMS_TO_CART = 'ADD_ITEMS_TO_CART';

export const addItemsToCart = (item) => ({
  type: ADD_ITEMS_TO_CART,
  item,
});
