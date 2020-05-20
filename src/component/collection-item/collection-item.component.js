import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.action";
const CollectionItem = ({ item, addItems }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItems(item)}>
        {" "}
        add to cart{" "}
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
});
export default connect(null, mapStateToProps)(CollectionItem);
