// cSpell:ignoreRegExp /"sn-(?:nx57yn(?:lk|sl)|n4v7snls)"/
type G_VideoHostnames_Gen=T_Split<(D_googlevideo_host_nx57yn|D_googlevideo_host_nx5s7n)[number],".">[0];
type G_VideoHostnames=|G_VideoHostnames_U|G_VideoHostnames_Gen;
type G_VideoHostnames_U=
	|"sn-n4v7snls"
	;
;
type D_VideoPlaybackShape_LS_Params={
	mh: "B2";
	mm: `${31},${26}`;
	// cspell:disable-next
	mn: `${G_VideoHostnames},${G_VideoHostnames}`;
	ms: "au,onr";
	mv: "m";
	mvi: "3";
	pl: "24";
	// cspell:disable-next
	initcwndbps: `${number}`;
};
