type MacroMarkersListItem={
	title: D$SimpleText;
	timeDescription: D$SimpleText;
	thumbnail: D$Thumbnail;
	onTap: E$WatchEndpoint;
	trackingParams: string;
	shareButton: R$ButtonRenderer;
	repeatButton: ToggleButtonRenderer;
	macroMarkerRepeatStateEntityKey: string;
	endRepeatCommand: E$CommandExecutorCommand;
	playerStateEntityKey: string;
	carouselType: "MACRO_MARKERS_LIST_ITEM_RENDERER_CAROUSEL_TYPE_DEFAULT";
	lightColorPalette: LightColorPalette;
	darkColorPalette: DarkColorPalette;
	timeDescriptionA11yLabel: `${number} seconds`;
}|{
	title: D$SimpleText;
	timeDescription: D$SimpleText;
	thumbnail: D$Thumbnail;
	onTap: E$WatchEndpoint;
	trackingParams: string;
	layout: "MACRO_MARKERS_LIST_ITEM_RENDERER_LAYOUT_VERTICAL";
	carouselType: "MACRO_MARKERS_LIST_ITEM_RENDERER_CAROUSEL_TYPE_DEFAULT";
};