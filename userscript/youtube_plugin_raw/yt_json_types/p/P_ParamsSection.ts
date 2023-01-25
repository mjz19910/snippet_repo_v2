type P_ParamsSection=|string
	|"A_HideEngagementPanelScrim"
	|"AE_Browse"
	|"D_AdLayoutLogging"
	|"D_CommentsHeader"
	|"D_AutoplayContent"
	|"D_AutoplaySwitchButton"
	|"D_ChipCloud"
	|"D_CommonConfig"
	|"D_CompactVideo"
	|"D_DesktopTopbar"
	|"D_EntityMutationItem"
	|"D_FeaturedChannel"
	|"D_FeedFilterChipBar"
	|"D_FusionSearchbox"
	|"D_GuideSection"
	|"D_HotkeyDialog"
	|"D_ItemSection_2_CommentItemSection"
	|"D_LoggingDirectives"
	|"D_Menu"
	|"D_MenuNavigationItem"
	|"D_MenuServiceItem"
	|"D_MusicThumbnail"
	|"D_Notification"
	|"D_PdgBuyFlow"
	|"D_PlayerOverlayAutoplay"
	|"D_PlaylistContent"
	|"D_PlaylistEdit"
	|"D_PlaylistSidebar"
	|"D_ReelWatch"
	|"D_RichGrid"
	|"D_RichItem"
	|"D_SearchFeedSectionList"
	|"D_SerializedSlotAdServingDataEntry"
	|"D_SubscribeButton"
	|"D_SuperVodBuyFlowContent"
	|"D_Tab"
	|"D_TemplateUpdate"
	|"D_Video"
	|"D_Watch"
	|"D_WatchNextEndScreen"
	|"D_WatchPlaylist"
	|"D_WatchResult_ResultsItem"
	|"D_YpcGetCart"
	|"D_YpcGetOffers"
	|"DE_GetNotificationMenu"
	|"DE_GetTranscript"
	|"DMD_Badge"
	|"E_Watch"
	|"EA_ChangeEngagementPanelVisibility"
	|"G_SectionList"
	|"GM_WC"
	|"MC_ResolveUrl"
	|"MP_MenuNotificationSection"
	|"openPopupAction"
	|"R_Generic_WatchPage"
	|"R_VE3832_WatchPage"
	|"RS_AccountMenu"
	|"RS_Browse"
	|"RS_Channel"
	|"RS_GetAddToPlaylist"
	|"RS_GetLiveChat"
	|"RS_Guide"
	|"RS_Next"
	|"RS_Next"
	|"RS_Playlist"
	|"RS_Reel"
	|"RS_ReelItemWatch"
	|"RS_ReelWatchSequence"
	|"RS_Search"
	|"RS_Settings"
	|"RSB_EditPlaylist"
	|"RSG_NotificationMenu"
	|"RSG_PdgBuyFlow"
	|"RSG_SearchSuggestions"
	|"RSG_Survey"
	|"RSG_Transcript"
	|"T_Command_TP"
	|"TA_OpenPopup"
	|"TD_ItemSection_1_CommentsEntryPoint"
	|"TD_ItemSection_3"
	|"TopbarLogo"
	|"UA_EngagementPanel"
	|"UA_NotificationsUnseenCount"
	|`${T_Endpoint_CF}.endpoint`
	|D_Button_CF
	|D_ChipCloudChip_Omit_CF
	|D_Link_CF
	|GE_ResponseReceived_CF
	|Omit_Menu_Radio_CF
	|T_Endpoint_CF
	;
;
type T_Endpoint_CF=[
	"C_AdsControlFlowOpportunityReceived",
	"C_Continuation",
	"C_Executor",
	"C_GetSurvey",
	"C_ReloadContinuationItems",
	"C_ScrollToEngagementPanel",
	"C_ShowReloadUi",
	"E_Browse",
	"E_CreateBackstagePost",
	"E_CreateBackstagePost",
	"E_CreateBackstagePost",
	"E_Feedback",
	"E_GetNotificationMenu",
	"E_GetTranscript",
	"E_PlaylistEdit",
	"E_RecordNotificationInteractions",
	"E_ReelWatch",
	"E_ReelWatch",
	"E_Search",
	"E_SetSettingAutonavForDesktop",
	"E_ShareEntityService",
	"E_WatchPlaylist",
	"E_YpcGetCart",
	"E_YpcGetOffers",
][number];
type D_Link_CF=[
	"D_CompactLink",
][number];
type D_Button_CF=[
	"D_Button",
	`D_Button.${"Mixed"|"Styled"|"WithAccessibility"}`,
][number];
type GE_ResponseReceived_CF=[
	"RS_Next",
	"RS_Watch",
][number];
type Omit_Menu_Radio_CF=[
	"D_CompactVideo",
	"D_PlayerOverlayAutoplay",
	"D_Radio",
	"D_Video",
][number];
type D_ChipCloudChip_Omit_CF=[
	"D_ChipCloudChip",
][number];
function vv_x(u: keyof import("../../youtube_plugin.user.js").HandleTypes|null=null) {
	switch(u) {
		case null: break;
		default: u===0; debugger; break;
	}
}
vv_x();