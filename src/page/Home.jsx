import Card from "../components/card/Card";
import Loading from "../components/loading/Loading";
import { useMealsQuery } from "../store/service/endpoints/recipe.endpoint";

const Home = () => {
  const { data, isLoading, error } = useMealsQuery("beef");

  if (isLoading) {
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        <Loading />
        <p>Loading please wait...</p>
      </div>
    );
  }
  if (error) {
    return (
      <p className="text-red-500 font-bold text-center">
        Error : {error.status}
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-3 my-4">
        {data?.meals?.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
