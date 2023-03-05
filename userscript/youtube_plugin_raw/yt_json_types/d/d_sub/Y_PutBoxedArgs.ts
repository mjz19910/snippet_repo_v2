type DI_BrowseId_VL_WL={
	type: "browse_id";
	tag: "VL:WL";
	info_arr: [
		{
			raw_id: "VLWL";
		},
		{
			tag: "WL";
			value: DI_A_Playlist_WL;
		}
	];
};
type DI_BrowseId_VL_LL={
	type: "browse_id";
	tag: "VL:LL";
	info_arr: [
		{
			raw_id: "VLLL";
		},
		{
			tag: "LL";
			value: DI_A_Playlist_LL;
		}
	];
};
type DI_BrowseId_VL_PL={
	type: "browse_id";
	tag: "VL:PL";
	info_arr: [
		{
			raw_id: DU_BrowseId_Playlist;
		},
		{
			tag: "PL";
			value: DI_A_Playlist_PL;
		}
	];
};
type DI_BrowseId_VL=DI_BrowseId_VL_WL|DI_BrowseId_VL_LL|DI_BrowseId_VL_PL;
type Y_PutBoxedArgs=
	|["bigint",null,[string,make_item_group<bigint>]]
	|["boolean",null,[string,make_item_group<boolean>]]
	|["browse_id","FE",DI_BrowseId_FE]
	|["browse_id","MP",DI_BrowseId_MP]
	|["browse_id","SP",DI_BrowseId_SP]
	|["browse_id","VL",DI_BrowseId_VL]
	|["channel_id","UC",DI_ChannelId_UC]
	|["hashtag_id",null,DI_HashtagId]
	|["keys",null,[string,make_item_group<string|number>]]
	|["load_id",null,number]
	|["number",null,[string,make_item_group<number>]]
	|["play_next",null,DI_PlayNext]
	|["playlist_id","LL",DI_A_Playlist_LL]
	|["playlist_id","PL",DI_A_Playlist_PL]
	|["playlist_id","WL",DI_A_Playlist_WL]
	|["root_visual_element",null,[string,make_item_group<number>]]
	|["save_id",null,number]
	|["string",null,[string,make_item_group<string>]]
	|["user_id",null,DI_UserId]
	|["video_id",null,DI_VideoId]
	|["video_time",null,DI_VideoTime]
	|["guide_entry_id",null,DI_GuideEntryId]
	|["playlist_id","RD",DI_A_Playlist_RD]
	|["playlist_id","UU",DI_A_Playlist_UU]
	|["playlist_id","RD:MM",DI_A_Playlist_RD_MM]
	|["playlist_id","RD:CM:UC",DI_A_Playlist_RD_CM_UC]
	|["playlist_id","RD:GM:EM",DI_A_Playlist_RD_GM_EM]
	|["key","start_radio",DI_Key_StartRadio]
	;
