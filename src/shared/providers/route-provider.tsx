import { createContext } from "react";

interface RouterSubscriptionProviderProps {
  children: React.ReactNode;
  value: (fn: () => void) => void;
}

type RouterListeningContextType = (fn: () => void) => void;

const routerListeningContext = createContext<RouterListeningContextType>(
  () => {}
);

export function RouterSubscriptionProvider({
  value,
  children,
}: RouterSubscriptionProviderProps) {
  return (
    <routerListeningContext.Provider value={value}>
      {children}
    </routerListeningContext.Provider>
  );
}
