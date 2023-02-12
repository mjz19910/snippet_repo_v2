type CF_M_s_priv=
	|`D_Params:${CF_D_Params}`
	|`T_Endpoint_Tracking:${"C_GetSurvey"}`
	|`TD_ItemSection_3:${CF_TD_ItemSection}`
	|`TE_Endpoint_2:${CF_TE_Endpoint_2}`
	|`TE_Endpoint_3:${CF_TE_Endpoint_3}`
	|`TE_Endpoint_Opt_3:${CF_TE_Endpoint_Opt_3}`
	|`T_Icon:${CF_T_Icon}`
	|`T_Icon:any:${CF_T_Icon_Any}`
	|`TA_OpenPopup:${CF_TA_OpenPopup}`
	;
;
type CF_TA_OpenPopup=
	|T_ExtractImport<"CF_TA_OpenPopup">|"CF_TA_OpenPopup"|"a"
	|"TA_OpenPopup<Popup_ConfirmDialog>"
	|"TA_OpenPopup<D_GetAccountMenu_Popup>"
	;
;
type CF_T_Icon_Any=
	|T_ExtractImport<"CF_T_Icon_Any">|"CF_T_Icon_Any"|"a"
	|"D_GuideEntry_Icon"
	;
;
type CF_L_params_no_gen=
	|"D_TemplateUpdate"
	|"DE_GetReportForm"
	|"DE_GetTranscript"
	|"DE_YpcGetOffers.params"
	|"DE_YpcGetOfflineUpsell"
	;
;
type CF_L_Params=
	|T_ExtractImport<"CF_L_Params">|"CF_L_Params"|"a"
	|`${CF_D_Params}.params`
	|CF_L_CTP_Params
	|CF_L_params_no_gen
	|CF_L_TP_Params
	;
;
type CF_parse_identifier=T_ExtractImport<"CF_parse_identifier">|"aCF_parse_identifier"|"";
type CF_WithParams=
	|CF_D_Button
	|CF_D_ChipCloudChip_Omit
	|CF_D_GuideEntry
	|CF_D_Link
	|CF_D_Menu_Omit
	;
;
type CF_M_s=
	|`${CF_parse_identifier}.identifier`
	|CF_D_ToggleButton
	|CF_D_CustomEmoji
	|CF_D_Video_Handle
	|CF_GE_ResponseReceived
	|CF_T_GM
	|CF_T_Items_TP
	|CF_T_SE_Signal
	|CF_WithParams
	|T_ExtractImport<"CF_M_s">
	;
;
type CF_L_TP_Params=
	|`T_Items_TP:${CF_T_Items_TP}`
	|CF_D_ToggleButton
	|CF_WithParams
	|T_ExtractImport<"CF_L_TP_Params">
	;
;
type CF_T_Signal=
	|"DE_SignalNavigation"
	|""
	|"b"
	;
;
type CF_M_w=
	|T_ExtractImport<"CF_M_w">
	|"GM_SendPost"
	|"Other:D_ImpressionCap"
	|`G_EY_Entity_Any:G_EY_Entity`
	|`T_Commands:${CF_T_Commands}`
	|`T_Items_TP:${CF_T_Items_TP}`
	|`T_Items:${CF_T_Items}`
	|`T_Signal:${CF_T_Signal}`
	|`T_WCM:${CF_T_WCM}`
	|`TA_Page:${CF_TA_Page}`
	|`TR_MultiPageMenu:${CF_TR_MultiPageMenu}`
	|`Unpack:T_WCM:${CF_T_WCM_Unpack}`
	|`y:${CF_M_y}`
	|`zy:${CF_M_zy}`
	;
;
type CF_T_SE_Signal=
	|`${CF_GE_ResponseReceived}.SE_Signal`
	|`${CF_T_SE_Signal_P1}.SE_Signal`
	|T_ExtractImport<"CF_T_SE_Signal">
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
	|T_ExtractImport<"CF_L_CTP_Params">
	;
