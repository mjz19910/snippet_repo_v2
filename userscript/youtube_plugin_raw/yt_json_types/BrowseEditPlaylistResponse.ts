type BrowseEditPlaylistResponse={
	responseContext: ResponseContext;
	status: "STATUS_SUCCEEDED";
	actions: (RefreshPlaylistCommand|OpenPopupAction)[];
	playlistEditResults: {}[];
	trackingParams: string;
};