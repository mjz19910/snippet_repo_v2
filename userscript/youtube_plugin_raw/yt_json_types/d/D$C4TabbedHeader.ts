type D_C4TabbedHeader={
	channelId: `UC${string}`;
	title: string;
	navigationEndpoint: E_Browse;
	avatar: D_Thumbnail;
	banner: D_Thumbnail;
	badges?: R_MetadataBadge[];
	headerLinks: R_ChannelHeaderLinks;
	subscribeButton: R_SubscribeButton;
	subscriberCountText: R_SimpleText;
	tvBanner: D_Thumbnail;
	mobileBanner: D_Thumbnail;
	trackingParams: string;
	sponsorButton?: R_Button;
	channelHandleText: R_TextWithRuns;
	videosCountText: R_TextWithRuns;
};