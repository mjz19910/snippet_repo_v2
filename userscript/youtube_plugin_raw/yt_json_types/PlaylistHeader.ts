type PlaylistBylineRenderer={
	playlistBylineRenderer: {
		text: TextWithRuns;
	};
};

type YtShareData={
	canShare: false;
};

type EditableDetails={
	canDelete: false;
};

type PlaylistEditorArgs={
	playlistId: string;
};

type PlaylistEditorEndpoint={
	clickTrackingParams: string;
	commandMetadata: CommandMetadata;
	playlistEditorEndpoint: PlaylistEditorArgs;
};
type HeroPlaylistThumbnail={
	thumbnail: Thumbnail;
	maxRatio: 0.5625;
	trackingParams: string;
	onTap: E$WatchEndpoint;
	thumbnailOverlays: ThumbnailOverlayHoverTextRenderer;
};

type HeroPlaylistThumbnailRenderer={
	heroPlaylistThumbnailRenderer: HeroPlaylistThumbnail;
};

type PlaylistHeader={
	playlistId: string;
	title: TextWithRuns;
	numVideosText: TextWithRuns;
	descriptionText: {};
	ownerText: TextWithRuns;
	viewCountText: TextWithRuns;
	shareData: YtShareData;
	isEditable: boolean;
	privacy: string;
	ownerEndpoint: E$BrowseEndpoint;
	editableDetails: EditableDetails;
	trackingParams: string;
	serviceEndpoints: EndpointTemplate<E$PlaylistEditEndpoint>[];
	stats: TextWithRuns[];
	briefStats: TextWithRuns[];
	editorEndpoint: PlaylistEditorEndpoint;
	playlistHeaderBanner: HeroPlaylistThumbnailRenderer;
	moreActionsMenu: MenuRenderer;
	playButton: R$Button;
	shufflePlayButton: R$Button;
	onDescriptionTap: OpenPopupAction;
	cinematicContainer: CinematicContainerRenderer;
	byline: PlaylistBylineRenderer[];
	descriptionTapText: TextWithRuns;
};
