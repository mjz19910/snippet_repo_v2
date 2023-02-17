namespace DT_Database {
	const V_StoreKeys=(["video_id","hashtag_id","boxed_id","channel_id","playlist_id","browse_id"] as const) satisfies readonly (keyof DT_DatabaseStoreTypes)[];
	export type V_StoreKeys_=typeof V_StoreKeys;
}
type DT_DatabaseStoreKeys=DT_Database.V_StoreKeys_;
type DT_DatabaseStoreTypes={
	video_id: {
		key: `video_id:${AG_put_video_args_Args["type"]}:${string}`;
		type: AG_put_video_args_Args["type"];
		v: string;
	};
	hashtag_id: {
		key: `hashtag_id:${string}`;
		hashtag: string;
	};
	boxed_id: G_BoxedIdObj;
	channel_id: {
		key: `channel_id:UC:${string}`;
		type: "channel_id:UC";
		id: string;
		raw_id: `UC${string}`;
	};
	playlist_id: G_PlaylistIdObj;
	browse_id: {
		key: `browse_id:VL:${string}`;
		type: "browse_id:VL";
		id: `PL${string}`;
		raw_id: `VLPL${string}`;
	};
};
type G_PlaylistIdObj={
	key: `playlist_id:RDCM:UC${string}`;
	type: "playlist_id:RDCM";
	id: `UC${string}`;
	raw_id: `RDCMUC${string}`;
}|{
	key: `playlist_id:self:${D_PlaylistSelfId}`;
	type: string;
	id: D_PlaylistSelfId;
}|{
	key: `playlist_id:${D_PlaylistIdTypeBase}:${string}`;
	type: string;
	id: string;
	raw_id: `${D_PlaylistIdTypeBase}${string}`;
};
type B_IdSrcNum={
	key_type: "num";
	type: number;
};
type B_IdSrcStr={
	key_type: "str";
	type: string;
};
type G_IdSrc=B_IdSrcNum|B_IdSrcStr;
type G_BoxedIdObj=T_IdBox<B_IdSrcNum>|T_IdBox<B_IdSrcStr>|{
	key: "boxed_id:update_id";
	type: "update_id";
	id: number;
};
// ["many_str",["one",string[]]|["many",string[][]]]
type T_IdBox<SV extends G_IdSrc,T extends SV["key_type"]=SV["key_type"],V=SV["type"]>={
	key: `boxed_id:${T}:${string}`;
	type: T;
	id: [`many_${T}`,["one",V[]]|["many",V[][]]];
};
