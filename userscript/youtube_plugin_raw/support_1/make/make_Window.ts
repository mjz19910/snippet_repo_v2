declare global {
	export interface Window {
		// Elements
		ytd_player?: HTMLElement;
		ytd_page_manager?: HTMLElement;
		ytd_watch_flexy?: HTMLElement;
		yt_playlist_manager?: HTMLElement;
		ytd_app?: HTMLElement;
		// website environment
		ytPageType?: string;
	}
}