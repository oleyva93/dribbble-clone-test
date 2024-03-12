import {
  useRef,
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  ReactNode,
} from "react";

type StoreData<T> = {
  get: () => T;
  set: (value: Partial<T>) => void;
  subscribe: (callback: () => void) => () => void;
};

type StoreContextType<T> = StoreData<T> | null;

type ValueType<T> = Partial<T> | ((state: T) => T);

type DispatcherType<T> = (set: (value: ValueType<T>) => void) => T;

export default function createInternalCtx<T>(dispatcher: DispatcherType<T>) {
  function useStoreData(): StoreData<T> {
    const get = useCallback(() => store.current, []);

    const subscribers = useRef<Set<() => void>>(new Set());

    const set = useCallback((value: ValueType<T>) => {
      store.current = {
        ...store.current,
        ...(typeof value === "function" ? value(store.current) : value),
      };

      subscribers.current.forEach((callback) => callback());
    }, []);

    const store = useRef<T>(dispatcher(set));

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => subscribers.current.delete(callback);
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  }

  const StoreContext = createContext<StoreContextType<T>>(null);

  function Provider({ children }: { children: ReactNode }) {
    return (
      <StoreContext.Provider value={useStoreData()}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useStore(
    selector?: (state: T) => any
  ): [T, (value: Partial<T>) => void] {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error("Store not found");
    }

    const handleSelector = useCallback(
      () => selector?.(store.get()) || store.get(),
      [selector, store]
    );

    const state = useSyncExternalStore(
      store.subscribe,
      handleSelector,
      handleSelector // for server side rendering
    );

    return [state, store.set];
  }

  return {
    Provider,
    useStore,
  };
}
