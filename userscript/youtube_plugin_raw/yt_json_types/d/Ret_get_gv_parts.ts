// cSpell:ignoreRegExp /"(\dualdn?|5uae[z]|qxoe[d]|vgqs[rk])"/
type G_Gv_0=
	|"5uaez" // 2 [dig_final] [dig_user@5ua:[6,7,e,l,r,y]]
	|"5uald" // 2 [dig_final] [dig_user@5ua:[l,s,z]]
	|"9gv7e" // 2 [dig_final] [dig_user@9gv:[e,l]]
	|"9gv7l" // 2 [dig_final] [dig_user@9gv:[e,l,s]]
	|"9gv7z" // 2 [dig_final] [dig_user@9gv:[7]]
	|"a5mek" // 2 [dig_final] [dig_user@a5m]
	|"a5mlr" // 2 [dig_final] [dig_user@a5m]
	|"a5mse" // 2 [dig_final] [dig_user@a5m]
	|"ab5l6" // 2 [dig_final] [dig_user@ab5]
	|"ab5sz" // 3 [dig_final] [dig_user@ab5] [dns.domain]
	|"hp57k" // 2 [dig_final] [dig_user@hp5]
	|"hp57y" // 2 [dig_final] [dig_user@hp5]
	|"n4v7s" // 2 [dig_final] [dig_user@n4v]
	|"nx5s7" // 2 [dig_final] [dig_user@nx5]
	|"nx57y" // 2 [dig_final] [dig_user@nx5]
	|"o097z" // 2 [dig_final] [dig_user@o09]
	|"p5qls" // 2 [dig_final] [dig_user@p5q]
	|"p5qs7" // 2 [dig_final] [dig_user@p5q]
	|"q4fl6" // 2 [dig_final] [dig_user@q4f]
	|"q4flr" // 2 [dig_final] [dig_user@q4f]
	|"q4fze"
	|"qxo7r" // 2 [dig_final] [dig_user@qxo:[7]]
	|"qxoed" // 2 [dig_final] [dig_user@qxo:[7,e]]
	|"t0a7l" // 2 [dig_final] [dig_user@t0a:[7,e]]
	|"t0a7s" // 2 [dig_final] [dig_user@t0a:[7]]
	|"tt1e7" // 2 [dig_final] [dig_user@tt1:[7,l]]
	|"tt1el" // 2 [dig_final] [dig_user@tt1:[7,e]]
	|"vgqsk" // 2 [dig_final] [dig_user@vgq:[6,e,l,s,z]]
	|"vgqsr" // 2 [dig_final] [dig_user@vgq:[e,l,s,z]]
	;
