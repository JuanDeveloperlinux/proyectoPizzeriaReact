import { usePizzaOfTheDay } from "./hooks/usePizzaOfTheDay";

const intl = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});

export const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">
            From:{intl.format(pizzaOfTheDay.sizes.S)}
          </p>
        </div>
        <img
          className={"pizza-of-the-day-image"}
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
        />
      </div>
    </div>
  );
};
