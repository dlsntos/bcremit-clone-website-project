import type { AccountInfo } from "./form";

export interface AuthUser {
  id: string;
  email: string;
};

export type AuthContextType = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (data: AccountInfo) => Promise<void>;
  logout: () => void;
};