import { useEffect, useState } from "react"
import MealItem from "./MealItem";
export default function Meals() {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                setIsLoading(true);
                const respnse = await fetch('http://localhost:3000/meals');
                if (!respnse.ok) {
                    throw new Error('Something went wrong!');
                }
                const data = await respnse.json();
                setMeals(data);
            } catch (err) {
                setError(error.message)
            }
        };
        fetchMeals();
    }, [])
    return (
        <ul id="meals">
            {meals.map((meal) => (
                <MealItem meal={meal} key={meal.id} />
            ))}
        </ul >
    );
}