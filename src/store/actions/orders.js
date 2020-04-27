export const SAVE_NEW_ORDER = 'SAVE_NEW_ORDER';

export const saveNewOrder = (cart) => ({
  type: SAVE_NEW_ORDER,
  cart,
});
