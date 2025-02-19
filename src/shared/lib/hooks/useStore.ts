import { useContext } from "react";
import { Store } from "../../../entities/store/store.ts";
import { Context } from "../../../app/App.tsx";

export const useStore = () => useContext<Store>(Context);
