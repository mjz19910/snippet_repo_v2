type D__PlaylistHeader={
	playlistId: string;
	title: R$TextWithRuns;
	numVideosText: R$TextWithRuns;
	descriptionText: {};
	ownerText: R$TextWithRuns;
	viewCountText: R$TextWithRuns;
	shareData: D__YtShare;
	isEditable: boolean;
	privacy: string;
	ownerEndpoint: E$Browse;
	editableDetails: EditableDetails;
	trackingParams: string;
	serviceEndpoints: T$Endpoint<E$PlaylistEdit,{}>[];
	stats: R$TextWithRuns[];
	briefStats: R$TextWithRuns[];
	editorEndpoint: PlaylistEditorEndpoint;
	playlistHeaderBanner: R$HeroPlaylistThumbnail;
	moreActionsMenu: R$Menu;
	playButton: R$Button;
	shufflePlayButton: R$Button;
	onDescriptionTap: T$A_OpenPopup<{}>;
	cinematicContainer: R$CinematicContainer;
	byline: R$PlaylistByline[];
	descriptionTapText: R$TextWithRuns;
};