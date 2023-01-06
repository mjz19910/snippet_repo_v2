import {Accessibility} from "./Accessibility.js";
import {MenuRenderer} from "./MenuRenderer.js";
import {NavigationEndpoint} from "./NavigationEndpoint";
import {ReelWatchEndpointPlugin} from "./ReelWatchEndpointPlugin";
import {TextT} from "./TextT.js";
import {YtVideoId} from "./YtVideoId";
export type ReelItemData={
	videoId: YtVideoId;
	headline: TextT;
	thumbnail: Thumbnail;
	viewCountText: TextT;
	navigationEndpoint: NavigationEndpoint<ReelWatchEndpointPlugin>;
	menu: MenuRenderer;
	trackingParams: string;
	accessibility:Accessibility;
	style: "REEL_ITEM_STYLE_AVATAR_CIRCLE";
	videoType: "REEL_VIDEO_TYPE_VIDEO";
	loggingDirectives: LoggingDirectives;
};