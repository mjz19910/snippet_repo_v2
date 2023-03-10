//#region DStr
type DStr_KV_AKZ=DStr_DI_AKZ;
//#endregion


//#region AKZ
type KV_T_AKZ<K,V>={a: DStr_KV_AKZ; k: K; z: [V];};
//#endregion

type DI_T_KV_Z_MakeItemGroup<K extends string,T>=KV_T_AKZ<K,make_item_group<T>>;


type Ret_w_diz<T,T_Box extends KV_T_AKZ<string,make_item_group<T>>=KV_T_AKZ<string,make_item_group<T>>>=
	["one",["1",T],T_Box['z'][0],T_Box]|
	["arr",["2",T[]],T_Box['z'][0],T_Box]|
	["many",["3",T[][]],T_Box['z'][0],T_Box]|
	["typeof_name",["t",T_GetTypeof<T>],T_Box['z'][0],T_Box]|
	["instance_name",["i","array"],T_Box['z'][0],T_Box]
	;
;
// DSI_T_Item_ABD<string,T>


type DSI_T_Item_ABD<T_Type extends keyof J_StoreTypeMap,T>={
	key: `boxed_id:${T_Type}:${string}`;
	a: DST_KStr_AKLZ; k: "boxed_id"; l: T_Type; z: [KV_T_AKZ<string,make_item_group<T>>];
	descriptive_name?: "boxed_store";
	renames_arr?: DEX_Renames<[
		DRN_KeyIs<DST_KStr_AKLZ>,
		DRN_KeyType<T_Type>,
	]>;
};


type DST_MakeLM<L extends string,M extends string,ZV extends G_Primitives,T extends KV_T_AKZ<L,TMK_SuccessorX2<ZV>>=KV_T_AKZ<L,TMK_SuccessorX2<ZV>>>={
	key: `boxed_id:${L}:${M}:${ZV}`;
	a: DST_KStr_AKLMZ;
	k: "boxed_id";
	l: L;
	m: M;
	z: [T];
};
type DST_MakeLM_2<T extends KV_T_AKZ<string,TMK_SuccessorX2<V>>,L,M,V extends G_Primitives>={
	key: `boxed_id:${T["k"]}:${TZ_SuccessorX3<T>}`;
	a: DST_KStr_AKLMZ;
	k: "boxed_id";
	l: L;
	m: M;
	z: [T];
};
type DST_MakeLM_3<T extends KV_T_AKZ<string,TMK_SuccessorX2<V>>,L extends string,M extends string,V extends G_Primitives>={
	key: `boxed_id:${L}:${M}:${V}`;
	a: DST_KStr_AKLMZ;
	k: "boxed_id";
	l: L;
	m: M;
	z: [T];
};



type DST_T_ABLZ<L extends string|number,V extends string|number=string,T extends KV_T_AKZ<string|number,any>=KV_T_AKZ<string,any>>={
	key: `boxed_id:${L}:${V}`;
	a: DST_KStr_AKLZ;
	k: "boxed_id";
	l: L;
	z: [T];
};


type CV_ABC_KV<T extends {b: string; c: string; z: [any,...any];}>=KV_T_AKZ<`${T["b"]}:${T['c']}`,TZ_Successor<T>>;

type T_CopyArray_Modify<T extends any[],Acc extends any[]=[]>=T extends [infer F,...infer VR extends T[number][]]? T_CopyArray_Modify<VR,[KV_T_AKZ<F,T_PrimitiveBox<{}>>,...Acc]>:Acc;
type T_CopyArray_Modify_v2<T extends [string,any][],Acc extends any[]=[]>=T extends [[infer K,infer V],...infer VR extends T[number][]]? T_CopyArray_Modify_v2<VR,[KV_T_AKZ<K,T_PrimitiveBox<V>>,...Acc]>:Acc;
type T_DI_FromObj<T extends {}>=KV_T_AKZ<keyof T,T_PrimitiveBox<T[keyof T]>>;
type T_DI_FromObj2<T extends {}>=KV_T_AKZ<keyof T,T[keyof T]>;
type T_DI_FromKeysOfObj<T,K extends string[]>=K extends [infer F extends keyof T,...infer R extends string[]]? [KV_T_AKZ<F,T_PrimitiveBox<T[F]>>,...T_DI_FromKeysOfObj<T,R>]:[];
type T_DI_FromObjEx<T extends {}>=T_DI_FromKeysOfObj<T,T_DistributedKeysOf_2<T>> extends {length: 1;}? T_DI_FromKeysOfObj<T,T_DistributedKeysOf_2<T>>[0]:KV_T_AKZ<"list",T_DI_FromKeysOfObj<T,T_DistributedKeysOf_2<T>>>;

