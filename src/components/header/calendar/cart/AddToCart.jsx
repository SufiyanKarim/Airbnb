import React from "react";

const AddToCart = () => {
  return (
    <div className="w-[30%] bg-white shadow-2xl absolute right-60 top-32 md:top-32 p-6 rounded-3xl">
      <div className="flex flex-col gap-5">
        {/* Adults */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-semibold">Adults</h1>
            <p className="text-gray-500">Ages 13 or above</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <h1 className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer">-</h1>
            <p className="font-semibold">0</p>
            <p className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer">+</p>
          </div>
        </div>
        <hr />

        {/* Children */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-semibold">Children</h1>
            <p className="text-gray-500">Ages 2-12</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer"
              onClick={decreaseChildren}
            >
              -
            </button>
            <span className="font-semibold">{childrens}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer"
              onClick={increaseChildren}
            >
              +
            </button>
          </div>
        </div>
        <hr />

        {/* Infants */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-semibold">Infants</h1>
            <p className="text-gray-500">Under 2</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer"
              onClick={decreaseInfants}
            >
              -
            </button>
            <span className="font-semibold">{infants}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer"
              onClick={increaseInfants}
            >
              +
            </button>
          </div>
        </div>
        <hr />

        {/* Pets */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-semibold">Pets</h1>
            <p className="text-gray-500 underline">Bringing a service animal?</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer"
              onClick={decreasePets}
            >
              -
            </button>
            <span className="font-semibold">{pets}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer"
              onClick={increasePets}
            >
              +
            </button>
          </div>
        </div>

        {/* Display Results from Mapping */}
        {/* {result} */}

      </div>
    </div>
  );
};

export default AddToCart;
