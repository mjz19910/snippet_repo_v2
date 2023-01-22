type D$PlaylistAddToOption={
	playlistId: PlaylistId;
	title: R$SimpleText;
	privacy: "PRIVATE"|"UNLISTED"|"PUBLIC";
	containsSelectedVideos: "NONE";
	privacyIcon: T$Icon<"PRIVACY_PRIVATE">;
	addToPlaylistServiceEndpoint: T$Endpoint<E$PlaylistEdit,{}>;
	removeFromPlaylistServiceEndpoint: T$Endpoint<E$PlaylistEdit,{}>;
	trackingParams: string;
};