type ApiUrlFormat=[
	"getAccountSwitcherEndpoint",
	"getDatasyncIdsEndpoint",
	"youtubei/v1/browse/edit_playlist",
	"youtubei/v1/notification/opt_out",
	`youtubei/v1/${"browse"|"guide"|"next"|"player"}`,
	`youtubei/v1/account/${"account_menu"|"accounts_list"|"set_setting"}`,
	`youtubei/v1/att/${"get"|"log"}`,
	`youtubei/v1/comment/create_comment`,
	`youtubei/v1/feedback`,
	`youtubei/v1/get_survey`,
	`youtubei/v1/get_transcript`,
	`youtubei/v1/like/${"like"|"dislike"|"removelike"}`,
	`youtubei/v1/live_chat/${"get_live_chat_replay"|"get_live_chat"}`,
	`youtubei/v1/music/get_search_suggestions`,
	`youtubei/v1/notification/${ApiNotificationLast}`,
	`youtubei/v1/pdg/get_pdg_buy_flow`,
	`youtubei/v1/playlist/${"get_add_to_playlist"|"create"}`,
	`youtubei/v1/reel/${"reel_item_watch"|"reel_watch_sequence"}`,
	`youtubei/v1/search`,
	`youtubei/v1/share/get_share_panel`,
	`youtubei/v1/subscription/${"subscribe"|"unsubscribe"}`,
	`youtubei/v1/updated_metadata`,
	"youtubei/v1/flag/get_form",
][number];