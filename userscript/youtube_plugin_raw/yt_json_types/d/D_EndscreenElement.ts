type D_EndscreenElement={
	style: "VIDEO"|"CHANNEL"|"WEBSITE";
	image: D_Thumbnail;
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
	hovercardButton?: R_SubscribeButton;
	trackingParams: string;
	isSubscribe?: true;
	id: string;
	thumbnailOverlays?: G_ThumbnailOverlayItem[];
};
