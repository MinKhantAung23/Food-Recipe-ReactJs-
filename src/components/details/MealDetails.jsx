import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMeal, removeMeal } from "../../store/features/favMealSlice";

/* eslint-disable react/prop-types */
const MealDetails = ({ meal }) => {
  const favorites = useSelector((state) => state.favMeal.meals);
  const dispatch = useDispatch();

  const nav = useNavigate();

  const ingredients = [];
  const measures = [];

  for (let ing in meal) {
    if (ing.includes("strIngredient")) {
      if (meal[ing]) {
        ingredients.push(meal[ing]);
      }
    }

    if (ing.includes("strMeasure")) {
      if (meal[ing]) {
        measures.push(meal[ing]);
      }
    }
  }

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
    <div>
      <div className="">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between sm:items-start gap-4">
          <img
            src={meal.strMealThumb}
            width={"300px"}
            className="rounded shadow"
            alt={meal.strMealThumb}
          />
          <div className="my-3">
            <h1 className="text-2xl text-primary font-semibold mb-3">
              {meal.strMeal}
            </h1>
            <h2 className="text-base  mb-2 tracking-wide text-secondary">
              {meal.strTags}
            </h2>
            <div className="flex gap-4 ">
              <h3 className="text-white bg-secondary py-1 w-20 text-sm rounded-lg text-center">
                {meal.strCategory}
              </h3>
              <h3 className="text-white bg-secondary py-1 w-20 text-sm rounded-lg text-center">
                {meal.strArea}
              </h3>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-5  border rounded-full cursor-pointer ${
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
        <div className=" border p-3 my-4  rounded">
          <h1 className="text-center text-2xl mb-4 underline">Ingredients</h1>
          <div className="flex justify-center items-center">
            <div>
              <ul>
                {ingredients.map((ing, index) => (
                  <li key={index} className="my-2">
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div className="ms-4">
              <ul>
                {measures.map((mea, index) => (
                  <li key={index} className="my-2">
                    {mea}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="my-4 border bg-secondary text-white p-4 rounded shadow-md">
          <h2 className="text-lg text-center font-medium mb-3">Instructions</h2>
          <p className="text-gray-600 text-sm leading-8 tracking-wide">
            {meal.strInstructions}
          </p>
        </div>

        <div className="flex justify-start items-center">
          <span className="text-base me-3 text-red-400">Watch on youtube</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 me-3 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>

          <a href={meal.strYoutube} target="_blank">
            <svg
              className="w-9 h-9 text-red-500 dark:text-white inline-flex"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <small className="text-base">Source : </small>
        <a
          href={meal.strSource}
          className="text-sm text-blue-700 underline text-wrap"
          target="_blank"
          rel="noopener noreferrer"
        >
          {meal.strSource}
        </a>

        <div className="flex justify-end my-4">
          <button
            className=" btn border border-primary "
            onClick={() => nav(-1)}
          >
            back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
