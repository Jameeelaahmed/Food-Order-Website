import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./Store/CartContext";
import { UserProgressProvider } from "./Store/UserProgressContext";
function App() {
  return (
    <>
      <UserProgressProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressProvider>
    </>
  );
}

export default App;
