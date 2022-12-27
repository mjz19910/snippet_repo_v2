import {KVStore} from "./KVStore";

export type UnwrapKvStore<T extends KVStore[]>={
	[U in keyof T]: {
		[V in T[U]['key']]: T[U]['value'];
	};
};
