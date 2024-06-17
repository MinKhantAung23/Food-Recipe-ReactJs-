import { useSelector } from "react-redux";
import FavCard from "../components/favCard/FavCard";
import FoodImg from "../assets/food.svg";
import { Link } from "react-router-dom";

const Favorite = () => {
  const favMeal = useSelector((state) => state.favMeal);

  return (
    <>
      {favMeal?.meals.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <img src={FoodImg} width={"500px"} alt="" />
          <div className="my-4 text-center">
            <h1 className="text-blue-500 text-2xl font-bold mb-3">
              No Favorite Meals
            </h1>
            <Link to={"/"} className="btn bg-blue-400 text-white font-medium">
              Show Meals
            </Link>
          </div>
        </div>
      )}
      <div className="">
        {favMeal?.meals?.map((meal) => (
          <FavCard key={meal.idMeal} meal={meal} />
        ))}
        <div className="text-end m-4 ">
          <Link to={-1} className="underline text-red-400">
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Favorite;
