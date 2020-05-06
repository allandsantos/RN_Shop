export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const editProduct = (product) => {
  return {
    type: EDIT_PRODUCT,
    product: product,
  };
};

export const newProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    id,
  };
};
