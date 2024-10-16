import React, { useContext } from "react";
import { PagesContext } from "../../../../context/PagesContext";

const AddToCart = () => {
  const {handleCountGuests,pagesData,  pets, setPets,
    infants, setInfants,
    childrens, setChildrens,
    adults, setAdults,} = useContext(PagesContext);

  const increaseAdults = () => setAdults(adults + 1);
  const decreaseAdults = () => adults > 0 && setAdults(adults - 1);

  const increaseChildren = () => setChildrens(childrens + 1);
  const decreaseChildren = () => childrens > 0 && setChildrens(childrens - 1);

  const increaseInfants = () => setInfants(infants + 1);
  const decreaseInfants = () => infants > 0 && setInfants(infants - 1);

  const increasePets = () => setPets(pets + 1);
  const decreasePets = () => pets > 0 && setPets(pets - 1);

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
            <button className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer" onClick={decreaseAdults}>-</button>
            <span className="font-semibold">{adults}</span>
            <button className="bg-gray-200 py-2 px-4 rounded-full font-semibold text-xl border border-gray-300 hover:border-gray-400 cursor-pointer" onClick={increaseAdults}>+</button>
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
