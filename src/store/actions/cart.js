export const ADD_ITEMS_TO_CART = 'ADD_ITEMS_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const RESET_CART = 'RESET_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const addItemsToCart = (item) => ({
  type: ADD_ITEMS_TO_CART,
  item,
});

export const removeItemsFromCart = (id) => ({
  type: REMOVE_ITEM_FROM_CART,
  itemId: id,
});

export const resetCart = () => ({
  type: RESET_CART,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});
