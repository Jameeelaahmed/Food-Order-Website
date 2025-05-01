import MealItem from "./MealItem";
import useHttp from "../hook/useHttp";
import Error from "./Error";
const requestConfig = {};
export default function Meals() {
    const { data: meals, isLoading, error } = useHttp('http://localhost:3000/meals', requestConfig, []);
    if (isLoading) {
        return <p className="center">Loading...</p>;
    }
    if (!meals || error) {
        return <Error title="Failed to fetch data" message={error} />;
    }

    console.log(meals);
    return (
        <ul id="meals">
            {meals.map((meal) => (
                <MealItem meal={meal} key={meal.id} />
            ))}
        </ul >
    );
}