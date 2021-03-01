import React from "react";
import { CartItem } from "../../utils/types";
import { connect } from "react-redux";
import "./Cart.scss";
import { bookAddedToCart, bookRemovedFromCart, AllBooksRemovedFromCart  } from "../../actions";

function Cart(props: {
  items: CartItem[];
  total: number;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const tableRow = props.items.map((item: CartItem, i: number) => {
    return (
      <tr key={item.id}>
        <td className="p-2"width="5%">{i + 1}</td>
        <td  width="60%">{item.title}</td>
        <td>{item.quantity}</td>
        <td>{`$${item.price}`}</td>
        <td className="Cart__table-action p-3" width="15%">
          <button
            className="Cart__table-button btn btn-outline-warning "
            onClick={() => props.onDecrease(item.id)}
          >
            <i className="fa fa-minus-circle"></i>
          </button>
          <button
            className="Cart__table-button btn btn-outline-success "
            onClick={() => props.onIncrease(item.id)}
          >
            <i className="fa fa-plus-circle"></i>
          </button>
          <button
            className="Cart__table-button btn btn-outline-danger "
            onClick={() => props.onDelete(item.id)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <section className="Cart">
      <h2 className="Cart__title">Your order</h2>
      <table className="Cart__table">
        <thead className="Cart__table-header">
          <tr>
            <th className="p-2">#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>

      <span className="Cart__total"> Total: $50 </span>
    </section>
  );
}

const mapStateToProps = (state: { cart: {
  cartItems: CartItem[];
  orderTotal: number;
}

}) => {
  return {
    items: state.cart.cartItems,
    total: state.cart.orderTotal,
  };
};

const mapDispatchToProps =  {

    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: AllBooksRemovedFromCart,

};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
