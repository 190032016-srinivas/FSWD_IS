import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("default message");

  return (
    <GlobalContext.Provider
      value={{
        snackbarMessage,
        setSnackbarMessage,
        snackbarOpen,
        setSnackbarOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
