import { createContext, FC } from "react";
import { Store } from "../entities/store/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const store = new Store();

export const Context = createContext<Store>(store);

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider value={store}>
        <RouterProvider router={router} />
      </Context.Provider>
    </QueryClientProvider>
  );
};
