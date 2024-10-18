import React, { Fragment, useEffect } from "react";
import { MetaData } from "../layout/MetaData";
import { CheckoutSteps } from "./CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { resetUpdateStatus } from "../../slices/orderSlice";
import { saveOrder } from "../../actions/orderAction";

const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const {
    shoppingCartItems,
    shoppingCartId,
    total,
    cantidad,
    subtotal,
    precioEnvio,
    impuesto,
  } = useSelector((state) => state.cart);

  const items = shoppingCartItems.slice();

  const { isUpdate, errores } = useSelector((state) => state.order);

  const { user, direccionEnvio } = useSelector((state) => state.security);

  useEffect(() => {
    if (isUpdate) {
      //Navegar hacia el siguiente nivel
      navigate('/payment');
      //alert.success("Se creo la orden de compra");
      dispatch(resetUpdateStatus({}));
    }

    if (errores) {
      errores.map((error) => alert.error(error));
    }
  }, [dispatch, isUpdate, errores]);

  const handlerSubmit = () => {
    const request = {
      shoppingCartId,
    };

    dispatch(saveOrder(request));
  };

  return (
    <>
      <MetaData titulo={"Confirmación de Orden"} />
      <CheckoutSteps envio confirmacion />
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8 mt-5 order-confirm">
          <h4 className="mb-3">Información de Envió</h4>
          <p>
            <b>Nombre:</b> {`${user.nombre} ${user.apellido}`}
          </p>
          <p className="mb-4">
            <b>Dirección:</b>

            {` ${direccionEnvio ? direccionEnvio.direccion : ""}, ${
              direccionEnvio ? direccionEnvio.ciudad : ""
            }, ${direccionEnvio ? direccionEnvio.departamento : ""}, ${
              direccionEnvio ? direccionEnvio.codigoPostal : ""
            }, ${direccionEnvio ? direccionEnvio.pais : ""} `}
          </p>

          <hr />
          <h4 className="mt-4">Tu carrito de compras:</h4>

          {shoppingCartItems.map((item) => (
            <Fragment key={item.id}>
              <hr />
              <div className="cart-item my-1">
                <div className="row">
                  <div className="col-4 col-lg-2">
                    <img
                      src={item.imagen}
                      alt={item.producto}
                      height="45"
                      width="65"
                    />
                  </div>

                  <div className="col-5 col-lg-6">
                    <Link to={`/product/${item.productId}`}>
                      {item.producto}
                    </Link>
                  </div>

                  <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                    <p>
                        {item.cantidad} x ${item.precio} = <b>${item.total}</b>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </Fragment>
          ))}
        </div>

        <div className="col-12 col-lg-3 my-4">
          <div id="order_summary">
            <h4>Orden de Compra</h4>
            <hr />
            <p>
              Subtotal: <span className="order-summary-values">${subtotal}</span>
            </p>
            <p>
              Precio de Envió: <span className="order-summary-values">${precioEnvio}</span>
            </p>
            <p>
              Impuesto: <span className="order-summary-values">${impuesto}</span>
            </p>

            <hr />

            <p>
              Total: <span className="order-summary-values">${total}</span>
            </p>

            <hr />
            <button id="checkout_btn" className="btn btn-primary btn-block" onClick={handlerSubmit}>
              Pagar Productos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
