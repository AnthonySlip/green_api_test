import { FC } from "react";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../shared/lib/hooks/useStore.ts";

interface Props {}

export const Layout: FC<Props> = observer(() => {
  const { authStore } = useStore();

  return (
    <div>
      <header className={"w-full flex bg-green-50 px-6 py-5"}>
        {authStore.isAuth && (
          <button
            className={"ml-auto button"}
            onClick={() => authStore.logout()}
          >
            Выйти
          </button>
        )}
      </header>
      <Outlet />
    </div>
  );
});
