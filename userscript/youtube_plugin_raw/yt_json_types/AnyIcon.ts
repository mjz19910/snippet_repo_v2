type AnyIcon=NonNullable<[
	T$Icon<AnyIconStr>,
	D$Button['icon'],
	InfoRowData['expandIcon'],
	TopicLinkData['callToActionIcon'],
	T$Icon<"LIBRARY_REMOVE">,
	ThumbnailOverlayHoverTextData['icon'],
][number]>;
type MenuServiceIcon=Extract<[
	{icon: T$Icon<"FLAG">;},
	{}
][number],{icon:any}>;
type MenuServiceIconTypeStr=[
	"SUBTITLES",
	"PLAYLIST_ADD",
	"VISIBILITY_OFF",
	"SHARE",
	"ALIGN_LEFT",
][number]|"WATCH_LATER"|"NOT_INTERESTED"|"LIBRARY_ADD"|"LIBRARY_REMOVE"|(MenuServiceIcon['icon']['iconType']);