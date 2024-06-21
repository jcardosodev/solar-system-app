import React, { createContext, useState, useContext, ReactNode } from 'react';

type TabBarVisibilityContextType = {
  isTabBarVisible: boolean;
  setTabBarVisible: (visible: boolean) => void;
};

const TabBarVisibilityContext = createContext<TabBarVisibilityContextType>({
  isTabBarVisible: true,
  setTabBarVisible: () => {},
});

interface TabBarVisibilityProviderProps {
  children: ReactNode;
}

export const TabBarVisibilityProvider: React.FC<TabBarVisibilityProviderProps> = ({ children }) => {
  const [isTabBarVisible, setTabBarVisible] = useState(true);

  return (
    <TabBarVisibilityContext.Provider value={{ isTabBarVisible, setTabBarVisible }}>
      {children}
    </TabBarVisibilityContext.Provider>
  );
};

export const useTabBarVisibility = () => useContext(TabBarVisibilityContext);
