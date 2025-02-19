import { FC } from "react";
import { useForm } from "react-hook-form";
import { useMessage } from "../../../message/lib/hooks/useMessage.ts";

type Inputs = {
  message: string;
};

interface Props {}

export const SendInput: FC<Props> = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<Inputs>();

  const { sendAsync } = useMessage();

  const handleSend = async (data: Inputs) => {
    if (!data.message) {
      return;
    }

    await sendAsync.mutateAsync({ message: data.message });
  };

  return (
    <form onSubmit={handleSubmit(handleSend)}>
      <input {...register("message")} type="text" />
      <button type={"submit"} disabled={!isDirty}>
        Отправить
      </button>
    </form>
  );
};
