import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const openSideNav = () => {
    setIsSideNavOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
    document.body.classList.add("overflow-visible");
  };

  return (
    <AppContext.Provider
      value={{ isSideNavOpen, setIsSideNavOpen, openSideNav, closeSideNav }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
