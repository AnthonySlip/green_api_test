import {
  IMessageRecord,
  ISendMessageDto,
} from "../../../../entities/chat/model/types/chat.interface.ts";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { ChatService } from "../../../../entities/chat";
import { useStore } from "../../../../shared/lib/hooks/useStore.ts";

interface IReturn {
  sendAsync: UseMutationResult<IMessageRecord, unknown, ISendMessageDto>;
}

export const useMessage = (): IReturn => {
  const { chatStore } = useStore();

  const sendAsync = useMutation<IMessageRecord, unknown, ISendMessageDto>({
    mutationKey: ["send message"],
    mutationFn: ChatService.sendMessage,
    onSuccess: (data, dto) => {
      chatStore.sendMessage(dto, data);
    },
  });

  return {
    sendAsync,
  };
};
