import { Link, useLocation } from "react-router-dom";
import Card from "../components/card/Card";

const Recipe = () => {
  const location = useLocation();
  // console.log(location.state.data.meals);
  const data = location.state.data.meals;
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-7">
        <ol className="flex items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <Link
              className="flex items-center text-xs text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
              to={"/"}
            >
              Home
            </Link>
            <svg
              className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </li>
          <li className="inline-flex items-center  " aria-current="page">
            <Link
              to={"/category"}
              className="flex items-center text-xs text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            >
              categories
            </Link>
            <svg
              className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </li>
          <li
            className="inline-flex items-center uppercase text-xs font-semibold text-gray-800 truncate dark:text-neutral-200"
            aria-current="page"
          >
            recipe
          </li>
        </ol>
      </div>
      <div className="flex flex-wrap justify-evenly items-center gap-3 my-4">
        {data?.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
