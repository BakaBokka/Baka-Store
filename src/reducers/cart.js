const updateCartItems = (cartItems, item, i) => {
  if (item.quantity === 0) {
    return [...cartItems.slice(0, i), ...cartItems.slice(i + 1)];
  }

  if (i === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, i), item, ...cartItems.slice(i + 1)];
};

const updateCartItem = (book, item = {}, count) => {
  const { id = book.id, title = book.title, quantity = 0, price = 0 } = item;

  return {
    id,
    title,
    quantity: quantity + count,
    price: price + count * book.price,
  };
};

const updateOrder = (state, bookId, count) => {
  const {
    bookList: { books },
    cart: { cartItems },
  } = state;
  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, count);

  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};


export const updateCart = (state, action) => {
  if( state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    }
  }

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_BOOKS_REMOVED_FROM_CART":
      const item = state.cart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.quantity);
    default:
      return state.cart;
  }
};


