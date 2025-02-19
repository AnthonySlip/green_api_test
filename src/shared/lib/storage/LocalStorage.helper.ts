export enum StorageItems {
  idInstance = "idInstance",
  apiTokenInstance = "apiTokenInstance",
}

export const LocalStorageHelper = {
  setInstances(idInstance: string, apiTokenInstance: string) {
    localStorage.setItem(StorageItems.idInstance, idInstance);
    localStorage.setItem(StorageItems.apiTokenInstance, apiTokenInstance);
  },

  getInstances(): { idInstance: string; apiTokenInstance: string } | null {
    const idInstance = localStorage.getItem(StorageItems.idInstance);
    const apiTokenInstance = localStorage.getItem(
      StorageItems.apiTokenInstance,
    );

    return idInstance && apiTokenInstance
      ? { idInstance, apiTokenInstance }
      : null;
  },

  clear() {
    localStorage.removeItem(StorageItems.idInstance);
    localStorage.removeItem(StorageItems.apiTokenInstance);
  },
};
