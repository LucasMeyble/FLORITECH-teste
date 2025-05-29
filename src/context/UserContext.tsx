import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import { mockUser } from "@/services/mock/userMock";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "@/utils/localStorage";

type User = typeof mockUser | null;

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
  clearUser: () => void;
};

const USER_STORAGE_KEY = "user";

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User>(null);

  useEffect(() => {
    let storedUser = getLocalStorageItem<User>(USER_STORAGE_KEY);

    if (!storedUser) {
      setLocalStorageItem(USER_STORAGE_KEY, mockUser);
      storedUser = mockUser;
    }

    setUserState(storedUser);
  }, []);

  const setUser = (user: User) => {
    setUserState(user);
    if (user) {
      setLocalStorageItem(USER_STORAGE_KEY, user);
    } else {
      removeLocalStorageItem(USER_STORAGE_KEY);
    }
  };

  const clearUser = () => {
    setUserState(null);
    removeLocalStorageItem(USER_STORAGE_KEY);
  };

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
