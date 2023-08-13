
import React, { useState,createContext } from 'react';
export const PaymentContext = createContext();
function Payments({children}) {
 const [paymentSucces,showPaymentSucces] = useState(false)
 const contextValue = {
    paymentSucces,
    showPaymentSucces,
  };
  return (
   <PaymentContext.Provider value={contextValue}>
         {children}
   </PaymentContext.Provider>
  )
}

export default Payments
