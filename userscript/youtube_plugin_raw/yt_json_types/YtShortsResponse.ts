type ReelResponse={
	responseContext: ResponseContext;
	overlay: {};
	status: "REEL_ITEM_WATCH_STATUS_SUCCEEDED";
	trackingParams: string;
	desktopTopbar: DesktopTopbarRenderer;
};
type YtShortsResponse={
	page: "shorts";
	endpoint: ReelWatchEndpoint;
	response: ReelResponse;
	playerResponse: ReelPlayerResponse;
	reelWatchSequenceResponse: {};
};
type ReelPlayerResponse={};