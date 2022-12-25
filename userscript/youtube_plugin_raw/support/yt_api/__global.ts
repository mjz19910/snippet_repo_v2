import {MenuRendererH} from "./MenuRendererH";
import {MenuServiceItem} from "./MenuServiceItem";
import {OpenPopupActionH} from "./OpenPopupActionH";
import {RendererContentItem} from "./RendererContentItem";
import {WatchEndpoint} from "./WatchEndpoint";

type SectionItem=RichItemRendererHolder|RichSectionRendererHolder;

export type ReloadContinuationItemsCommand={
	slot: "RELOAD_CONTINUATION_SLOT_BODY";
	targetId: "browse-feedFEwhat_to_watch";
	continuationItems: SectionItem[];
};

type BrowseFeedItem={};
export type BrowseFeedAction={
	targetId: "browse-feedFEwhat_to_watch";
	continuationItems: BrowseFeedItem[];
};


type CommentsSectionItem={};
export type CommentsSectionContinuationAction={
	targetId: "comments-section";
	continuationItems: CommentsSectionItem[];
};
// WatchNextContinuationAction
type WatchNextItem={
	compactVideoRenderer: CompactVideoRenderer;
}|{
	continuationItemRenderer: ContinuationItemRenderer;
};
export interface WatchNextContinuationAction {
	targetId: "watch-next-feed";
	continuationItems: WatchNextItem[];
}


export type ContinuationItem=RendererContentItem;

type AdLayoutLoggingData={
	"serializedAdServingDataEntry": string;
};

type AdLayoutMetadata={
	"layoutId": string;
	"layoutType": "LAYOUT_TYPE_DISPLAY_TOP_LANDSCAPE_IMAGE";
	"adLayoutLoggingData": AdLayoutLoggingData;
};

type UrlWrappedValue={
	"privateDoNotAccessOrElseTrustedResourceUrlWrappedValue": string;
};

type AboutThisAdRenderer={
	"url": UrlWrappedValue;
	trackingParams: string;
};

type DialogPopup={
	aboutThisAdRenderer: AboutThisAdRenderer;
};

export type DialogPopupTag={
	"popup": DialogPopup;
	"popupType": "DIALOG";
};

type ImpressionEndpoint={
	clickTrackingParams: string;
	"loggingUrls": [
		{
			"baseUrl": "https://www.youtube.com/pagead/adview?ai=CR9DJiI6lY62vDMm7n88Pnre6kAngxfL9bfCOlrycEWQQASAAYP2Q9oDMA4IBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHLt6f4A6gDBMgDCqoEyAFP0EC2FSEYx70zuAUppUfEkYi_mOxY9ayL2TsEqmuwqQ2uR52X5F8mREDx148616YrlzJGcdfwasaotiQufJZQh_1P-F5EUxNcTrvVkGAoIHM-E6HcARQOzmMpiHURkEuWhENDfN2plBxHA5lui-nCj1tpA07TYASPOdBjxm-rT6PJyNg5mzjomgxxcY4JpG3rnZbC1TQ_an4StPQ5YOx-FCxGyY58dQA2TCk1vQwtBzqiGbOgOwWxy0tPKdPvQ51LcGX2i_nxJ8AEyNr865sEiAWjkqTnR5IFCQgTaAF47fX5BqAGboAHncjYB4gHAZAHAqgHgqqxAqgHhAioB6jSG6gHtgeoB-DPG6gH6dQbqAeMzRuoB7HcG6gHpJqxAqgHkZ-xAqgHsJuxAqgH36GxAqgHpqqxAqgHgcYbqAerxRuoB-PZG6gHt6mxAqgH6auxApIIC0FBQUFBQUFBQUFB0ggYCIDAgEAQAhgAMgSBgoAOOgeAgICAgIEEyAkAugs-CAIQBRgWIAgoATADQAFIAFABWCVgAGgAcAGIAQCYAQGiARIKAggBKAH4AQGQAgKoAgXAAgLYAQGAAgGIAgW4E____________wGwFALAFYGAgECKFwoIAxgBKAEwATgBoBcBqReJBEg1yjlletIXDhIK7E7vTqtctFyTaRhu&sigh=f6Ah-ilTPVs&cid=CAESD-D2saJYt_ikQ_sicNcKDQ";
		}
	];
	"pingingEndpoint": {
		"hack": true;
	};
};

