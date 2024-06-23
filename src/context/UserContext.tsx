import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "../types/types";

interface UserContextType {
  usuarioLogado: User | null;
  setUsuarioLogado: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface ContextProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: ContextProps): JSX.Element => {
  const [usuarioLogado, setUsuarioLogado] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext deve estar dentro de UserProvider");
  }
  return context;
};