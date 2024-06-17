/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import { addMeal, removeMeal } from "../../store/features/favMealSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ meal }) => {
  const favorites = useSelector((state) => state.favMeal.meals);

  const dispatch = useDispatch();

  const isFavorite = favorites.find(
    (favMeal) => favMeal.idMeal === meal.idMeal
  );

  const toggleButton = (meal) => {
    if (isFavorite) {
      dispatch(removeMeal(meal));
    } else {
      dispatch(addMeal(meal));
    }
  };

  return (
    <div className="flex flex-col w-[300px] group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMealThumb}
          className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
        />
      </div>
      <div className="flex justify-end mt-1 mx-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-5  border rounded-full ${
            isFavorite ? "fill-red-500" : "fill-white"
          }`}
          onClick={() => toggleButton(meal)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>

      <div className="min-h-[150px] p-3 md:p-4 flex flex-col justify-between items-center">
        <h1 className="text-md font-bold text-secondary mb-4 dark:text-white">
          {meal.strMeal}
        </h1>
        <Link
          to={`/details/${meal.idMeal}`}
          className="text-sm border border-primary text-primary mb-3 rounded-md w-full py-2 px-4 text-center hover:bg-primary hover:text-white transition-all"
        >
          For The Full Recipe Click Here
        </Link>
      </div>
    </div>
  );
};

export default Card;
