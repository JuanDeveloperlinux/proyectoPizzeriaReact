import { useContext } from "react";
import { CartContext, OrderContext } from "./context/contexts.jsx";
import { Link } from "@tanstack/react-router";
export default function Header() {
  const [cart] = useContext(CartContext);
  const [isOrderClicked, setIsOrderClicked] = useContext(OrderContext);
  function handleClick() {
    setIsOrderClicked(false);
  }
  return (
    <nav>
      <Link onClick={handleClick} to={"/"}>
        <h1 className={"logo"}>Padre Gino's Pizza</h1>
      </Link>
      <div className={"nav-cart"}>
        🛒<span className={"nav-cart-number"}>{cart.length}</span>
      </div>
    </nav>
  );
}
