import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const SearchCard = ({ meal }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/details/${meal.idMeal}`);
  };
  return (
    <div
      onClick={handleNavigate}
      className="border cursor-pointer p-2 my-3 rounded shadow flex justify-normal items-center"
    >
      <img src={meal.strMealThumb} className="me-5" width={"70px"} alt="" />
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold">{meal.strMeal}</h3>
        <small className="mt-2 text-secondary">{meal.strCategory}</small>
      </div>
    </div>
  );
};

export default SearchCard;
