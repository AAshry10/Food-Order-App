import { useContext } from "react"

import { currencyFormatter } from "../util/formatting"
import Button from "./UI/Button"
import CartContext from "../Store/CartContext";

export default function MealItem({ meal }) {
    const ctx = useContext(CartContext);

    function handleAddToCart() {
        ctx.addItem(meal);
    }

    return(
        <li className="meal-item">
            <img src={`http://localhost:3000/${meal.image}`} alt="" />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-descripption">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick = {handleAddToCart}>
                    Add to cart
                </Button>
            </p>
        </li>
    )
}