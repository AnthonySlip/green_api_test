import { FC } from "react";
import { IMessage } from "../../../../entities/chat/model/types/chat.interface.ts";
import { Message } from "../../../message/ui/Message.tsx";

interface Props {
  messages: IMessage[];
}

export const ChatList: FC<Props> = ({ messages }) => {
  return (
    <div>
      <p>ChatList</p>
      <ul>
        {messages.map((message) => (
          <Message key={message.idMessage} text={message.text} />
        ))}
      </ul>
    </div>
  );
};
