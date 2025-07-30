import { render, renderHook, waitFor } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../hooks/usePizzaOfTheDay.jsx";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "calabrese",
  name: "test",
  category: "Supreme",
  description: "test pizza",
  image: "/public/pizzas/calabrese.webp",
  size: {
    S: 10,
    M: 15,
    L: 20,
  },
};

/*function getPizzaOfTheDay() {
  let pizza;

  function TestComponent() {
    pizza = usePizzaOfTheDay();
    return null;
  }

  render(<TestComponent />);
  return pizza;
}*/

test("gives null when first called", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  expect(result.current).toBeNull();
});

test("gives pizza of the day when call api", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  await waitFor(() => {
    expect(result.current).toEqual(testPizza);
  });
  expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
});
