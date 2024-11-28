import Modal from "./UI/Modal";
import { useContext } from "react";
import { currencyFormatter } from "../utils/formating";
import CartContext from "../Store/CartContext";
import Button from "./UI/Button";
import UserProgressContext from "../Store/UserProgressContext";
import CartItem from "./CartItem";
export default function Cart() {
    const userProgressCtx = useContext(UserProgressContext);
    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.items.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function showCheckout() {
        userProgressCtx.showCheckout();
    }

    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? 'cart' : null}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <CartItem key={item.id} {...item} onAdd={() => cartCtx.addItem(item)} onRemove={() => cartCtx.removeItem(item.id)} />
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {cartCtx.items.length > 0 && <Button onClick={showCheckout}>Go to Checkout</Button>}
            </p>
        </Modal>
    )
}