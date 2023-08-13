
import React ,{useContext}from "react";

import { PaymentContext } from "../../Features/Context/Payments";
import Modal from "react-bootstrap/Modal";
function PaymentSuccess(props) {
  const { showPaymentSucces} = useContext(PaymentContext);
  const handleButtonClick = () => {
    
    showPaymentSucces(false)
  };
  return (
    <div className="">
      <Modal
        show={props.show}
       
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="   "
      >
        <Modal.Body className="rounded-xl">
          <div className="  text-stone-400">
            <div className="flex items-center justify-end ">
              <i
                className="fa-solid fa-xmark  button fa-2x"
                onClick={handleButtonClick}
              ></i>
            </div>

            <img
              src="https://i.gifer.com/XD4x.gif"
              className="img-fluid "
              alt="Sample image"
            />
            <p className="ms-20 text-green-700 mb-6 text-3xl  font-serif font-bold p-2">
              Payment Successfull &nbsp;&nbsp;
              <i className="fa-solid fa-exclamation fa-flip"></i>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PaymentSuccess;