;
// cSpell:ignoreRegExp /rr1.sn-((q4fl[r])[n]"?[67elsz][67deklrsyz]"?,?).googlevideo.com. \d+ IN A\s+\d+\.\d+\.\d+\.\d+/
// cSpell:ignoreRegExp /sn-\w+?\.googlevideo\.com.?"/
type PT_DigDomain=[
	``,
	// dig results
	`
	`,
	"rr1.sn-ab5sznzz.googlevideo.com.",
];
type PT_TypeS_NoRep=[
];
type PT_TypeS=[
	gen_g3_t2<"5ua",[
		"ez",
		"ld",
	]>,
	gen_g3_t2<"9gv7",["l","e"]>,
	gen_g3_t2<"a5m",["ek","lr","se"]>,
	gen_g3_t2<"hp57",["k","y"]>,
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
	]],
	["5uald",[
		"l7","ll","lr","ls",
		"s6","sd","se","sk","sl","sr","ss","sy","sz",
		"z7","ze",
	]],
	["9gv7e",["e6","ed","ek","ls"]],
	["9gv7l",["es","ez","le","s7"]],
	["9gv7z",["76","7e"]],
	["a5mek",["6d","6k","6l","6r","6s","6z","d6","de","dl","ds","dz","sd","sy","zk","zl","zr","zs"]],
	["a5mlr",["ek","l6","ll","ls","lz"]],
	["a5mse",["76","7l","7s","7z","ek","er","es","l7","le","ll"]],
	["ab5l6",["dr","dy","k6","kd","r6","rd","rk","rl","rr","rs","rz"]],
	["ab5sz",[
		"ld","lk","ly",
		"z6","zd","ze","zk","zl","zr","zs","zy","zz",
	]],
	["hp57k",["6r","6y","d6","dd","dk","dr","ds","dy","dz","k7"]],
	["hp57y",["7r","7y","e7","ee","l6","lr","ly","s7","se","sl","ss"]],
	["n4v7s",["ee","ey","l7","ll","lr","ls","ly","s7","se"]],
	["n8v7z",["lk","lr","ly","s6","s7","sd","se","sk","sl","sr","ss","sy","sz","z7","ze","zl"]],
	["nx5s7",["7d","7s","7y","7z","76","ee","el"]],
	["nx57y",["lk","sd","se","sk","sl","ss","sz"]],
	["o097z",["sd","se","sk","sl","sr","ss","sz","z7","zd","ze","zk","zr"]],
	["p5qls",["6l","7d","7l","7s","76","d6","dd","dk","dr","dz","rl","rr","y6"]],
	["p5qs7",["6d","sk","sr","zk","zr","zy"]],
	["q4fl6",[
		"66","6d","6s","6z",
		"lz",
		"s6","s7","sd","sk","sl","sr","ss","sy",
		"z6","z7","zy",
	]],
	["q4flr",[
		"7k","7r","7y",
		"e6","e7","ee","ek","el","er","es","ey","ez",
		"l6","l7","ld","le","lz",
		"sd","sk","sl","ss",
	]],
	["q4fze",["7e","7l","7s","ee"]],
	["qxo7r",["7k","7r","7y",]],
	["qxoed",["7k","e7","ee",]],
	["t0a7l",["7d","ee"]],
	["t0a7s",["7d"]],
	["tt1e7",["7k","ls","lz"]],
	["tt1el",["7l","el"]],
	["vgqsk",[
		"66","6s","6z",
		"e6","ed","ek","es","ez",
		"ld","lk","ll","lr","ls","ly","lz",
		"s7","se","sk",
		"z7","ze","zl","zs","zz",
	]],
	["vgqsr",[
		"e6","ed","ek","es","ez",
		"l6","ld","lk","ll","ls","lz",
		"s6","sd","sr","sy",
		"z6","z7","zd","zk","zs","zz",
	]],
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
	"6",
	"7",
	"d",
	"e",
	"k",
	"l",
	"r",
	"s",
	"y",
	"z",
];
type G_Gv_1_List_1=[
	/*     */"6","7","d","e","k","l","r","s","y","z",
];
type G_Gv_1=
	|`6${" "|" "|"d"|" "|" "|" "|"l"|" "|" "|"z"|" "}`
	|`7${"6"|" "|"d"|" "|"k"|"r"|"l"|"s"|"y"|"z"|" "}`
	|`d${"6"|" "|" "|" "|" "|" "|" "|"s"|"y"|"z"|" "}`
	|`e${"6"|"7"|" "|"e"|"k"|" "|"l"|"s"|"y"|"z"|" "}`
	|`k${" "|" "|"d"|" "|" "|" "|" "|" "|" "|" "|" "}`
	|`l${"6"|"7"|"d"|"e"|"k"|"r"|"l"|"s"|"y"|" "|" "}`
	|`r${" "|" "|" "|" "|" "|" "|"l"|" "|" "|" "|" "}`
	|`s${" "|"7"|"d"|"e"|"k"|"r"|"l"|"s"|" "|"z"|" "}`
	|`z${" "|"7"|"d"|"e"|"k"|"r"|" "|"s"|"y"|"z"|" "}`
	;
;
type D_GoogleVideoHostPartition={
	parts: ["sn","-",G_Gv_0,"n",G_Gv_1],
	partition: G_Gv_0,
	selector: G_Gv_1,
};
