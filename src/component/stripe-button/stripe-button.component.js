import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeButtonCheckout = ({ price }) => {
  const priceForStripe = price * 100;
  const pubishableKey = "pk_test_IeGjsnyK6pjfqwaV088gDrW800aTgainvY";
  const onToken = (token) => {
    console.log(token);
    alert(" payment succesful ");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="crwn clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pubishableKey}
    />
  );
};
export default StripeButtonCheckout;
