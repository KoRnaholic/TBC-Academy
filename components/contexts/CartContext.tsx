// "use client";
// import {
//   createContext,
//   startTransition,
//   useContext,
//   useEffect,
//   useOptimistic,
//   useReducer,
//   useState,
// } from "react";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
// import { Action, InitialState, Product, State } from "../../types/types";
// import { decrementQuantity, incrementQuantity } from "../../app/actions";

// const initialState = {
//   quantity:
// };

// const CartContext = createContext(initialState);

// function CartProvider({ children }: { children: React.ReactNode }) {
//   const [product, setProduct] = useState();

//   const [isIncrement, setIsIncrement] = useState("");
//   const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
//     product?.quantity,
//     (state) => {
//       if (isIncrement === "inc") {
//         return state + 1;
//       } else if (isIncrement === "dec") {
//         return state - 1;
//       }
//     }
//   );

//   function incrementOptimistic(product) {
//     setProduct(product);
//     setIsIncrement("inc");
//     startTransition(async () => {
//       setOptimisticQuantity(product.product_id);
//       await incrementQuantity(product.product_id);
//     });
//   }
//   function decrementOptimistic(product) {
//     setProduct(product);
//     setIsIncrement("dec");
//     startTransition(async () => {
//       setOptimisticQuantity(product.product_id);
//       await decrementQuantity(product.product_id);
//     });
//   }
//   return (
//     <CartContext.Provider
//       value={{
//         quantity: optimisticQuantity,
//         incrementOptimistic,
//         decrementOptimistic,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// function useCart() {
//   const context = useContext(CartContext);
//   if (context === undefined) throw new Error("Error");

//   return context;
// }

// export { CartProvider, useCart };
