type D__Video=Video$VideoId;
type Video$VideoId={
	videoId: string;
	thumbnail: D__Thumbnail;
	title: R$TextWithRuns;
	descriptionSnippet: R$TextWithRuns;
	longBylineText: R$TextWithRuns;
	publishedTimeText: R$SimpleText;
	lengthText: R$SimpleText;
	viewCountText: R$SimpleText;
	navigationEndpoint: E$WatchEndpoint;
	ownerBadges: R$MetadataBadge[];
	ownerText: R$TextWithRuns;
	shortBylineText: R$TextWithRuns;
	trackingParams: string;
	showActionMenu: false;
	shortViewCountText: R$SimpleText;
	menu: R$Menu;
	channelThumbnailSupportedRenderers: R$ChannelThumbnailWithLink;
	thumbnailOverlays: G$ThumbnailOverlayItem[];
	richThumbnail: R$MovingThumbnail;
	inlinePlaybackEndpoint: E$WatchEndpoint;
	owner: D__Video$Owner;
};