import {SavedData} from "./youtube_plugin.user";

// YtdPageManagerElement
declare global {
	interface YtdPageManagerElementInterface extends HTMLElement {
		getCurrentPage(): YtCurrentPage;
	}
	interface YTDPlayerElement extends HTMLElement {
		active_nav: boolean;
		player_: {getVideoData(): {video_id: string; eventId: undefined; title: any; author: any;}; getPlayerState(): {};}|null;
		playerResolver_: {
			promise: Promise<void>;
		};
		init_nav: boolean;
		is_watch_page_active: boolean;
		pause(): void;
		play(): void;
	}
	interface YtCurrentPage extends HTMLElement {
		getPlayer(): YTDPlayerElement;
		__has_theater_handler_plugin: boolean|undefined;
	}
}

// ReloadContinuationItemsCommand
declare global {
	type SectionItem=RichItemRendererItem|RichSectionRendererItem;
	type ReloadContinuationItemsCommand={
		slot: "RELOAD_CONTINUATION_SLOT_BODY";
		targetId: "browse-feedFEwhat_to_watch";
		continuationItems: SectionItem[];
	};
}

// CommentsSectionContinuationAction
declare global {
	type CommentsSectionItem={};
	type CommentsSectionContinuationAction={
		targetId: "comments-section";
		continuationItems: CommentsSectionItem[];
	};
}
// WatchNextContinuationAction
declare global {
	type CompactVideoRenderer={};
	type WatchNextItem={
		compactVideoRenderer: CompactVideoRenderer;
	}|{
		continuationItemRenderer: ContinuationItemRenderer;
	};
	interface WatchNextContinuationAction {
		targetId: "watch-next-feed";
		continuationItems: WatchNextItem[];
	}
}

// saved_maps
declare global {
	interface InjectApi {
		saved_maps?: Map<string,Map<string,{}>>;
	}
}

// saved_objects
declare global {
	interface InjectApi {
		saved_data?: SavedData;
	}
}

// ContinuationItem
declare global {
	type ContinuationItem=RendererContentItem;
}

// RendererContentItem
declare global {
	interface RichGridRenderer {
		masthead: {
			[str: string]: {}|undefined;
			videoMastheadAdV3Renderer?: {};
		};
		contents: RendererContentItem[];
	}
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

	interface RichItemRenderer {
		content: {
			adSlotRenderer?: {};
		};
	}
	type RichItemRendererItem={
		richItemRenderer: RichItemRenderer;
	};
	type RichSectionRendererItem={
		richSectionRenderer: RichSectionRenderer;
	};
	type CommentsHeaderRenderer={};
	type CommentThreadRenderer={};
	type ContentItem0={
		commentsHeaderRenderer: CommentsHeaderRenderer;
	};
	type ContentItem1={
		commentThreadRenderer: CommentThreadRenderer;
	};
	interface TrackedEndpoint {
		clickTrackingParams: string;
	}
	interface CommandToken {
		token: string;
	}
	interface YtCommand extends CommandToken {
		request: string;
	}
	type WebCommandMetadata={
		sendPost: boolean;
		apiUrl: string;
	};
	type CommandMetadata={
		webCommandMetadata: WebCommandMetadata;
	};
	interface YtEndpoint extends TrackedEndpoint {
		commandMetadata: CommandMetadata;
		continuationCommand: YtCommand;
	}
	type ContinuationItemRenderer={
		trigger: string;
		continuationEndpoint: YtEndpoint;
	};
	type ContentItemContinuationItemRenderer={
		continuationItemRenderer: ContinuationItemRenderer;
	};
	type RendererContentItem=
		RichItemRendererItem|
		RichSectionRendererItem|
		ContentItem0|
		ContentItem1|
		ContentItemContinuationItemRenderer|
		never;
}

// ResState
declare global {
	type ResState={
		active: boolean;
		resolver: () => void;
	};
}

export {};

// Seen
declare global {
	interface InjectApi {
		Seen?: {};
	}
}

// port_state
declare global {
	interface InjectApi {
		port_state?: {};
	}
}

// plugin_overlay_element
declare global {
	interface InjectApi {
		plugin_overlay_element?: {};
	}
}

// HTMLMediaElementGainController
declare global {
	interface InjectApi {
		HTMLMediaElementGainController?: {};
		audio_gain_controller?: {};
	}
}

// created_blobs
declare global {
	interface Window {
		created_blobs: Map<string,Blob|MediaSource>;
		active_blob_set: Set<string>;
	}
}

// filter_on_initial_data
declare global {
	interface Window {
		ytPageType?: string;
	}
}

// log_current_video_data
declare global {
	interface Window {
		playlist_arr?: string[];
	}
}

// Elements
declare global {
	interface Window {
		ytd_player?: HTMLElement|null;
		ytd_page_manager?: HTMLElement|null;
		ytd_watch_flexy?: HTMLElement|null;
		yt_playlist_manager?: HTMLElement|null;
		ytd_app?: HTMLElement|null;
	}
}

// log_page_type_change
declare global {
	interface Window {
		page_type_changes?: string[],
	}
}

// dom_observer
declare global {
	interface InjectApi {
		dom_observer?: {};
	}
}


// YTFilterHandlers
declare global {
	interface InjectApi {
		yt_handlers?: {};
	}
}

// URL.createObjectURL Proxy
declare global {
	interface InjectApi {
		blob_create_args_arr?: {};
	}
}

// YTIterateAllBase.update_state
declare global {
	interface InjectApi {
		yt_state_map?: {};
	}
}

// export
declare global {
	interface InjectApi {
		PropertyHandler?: {};
	}
}
