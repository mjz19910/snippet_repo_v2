type T_UrlInfo_Join<T_Type extends string,T_PartArr extends string[],T_IdStr extends string>=
	T_PartArr extends [infer F]? {
		type: T_Type;
		tag: F;
		info_arr: [{raw_id: Join<[...T_PartArr,T_IdStr],"">;},{id: T_IdStr;}];
	}:{
		type: T_Type;
		tag: Join<T_PartArr,":">;
		info_arr: [{raw_id: Join<[...T_PartArr,T_IdStr],"">;},{id: T_IdStr;}];
	}
	;
;
