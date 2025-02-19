import { makeAutoObservable } from "mobx";
import {
  IMessage,
  IMessageRecord,
  ISendMessageDto,
} from "./types/chat.interface.ts";

export class ChatStore {
  private _chatId: string = "79121429044";
  private _messages: IMessage[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  get chatId() {
    return this._chatId;
  }

  get messages() {
    return this._messages;
  }

  public sendMessage(dto: ISendMessageDto, record: IMessageRecord) {
    this._messages.unshift({
      idMessage: record.idMessage,
      text: dto.message,
    });
  }
}
