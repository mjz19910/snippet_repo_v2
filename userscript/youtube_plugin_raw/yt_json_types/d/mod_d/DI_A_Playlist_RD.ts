type DI_A_Playlist_RD={
	a: "DI:A";
	b: "playlist_id";
	c: "RD";
	z: [
		T_DI_FromObj<{raw_id: `RD${string}`;}>,
		T_DI_FromObj<{id: string;}>,
	];
};