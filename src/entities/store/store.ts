import { makeAutoObservable } from "mobx";
import { AuthStore } from "../user/model/auth.store";
import { ChatStore } from "../chat/model/chat.store.ts";

export class Store {
  authStore: AuthStore;
  chatStore: ChatStore;

  constructor() {
    this.authStore = new AuthStore();
    this.chatStore = new ChatStore();
    makeAutoObservable(this);
  }

  public async init() {}
}
