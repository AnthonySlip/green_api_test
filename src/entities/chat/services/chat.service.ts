import {
  IMessageRecord,
  ISendMessageDto,
} from "../model/types/chat.interface.ts";
import axios from "axios";
import { API_URL } from "../../../shared/consts/paths.ts";
import { LocalStorageHelper } from "../../../shared/lib/storage/LocalStorage.helper.ts";

export const ChatService = {
  async sendMessage({ message }: ISendMessageDto): Promise<IMessageRecord> {
    const instances = LocalStorageHelper.getInstances();

    const chatId = "@c.us";

    return (
      await axios.post<IMessageRecord>(
        `${API_URL}/waInstance${instances?.idInstance}/sendMessage/${instances?.apiTokenInstance}`,
        { message, chatId },
      )
    ).data;
  },
};