type UrlEndpoint={
	url: string;
	target: "TARGET_NEW_WINDOW";
};

type ClickCommand={
	clickTrackingParams: string;
	"commandMetadata": CommandMetadata;
	"urlEndpoint": UrlEndpoint;
};

type RenderingContent={
	"displayAdRenderer": {
		trackingParams: string;
		"layout": "DISPLAY_AD_LAYOUT_TOP_LANDSCAPE_IMAGE";
		"titleText": {
			"simpleText": "Create Lasting Wealth";
		};
		"image": {
			thumbnail: ThumbnailHolder;
			trackingParams: string;
		};
		// spell:ignore Linqto
		"bodyText": SimpleText;
		"secondaryText": SimpleText;
		"badge": {
			"metadataBadgeRenderer": MetadataBadgeRenderer;
		};
		"menu": {
			"menuRenderer": {
				"items": [
					{
						"menuNavigationItemRenderer": {
							"text": {
								"runs": [
									{
										"text": "My Ad Centre";
									}
								];
							};
							"icon": {
								"iconType": "INFO";
							};
							navigationEndpoint: NavigationEndpoint;
							trackingParams: string;
						};
					}
				];
				trackingParams: string;
				"accessibility": {
					"accessibilityData": {
						"label": "Action menu";
					};
				};
			};
		};
		"ctaButton": {
			"buttonRenderer": {
				"style": "STYLE_PRIMARY";
				"text": SimpleText;
				"icon": Icon;
				trackingParams: string;
				"iconPosition": "BUTTON_ICON_POSITION_TYPE_RIGHT_OF_TEXT";
			};
		};
		impressionEndpoints: ImpressionEndpoint[];
		"clickCommand": ClickCommand;
		"mediaHoverOverlay": {
			"buttonRenderer": {
				"style": "STYLE_LIGHT_TEXT";
				"text": {
					"simpleText": "Visit site";
				};
				"icon": {
					"iconType": "EXTERNAL_LINK";
				};
				trackingParams: string;
				"iconPosition": "BUTTON_ICON_POSITION_TYPE_RIGHT_OF_TEXT";
			};
		};
		"mediaBadge": {
			"metadataBadgeRenderer": {
				"icon": {
					"iconType": "EXTERNAL_LINK";
				};
				"style": "BADGE_STYLE_TYPE_BLACK";
				trackingParams: string;
			};
		};
	};
};

type InFeedAdLayoutRenderer={
	"adLayoutMetadata": AdLayoutMetadata,
	"renderingContent": RenderingContent;
};

type AdSlotMetadata={
	"slotId": `${number}:${number}:${number}:${number}`;
	"slotType": "SLOT_TYPE_IN_FEED";
	"slotPhysicalPosition": number;
};

type AdSlotRenderer={
	adSlotMetadata: AdSlotMetadata;
	fulfillmentContent: {
		fulfilledLayout: {
			inFeedAdLayoutRenderer: InFeedAdLayoutRenderer;
		};
	};
	enablePacfLoggingWeb: boolean;
};
type VideoRenderer={};
type RadioRenderer={};
export type AdSlotRendererHolder={
	adSlotRenderer: AdSlotRenderer;
};
export type VideoRendererHolder={
	videoRenderer: VideoRenderer;
};

export type RadioRendererHolder={
	radioRenderer: RadioRenderer;
};


export type RichItemRendererContentDef=AdSlotRendererHolder|VideoRendererHolder|RadioRendererHolder;
interface RichItemRenderer {
	content: RichItemRendererContentDef;
	trackingParams: string;
	rowIndex?: number;
	colIndex?: number;
}
type RichItemRendererHolder={
	richItemRenderer: RichItemRenderer;
};

export type RichSectionRendererHolder={
	richSectionRenderer: RichSectionRenderer;
};


interface RichShelfRenderer {
	icon: {
		iconType: string;
	}|null;
	title: {
		runs?: {
			text: string;
		}[];
	};
}
interface RichSectionRenderer {
	content: {
		richShelfRenderer: RichShelfRenderer;
	};
}

