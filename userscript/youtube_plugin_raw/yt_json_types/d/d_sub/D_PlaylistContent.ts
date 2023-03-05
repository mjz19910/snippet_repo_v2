type D_PlaylistContent={
	title: "Watch Later";
	contents: R_PlaylistPanelVideo[];
	currentIndex: 0;
	playlistId: string;
	totalVideos: 1;
	ownerName: G_Text;
	isInfinite: false;
	shortBylineText: G_Text;
	longBylineText: G_Text;
	totalVideosText: G_Text;
	trackingParams: string;
	titleText: G_Text;
	isEditable: true;
	endpoint: E_VE5754;
	localCurrentIndex: 0;
	playlistButtons: R_Menu;
	badges: RMD_Badge[];
	videoCountText: G_Text;
	onReorderEndpoint: E_PlaylistEdit;
	isCourse: false;
	nextVideoLabel: G_Text;
}|{
	title: "Abyss Soul Lotus OSTs";
	contents: R_PlaylistPanelVideo[];
	currentIndex: number;
	playlistId: T_IdTemplate<"PL">;
	totalVideos: number;
	ownerName: G_Text;
	isInfinite: false;
	playlistShareUrl: S_YtUrlHttp_Watch;
	shortBylineText: G_Text;
	longBylineText: G_Text;
	totalVideosText: G_Text;
	playerInfoView: "DO_NOT_CHANGE";
	trackingParams: string;
	titleText: G_Text;
	endpoint: E_VE5754;
	menu: R_Menu;
	localCurrentIndex: number;
	playlistButtons: R_Menu;
	videoCountText: G_Text;
	isCourse: false;
	nextVideoLabel: G_Text;
}|{
	title: string;
	contents: R_PlaylistPanelVideo[];
	currentIndex: number;
	playlistId: T_IdTemplate<"PL">;
	totalVideos: number;
	ownerName: G_Text;
	isInfinite: false;
	playlistShareUrl: S_YtUrlHttp_Watch;
	shortBylineText: G_Text;
	longBylineText: G_Text;
	totalVideosText: G_Text;
	trackingParams: string;
	titleText: G_Text;
	endpoint: E_VE5754;
	menu: R_Menu;
	localCurrentIndex: number;
	playlistButtons: R_Menu;
	videoCountText: G_Text;
	isCourse: false;
	nextVideoLabel: G_Text;
}|({
	title: string;
	contents: R_PlaylistPanelVideo[];
	currentIndex: number;
	ownerName: G_Text;
	isInfinite: boolean;
	playlistShareUrl: `http://www.youtube.com/watch?v=${string}&list=${string}`;
	shortBylineText: G_Text;
	longBylineText: G_Text;
	playerInfoView: "DO_NOT_CHANGE";
	trackingParams: string;
	titleText: G_Text;
	isEditable: true;
	menu: R_Menu;
	localCurrentIndex: number;
	playlistButtons: R_Menu;
	isCourse: false;
	nextVideoLabel: G_Text;
}&D_PlaylistId)|{
	title: "Videos";
	contents: R_PlaylistPanelVideo[];
	currentIndex: 0;
	playlistId: string;
	totalVideos: number;
	ownerName: G_Text;
	isInfinite: false;
	playlistShareUrl: S_YtUrlHttp_Watch;
	continuations: CD_Next[];
	shortBylineText: G_Text;
	longBylineText: G_Text;
	totalVideosText: G_Text;
	trackingParams: string;
	titleText: G_Text;
	endpoint: E_VE5754;
	localCurrentIndex: 0;
	playlistButtons: R_Menu;
	badges: RMD_Badge[];
	videoCountText: G_Text;
	isCourse: false;
	nextVideoLabel: G_Text;
};
