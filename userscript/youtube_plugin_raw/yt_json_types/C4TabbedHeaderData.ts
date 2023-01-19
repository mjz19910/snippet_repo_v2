type PrimaryLinkItem={
	navigationEndpoint: UrlEndpoint;
	icon: Thumbnail;
	title: SimpleText;
};

type ChannelHeaderLinks={
	primaryLinks: PrimaryLinkItem[];
};

type ChannelHeaderLinksRenderer={
	channelHeaderLinksRenderer: ChannelHeaderLinks;
};

type C4TabbedHeaderData={
	channelId: `UC${string}`;
	title: string;
	navigationEndpoint: BrowseEndpoint;
	avatar: Thumbnail;
	banner: Thumbnail;
	badges?: MetadataBadgeRenderer[];
	headerLinks: ChannelHeaderLinksRenderer;
	subscribeButton: SubscribeButtonRenderer;
	subscriberCountText: SimpleText;
	tvBanner: Thumbnail;
	mobileBanner: Thumbnail;
	trackingParams: string;
	channelHandleText: TextWithRuns;
	videosCountText: TextWithRuns;
};
