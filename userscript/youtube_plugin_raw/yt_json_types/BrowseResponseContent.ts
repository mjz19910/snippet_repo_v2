type SectionListContinuation={
	sectionListContinuation: SectionListData;
};

type BrowseResponse={
	responseContext: ResponseContext;
	contents?: BrowseContents;
	continuationContents?: SectionListContinuation;
	header?: BrowseHeader;
	metadata?: ChannelMetadataRenderer;
	trackingParams: string;
	topbar?: DesktopTopbarRenderer;
	microformat?: MicroformatDataRenderer;
	frameworkUpdates?: EntityBatchUpdate;
	// ?
	maxAgeStoreSeconds?: number;
	background?: MusicThumbnailRenderer;
	// ?
	onResponseReceivedActions?: ResponseReceivedAction[];
	sidebar?: SettingsSidebarRenderer;
	observedStateTags?: StateTag[];
	cacheMetadata?: CacheMetadata;
};