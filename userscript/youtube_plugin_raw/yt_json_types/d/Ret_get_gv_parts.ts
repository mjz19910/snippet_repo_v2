// cSpell:ignoreRegExp /"(\dualdn?|5uaez|qxoed|vgqsk)"/
type G_Gv_0=
	|"5uaez"|"5uald"
	|"9gv7e"|"9gv7l"
	|"a5mek"|"a5mlr"|"a5mse"|"ab5l6"|"ab5sz"
	|"hp57k"|"hp57y"
	|"n4v7s"|"nx5s7"|"nx57y"
	|"o097z"
	|"p5qls"|"p5qs7"
	|"qxo7r"|"qxoed"
	|"t0a7l"|"t0a7s"
	|"vgqsk"
	;
;
// cSpell:ignoreRegExp /rr1.sn-((vgqsk|qxoed|ab5sz)[n][67elsz][67deklrsyz]).googlevideo.com. \d+ IN A\s+\d+\.\d+\.\d+\.\d+/
// cSpell:ignoreRegExp /sn-\w+?\.googlevideo\.com.?"/
type PT_DigDomain=[
	``,
	// dig results
	`
	`,
	"rr1.sn-ab5sznzz.googlevideo.com.",
];
type PT_TypeS_NoRep=[
	gen_g2_t1<"hp57k">,
];
type PT_TypeS=[
	gen_g3_t2<"5ua",[
		"ez",
		"ld",
	]>,
	gen_g3_t2<"9gv7",["l","e"]>,
	gen_g3_t2<"a5m",["ek","lr","se"]>,
	gen_g3_t2<"n",[
		gen_a3_t2<["4","8"],"v7",["s","z"]>,
		gen_a2_t2<"x5",["s7","7y"]>,
	]>,
	gen_g3_raw<"o","097z">,
	gen_g3_t2<"p",[gen_g3_or<"p5q",["ls","s7"]>]>,
	gen_g3_t2<"qxo",["7r","ed"]>,
];
type PT_TypeArr=[
	["5uaez",[
		"6l","6s",
		"7e",
		"e6","ed","ek","el","er","es","ey","ez",
		"l6","ld","le","lk","ll","lr","ls","ly","lz",
		"r6","rr","ry","rz",
		"y6","ys","yy","yz","z6","zd","zr","zy","zz",
	]],// hit
	["5uald",["l7","ll","lr","ls","s6","sd","se","sk","sl","sr","ss","sy","sz","z7","ze"]],// hit
	["9gv7e",["e6","ed","ek","ls"]],// hit
	["9gv7l",["es","ez","le","s7"]],// hit
	["a5mek",["6d","6k","6l","6r","6s","6z","d6","de","dl","ds","dz","sd","sy","zk","zl","zr","zs"]],// hit
	["a5mlr",["ek","l6","ll","ls","lz"]],// hit
	["a5mse",["76","7l","7s","7z","ek","er","es","l7","le","ll"]],// hit
	["ab5sz",[
		"ld","lk","ly",
		"z6","zd","ze","zk","zl","zr","zs","zy","zz",
	]],// hit
	["hp57k",["6r","6y","d6","dd","dk","dr","ds","dy","dz","k7"]],// hit
	["n4v7s",["ee","ey","l7","ll","lr","ls","ly","s7","se"]],// hit
	["n8v7z",["lk","lr","ly","s6","s7","sd","se","sk","sl","sr","ss","sy","sz","z7","ze","zl"]],// hit
	["nx5s7",["7d","7s","7y","7z","76","ee","el"]],// hit
	["nx57y",["lk","sd","se","sk","sl","ss","sz"]],// hit
	["o097z",["sd","se","sk","sl","sr","ss","sz","z7","zd","ze","zk","zr"]],
	["p5qls",["6l","7d","7l","7s","76","d6","dd","dk","dr","dz","rl","rr","y6"]],// hit
	["p5qs7",["6d","sk","sr","zk","zr","zy"]],// hit
	["qxo7r",["7k","7r","7y",]],// hit
	["qxoed",["7k","e7","ee",]],// hit
	["t0a7l",["7d","ee"]],// hit
	["t0a7s",["7d"]],// hit
	["vgqsk",[
		"6s","6z","66",
		"e6","ed","ek","es","ez",
		"ld","lk","ll","lr","ls","ly","lz",
		"s7","se","sk",
		"z7","ze","zl","zs","zz",
	]],// hit
	// 
];
type G_Gv_1_List=[
	"6d","6k","6l","6r","6s","6y","6z",
	"7d","7l","7s","7s","7y","7z","76",
	"d6","dd","de","dk","dl","dr","ds","ds","dy","dz",
	"ee","el","es","ey","ez",
	"k7","l7","le","lk","ll","lr","ls","ly",
	"rl","rr",
	"s7","s6","sd","se","sk","sl","sr","ss","sy","sz",
	"y6","z7",
	"zd","ze","zk","zl","zr","zs","zy",
];
type G_Gv_1_List_0=[
	"6","7","d","e","k","l","r","s","y","z",
];
type G_Gv_1_List_1=[
	"6","7","d","e","k","l","r","s","y","z",
];
// end ["p5qs7","zy"],
type G_Gv_1=
	|`6${"d"|"l"}`
	|`7${"6"|"d"|"k"|"s"|"y"|"z"}`
	|`d${"6"|"y"|"z"}`
	|`e${"l"|"e"|"y"}`
	|`l${"7"|"k"|"r"|"s"}`
	|`s${"d"|"e"|"k"|"l"|"r"|"s"|"z"}`
	|`z${"e"|"k"|"r"|"y"}`
	;
;
type D_GoogleVideoHostPartition={
	parts: ["sn","-",G_Gv_0,"n",G_Gv_1],
	partition: G_Gv_0,
	selector: G_Gv_1,
};