;
type Y_PutBoxedArgs_n3=Exclude<Y_PutBoxedArgs,{length: 3;}>;
type Y_PutBoxedArgs_3=Extract<Y_PutBoxedArgs,{length: 3;}>;
type Y_PutBoxedRet_3=Extract<Y_PutBoxedRet,{args: {length: 3;};}>;
async function fk_put_boxed_id(version: number,...args: Y_PutBoxedArgs) {
	let idb_cls=await import("../../../zc_child_modules/YTPlugin_IndexedDB.user.js");
	let dr: DefaultServiceResolver={value: null,listeners: []};
	let t=new idb_cls.IndexedDBService(dr);
	switch(args[0]) {
		default: throw new Error();
		case "video_time": {
			let [tag,,value]=args;
			let ret=t.put_box({
				type: "boxed_id",
				tag,
				key: `boxed_id:${tag}:${value.raw_value}`,
				value,
			},version);
			return {args,ret};
		}
	}
}
type T_PutAwaitPromise<T extends Y_PutBoxedRet>=T extends infer R extends T? {args: R["args"]; ret: Awaited<R["w"]>;}:never;
type T_PutMakeAsyncImpl<N extends string,T extends {
	info_arr: [{raw_id: Y;}];
},Y extends string=T["info_arr"][0]["raw_id"]>={
	key: N; args: [N,T];
	w: Promise<{
		type: "boxed_id";
		tag: N;
		key: `boxed_id:${N}`;
		value: T;
	}>;
};
type T_PutMakeAsync<N extends string,T extends {info_arr: [{raw_id: string;}];}>=T_PutMakeAsyncImpl<N,T>;
type Y_PutBoxedRet=T_PutMakeAsync<"video_id",DI_VideoId>|{
	key: "video"; args: ["video",DI_VideoId];
	w: Promise<{
		type: "boxed_id";
		tag: "video";
		key: `boxed_id:video:null:${string}`;
		value: DI_VideoId;
	}>;
}|{
	key: "user_id"; args: ["user_id",DI_UserId];
	w: Promise<{
		type: "boxed_id";
		tag: "user_id";
		key: `boxed_id:user_id:${string}`;
		value: DI_UserId;
	}>;
}|{
	key: "play_next"; args: ["play_next",DI_PlayNext];
	w: Promise<{
		type: "boxed_id";
		tag: "play_next";
		key: "boxed_id:play_next:1";
		value: DI_PlayNext;
	}>;
}|{
	key: "playlist_id"; args: ["playlist_id",DI_A_Playlist_PL];
	w: Promise<{
		type: "boxed_id";
		tag: "playlist_id";
		key: `boxed_id:playlist_id:PL:${string}`;
		value: DI_A_Playlist_PL;
	}>;
}|{
	key: "playlist_id"; args: ["playlist_id","RD",DI_A_Playlist_RD];
	w: Promise<{
		type: "boxed_id";
		tag: "playlist_id";
		key: "boxed_id:playlist_id:RD";
		value: DI_A_Playlist_RD;
	}>;
}|{
	key: "playlist_id"; args: ["playlist_id","RD:CM:UC",DI_A_Playlist_RD_CM_UC];
	w: Promise<{
		type: "boxed_id";
		tag: "playlist_id";
		key: `boxed_id:playlist_id:RD:CM:UC:${string}`;
		value: DI_A_Playlist_RD_CM_UC;
	}>;
}|{
	key: "playlist_id"; args: ["playlist_id","RD:GM:EM",DI_A_Playlist_RD_GM_EM];
	w: Promise<{
		type: "boxed_id";
		tag: "playlist_id";
		key: `boxed_id:playlist_id:RD:GM:EM:${string}`;
		value: DI_A_Playlist_RD_GM_EM;
	}>;
}|{
	key: "playlist_id"; args: ["playlist_id","RD:MM",DI_A_Playlist_RD_MM];
	w: Promise<{
		type: "boxed_id";
		tag: "playlist_id";
		key: `boxed_id:playlist_id:RD:MM:${string}`;
		value: DI_A_Playlist_RD_MM;
	}>;
}|{
	key: "playlist_id"; args: ["playlist_id",DI_A_Playlist_UU];
	w: Promise<{
		type: "boxed_id";
		tag: "playlist_id";
		key: "boxed_id:playlist_id:UU";
		value: DI_A_Playlist_UU;
	}>;
}|{
	key: "hashtag_id"; args: ["hashtag_id",DI_HashtagId];
	w: Promise<{
		type: "boxed_id";
		tag: "hashtag_id";
		key: `boxed_id:hashtag_id:${string}`;
		value: DI_HashtagId;
	}>;
}|{
	key: "browse_id"; args: ["browse_id",DI_G_BrowseId];
	w: Promise<{
		type: "boxed_id";
		tag: "browse_id";
		key: `boxed_id:browse_id:VLPL${string}`;
		value: DI_G_BrowseId;
	}>;
}|{
	key: "channel_id"; args: ["channel_id",DI_ChannelId_UC];
	w: Promise<{
		type: "boxed_id";
		tag: "channel_id";
		key: `boxed_id:channel_id:UC${string}`;
		value: DI_ChannelId_UC;
	}>;
}|{
	key: "video_time"; args: ["video_time",DI_VideoTime];
	w: Promise<{
		type: "boxed_id";
		tag: "video_time";
		key: `boxed_id:video_time:${number}s`;
		value: DI_VideoTime;
	}>;
}|{
	key: "bigint"; args: ["bigint",string,make_item_group<bigint>];
	w: Promise<{
		key: `boxed_id:bigint:${string}`;
		base: "boxed_id";
		type: "bigint";
		id: string;
		value: make_item_group<bigint>;
	}>;
}|{
	key: "boolean"; args: ["boolean",string,make_item_group<boolean>];
	w: Promise<{
		key: `boxed_id:boolean:${string}`;
		base: "boxed_id";
		type: "boolean";
		id: string;
		value: make_item_group<boolean>;
	}>;
}|{
	key: "number"; args: ["number",string,make_item_group<number>];
	w: Promise<{
		key: `boxed_id:number:${string}`;
		base: "boxed_id";
		type: "number";
		id: string;
		value: make_item_group<number>;
	}>;
}|{
	key: "string"; args: ["string",string,make_item_group<string>];
	w: Promise<{
		key: `boxed_id:string:${string}`;
		base: "boxed_id";
		type: "string";
		id: string;
		value: make_item_group<string>;
	}>;
}|{
	key: "keys"; args: ["keys",string,make_item_group<string|number>];
	w: Promise<{
		key: `boxed_id:keys:${string}`;
		base: "boxed_id";
		type: "keys";
		id: string;
		value: make_item_group<string|number>;
	}>;
}|{
	key: "root_visual_element"; args: ["root_visual_element",string,make_item_group<number>];
	w: Promise<{
		key: `boxed_id:root_visual_element:${string}`;
		base: "boxed_id";
		type: "root_visual_element";
		id: string;
		value: make_item_group<number>;
	}>;
}|{
	key: "load_id"; args: ["load_id",number];
	w: Promise<{
		key: "boxed_id:a:load_id";
		type: "load_id";
		base: "boxed_id";
		id: number;
	}>;
}|{
	key: "save_id"; args: ["save_id",number];
	w: Promise<{
		key: "boxed_id:a:save_id";
		type: "save_id";
		base: "boxed_id";
		id: number;
	}>;
};
type BScratch1=Extract<Y_PutBoxedArgs,["browse_id","FE",DI_BrowseId_FE]>;
type MakeInfoBoxArgs<T extends {type: any;}>=T extends infer R extends T? [R["type"],R]:never;