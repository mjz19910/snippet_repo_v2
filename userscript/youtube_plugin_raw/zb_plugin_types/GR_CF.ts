type CF_mod=import("./D_CF_mod.js").D_CF_mod;
type CF_M_s_priv=
	|`D_Params:${CF_D_Params}`
	|`T_Endpoint_Tracking:${"C_GetSurvey"}`
	|`TD_ItemSection_3:${CF_TD_ItemSection_3}`
	|`TE_Endpoint_2:${CF_TE_Endpoint_2}`
	|`TE_Endpoint_3:${CF_TE_Endpoint_3}`
	|`TE_Endpoint_Opt_3:${CF_TE_Endpoint_Opt_3}`
	|`T_Icon:${CF_T_Icon}`
	|`T_Icon:any:${CF_T_Icon_Any}`
	|`TA_OpenPopup:${CF_TA_OpenPopup}`
	;
;
type CF_TA_OpenPopup=
	|T_ExtractImport<"CF_TA_OpenPopup">|""|"a"
	|"TA_OpenPopup<Popup_ConfirmDialog>"
	|"TA_OpenPopup<D_GetAccountMenu_Popup>"
	;
;
type CF_T_Icon_Any=
	|T_ExtractImport<"CF_T_Icon_Any">|""|"a"
	|"D_GuideEntry_Icon"
	;
;
type CF_L_params_no_gen=
	|"DE_GetReportForm"
	|"DE_GetTranscript"
	|"DE_YpcGetOffers"
	|"DE_CreateBackstagePost.createBackstagePostParams"
	;
;
type CF_L_Params=
	|T_ExtractImport<"CF_L_Params">|""|"a"
	|CF_L_CTP_Params
	|CF_L_TP_Params
	|CF_L_params_no_gen
	;
;
type CF_parse_identifier=
	|"unknown_parse"
	|"D_EngagementPanelSectionList";
type CF_M_s_no_gen=
	|"DC_ReloadContinuationItems"
	|"DMD_AdSlot"
	|`${CF_parse_identifier}.identifier`
	|".identifier"
	|"DC_Continuation"
	;
;
type CF_M_s=
	|T_ExtractImport<"CF_M_s">|""|"a"
	|CF_D_Button
	|CF_D_CustomEmoji
	|CF_D_Link
	|CF_D_Menu_Omit
	|CF_D_Video_Handle
	|CF_M_s_no_gen
	|CF_T_SE_Signal
	;
;
type CF_D_CustomEmoji=T_ExtractImport<"CF_D_CustomEmoji">|""|"a"|""|"A";
type CF_D_Params=T_ExtractImport<"CF_D_Params">|""|"a";
type CF_TE_Endpoint_2=T_ExtractImport<"CF_TE_Endpoint_2">|""|"a";
type CF_TE_Endpoint_3=T_ExtractImport<"CF_TE_Endpoint_3">|""|"a";
type CF_TD_ItemSection_3=
	|T_ExtractImport<"CF_TD_ItemSection_3">|""|"a"
	|`TD_ItemSection_3<"comment-item-section">`
	|`TD_ItemSection_3<"watch-next-feed">`
	|`TD_ItemSection_3<G_Watch_SecondaryResults_G_SectionItem, "sid-wn-chips", "watch-next-feed">`
	|"TR_SectionListItem_3_Empty"
	;
;
type CF_T_WCM_Unpack=T_ExtractImport<"CF_T_WCM_Unpack">|""|"a";
type CF_M_w=
	|`y:${CF_M_y}`
	|`zy:${CF_M_zy}`
	|`Unpack:T_WCM:${CF_T_WCM_Unpack}`
	|`TA_Page:${CF_TA_Page}`
	|`TR_MultiPageMenu:${CF_TR_MultiPageMenu}`
	|`G_EY_Entity_Any:G_EY_Entity`
	|`T_Items:${CF_T_Items}`
	|"D_ImpressionCap"
	;
;
type CF_T_Items=T_ExtractImport<"CF_T_Items">|""|"a";
type CF_M_y=
	|T_ExtractImport<"CF_M_y">|""|"a"
	|`T_WCM:${CF_T_WCM}`
	;
;
type CF_M_zy=T_ExtractImport<"CF_M_zy">|""|"a";
type CF_TA_Page=T_ExtractImport<"CF_TA_Page">|""|"a";
type CF_T_Icon=T_ExtractImport<"CF_T_Icon">|""|"a";
type CF_D_Video_Handle=T_ExtractImport<"CF_D_Video_Handle">|""|"a";
type CF_T_SE_Signal_P1=T_ExtractImport<"CF_T_SE_Signal_P1">|""|"a";
type CF_T_SE_Signal=
	|`${CF_GE_ResponseReceived}.SE_Signal`
	|`${CF_T_SE_Signal_P1}.SE_Signal`
	|T_ExtractImport<"CF_T_SE_Signal">|""|"a"
	;
;
type CF_L_TP_Params=
	|T_ExtractImport<"CF_L_TP_Params">|""|"a"
	|CF_D_Link
	|CF_D_Button
	|CF_D_Menu_Omit
	|CF_D_ChipCloudChip_Omit
	;
;
type CF_L_CTP_Params=
	|`${CF_TA_OpenPopup}.tracking`
	|`${CF_TE_Endpoint_2}.endpoint`
	|`${CF_TE_Endpoint_3}.endpoint`
	|`${CF_TE_Endpoint_Opt_3}.endpoint`
	|`T_SE_Signal:${CF_T_SE_Signal}`
	|CF_DC_Generic_CTP
	|CF_GE_ResponseReceived
	|T_ExtractImport<"CF_L_CTP_Params">|""|"a"
	;
;
type CF_D_Link=T_ExtractImport<"CF_D_Link">|""|"a";
type CF_D_Button=T_ExtractImport<"CF_D_Button">|""|"a";
type CF_GE_ResponseReceived=T_ExtractImport<"CF_GE_ResponseReceived">|""|"a";
type CF_D_Menu_Omit=
	|T_ExtractImport<"CF_D_Menu_Omit">|""|"a"
	|CF_D_Video_Handle
	|"D_CompactPlaylist"
	;
;
type CF_D_ChipCloudChip_Omit=T_ExtractImport<"CF_D_ChipCloudChip_Omit">|""|"a";
type CF_D_Playlist_Omit=T_ExtractImport<"CF_D_Playlist_Omit">|""|"a";
type CF_TE_Endpoint_Opt_3=T_ExtractImport<"CF_TE_Endpoint_Opt_3">|""|"a";
type CF_T_Endpoint=T_ExtractImport<"CF_T_Endpoint">|""|"a";
type CF_M_VE=T_ExtractImport<"CF_M_VE">|""|"a";
type CF_T_WCM=T_ExtractImport<"CF_T_WCM">|""|"a";
type CF_DC_Generic_CTP="D_CD_Reload"|"";