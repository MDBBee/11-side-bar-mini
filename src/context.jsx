import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };
  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideBarOpen,
        closeModal,
        closeSideBar,
        openModal,
        openSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
