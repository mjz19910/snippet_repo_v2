type D_PlayerOverlayAutoplay={
	title: R_SimpleText;
	videoTitle: R_SimpleText;
	byline: R_TextWithRuns;
	pauseText: R_SimpleText;
	background: D_Thumbnail;
	countDownSecs: 8;
	cancelButton: R_Button;
	nextButton: R_Button;
	trackingParams: string;
	closeButton: R_Button;
	thumbnailOverlays: G_ThumbnailOverlayItem[];
	preferImmediateRedirect: false;
	videoId: string;
	publishedTimeText: R_SimpleText;
	webShowNewAutonavCountdown: true;
	webShowBigThumbnailEndscreen: false;
	shortViewCountText: R_SimpleText;
	countDownSecsForFullscreen: 3;
};