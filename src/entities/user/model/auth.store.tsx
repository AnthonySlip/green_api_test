import { makeAutoObservable } from "mobx";
import { LocalStorageHelper } from "../../../shared/lib/storage/LocalStorage.helper.ts";

type AuthData = {
  idInstance: string;
  apiTokenInstance: string;
};

export class AuthStore {
  private _idInstance: string | undefined;
  private _apiTokenInstance: string | undefined;
  public _isAuth = false;

  constructor() {
    makeAutoObservable(this);
    this._isAuth = !!this.getIdInstance() && !!this.getApiTokenInstance();
    this._idInstance = this.getIdInstance();
    this._apiTokenInstance = this.getApiTokenInstance();
  }

  public auth(data: AuthData) {
    this._idInstance = data.idInstance;
    this._apiTokenInstance = data.apiTokenInstance;
    this.setSessionStorage(data.idInstance, data.apiTokenInstance);
    this._isAuth = true;
  }

  public logout() {
    this._isAuth = false;
    this._idInstance = undefined;
    this._apiTokenInstance = undefined;
    LocalStorageHelper.clear();
  }

  get idInstance() {
    return this._idInstance;
  }

  get apiTokenInstance() {
    return this._apiTokenInstance;
  }

  get isAuth() {
    return this._isAuth;
  }

  private setSessionStorage(idInstance: string, apiTokenInstance: string) {
    LocalStorageHelper.setInstances(idInstance, apiTokenInstance);
  }

  private getIdInstance(): string | undefined {
    return LocalStorageHelper.getInstances()?.idInstance;
  }

  private getApiTokenInstance(): string | undefined {
    return LocalStorageHelper.getInstances()?.apiTokenInstance;
  }
}
