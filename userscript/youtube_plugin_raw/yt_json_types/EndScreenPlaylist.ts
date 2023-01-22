type D__EndScreenPlaylist={
	playlistId: `RD__{string}`;
	title: R$SimpleText;
	thumbnail: D__Thumbnail;
	videoCount?: `${number}`;
	longBylineText: G$Text;
	videoCountText: R$TextWithRuns;
	navigationEndpoint: E$WatchEndpoint;
	trackingParams: string;
};