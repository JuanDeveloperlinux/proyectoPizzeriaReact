import { createContext } from "react";

export const CartContext = createContext([[], function () {}]);

export const OrderContext = createContext([false, function () {}]);
