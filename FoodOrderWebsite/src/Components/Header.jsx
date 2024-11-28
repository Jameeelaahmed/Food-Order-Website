import img from '../assets/logo.jpg'
import Button from './UI/Button';
import { useContext } from 'react';
import CartContext from '../Store/CartContext';
import UserProgressContext from '../Store/UserProgressContext';
export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    function showCart() {
        userProgressCtx.showCart();
    }
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity
    }, 0);

    return (
        <div id="main-header">
            <div id="title">
                <img src={img} />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly onClick={showCart}>Cart ({totalCartItems})</Button>
            </nav>
        </div>
    );
}