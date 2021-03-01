import React, { useEffect } from "react";
import BookListItem from "../BookListItem/BookListItem";
import { Book } from "../../utils/types";
import { connect } from "react-redux";
import { WithBookstoreService } from "../HOC";
import { fetchBooks, bookAddedToCart } from "../../actions";
import "./BookList.scss";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

function BookList(props: {
  books: Book[];
  onAddToCart: (id: string) => void;
  loading: boolean;
  error: any;
  fetchBooks: () => void;
}) {
  useEffect(() => {
    props.fetchBooks();
  }, []);

  return !props.error ? (
    props.loading ? (
      <Spinner />
    ) : (
      <ul className="BookList">
        {props.books.map((book: Book) => (
          <li className="BookList__item" key={+book.id}>
            <BookListItem
              book={book}
              onAddToCart={() => props.onAddToCart(book.id)}
            />
          </li>
        ))}
      </ul>
    )
  ) : (
    <ErrorIndicator />
  );
}

const mapStateToProps = (state: {
  bookList: {
    books: Book[];
    loading: boolean;
    error: any;
  };
}) => {
  return {
    books: state.bookList.books,
    loading: state.bookList.loading,
    error: state.bookList.error,
  };
};

const mapDispatchToProps = (
  dispatch: any,
  ownProps: { bookstoreService: any }
) => {
  return {
    fetchBooks: fetchBooks(ownProps.bookstoreService, dispatch),
    onAddToCart: (id: string) => dispatch(bookAddedToCart(id)),
  };
};

export default WithBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
