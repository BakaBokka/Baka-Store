import {updateBookList} from "./bookList";
import {updateCart} from "./cart";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    cart: updateCart(state, action),
  };
};

export default reducer;
