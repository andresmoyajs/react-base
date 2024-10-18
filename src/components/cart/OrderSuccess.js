import React from "react";
import { MetaData } from "../layout/MetaData";

const OrderSuccess = () => {
  return (
    <>
      <MetaData titulo={"Orden Confirmada"} />
      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
          <img
            className="my-5 img-fluid d-block mx-auto"
            src="/images/order_success.png"
            alt="Confirmación de Pago"
            width="200"
            height="200"
          />
          <h2>Tu orden de compra ha sido completada con éxito</h2>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
