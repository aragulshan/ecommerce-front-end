import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updateQuantity } from "../redux/slices/addRemoveSlice";
import { decreaseQuantity, increaseQuantity } from "../redux/slices/addToCart";

const AddRemoveQuantity = ({ product, quantityInCart }) => {
  const dispatch = useDispatch();
  const [localQuantity, setLocalQuantity] = useState(quantityInCart);

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
    console.log(setLocalQuantity(localQuantity + 1)); // Update the local quantity
  };

  const handleDecrease = () => {
    if (localQuantity > 1) {
      dispatch(decreaseQuantity(product.id));
      setLocalQuantity(localQuantity - 1); // Update the local quantity
    }
  };

  return (
    <div className="flex flex-row justify-between">
      <img
        src="./images/addbtn.svg"
        alt="add"
        className="w-[16px] h-[16px] m-auto cursor-pointer"
        onClick={handleIncrease}
      />
      <p className="self-center px-2">{`  ${localQuantity}`}</p>
      <img
        src="./images/removebtn.svg"
        alt="remove"
        className="w-[16px] h-[16px] m-auto cursor-pointer"
        onClick={handleDecrease}
      />
    </div>
  );
};

export default AddRemoveQuantity;
