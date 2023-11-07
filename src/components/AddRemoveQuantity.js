import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "../redux/slices/addRemoveSlice";

const AddRemoveQuantity = ({ product, increaseQuantity, decreaseQuantity, quantityInCart }) => {
  const dispatch = useDispatch();
  const [localQuantity, setLocalQuantity] = useState(quantityInCart);

  const handleIncrease = () => {
    increaseQuantity();
    console.log(setLocalQuantity(localQuantity + 1)); // Update the local quantity
  };

  const handleDecrease = () => {
    if (localQuantity > 0) {
      decreaseQuantity();
      setLocalQuantity(localQuantity - 1); // Update the local quantity
    }
  };

  return (
    <div className="flex flex-row justify-between">
      <img
        src="./images/addbtn.svg"
        alt="add"
        className="w-[16px] h-[16px] m-auto"
        onClick={handleIncrease}
      />
      <p className="self-center px-2">{`  ${localQuantity}`}</p>
      <img
        src="./images/removebtn.svg"
        alt="remove"
        className="w-[16px] h-[16px] m-auto"
        onClick={handleDecrease}
      />
    </div>
  );
};

export default AddRemoveQuantity;





// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { updateQuantity } from "../redux/slices/addRemoveSlice";

// const AddRemoveQuantity = ({ product,increaseQuantity, decreaseQuantity,quantityInCart }) => {

//   // const cartItem = cart.items.find((item) => item.item.id === product.id);

//   // // Get the quantity from the cartItem or default to 0 if not found
//   // const quantityInCart = cartItem ? cartItem.quantity : 0;

//   return (
//     <div className="flex flex-row justify-between ">
//     {/* <div className="flex flex-row w-[10%] justify-between "> */}
//       <img
//         src="./images/addbtn.svg"
//         alt="add"
//         className="w-[16px] h-[16px] m-auto"
//         // onClick={() => setCount(count + 1)}
//         onClick={increaseQuantity}
//       />
//       {/* <p className="self-center px-2">{cart}</p> */}
//       <p className="self-center px-2">{`Quantity: ${quantityInCart}`}</p>
//       <img
//         src="./images/removebtn.svg"
//         alt="remove"
//         className="w-[16px] h-[16px] m-auto"
//         onClick={decreaseQuantity}
//       />
//     </div>
//   );
// };

// export default AddRemoveQuantity;
