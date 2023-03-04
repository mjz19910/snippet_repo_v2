type Y_PutBoxedArgs=
	|["bigint",string,make_item_group<bigint>]
	|["load_id"|"save_id",number]
	|["root_visual_element"|"number",string,make_item_group<number>]
	|["string",string,make_item_group<string>]
	|["keys",string,make_item_group<string|number>]
	|["boolean",string,make_item_group<boolean>]
	|["video_time",`${number}s`]
	;
;
