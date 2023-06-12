import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export const AppContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (newProduct) => {
    let exitingProduct = cart.find((item) => item.id === newProduct.id);
    if (exitingProduct) {
      const nonExisting = cart.filter((data) => data.id !== newProduct.id);
      setCart([
        ...nonExisting,
        { ...exitingProduct, quantity: exitingProduct.quantity + 1 },
      ]);
    } else {
      setCart([...cart, { ...newProduct, quantity: 1 }]);
    }
  };

  useEffect(() => {
    const totalCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    setCartCount(totalCount);
  }, [cart]);

  const removeProduct = (productID) => {
    const deleteItem = cart.filter((item) => item.id !== productID);
    setCart(deleteItem);
  };



  const globalStates = {
    cart,
    setCart,
    cartCount,
    setCartCount,

    //function
    addToCart,
    removeProduct,
  };

  return (
    <MainContext.Provider value={globalStates}>{children}</MainContext.Provider>
  );
};
