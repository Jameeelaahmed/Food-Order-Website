import { currencyFormatter } from "../utils/formating"
export default function CartItem({ id, name, price, quantity, onRemove, onAdd }) {
    return (
        <li className="cart-item">
            <p>{name} - {quantity} × {currencyFormatter.format(price)}</p>
            <p className="cart-item-actions">
                <button onClick={onRemove}>-</button>
                <span>{quantity}</span>
                <button onClick={onAdd}>+</button>
            </p>
        </li>
    )
}