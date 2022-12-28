import {Split} from "../../../make/Split.js";
import {WatchEndpointConfig} from "./WatchEndpointConfig";

export type YtVideoIdStr<T>=T extends string? Split<T,"">['length'] extends 11? T:never:never;

export type WatchEndpointData={
	videoId: string;
};

export interface WatchEndpointDataCx extends WatchEndpointData {
	nofollow: boolean;
	params: string;
	startTimeSeconds: number;
	watchEndpointSupportedOnesieConfig: WatchEndpointConfig;
}