type CommentsHeaderRenderer={};
type CommentThreadRenderer={};
export type CommentsHeaderRendererHolder={
	commentsHeaderRenderer: CommentsHeaderRenderer;
};
export type CommentThreadRendererHolder={
	commentThreadRenderer: CommentThreadRenderer;
};
type CommandToken={
	token: string;
};
type ContinuationCommand=CommandToken&{
	request: string;
};
type WebCommandMetadata={
	sendPost?: boolean;
	apiUrl?: string;
	rootVe?: number;
	url?: string;
	webPageType?: string;
};
export type CommandMetadata={
	webCommandMetadata: WebCommandMetadata;
};
type ContinuationEndpoint={
	clickTrackingParams: string;
	commandMetadata: CommandMetadata;
	continuationCommand: ContinuationCommand;
};
type GhostGridRenderer={
	rows: number;
};
type GhostCards={
	ghostGridRenderer: GhostGridRenderer;
};
type ContinuationItemRenderer={
	trigger: string;
	continuationEndpoint: ContinuationEndpoint;
	button?: {
		"buttonRenderer": {
			"style": "STYLE_SUGGESTIVE",
			"size": "SIZE_DEFAULT",
			"isDisabled": false,
			"text": TextRuns;
			trackingParams: string;
			"command": {
				"clickTrackingParams": string;
				"commandMetadata": CommandMetadata;
				continuationCommand?: ContinuationCommand;
			},
		};
	};
	ghostCards?: GhostCards;
};
export type ContinuationItemRendererHolder={
	continuationItemRenderer: ContinuationItemRenderer;
};
export type MenuRenderer={
	accessibility: Accessibility;
	items: MenuServiceItem[];
	targetId?: string;
	trackingParams: string;
};
export type Icon={
	iconType: string;
};
type CreatePlaylistServiceEndpoint={
	params: string;
	videoIds: string[];
};
type OnCreateListCommand={
	clickTrackingParams: string;
	commandMetadata: CommandMetadata;
	createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint;
};
type AddToPlaylistCommand={
	listType: string;
	onCreateListCommand: OnCreateListCommand;
	openListPanel: boolean;
	openMiniplayer: boolean;
	videoId: string;
	videoIds: string[];
};
type NotificationActionRenderer={
	responseText: SimpleText;
	trackingParams: string;
};
type ToastPopup={
	notificationActionRenderer: NotificationActionRenderer;
};
type ToastPopupTag={
	popup: ToastPopup;
	popupType: "TOAST";
};
export type OpenPopupAction=ToastPopupTag|DialogPopupTag;
type OpenPopupActionHolder={
	clickTrackingParams: string;
	openPopupAction: OpenPopupAction;
};
type AddToPlaylistCommandHolder={
	clickTrackingParams: string;
	addToPlaylistCommand: AddToPlaylistCommand;
};
type ServiceEndpointAction=AddToPlaylistCommandHolder|OpenPopupActionHolder;
type SignalServiceEndpoint={
	signal: "CLIENT_SIGNAL";
	actions: ServiceEndpointAction[];
};
type ServiceEndpointGeneral={
	clickTrackingParams: string;
	commandMetadata: CommandMetadata;
};
export type TrackedServiceEndpointGeneral={
	clickTrackingParams: string;
	commandMetadata: CommandMetadata;
	trackingParams: string;
};

export interface SignalServiceEndpoints extends ServiceEndpointGeneral {
	signalServiceEndpoint: SignalServiceEndpoint;
};
export interface PlaylistEditEndpointH {
	playlistEditEndpoint: {};
};

export interface AddToPlaylistServiceEndpointH {
	addToPlaylistServiceEndpoint: {};
};

export interface FeedbackEndpointH {
	feedbackEndpoint: {};
};

export interface GetReportFormEndpointH {
	getReportFormEndpoint: {};
};

type TrackedCommandMetadataH={
	clickTrackingParams: string;
	commandMetadata: CommandMetadata;
};
type WatchEndpointH={
	watchEndpoint: WatchEndpoint;
};

type BrowseEndpointH={
	browseEndpoint: BrowseEndpoint;
};

