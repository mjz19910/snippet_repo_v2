type WatchResponsePlayer={
	responseContext: ResponseContext;
	playabilityStatus: PlayabilityStatus;
	streamingData: {};
	playerAds: PlayerLegacyDesktopWatchAdsRenderer[];
	playbackTracking: PlaybackTracking;
	captions: CaptionsRenderer;
	videoDetails: {};
	playerConfig: {};
	storyboards: {};
	microformat: {};
	cards: {};
	trackingParams: string;
	attestation: PlayerAttestationRenderer;
	videoQualityPromoSupportedRenderers: {};
	adPlacements?: {}[];
	frameworkUpdates: FrameworkUpdates;
	endscreen?: EndscreenRenderer;
	paidContentOverlay?: PaidContentOverlay;
	annotations: PlayerAnnotationsExpandedRenderer[];
};
