import React, { useEffect, useState } from "react";
import AddRemoveQuantity from "./AddRemoveQuantity";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectCartItems,
} from "../redux/slices/addToCart";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showAddRemove, setShowAddRemove] = useState(false);

  // const cartItems = useSelector(selectCartItems);
  const cartitems = useSelector((state) => state.cart.items);
  console.log(cartitems, "amount is:");

  useEffect(() => {
    // Log the updated cartitems after each render
    console.log(cartitems, "amount from useEffect is:");
  }, [cartitems]);


  const quantityInCart = cartitems.find(item => item.item.id === product.id)?.quantity || 0;

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart({ item: { id: product.id },quantity: quantityInCart + 1 }));
  //   // dispatch(addToCart({ item: { id: product.id }, quantity: {cart} }));
  //   // dispatch(addToCart(product));
  //   setShowAddRemove(true);
  // };
  const handleAddToCart = (product) => {
    const newQuantity = quantityInCart + 1; // Increment the quantity
    dispatch(addToCart({ item: { id: product.id }, quantity: newQuantity }));
    setShowAddRemove(true);
  };
  

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 mx-auto"
      />
      <div className=" flex flex-row justify-between pt-4 ">
        <div className="text-center self-center  font-bold text-xl">
          {product.price} USD
        </div>
        {showAddRemove ? (
          <AddRemoveQuantity
            product={product}
            increaseQuantity={() => dispatch(increaseQuantity(product.id))}
            decreaseQuantity={() => decreaseQuantity(product.id)}
            // cart={cart}
            quantityInCart={quantityInCart}
          />
        ) : (
          <button
            className="block bg-[#ffffff] text-blue-800 p-2 mt-2"
            // onClick={() => {
            //   dispatch(addToCart(product));
            //   setShowAddRemove(true);
            // }}
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </button>
        )}
      </div>
      <div className="text-left mt-2 text-gray-500">{product.brand}</div>
    </div>
  );
};

export default ProductCard;
