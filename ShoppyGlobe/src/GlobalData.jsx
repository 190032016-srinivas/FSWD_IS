import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [user, setUser] = useState(null);

  const incrementCart = () => setCartItemCount((prevCount) => prevCount + 1);
  const decrementCart = () =>
    setCartItemCount((prevCount) => Math.max(0, prevCount - 1));

  return (
    <GlobalContext.Provider
      value={{
        cartItemCount,
        setCartItemCount,
        user,
        setUser,
        incrementCart,
        decrementCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
