import React from "react";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Formik, Field, Form } from "formik";
import AddRemoveQuantity from "../../components/AddRemoveQuantity";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/slices/addToCart";
import orderSchema from "../validation/OrderSchema";
import placeOrder from "../../redux/slices/placeOrder";

const StorePage = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.items);
  console.log(cartitems, "on store page");

  const orderState = useSelector((state) => state.order);
  const isLoading = orderState.isLoading || false;
  const error = orderState.error || null;
  console.log(orderState, "is the state");
  // const handleSubmit = (values) => {
  //   console.log("Before dispatching placeOrder");
  //   console.log(values);
  //   dispatch(placeOrder(values));
  //   console.log("After dispatching placeOrder");
  //   console.log(values, "order form values are");
  // };
  const handleSubmit = (values) => {
    console.log("Before dispatching placeOrder");
    console.log(values);
    dispatch(placeOrder(values));
    console.log("After dispatching placeOrder");
    console.log(values, "order form values are");
  };

  return (
    <>
      <Header />
      <section className="px-[80px] ">
        <div className="flex flex-col xl:flex-row gap-[2rem] py-16 items-center lg:items-start ">
          <div className=" xl:flex-[1.5] w-[100%] lg:w-[760px] xl:w-[unset] ">
            {cartitems?.map((element) => (
              <div
                className="bg-[#FBFBFB] shadow-xl rounded mb-[2rem] h-[234px]"
                key={element.id}
              >
                <div className=" py-8 px-10 flex">
                  <div className="lg:w-[525px] flex ">
                    <img
                      src={element.thumbnail}
                      alt=""
                      className="w-[82.35px] h-[78.35px]"
                    />
                    <div className="flex flex-col pl-8">
                      <p>{element.brand}</p>
                      <div className="flex flex-row">
                        <p className=" pr-2">{element.price} Rs </p>
                        <p className="pr-2"> x {element.quantity} </p>
                        <p>= {element.price * element.quantity} Rs</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <AddRemoveQuantity
                      product={element}
                      increaseQuantity={() =>
                        dispatch(increaseQuantity(element.id))
                      }
                      decreaseQuantity={() =>
                        dispatch(decreaseQuantity(element.id))
                      }
                      quantityInCart={element.quantity}
                    />
                    <img
                      src="./images/delete.svg"
                      alt="del"
                      className="w-[16.47px] h-[17.63px] self-center my-[1rem] cursor-pointer"
                      onClick={() => dispatch(removeFromCart(element.id))}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" w-[100%] lg:w-[760px] xl:w-[unset] flex-[1.5] xl:flex-1 ">
            <div className="p-8 bg-[#FBFBFB] shadow-xl rounded">
              <Formik
                initialValues={{
                  name: "",
                  phone: "",
                  city: "",
                  state: "",
                  streetAddress: "",
                }}
                validationSchema={orderSchema}
                onSubmit={handleSubmit}
              >
                <Form className="w-[100%]">
                  <label
                    className="block text-gray-700 text-sm font-bold pt-2 pb-1"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <Field
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    id="name"
                    name="name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <label
                    className="block text-gray-700 text-sm font-bold pt-2 pb-1"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <Field
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    id="phone"
                    name="phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <label
                    className="block text-gray-700 text-sm font-bold pt-2 pb-1"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <Field
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    id="city"
                    name="city"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <label
                    className="block text-gray-700 text-sm font-bold pt-2 pb-1"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <Field
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    id="state"
                    name="state"
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <label
                    className="block text-gray-700 text-sm font-bold pt-2 pb-1"
                    htmlFor="streetAddress"
                  >
                    Street Address
                  </label>
                  <Field
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    id="streetAddress"
                    name="streetAddress"
                  />
                  <ErrorMessage
                    name="streetAddress"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                      disabled={isLoading}
                    >
                      {isLoading ? "Placing Order..." : "Place Order (COD)"}
                    </button>
                  </div>
                </Form>
              </Formik>
              {error && <div className="text-red-500">{error}</div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorePage;
