import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItems,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={(item) => removeItem(cartItem)}>
          {" "}
          &#10096;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={(item) => addItem(cartItem)}>
          &#10097;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={(item) => clearItem(cartItem)}>
        &#10006;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItems(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
