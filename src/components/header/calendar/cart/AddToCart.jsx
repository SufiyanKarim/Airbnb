import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../../store/cartSlice";

const AddToCart = () => {
  // const {addToCart, removeFromCart} = useSelector(state => state.cart);
  // console.log(addToCart)
const dispatch = useDispatch()
  return (
    <div className="w-[50%] bg-white shadow-2xl absolute right-5 top-32 md:top-32 p-6 rounded-3xl">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-semibold">Adults</h1>
            <p className="text-gray-500">Ages 13 or above</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <h1 className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer" onClick={()=>dispatch(removeFromCart())}>-</h1>
            <p className="font-semibold">0</p>
            <p className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer">+</p>
          </div>
        </div>
        <hr />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-semibold">Children</h1>
            <p className="text-gray-500">Ages 2-12</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <h1 className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer">-</h1>
            <p className="font-semibold">0</p>
            <p className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer">+</p>
          </div>
        </div>
        <hr />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-semibold">Infants</h1>
            <p className="text-gray-500">Under 2</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <h1 className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer">-</h1>
            <p className="font-semibold">0</p>
            <p className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer">+</p>
          </div>
        </div>
        <hr />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-semibold">Pets</h1>
            <p className="text-gray-500 underline">Brining a service animal?</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <h1 className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer">-</h1>
            <p className="font-semibold">0</p>
            <p className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
