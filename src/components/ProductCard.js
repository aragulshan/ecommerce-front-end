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
  useEffect(() => {
    // Log the updated cartitems after each render;
  }, [cartitems]);

  const quantityInCart =
    cartitems.find((item) => item._id === product._id)?.quantity || 0;

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
    setShowAddRemove(true);
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <img
        src={product.imageUrl || ""}
        alt={product.title || ""}
        className="h-40 mx-auto"
      />

      <div className=" flex flex-row justify-between pt-4 ">
        <div className="text-center self-center  font-bold text-xl">
          {product.price} USD
        </div>
        {showAddRemove ? (
          <AddRemoveQuantity
            product={product}
            increaseQuantity={() => dispatch(increaseQuantity(product._id))}
            decreaseQuantity={() => decreaseQuantity(product._id)}
            quantityInCart={quantityInCart}
          />
        ) : (
          <button
            className="block bg-[#ffffff] text-blue-800 p-2 mt-2"
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </button>
        )}
      </div>
      <div className="text-left mt-2 text-gray-500 ">{product.brand}</div>
    </div>
  );
};

export default ProductCard;
