type T_VW<T>=[T];
type V_VeDescObj={
	1: T_VW<3>;
	2: T_VW<3832>;
};

type R_ClickTrackingObj={
	4: T_VW<V_BinaryTimestamp>;
	6: ["external"];
}|{
	1: [number];
	2: [number];
	4: T_VW<V_BinaryTimestamp>;
}|{
	1: T_VW<0>;
	2: T_VW<number>;
	4: T_VW<V_BinaryTimestamp>;
	6: ["related-auto"];
	9: VW_Bigint<bigint>,
	19: T_VW<V_VeDescObj>;
};
type R_TrackingObj={
	1: T_VW<number>;
	2: T_VW<number>;
	4: T_VW<V_BinaryTimestamp>;
}|{
	1: T_VW<number>;
	2: T_VW<number>;
	3: T_VW<0>;
	4: T_VW<V_BinaryTimestamp>;
};
type R_CreatePlaylistObj={1: T_VW<4>;};
type R_SlotAdServingDataObj={
	1: T_VW<V_BinaryTimestamp>;
	3: {
		1: T_VW<5>;
		6: T_VW<1>;
		11: T_VW<2>;
	};
	4: T_VW<2>;
};

type GR_RootBinaryObj=
	|R_0x4c82a9c
	|R_0x12f639cf
	|R_0x14527fab
	|R_0x19ac5ceb
	|R_TrackingObj
	|D_BinaryCategoryObj
	|R_ClickTrackingObj
	|R_CreatePlaylistObj
	|R_ContinuationObj_SubObj
	|R_SlotAdServingDataObj
	|{4: [V_BinaryTimestamp];}
	;
;
type R_ContinuationObj_SubObj={
	49: {6: string;};
	72: string;
};
