// import React from "react";
// import ReactDOM from "react-dom/client";
// import Pizza from "./Pizza.jsx";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Padre Gino's"),
//     React.createElement(Pizza, {
//       name: "Margherita",
//       description: "Classic pizza with tomato sauce, mozzarella, and basil.",
//     }),

//     React.createElement(Pizza, {
//       name: "Pepperoni",
//       description: "Spicy pepperoni with mozzarella and tomato sauce.",
//     }),
//     React.createElement(Pizza, {
//       name: "Vegetarian",
//       description:
//         "A mix of seasonal vegetables with mozzarella and tomato sauce.",
//     }),
//     React.createElement(Pizza, {
//       name: "BBQ Chicken",
//       description: "Grilled chicken with BBQ sauce, red onions, and cilantro.",
//     }),
//   ]);
// };

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));

/*import OrderLazy from "./OrderLazy";
import Pizza from "./Pizza";
import { PizzaOfTheDay } from "./PizzaOfTheDay.jsx";
import ReactDom from "react-dom/client";
import { StrictMode, useState } from "react";
import Header from "./Header.jsx";
import { CartContext } from "./context/contexts.jsx";

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div className="app">
          <Header />
          <OrderLazy />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(<App />);*/

import ReactDom from "react-dom/client";
import { StrictMode, useState } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OrderContext } from "./context/contexts.jsx";

const router = createRouter({ routeTree });
const queryClient = new QueryClient();
const App = () => {
  const orderHook = useState(false);
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <OrderContext.Provider value={orderHook}>
          <RouterProvider router={router} />
        </OrderContext.Provider>
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(<App />);
