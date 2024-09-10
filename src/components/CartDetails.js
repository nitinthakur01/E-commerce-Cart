import React, { useEffect, useState } from "react";
import "./cartstyle.css";
// import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeToCart,
  removeSingleItem,
  emptyCartItem,
} from "../redux/features/cartSlice";

const CartDetails = () => {
  const { carts } = useSelector((state) => state.allCart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);

  const dispatch = useDispatch();

  const handleIncreament = (e) => {
    dispatch(addToCart(e));
  };

  const handledecreament = (e) => {
    dispatch(removeToCart(e));
  };

  const handleSingleDec = (e) => {
    dispatch(removeSingleItem(e));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCartItem());
  };

  const total = () => {
    let totalPrice = 0;
    carts.map((ele, ind) => {
      totalPrice = ele.price * ele.qnty + totalPrice;
    });
    setTotalPrice(totalPrice);
  };

  const countquantity = () => {
    let totalquantity = 0;
    carts.map((ele, ind) => {
      totalquantity = ele.qnty + totalquantity;
    });
    setTotalQuantity(totalquantity);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    countquantity();
  }, [countquantity]);

  return (
    <>
      <div
        className="row justify-content-center m-0"
        style={{ height: "80vh" }}
      >
        <div className="col-md-8 m-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">
                  Cart Calculation ({carts.length})
                </h5>
                {carts.length > 0 ? (
                  <button
                    className="btn btn-danger mt-0 btn-sm"
                    onClick={handleEmptyCart}
                  >
                    <i className="fa fa-trash-alt mr-2"></i>
                    <span>EmptyCart</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {carts.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart"></i>
                          <p>Your cart is empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        <span id="amount" className="amount">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((data, index) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <button
                                className="prdct-delete"
                                onClick={() => handledecreament(data.id)}
                              >
                                <i className="fa fa-trash-alt"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src={data.imgdata} alt="" />
                              </div>
                            </td>
                            <td>
                              <div className="product-name">
                                <p>{data.dish}</p>
                              </div>
                            </td>
                            <td>{data.price}</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button
                                  className="prdct-qty-btn"
                                  onClick={
                                    data.qnty <= 1
                                      ? () => handledecreament(data.id)
                                      : () => handleSingleDec(data)
                                  }
                                  type="button"
                                >
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  className="qty-input-box"
                                  value={data.qnty}
                                  disabled
                                  name=""
                                  id=""
                                />
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={() => handleIncreament(data)}
                                >
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-right">
                              {data.qnty * data.price}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>
                        Items In Cart <span className="ml-2 mr-2">:</span>
                        <span className="text-danger">{totalquantity}</span>
                      </th>
                      <th className="text-right">
                        Total Price<span className="ml-2 mr-2">:</span>
                        <span className="text-danger">{totalPrice}</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
