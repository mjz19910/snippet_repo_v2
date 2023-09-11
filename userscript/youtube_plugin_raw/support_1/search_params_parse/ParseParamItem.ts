import {ParseParam} from "./ParseParam.js";

export type ParseParamItem<T extends string>=T extends `${infer U}&${infer Z}`? ParseParam<U>&ParseParamItem<Z>:T extends `${infer U}`? ParseParam<U>:never;
