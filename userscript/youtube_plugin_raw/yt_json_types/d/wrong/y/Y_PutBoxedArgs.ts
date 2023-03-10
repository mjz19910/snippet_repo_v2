type Y_PutBoxedArgs=
	|["bigint",null,[string,make_item_group<bigint>]]
	|["boolean",null,[string,make_item_group<boolean>]]
	|["browse_id","FE",DI_BrowseId_FE]
	|["browse_id","MP",DI_BrowseId_MP]
	|["browse_id","SP",DI_BrowseId_SP]
	|["browse_id","VL:LL",DI_BrowseId_VL_LL]
	|["browse_id","VL:PL",DI_BrowseId_VL_PL]
	|["browse_id","VL:UC",DI_BrowseId_VL_UC]
	|["browse_id","VL:WL",DI_BrowseId_VL_WL]
	|["channel_id","UC",DI_A_ChannelId_UC]
	|["hashtag_id",null,DI_A_HashtagId]
	|["keys",null,[string,make_item_group<string|number>]]
	|["load_id",null,number]
	|["number",null,[string,make_item_group<number>]]
	|["play_next",null,DI_A_PlayNext]
	|["playlist_id","LL",DI_A_Playlist_LL]
	|["playlist_id","PL",DI_A_Playlist_PL]
	|["playlist_id","WL",DI_A_Playlist_WL]
	|["root_visual_element",null,[string,make_item_group<number>]]
	|["save_id",null,number]
	|["string",null,[string,make_item_group<string>]]
	|["user_id",null,DI_A_UserId]
	|["video_id",null,DI_A_VideoId]
	|["video_time",null,DI_VideoTime]
	|["guide_entry_id",null,GI_GuideEntry_Id]
	|["guide_entry_id","UC",DI_GuideEntry_UC]
	|["playlist_id","RD",DI_A_Playlist_RD]
	|["playlist_id","UU",DI_A_Playlist_UU]
	|["playlist_id","RD:MM",DI_A_Playlist_RD_MM]
	|["playlist_id","RD:CM:UC",DI_A_Playlist_RD_CM_UC]
	|["playlist_id","RD:GM:EM",DI_A_Playlist_RD_GM_EM]
	|["key","start_radio",DI_A_StartRadio]
	|["url_info",null,DI_A_StartRadio|DI_A_Playlist_PL|DI_A_HashtagId|DI_A_VideoId]
	;
;
