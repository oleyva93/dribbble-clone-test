import createInternalCtx from "shared/lib/create-context";

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  roles: string[];
};

interface AppState {
  isAuth: boolean;
  user: User | null;
}

export const { Provider: AppProvider, useStore: useAppCtx } =
  createInternalCtx<AppState>((set) => ({
    isAuth: false,
    user: null,
    setUser: (user: User) => set((state) => ({ ...state, user })),
  }));
