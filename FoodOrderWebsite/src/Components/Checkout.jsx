import Modal from "./UI/Modal";
import { useContext } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";
export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    function handleCloseCheckout() {
        userProgressCtx.hideCheckout();
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    order: {
                        items: cartCtx.items,
                        customerData: customerData,
                    },
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit the order.');
            }

            const data = await response.json();
            console.log('Order submitted successfully:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <Modal className="checkout" open={userProgressCtx.progress === 'checkout'}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount:- </p>
                <Input type="text" id="name" label="Name" />
                <Input type="email" id="email" label="email" />
                <Input type="text" id="street" label="street" />
                <div className="control-row">
                    <Input type="text" id="city" label="City" />
                    <Input type="text" id="postal-code" label="postal-code" />
                </div>
                <p className="modal-actions">
                    <Button textOnly onClick={handleCloseCheckout}>Close</Button>
                    <Button >Submit Order</Button>
                </p>
            </form>
        </Modal >
    )
}