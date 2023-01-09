type ResponseTypes=[
	account_account_menu_t,
	account_set_setting_t,
	accounts_list_t,
	att_get_t,
	browse_t,
	feedback_t,
	get_notification_menu_t,
	get_transcript_t,
	getAccountSwitcherEndpoint_t,
	getDatasyncIdsEndpoint_t,
	guide_t,
	like_like_t,
	like_removelike_t,
	live_chat_get_live_chat_replay_t,
	next_t,
	notification_get_unseen_count_t,
	notification_record_interactions,
	player_t,
	reel_reel_item_watch_t,
	reel_reel_watch_sequence_t,
	{
		type: "notification.modify_channel_preference";
		data: NotificationModifyChannelPreferenceResponse;
	}
][number]|GenericResponseType;
type NotificationModifyChannelPreferenceResponse={
	responseContext: ResponseContext;
}