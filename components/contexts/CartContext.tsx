"use client";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Action, InitialState, Product, State } from "../../types/types";

const initialState: InitialState = {
  quantity: 0,
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
};

interface Value {
  quantity: number;
  // other properties
}

function cartReducer(state: State[], action: Action) {
  console.log(state);
  switch (action.type) {
    case "INCREMENT": {
      const selectedProductIdx = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (selectedProductIdx === -1) {
        return [
          ...state,
          { id: action.payload.id, product: action.payload, quantity: 1 },
        ];
      }
      const clone = [...state];
      const selectedProduct = clone[selectedProductIdx];

      const updateSelectedProduct = {
        ...selectedProduct,
        quantity: selectedProduct.quantity + 1,
      };
      clone[selectedProductIdx] = updateSelectedProduct;
      return clone;
    }
    case "DECREMENT": {
      const selectedProductIdx = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (selectedProductIdx === -1) {
        return state; // Product not found, return current state
      }
      const clone = [...state];
      const selectedProduct = clone[selectedProductIdx];
      const updatedQuantity = selectedProduct.quantity - 1;
      if (updatedQuantity === 0) {
        // Remove product from cart if quantity becomes 0
        clone.splice(selectedProductIdx, 1);
      } else if (updatedQuantity > 0) {
        // Update quantity of the selected product
        const updateSelectedProduct = {
          ...selectedProduct,
          quantity: updatedQuantity,
        };
        clone[selectedProductIdx] = updateSelectedProduct;
      }
      return clone;
    }

    case "RESET":
      return [];
    default:
      return state;
  }
}

const CartContext = createContext(initialState);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[] | State[]>([]);
  const [value, setValue] = useLocalStorage("productCart", []);
  const [state, dispatch] = useReducer(cartReducer, value);
  const [quantity, setQuantity] = useState<number | undefined>();
  console.log(products);

  useEffect(() => {
    setValue(state);
    setProducts(state);

    const totalQuantity = value.reduce(
      (accumulator: number, currentValue: Value) => {
        return accumulator + currentValue.quantity;
      },
      0
    );

    setQuantity(totalQuantity);
  }, [state, setValue, value, products]);

  const addToCart = (product: Product) => {
    dispatch({ type: "INCREMENT", payload: product });
    setValue(state);
  };

  const removeFromCart = (product: Product) => {
    dispatch({ type: "DECREMENT", payload: product });
  };

  return (
    <CartContext.Provider
      value={{ quantity, products, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("Error");

  return context;
}

export { CartProvider, useCart };
