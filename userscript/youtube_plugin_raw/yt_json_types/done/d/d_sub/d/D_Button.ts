type DC_ShowReelsCommentsOverlay={engagementPanel: R_EngagementPanelSectionList;};
type C_ShowReelsCommentsOverlay={clickTrackingParams: string; showReelsCommentsOverlayCommand: DC_ShowReelsCommentsOverlay;};

type GM_Unsubscribe={
	sendPost: true;
	apiUrl: "/youtubei/v1/subscription/unsubscribe";
};

type M_Unsubscribe={
	webCommandMetadata: GM_Unsubscribe;
};

type DE_Unsubscribe={
	channelIds: `UC${string}`[];
	params: string;
};

type E_Unsubscribe={
	clickTrackingParams: string;
	commandMetadata: M_Unsubscribe;
	unsubscribeEndpoint: DE_Unsubscribe;
};
type D_Button_NavEP=GE_Browse;
// cSpell:ignoreRegExp /(?<=")[^"]{40,}/
type D_Button={
	style?: "STYLE_DEFAULT"|"STYLE_BLUE_TEXT"|"STYLE_TEXT"|"STYLE_SUGGESTIVE";
	size?: "SIZE_DEFAULT";
	isDisabled?: false;
	serviceEndpoint?: D_Button_SE;
	text?: G_Text;
	icon?: T_Icon<"SHORTS_COMMENT">;
	navigationEndpoint?: D_Button_NavEP;
	accessibility?: D_Label;
	tooltip?: string;
	trackingParams: string;
	accessibilityData?: D_Accessibility;
	targetId?: "create-clip-button-action-bar";
	command?: C_ShowReelsCommentsOverlay|A_ChangeEngagementPanelVisibility;
};

type R_Button={buttonRenderer: D_Button;};