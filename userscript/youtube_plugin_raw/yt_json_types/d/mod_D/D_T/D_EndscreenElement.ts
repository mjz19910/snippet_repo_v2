type D_EndscreenElement={
	style: "VIDEO"|"CHANNEL"|"WEBSITE"|"PLAYLIST"|"CREATOR_MERCHANDISE";
	image: D_Thumbnail;
	playlistLength?: G_Text;
	icon?: D_Thumbnail;
	left: number;
	width: number;
	top: number;
	aspectRatio: number;
	startMs: `${number}`;
	endMs: `${number}`;
	title: G_Text;
	metadata: G_Text;
	callToAction?: G_Text;
	dismiss?: G_Text;
	endpoint: D_EndscreenElement_EP;
	subscribersText?: G_Text;
	hovercardButton?: R_SubscribeButton;
	trackingParams: string;
	productPrice?: G_Text;
	additionalFeesText?: G_Text;
	isSubscribe?: boolean;
	id: string;
	thumbnailOverlays?: G_ThumbnailOverlayItem[];
};