export const updateBookList = (state, action) => {

  if( state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
    }
  }
  switch (action.type) {
    case "FECTH_BOOKS_SUCCESS":
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    case "FECTH_BOOKS_FAILURE":
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state.bookList;
  }
};
