type DI_A_Playlist_UU={
	b: "playlist_id";
	c: "UU";
	z: [
		DIT_Item_AB<"raw_id",T_PrimitiveBox<`UU${string}`>>,
		T_DI_FromObj<{id: string;}>
	];
};