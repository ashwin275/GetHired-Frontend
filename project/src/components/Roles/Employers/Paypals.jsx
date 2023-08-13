import React, { useState,useContext } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axiosInstance from "../../Axios/Axios";
import { useDispatch } from "react-redux";
import { setPostBalance } from "../../Features/Slice/authSlice";

import { PaymentContext } from "../../Features/Context/Payments";
function Paypals(props) {
  const { showPaymentSucces} = useContext(PaymentContext);
  //   const [modalShow, setModalShow] = useState(false);
  // const client_id = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  // const secret_key = import.meta.env.VITE_PAYPAL_SECRET_KEY;

  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState("");
  const [paidUser, setuser] = useState("");

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Plan",
            amount: {
              currency_code: "USD",
              value: props.amount,
            },
          },
        ],
      })
      .then((orderId) => {
        console.log("OrderID before ", orderId);

        return orderId;
      });
  };

  const onApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      const { id } = details;
      const paidAmount = details.purchase_units[0].amount.value;
      const name = details.payer.name.given_name;
      setuser(name);
      setOrderId(id);
      const requestData = {
        plan_id: props.id,
        amount: paidAmount,
        order_id: id,
      };

      try {
        const response = await axiosInstance.post(
          "recruiters/buy-plan/",
          requestData
        );
        dispatch(setPostBalance(response.data.post_balance));
        showPaymentSucces(true)
        console.log("Response from backend", response);
        console.log("Payment captured with ID: ", id, name);

        
      } catch (error) {
        // refund api here
        console.log(error)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onError = (data, actions) => {
    console.log("error occured");
    alert("An error occured with your payment");
    setErrrorMessage("An error occured with your payment");
  };
  return (
   
    <PayPalButtons
      style={{ layout: "horizontal" }}
      createOrder={createOrder}
      onApprove={onApprove}
      onError={onError}
    />

   
  );
}

export default Paypals;
