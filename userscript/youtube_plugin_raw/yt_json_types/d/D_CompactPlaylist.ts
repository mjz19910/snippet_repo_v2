type D_CompactPlaylist={
	playlistId: `PL${string}`;
	thumbnail: R_Thumbnail;
	title: R_TextRuns;
	shortBylineText: R_TextRuns;
	videoCountText: R_TextRuns;
	navigationEndpoint: E_Watch;
	publishedTimeText?: R_TextRuns;
	videoCountShortText: R_TextRuns;
	trackingParams: string;
	sidebarThumbnails: R_Thumbnail[];
	thumbnailText: R_TextRuns;
	ownerBadges?: RMD_Badge[];
	menu: R_Menu;
	shareUrl: `https://www.youtube.com/watch?v=${string}&playnext=1&list=RDCMUC${string}`;
	thumbnailRenderer: R_PlaylistVideoThumbnail;
	longBylineText: R_TextRuns;
	thumbnailOverlays: G_ThumbnailOverlayItem[];
};