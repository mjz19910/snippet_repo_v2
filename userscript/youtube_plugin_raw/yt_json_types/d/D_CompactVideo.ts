type D_CompactVideo={
	videoId: string;
	thumbnail: R_Thumbnail;
	title: R_TextRuns;
	longBylineText: R_TextRuns;
	publishedTimeText: R_TextRuns;
	viewCountText: R_TextRuns;
	lengthText: R_TextRuns;
	navigationEndpoint: E_Watch;
	shortBylineText: R_TextRuns;
	channelThumbnail: {};
	ownerBadges: RMD_Badge[];
	trackingParams: string;
	shortViewCountText: R_TextRuns;
	menu: R_Menu;
	thumbnailOverlays: G_ThumbnailOverlayItem[];
	accessibility: D_Accessibility;
	richThumbnail?: R_MovingThumbnail;
	badges?: RMD_Badge[];
};