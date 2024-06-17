import { Link, useParams } from "react-router-dom";
import { useGetSingleMealQuery } from "../store/service/endpoints/recipe.endpoint";
import MealDetails from "../components/details/MealDetails";
import Loading from "../components/loading/Loading";

const RecipeDetail = () => {
  const { id } = useParams();

  const { data: detailMeal, isLoading, error } = useGetSingleMealQuery(id);

  // console.log(detailMeal);
  if (isLoading) {
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        <Loading />
        <p>Loading please wait...</p>
      </div>
    );
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }
  return (
    <div className="">
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
          <li className="inline-flex items-center text-xs font-semibold text-gray-800 truncate dark:text-neutral-200">
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
            recipe detail
          </li>
        </ol>
      </div>
      <div>
        {detailMeal?.meals?.map((meal) => (
          <MealDetails key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default RecipeDetail;
