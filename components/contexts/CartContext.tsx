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
// import { getCartQuantity } from "../../app/actions";

// const initialState = {
//   cartQuantity: 0,
// };

// const CartContext = createContext(initialState);

// function CartProvider({ children }: { children: React.ReactNode }) {
//   const [cartQuantity, setCartQuantity] = useState();

//   const [optimisticQuantity, addOptimisticQuantity] = useOptimistic(
//     cartQuantity,
//     (state) => (state = state + 1)
//   );

//   useEffect(() => {
//     const getQuantity = async () => {
//       const quantity = await getCartQuantity();
//       setCartQuantity(quantity);
//     };
//     getQuantity();
//   }, [cartQuantity]);

//   console.log(cartQuantity);
//   return (
//     <CartContext.Provider
//       value={{
//         cartQuantity: optimisticQuantity,
//         addOptimisticQuantity,
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
