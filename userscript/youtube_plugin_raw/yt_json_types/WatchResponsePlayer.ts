interface WatchResponsePlayer {
	responseContext: ResponseContext;
	playabilityStatus: PlayabilityStatus;
	streamingData?: StreamingData;
	heartbeatParams?: HeartbeatParams;
	playerAds?: DesktopWatchAdsRenderer[];
	playbackTracking?: PlaybackTracking;
	captions?: CaptionsRenderer;
	videoDetails?: VideoDetails;
	playerConfig?: PlayerConfig;
	storyboards?: PlayerStoryboardSpecRenderer|PlayerLiveStoryboardSpecRenderer;
	microformat?: PlayerMicroformatRenderer;
	cards?: CardCollectionRenderer;
	trackingParams: string;
	attestation?: PlayerAttestationRenderer;
	videoQualityPromoSupportedRenderers?: VideoQualityPromoRenderer;
	adPlacements?: {}[];
	frameworkUpdates: FrameworkUpdates;
	endscreen?: EndscreenRenderer;
	paidContentOverlay?: PaidContentOverlay;
	annotations?: PlayerAnnotationsExpandedRenderer[];
};