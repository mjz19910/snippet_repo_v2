import {Split} from "../json/Split.js";


export type YtVideoIdStr<T>=T extends string? Split<T,"">["length"] extends 11? T:never:never;
