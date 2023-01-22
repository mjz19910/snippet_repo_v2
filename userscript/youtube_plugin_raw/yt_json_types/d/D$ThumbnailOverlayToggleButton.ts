type D__ThumbnailOverlayToggleButton={
	isToggled: false;
	untoggledIcon: T$Icon<"WATCH_LATER">;
	toggledIcon: T$Icon<"CHECK">;
	untoggledTooltip: "Watch Later";
	toggledTooltip: "Added";
	untoggledServiceEndpoint: PlaylistEditEndpoint;
	toggledServiceEndpoint: PlaylistEditEndpoint;
	untoggledAccessibility: D__Accessibility;
	toggledAccessibility: D__Accessibility;
	trackingParams: string;
}|{
	untoggledIcon: T$Icon<"ADD_TO_QUEUE_TAIL">;
	toggledIcon: T$Icon<"PLAYLIST_ADD_CHECK">;
	untoggledTooltip: "Add to queue";
	toggledTooltip: "Added";
	untoggledServiceEndpoint: E$T$SignalService<Signal$ClientSignal>;
	untoggledAccessibility: D__Accessibility;
	toggledAccessibility: D__Accessibility;
	trackingParams: string;
};;
