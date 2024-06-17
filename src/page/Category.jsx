import { Link } from "react-router-dom";
import { useCategoryQuery } from "../store/service/endpoints/recipe.endpoint";
import CategoryCard from "../components/categoryCard/CategoryCard";
import Loading from "../components/loading/Loading";

const Category = () => {
  const { data: categories, isLoading, error } = useCategoryQuery();
  // console.log(categories);
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
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
          <li
            className="inline-flex items-center uppercase text-xs font-semibold text-gray-800 truncate dark:text-neutral-200"
            aria-current="page"
          >
            categories
          </li>
        </ol>
      </div>
      <div className="mt-3">
        <h1 className="text-2xl text-center text-primary underline font-serif font-semibold uppercase">
          Categories
        </h1>
        {isLoading && (
          <div className="flex flex-col justify-center items-center my-40">
            <Loading />
            <p>Loading...</p>
          </div>
        )}
        {error && (
          <p className="text-red-400 text-center my-4">Error: {error.status}</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 my-3">
          {categories?.categories?.map((category) => (
            <CategoryCard key={category.idCategory} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
