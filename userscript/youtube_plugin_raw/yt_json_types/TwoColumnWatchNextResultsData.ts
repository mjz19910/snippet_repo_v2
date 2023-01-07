type TwoColumnWatchNextResultsData={
	results: ResultsTemplate<
		ContentTemplate<
			[
				VideoPrimaryInfoRenderer,
				VideoSecondaryInfoRenderer,
				ItemSectionRenderer<"comments-entry-point",never>,
				ItemSectionRenderer<"comment-item-section",never>,
			][number]
		>
	>;
	secondaryResults: SecondaryResultsTemplate<ContentTemplate<RelatedChipCloudRenderer|ItemSectionRenderer<never,never>>>;
	playlist?: PlaylistTemplate<PlaylistContent>;
	autoplay?: AutoplayTemplate<AutoplayContent>;
	conversationBar?: ConversationBarTypes;
};
type ConversationBarTypes=LiveChatRenderer;

type LiveChatData={
	continuations: {}[];
	header: {};
	trackingParams: string;
	clientMessages: {};
	isReplay: {};
	initialDisplayState: string;
	showHideButton: {};
};

type LiveChatRenderer={liveChatRenderer: LiveChatData;};