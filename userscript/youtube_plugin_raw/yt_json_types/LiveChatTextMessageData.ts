type D$LiveChatTextMessage={
	message: R$TextWithRuns;
	authorName: R$TextWithRuns;
	authorPhoto: D$Thumbnail;
	contextMenuEndpoint: {};
	id: string;
	authorBadges?: R$LiveChatAuthorBadge[];
	timestampUsec: `${number}`;
	authorExternalChannelId: `UC${string}`;
	contextMenuAccessibility: A$Accessibility;
	timestampText: R$TextWithRuns;
};