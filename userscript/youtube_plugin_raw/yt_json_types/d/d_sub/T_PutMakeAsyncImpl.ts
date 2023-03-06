type T_PutMakeAsyncImpl<N extends string,T extends {
	z: [DIT_Item_AB<"raw_id",DIT_Box_Typeof<Y>>];
},Y extends string=T["info_arr"][0]["raw_id"]>={
	key: N; args: [N,T];
	w: Promise<{
		type: "boxed_id";
		tag: N;
		key: `boxed_id:${N}`;
		value: T;
	}>;
};
