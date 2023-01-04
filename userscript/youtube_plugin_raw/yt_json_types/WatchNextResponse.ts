type EngagementPanelSectionListData={
	content: {};
	targetId: "engagement-panel-ads";
	visibility: "ENGAGEMENT_PANEL_VISIBILITY_HIDDEN";
};

type EngagementPanelSectionListRenderer={
	engagementPanelSectionListRenderer: EngagementPanelSectionListData;
};
type EngagementPanel=EngagementPanelSectionListRenderer;
type WatchNextResponse={
	onResponseReceivedEndpoints: YtEndpoint[];
	responseContext: ResponseContext;
	trackingParams: string;
	engagementPanels: EngagementPanel[];
	currentVideoEndpoint: YtEndpoint;
	contents: TwoColumnWatchNextResults;
	playerOverlays: PlayerOverlayRenderer;
	topbar: DesktopTopbarRenderer;
	pageVisualEffects: CinematicContainerRenderer[];
	frameworkUpdates: FrameworkUpdates;
};
