type DT_DatabaseStoreTypes={
	video_id: {
		key: `video_id:${AG_put_video_args_Args["type"]}:${string}`;
		type: AG_put_video_args_Args["type"];
		v: string;
	};
	hashtag: {
		key: `hashtag:${string}`;
		hashtag: string;
	};
	boxed_id: {
		key: `boxed_id:${string}:${string}`;
		type: string;
		id: string;
	};
	channel_id: {
		key: `channel_id:UC:UC${string}`;
		type: "channel_id:UC";
		id: string;
		raw_id: `UC${string}`;
	};
	playlist: {
		key: `playlist:${string}:${string}`;
		type: string;
		id: string;
	};
	browse_id: {
		key: `browse_id:VL:${string}`;
		type: "browse_id:VL";
		id: `PL${string}`;
		raw_id: `VLPL${string}`;
	};
};
