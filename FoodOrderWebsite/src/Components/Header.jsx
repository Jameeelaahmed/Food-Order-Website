import img from '../assets/logo.jpg'
import Button from './UI/Button';
export default function Header() {
    return (
        <div id="main-header">
            <div id="title">
                <img src={img} />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly >Cart (0)</Button>
            </nav>
        </div>
    );
}