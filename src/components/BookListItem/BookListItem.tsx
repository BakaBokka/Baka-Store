import React from "react";
import { Book } from "../../utils/types";
import "./BookListItem.scss";

function BookListItem(props: { book: Book; onAddToCart: () => void }) {
  return (
    <div className="BookListItem ">
      <img className="BookListItem__cover" src={props.book.cover} alt={`"${props.book.title}" cover`}/>
      <div className="BookListItem__content">
      <div className="BookListItem__details">
        <a className="BookListItem__title" href="/#">
          {props.book.title}
        </a>
        <span className="BookListItem__author mb-2">{props.book.author}</span>
        <span className="BookListItem__price ">{`$${props.book.price}`}</span>

      </div>
      <button className="BookListItem__button btn btn-info mb-2"
        onClick={props.onAddToCart}
      >Add to cart</button>
      </div>
    </div>
  );
}

export default BookListItem;