type NavigationEndpoint=TrackedCommandMetadataH|OpenPopupActionH|WatchEndpointH|BrowseEndpointH;
type BrowseEndpoint={
	browseId: string;
	canonicalBaseUrl: string;
};
type TextRun={
	text: string;
	navigationEndpoint?: NavigationEndpoint;
};
export type TextRuns={
	runs: TextRun[];
};
type AccessibilityData={
	label: string;
};
type Accessibility={
	accessibilityData: AccessibilityData;
};
type MetadataBadgeRenderer={
	icon?: Icon;
	label?: string;
	style: string;
	tooltip?: string;
	trackingParams: string;
	accessibilityData?: AccessibilityData;
};
type MetadataBadgeRenderers={
	metadataBadgeRenderer: MetadataBadgeRenderer;
};
type ThumbnailsHolder={};
type SimpleText={
	accessibility?: Accessibility;
	simpleText: string;
};
type Thumbnail={
	url: string;
	width: number;
	height: number;
};
interface ThumbnailHolder {
	thumbnails: Thumbnail[];
};
type ACTION_ADD_VIDEO={
	addedVideoId: string;
	action: "ACTION_ADD_VIDEO";
};
type ACTION_REMOVE_VIDEO_BY_VIDEO_ID={
	action: "ACTION_REMOVE_VIDEO_BY_VIDEO_ID";
	removedVideoId: string;
};
type _ACTIONS=ACTION_ADD_VIDEO|ACTION_REMOVE_VIDEO_BY_VIDEO_ID;

type PlaylistEditEndpoint={
	playlistId: string;
	actions: _ACTIONS[];
};

type ThumbnailOverlayToggleButtonRenderer={
	isToggled?: boolean;
	untoggledIcon: Icon;
	toggledIcon: Icon;
	untoggledTooltip: string;
	toggledTooltip: string;
	untoggledServiceEndpoint: {
		clickTrackingParams: string;
		commandMetadata: CommandMetadata;
		playlistEditEndpoint?: PlaylistEditEndpoint;
		signalServiceEndpoint?: SignalServiceEndpoint;
	};
	toggledServiceEndpoint?: {
		clickTrackingParams: string;
		commandMetadata: CommandMetadata;
		playlistEditEndpoint: PlaylistEditEndpoint;
	};
	untoggledAccessibility: Accessibility;
	toggledAccessibility: Accessibility;
	trackingParams: string;
};

type ThumbnailOverlayTimeStatusRenderer={
	text: SimpleText;
	style: "DEFAULT";
};

type ThumbnailOverlayResumePlaybackRenderer={
	percentDurationWatched: number;
};

type ThumbnailOverlayNowPlayingRenderer={
	text: TextRuns;
};

type ThumbnailOverlay={
	thumbnailOverlayResumePlaybackRenderer: ThumbnailOverlayResumePlaybackRenderer;
}|{
	thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer;
}|{
	thumbnailOverlayToggleButtonRenderer: ThumbnailOverlayToggleButtonRenderer;
}|{
	thumbnailOverlayNowPlayingRenderer: ThumbnailOverlayNowPlayingRenderer;
};
interface MovingThumbnailDetails extends ThumbnailHolder {
	logAsMovingThumbnail: boolean;
};
type MovingThumbnailRenderer={
	movingThumbnailDetails?: MovingThumbnailDetails;
	enableHoveredLogging: true,
	enableOverlay: true;
};
export type RichThumbnail={
	movingThumbnailRenderer: MovingThumbnailRenderer;
};
type CompactVideoRenderer={
	accessibility: Accessibility;
	badges?: MetadataBadgeRenderers[];
	channelThumbnail: ThumbnailsHolder;
	lengthText: SimpleText;
	longBylineText: TextRuns;
	menu: MenuRendererH;
	navigationEndpoint: NavigationEndpoint;
	publishedTimeText: SimpleText;
	richThumbnail?: RichThumbnail;
	shortBylineText: TextRuns;
	shortViewCountText: SimpleText;
	thumbnail: ThumbnailHolder;
	thumbnailOverlays: ThumbnailOverlay[];
	title: SimpleText;
	ownerBadges?: MetadataBadgeRenderers[];
	trackingParams: string;
	videoId: string;
	viewCountText: SimpleText;
};
export type CompactVideoRendererHolder={
	compactVideoRenderer: CompactVideoRenderer;
};

type CompactPlaylistRenderer={};
export type CompactPlaylistRendererHolder={
	compactPlaylistRenderer: CompactPlaylistRenderer;
};

export interface RichGridRenderer {
	masthead: {
		[str: string]: {}|undefined;
		videoMastheadAdV3Renderer?: {};
	};
	contents: RendererContentItem[];
}


export type ResState={
	active: boolean;
	resolver: () => void;
};

export {};
