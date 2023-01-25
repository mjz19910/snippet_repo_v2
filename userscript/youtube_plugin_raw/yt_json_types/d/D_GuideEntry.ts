type D_GuideEntry={
	navigationEndpoint: E_Browse;
	icon: T_Icon<"LIKES_PLAYLIST">;
	trackingParams: string;
	formattedTitle: R_SimpleText;
	accessibility: D_Accessibility;
	entryData: R_GuideEntryData;
}|{
	navigationEndpoint: E_Browse;
	icon: T_Icon<"WATCH_LATER"|"WATCH_HISTORY">;
	trackingParams: string;
	formattedTitle: R_SimpleText;
	accessibility: D_Accessibility;
}|{
	navigationEndpoint: E_Url;
	icon: T_Icon<"MY_VIDEOS">;
	trackingParams: string;
	formattedTitle: R_SimpleText;
	accessibility: D_Accessibility;
}|{
	navigationEndpoint: E_Browse;
	icon: T_Icon<"SUBSCRIPTIONS"|"WHAT_TO_WATCH">;
	trackingParams: string;
	formattedTitle: R_SimpleText;
	accessibility: D_Accessibility;
	isPrimary: true;
}|{
	icon: T_Icon<"TAB_SHORTS">;
	trackingParams: string;
	formattedTitle: R_SimpleText;
	accessibility: D_Accessibility;
	serviceEndpoint: TE_SignalService<{},{}>|E_ReelWatch;
	isPrimary: true;
}|{
	icon: T_Icon<"HELP">;
	trackingParams: string;
	formattedTitle: R_SimpleText;
	accessibility: D_Accessibility;
	serviceEndpoint: TE_SignalService<{},{}>;
}|{
	navigationEndpoint: E_Browse;
	icon: T_Icon<"VIDEO_LIBRARY_WHITE">;
	trackingParams: string;
	formattedTitle: R_SimpleText;
	accessibility: D_Accessibility;
	targetId: "library-guide-item";
	isPrimary: true;
};
type GE_ND_GuideEntry={
	navigationEndpoint: E_Browse;
	thumbnail: D_Thumbnail;
	badges: GuideEntryBadges;
	trackingParams: string;
	formattedTitle: R_SimpleText;
	accessibility: D_Accessibility;
	entryData: R_GuideEntry_D;
	presentationStyle: "GUIDE_ENTRY_PRESENTATION_STYLE_NEW_CONTENT"|"GUIDE_ENTRY_PRESENTATION_STYLE_NONE";
};
type R_GuideDownloadsEntry={
	guideDownloadsEntryRenderer: D_GuideDownloadsEntry;
}
type D_GuideDownloadsEntry={
	alwaysShow: false;
	entryRenderer: R_GuideEntry;
};