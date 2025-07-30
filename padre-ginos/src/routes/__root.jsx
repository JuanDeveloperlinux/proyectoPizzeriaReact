import { useContext, useEffect, useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { PizzaOfTheDay } from "../PizzaOfTheDay.jsx";
import Header from "../Header.jsx";
import { CartContext, OrderContext } from "../context/contexts.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Pizza from "../Pizza.jsx";
export const Route = createRootRoute({
  component: () => {
    const [pizzaTypes, setPizzaTypes] = useState([]);
    const [isOrderClicked, setIsOrderClicked] = useContext(OrderContext);

    async function fetchPizzaTypes() {
      const pizzaRes = await fetch("/api/pizzas");
      const pizzaJson = await pizzaRes.json();
      setPizzaTypes(pizzaJson);
    }

    useEffect(() => {
      fetchPizzaTypes();
    }, []);

    const cartHook = useState([]);
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />

            {isOrderClicked ? (
              <div></div>
            ) : (
              <>
               {/* <h2> ALL OUR PIZZAS</h2>
                {pizzaTypes.map((pizza) => (
                  <Pizza
                    key={pizza.id}
                    name={pizza.name}
                    description={pizza.description}
                    image={pizza.image}
                  />*/}
                ))
              </>
            )}
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
