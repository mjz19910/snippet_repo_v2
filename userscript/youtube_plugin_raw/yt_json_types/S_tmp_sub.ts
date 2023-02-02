type SP_GFeedbackServiceParam=SP_GFeedbackServiceRouteParam;
type GFeedbackServiceParamList=SP_GFeedbackServiceParam[];
type SP_GFeedbackServiceParamsType=GFeedbackServiceParamList|RC_To_SPs<SP_GFeedbackVarMap>;
type SP_GFeedbackServiceRouteParam={
	key: "route";
	value: ChanLoc;
};
type SP_GFeedbackVarMap={
	browse_id_prefix: "";
	browse_id: D_BrowseIdStr;
	context: "yt_web_unknown_form_factor_kevlar_w2w";
	e: string;
	has_alc_entitlement: "false";
	has_unlimited_entitlement: "False";
	has_premium_lite_entitlement: "False";
	ipcc: "0";
	is_alc_surface: "false";
	is_casual: "false";
	is_monetization_enabled: "true";
	is_owner: "false";
	is_viewed_live: "false";
	logged_in: "0"|"1";
	num_shelves: "1";
	premium_membership: "non_member";
};
type SP_GoogleHelpServiceObj={
	browse_id: D_BrowseIdStr;
	browse_id_prefix: "";
};
type RC_GuidedHelp_SPs={
	service: "GUIDED_HELP";
	params: RC_To_SPs<GuidedHelpState>;
};
type GuidedHelpState={
	logged_in: "0"|"1";
	context: "yt_web_unknown_form_factor_kevlar_w2w";
};
type S_GetAccountMenu={signal: "GET_ACCOUNT_MENU";actions: TA_OpenPopup<D_GetAccountMenu_Popup>[];};
type S_acv1_codec=`avc1.${string}`;
