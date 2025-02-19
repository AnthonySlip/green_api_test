import { FC } from "react";
import { useForm } from "react-hook-form";
import { useStore } from "../../shared/lib/hooks/useStore.ts";
import { Navigate, useNavigate } from "react-router-dom";
import { CHAT_URL } from "../../shared/consts/paths.ts";
import { observer } from "mobx-react-lite";

type Inputs = {
  idInstance: string;
  apiTokenInstance: string;
};

interface Props {}

export const AuthPage: FC<Props> = observer(() => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { authStore } = useStore();

  const navigate = useNavigate();

  const onAuth = (data: Inputs) => {
    authStore.auth(data);
    reset();
    navigate(`/${CHAT_URL}`);
  };

  return authStore.isAuth ? (
    <Navigate to={`/${CHAT_URL}`} replace />
  ) : (
    <div
      className={
        "w-fit p-6 m-auto mt-25 border rounded-md border-green-200 bg-amber-50"
      }
    >
      <p>Введите учётные данные GREEN-API</p>
      <form
        onSubmit={handleSubmit(onAuth)}
        className={"flex py-8 flex-col gap-3"}
      >
        <input
          {...register("idInstance", { required: "Обязательное поле" })}
          placeholder={"idInstance"}
          className={"w-fit border border-green-900"}
          type="text"
        />
        {errors.idInstance && (
          <p className={"text-red-700"}>{errors.idInstance.message}</p>
        )}
        <input
          {...register("apiTokenInstance", { required: "Обязательное поле" })}
          placeholder={"apiTokenInstance"}
          className={"w-fit border border-green-900"}
          type="text"
        />
        {errors.apiTokenInstance && (
          <p className={"text-red-700"}>{errors.apiTokenInstance.message}</p>
        )}
        <button type={"submit"} className={"button"}>
          Авторизоваться
        </button>
      </form>
    </div>
  );
});
