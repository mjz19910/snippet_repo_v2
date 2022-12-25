import {Accessibility} from "./Accessibility";
import {MenuRendererH} from "./MenuRendererH";
import {MetadataBadgeRenderers} from "./MetadataBadgeRenderers";
import {NavigationEndpoint} from "./NavigationEndpoint";
import {RichThumbnail} from "./RichThumbnail";
import {SimpleText} from "./SimpleText";
import {TextRuns} from "./TextRuns";
import {ThumbnailH} from "./ThumbnailHolder";
import {ThumbnailOverlay} from "./ThumbnailOverlay";
import {ThumbnailsH} from "./ThumbnailsHolder";

export type CompactVideoRenderer={
	accessibility: Accessibility;
	badges?: MetadataBadgeRenderers[];
	channelThumbnail: ThumbnailsH;
	lengthText: SimpleText;
	longBylineText: TextRuns;
	menu: MenuRendererH;
	navigationEndpoint: NavigationEndpoint;
	publishedTimeText: SimpleText;
	richThumbnail?: RichThumbnail;
	shortBylineText: TextRuns;
	shortViewCountText: SimpleText;
	thumbnail: ThumbnailH;
	thumbnailOverlays: ThumbnailOverlay[];
	title: SimpleText;
	ownerBadges?: MetadataBadgeRenderers[];
	trackingParams: string;
	videoId: string;
	viewCountText: SimpleText;
};
