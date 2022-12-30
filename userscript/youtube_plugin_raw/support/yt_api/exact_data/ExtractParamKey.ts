import {KVStore} from "../_/k/KVStore.js";
import {GetKeyOf} from "./GetKeyOf";
import {GetKv} from "./GetKv";

export type ExtractParamKey<T extends KVStore[],U extends string>=GetKeyOf<T> extends infer T? GetKv<T,U>:never;
