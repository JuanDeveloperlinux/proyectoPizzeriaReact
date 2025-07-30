import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useContext } from "react";
import { OrderContext } from "../context/contexts.jsx";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [, setIsOrderClicked] = useContext(OrderContext);

  function handleClick() {
    setIsOrderClicked(true);
  }

  return (
    <div className={"index"}>
      <div className="index-brand">
        <h1>"Padre Gino's"</h1>
        <p>"Pizza & Art at a location near you"</p>
      </div>
      <ul>
        <li>
          <Link onClick={handleClick} to={"/order"}>
            Order
          </Link>
        </li>
        <li>
          <Link to={"/past"}>Past Orders</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
