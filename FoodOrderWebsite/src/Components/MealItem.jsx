import { currencyFormatter } from "../utils/formating"
import Button from "./UI/Button"
export default function MealItem({ meal }) {
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="" />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-description">{meal.description}</p>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                </div>
                <p className="meal-item-actions">
                    <Button>Add To Cart</Button>
                </p>
            </article>
        </li >
    )
}