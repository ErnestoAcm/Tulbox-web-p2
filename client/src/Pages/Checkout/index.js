import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";

import { MyContext } from "../../App";
import { fetchDataFromApi, postData } from "../../utils/api";

import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [formFields, setFormFields] = useState({
    fullName: "",
    country: "",
    streetAddressLine1: "",
    streetAddressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  });

  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    const user = JSON.parse(localStorage.getItem("user"));
    fetchDataFromApi(`/api/cart?userId=${user?.userId}`).then((res) => {
      setCartData(res);

      setTotalAmount(
        res.length !== 0 &&
          res
            .map((item) => parseInt(item.price) * item.quantity)
            .reduce((total, value) => total + value, 0)
      );
    });
  }, []);

  const onChangeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const context = useContext(MyContext);
  const history = useNavigate();

  const checkout = (e) => {
    e.preventDefault();

    console.log(cartData);

    console.log(formFields);
    if (formFields.fullName === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Por favor, rellene el nombre completo ",
      });
      return false;
    }

    if (formFields.country === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Por favor, rellene el país ",
      });
      return false;
    }

    if (formFields.streetAddressLine1 === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Por favor, rellene la dirección de la calle",
      });
      return false;
    }

    if (formFields.streetAddressLine2 === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Por favor, rellene la dirección de la calle",
      });
      return false;
    }

    if (formFields.city === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Por favor rellene la ciudad ",
      });
      return false;
    }

    if (formFields.state === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Por favor, rellene el estado ",
      });
      return false;
    }

    if (formFields.zipCode === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Por favor rellene el código postal ",
      });
      return false;
    }

    if (formFields.phoneNumber === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Por favor rellene el número de teléfono ",
      });
      return false;
    }

    if (formFields.email === "") {
      context.setAlertBox({
        open: true,
        error: true,
        msg: "Por favor rellene el correo electrónico",
      });
      return false;
    }

    const addressInfo = {
      name: formFields.fullName,
      phoneNumber: formFields.phoneNumber,
      address: formFields.streetAddressLine1 + formFields.streetAddressLine2,
      pincode: formFields.zipCode,
      date: new Date().toLocaleString("es-MX", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    var options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      key_secret: process.env.REACT_APP_RAZORPAY_KEY_SECRET,
      amount: parseInt(totalAmount * 100),
      currency: "MXN",
      order_receipt: "order_rcptid_" + formFields.fullName,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);

        const paymentId = response.razorpay_payment_id;

        const user = JSON.parse(localStorage.getItem("user"));

        const payLoad = {
          name: addressInfo.name,
          phoneNumber: formFields.phoneNumber,
          address: addressInfo.address,
          pincode: addressInfo.pincode,
          amount: parseInt(totalAmount * 100),
          paymentId: paymentId,
          email: user.email,
          userid: user.userId,
          products: cartData,
        };

        // console.log(payLoad)

        postData(`/api/orders/create`, payLoad).then((res) => {
          history("/orders");
        });
      },

      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <section className="section">
      <div className="container">
        <form className="checkoutForm" onSubmit={checkout}>
          <div className="row">
            <div className="col-md-8">
              <h2 className="hd">DATOS DE FACTURACIÓN</h2>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Nombre completo *"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="fullName"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Pais *"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="country"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <h6>Dirección *</h6>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Número de casa y nombre de la calle"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="streetAddressLine1"
                      onChange={onChangeInput}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Apartamento, suite, unidad, etc. (opcional)"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="streetAddressLine2"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <h6>Ciudad *</h6>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Ciudad"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="city"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <h6>Estado *</h6>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Estado"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="state"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <h6>Codigo postal *</h6>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <TextField
                      label="Codigo postal"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="zipCode"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Telefono"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="phoneNumber"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <TextField
                      label="Correo electronico"
                      variant="outlined"
                      className="w-100"
                      size="small"
                      name="email"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card orderInfo">
                <h4 className="hd">TU ORDEN</h4>
                <div className="table-responsive mt-3">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cartData?.length !== 0 &&
                        cartData?.map((item, index) => {
                          return (
                            <tr>
                              <td>
                                {item?.productTitle?.substr(0, 20) + "..."}{" "}
                                <b>× {item?.quantity}</b>
                              </td>

                              <td>
                                {item?.subTotal?.toLocaleString("es-MX", {
                                  style: "currency",
                                  currency: "MXN",
                                })}
                              </td>
                            </tr>
                          );
                        })}

                      <tr>
                        <td>Subtotal </td>

                        <td>
                          {(cartData?.length !== 0
                            ? cartData
                                ?.map(
                                  (item) => parseInt(item.price) * item.quantity
                                )
                                .reduce((total, value) => total + value, 0)
                            : 0
                          )?.toLocaleString("es-MX", {
                            style: "currency",
                            currency: "MXN",
                          })}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Button
                  type="submit"
                  className="btn-blue bg-red btn-lg btn-big"
                >
                  <IoBagCheckOutline /> &nbsp; Confirmar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
