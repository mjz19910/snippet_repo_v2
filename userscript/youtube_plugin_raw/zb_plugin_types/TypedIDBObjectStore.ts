interface TypedIDBObjectStore<T extends {}> extends IDBObjectStore {put(value: T): IDBRequest<IDBValidKey>;}