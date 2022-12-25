import {ParseUrlValue} from "./ParseUrlValue.js";

export type ParseUrlItems<T extends string> = T extends `${infer U}&${infer Z}` ?
	ParseUrlValue<U> & ParseUrlItems<Z> : T extends `${infer U}` ? ParseUrlValue<U> : never;
