export const ADD_ITEMS_TO_CART = 'ADD_ITEMS_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

export const addItemsToCart = (item) => ({
  type: ADD_ITEMS_TO_CART,
  item,
});

export const removeItemsFromCart = (id) => ({
  type: REMOVE_ITEM_FROM_CART,
  itemId: id,
});
