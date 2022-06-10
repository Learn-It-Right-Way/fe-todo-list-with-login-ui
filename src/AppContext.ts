import { createContext } from "react";
import { AuthContextType } from "./models";

export const AuthContext = createContext<AuthContextType>(null!);
