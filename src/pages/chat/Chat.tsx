import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../shared/lib/hooks/useStore.ts";
import { Navigate } from "react-router-dom";
import { AUTH_URL } from "../../shared/consts/paths.ts";
import { ChatList } from "../../features/chat/ui/chatList/ChatList.tsx";
import { SendInput } from "../../features/chat/ui/sendInput/SendInput.tsx";

interface Props {}

export const Chat: FC<Props> = observer(() => {
  const { authStore, chatStore } = useStore();

  return !authStore.isAuth ? (
    <Navigate to={`/${AUTH_URL}`} replace />
  ) : (
    <div>
      <p>id chat</p>
      <ChatList messages={chatStore.messages} />
      <SendInput />
    </div>
  );
});
