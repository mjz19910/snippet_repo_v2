import {SplitIntoGroups} from "./s/SplitIntoGroups";
import {TMapValidHex} from "./TMapValidHex";

export type VerifyHex<T extends string>=T extends `0x${infer U}`? TMapValidHex<SplitIntoGroups<U,string>>['length'] extends 8? T:never:never;