;
type CF_D_Menu_Omit=
	|T_ExtractImport<"CF_D_Menu_Omit">
	|CF_D_Video_Handle
	|CF_D_Playlist_Omit
	;
;
type CF_D_Button=T_ExtractImport<"CF_D_Button">|"CF_D_Button"|"a";
type CF_D_CaseGen=T_ExtractImport<"CF_D_CaseGen">|"CF_D_CaseGen"|"a";
type CF_D_ChipCloudChip_Omit=T_ExtractImport<"CF_D_ChipCloudChip_Omit">|"CF_D_ChipCloudChip_Omit"|"a";
type CF_D_CustomEmoji=T_ExtractImport<"CF_D_CustomEmoji">|"CF_D_CustomEmoji"|"a";
type CF_D_Link=T_ExtractImport<"CF_D_Link">|"CF_D_Link"|"a";
type CF_D_Params=T_ExtractImport<"CF_D_Params">|"DC_GetTranscript_Params"|"a";
type CF_D_Playlist_Omit=T_ExtractImport<"CF_D_Playlist_Omit">|"CF_D_Playlist_Omit"|"a";
type CF_D_STR=T_ExtractImport<"CF_D_STR">|"a"|"";
type CF_D_ToggleButton=T_ExtractImport<"CF_D_ToggleButton">|"CF_D_ToggleButton"|"a";
type CF_D_Video_Handle=T_ExtractImport<"CF_D_Video_Handle">|"CF_D_Video_Handle"|"a";
type CF_DC_Generic_CTP=T_ExtractImport<"CF_DC_Generic_CTP">|"CF_DC_Generic_CTP"|"a";
type CF_GE_ResponseReceived=T_ExtractImport<"CF_GE_ResponseReceived">|"CF_GE_ResponseReceived"|"a";
type CF_M_VE=T_ExtractImport<"CF_M_VE">|"CF_M_VE"|"a";
type CF_M_y=T_ExtractImport<"CF_M_y">|"CF_M_y"|"a";
type CF_M_zy=T_ExtractImport<"CF_M_zy">|"CF_M_zy"|"a";
type CF_onMissingIcon=T_ExtractImport<"CF_onMissingIcon">|CF_D_Button;
type CF_T_Commands=T_ExtractImport<"CF_T_Commands">|"CF_T_Commands"|"a";
type CF_T_Endpoint=T_ExtractImport<"CF_T_Endpoint">|"CF_T_Endpoint"|"a";
type CF_T_GM=T_ExtractImport<"CF_T_GM">|"CF_T_GM"|"a";
type CF_T_Icon=T_ExtractImport<"CF_T_Icon">|"CF_T_Icon"|"a";
type CF_T_Items_TP=T_ExtractImport<"CF_T_Items_TP">|"CF_T_Items_TP"|"a";
type CF_T_Items=T_ExtractImport<"CF_T_Items">|"CF_T_Items"|"a";
type CF_T_SE_Signal_P1=T_ExtractImport<"CF_T_SE_Signal_P1">|"CF_T_SE_Signal_P1"|"a";
type CF_T_WCM_Unpack=T_ExtractImport<"CF_T_WCM_Unpack">|"CF_T_WCM_Unpack"|"a";
type CF_T_WCM=T_ExtractImport<"CF_T_WCM">|"CF_T_WCM"|"a";
type CF_TA_Page=T_ExtractImport<"CF_TA_Page">|"CF_TA_Page"|"a";
type CF_TD_ItemSection=T_ExtractImport<"CF_TD_ItemSection">|"CF_TD_ItemSection"|"a";
type CF_TE_Endpoint_2=T_ExtractImport<"CF_TE_Endpoint_2">|"CF_TE_Endpoint_2"|"a";
type CF_TE_Endpoint_3=T_ExtractImport<"CF_TE_Endpoint_3">|"CF_TE_Endpoint_3"|"a";
type CF_TE_Endpoint_Opt_3=T_ExtractImport<"CF_TE_Endpoint_Opt_3">|"CF_TE_Endpoint_Opt_3"|"a";
