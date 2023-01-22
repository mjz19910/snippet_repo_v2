type D$MacroMarkersListItem={
	title: R$SimpleText;
	timeDescription: R$SimpleText;
	thumbnail: D$Thumbnail;
	onTap: E$WatchEndpoint;
	trackingParams: string;
	shareButton: R$Button;
	repeatButton: R$ToggleButton;
	macroMarkerRepeatStateEntityKey: string;
	endRepeatCommand: E$CommandExecutorCommand;
	playerStateEntityKey: string;
	carouselType: "MACRO_MARKERS_LIST_ITEM_RENDERER_CAROUSEL_TYPE_DEFAULT";
	lightColorPalette: LightColorPalette;
	darkColorPalette: DarkColorPalette;
	timeDescriptionA11yLabel: `${number} seconds`;
}|{
	title: R$SimpleText;
	timeDescription: R$SimpleText;
	thumbnail: D$Thumbnail;
	onTap: E$WatchEndpoint;
	trackingParams: string;
	layout: "MACRO_MARKERS_LIST_ITEM_RENDERER_LAYOUT_VERTICAL";
	carouselType: "MACRO_MARKERS_LIST_ITEM_RENDERER_CAROUSEL_TYPE_DEFAULT";
};