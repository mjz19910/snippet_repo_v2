type BrowseMetadata=ChannelMetadataRenderer|PlaylistMetadataRenderer;

type BrowseResponse={
	responseContext: ResponseContext;
	contents?: BrowseContents;
	continuationContents?: SectionListContinuation;
	header?: BrowseHeader;
	alerts?: AlertWithButtonRenderer[];
	metadata?: BrowseMetadata;
	trackingParams: string;
	topbar?: DesktopTopbarRenderer;
	microformat?: MicroformatDataRenderer;
	frameworkUpdates?: EntityBatchUpdate;
	// ?
	maxAgeStoreSeconds?: number;
	background?: MusicThumbnailRenderer;
	// ?
	onResponseReceivedActions?: ResponseReceivedAction[];
	sidebar?: BrowseSidebar;
	observedStateTags?: B$StateTag[];
	cacheMetadata?: CacheMetadata;
};