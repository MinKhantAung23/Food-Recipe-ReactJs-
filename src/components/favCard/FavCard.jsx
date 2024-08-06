/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeMeal } from "../../store/features/favMealSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmBox from "./ConfirmBox";

const FavCard = ({ meal }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [mealToDelete, setMealToDelete] = useState(null);

  const handleRemove = (meal) => {
    setMealToDelete(meal);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(removeMeal(mealToDelete));
    setShowModal(false);
  };
  return (
    <div className="flex flex-col sm:flex-row justify-between m-4 gap-10 bg-zinc-50 hover:bg-gray-50 border border-secondary hover:border-primary rounded-md shadow hover:shadow-lg p-4">
      <div className="sm:flex gap-8">
        <img
          src={meal.strMealThumb}
          className="w-full sm:w-36 "
          //   width={"150px"}
          alt=""
        />
        <div className="flex flex-col justify-between mt-4 sm:mt-0">
          <h2 className="text-lg font-bold mb-6 text-center">{meal.strMeal}</h2>
          <Link
            to={`/details/${meal.idMeal}`}
            className="btn w-full text-center sm:w-fit border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
          >
            Meal Details
          </Link>
        </div>
      </div>
      <div className="text-end">
        <button
          onClick={() => handleRemove(meal)}
          className="bg-transparent hover:bg-gray-300 p-4 rounded-full duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 fill-red-400 cursor-pointer hover:fill-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
      <ConfirmBox
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default FavCard;
