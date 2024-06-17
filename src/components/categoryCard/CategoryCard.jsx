import { useNavigate } from "react-router-dom";
import { useMealsQuery } from "../../store/service/endpoints/recipe.endpoint";
import Loading from "../loading/Loading";

/* eslint-disable react/prop-types */
const CategoryCard = ({ category }) => {
  const nav = useNavigate();
  const { data, isLoading, error } = useMealsQuery(category.strCategory);
  const handleClick = () => {
    nav("/category/recipe", { state: { data } });
  };
  // console.log(data);

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
    <div
      className="flex flex-col w-[200px] bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
      onClick={handleClick}
    >
      <img
        className="w-full h-auto rounded-t-xl"
        src={category.strCategoryThumb}
        alt={category.strCategoryThumb}
      />
      <div className="p-4 md:p-5 border-t border-secondary">
        <h3 className="text-lg font-bold text-secondary text-center dark:text-white">
          {category.strCategory}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
