import React, { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [showDownloadInfo, setShowDownloadInfo] = useState(true);
  const [view, setView] = useState(false);

  return (
    <NavContext.Provider
      value={{ showDownloadInfo, setShowDownloadInfo, view, setView }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useCont = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useCont must be used within a NavProvider");
  }
  return context;
};
