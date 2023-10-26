const word3_dict=[
	"art",
	"book",
	"building",
	"clothing",
	"company",
	"emblem",
	"food",
	"game",
	"garden",
	"hairstyle",
	"holiday",
	"landscape",
	"melody",
	"music",
	"painting",
	"palace",
	"pastime",
	"performance",
	"person",
	"plant",
	"poem",
	"profanity",
	"religion",
	"ritual",
	"smoking",
	"song",
	"sport",
	"symbol",
	"transport",
	"village",
	"weapon",
	"coin",
	"dance",
	"establishment",
	"drink",
	"god",
	"philosophy",
	"club",
	"treehouse",
	"political",
	"boat",
	"toy",
	"profession",
	"martial",
];
/**
 * @template T
 * @param {T[]} arr
 */
function arr_end(arr) {
	let v=arr.at(-1);
	if(v===void 0) throw new Error("arr_end");
	return v;
}
/**
 * @param {string} str
 */
function parse_sentence(str) {
	// remove period
	if(str.endsWith(".")) {
		str=str.slice(0,-1);
	}
	/**
	 * @param {{ type: string; }[]} parsed
	 * @param {string[]} parsed_src
	 */
	function parse_a(parsed,parsed_src) {
		parsed.push({type: "a"});
		parsed_src.shift();
		let word1=parsed_src.shift();
		if(word1===void 0) throw new Error("word1 null");
		if(word3_dict.includes(word1)) {
			return;
		}
		x: switch(word1) {
			case "category": {
				let word2=parsed_src.shift();
				if(word2!=="of") throw new Error("word2 not of");
				let word3=parsed_src.shift();
				if(word3===void 0) throw new Error("word3 null");
				if(!word3_dict.includes(word3)) {
					console.log("@w3",["w3",word3]);
					break x;
				}
				break x;
			}
			case "rare":
			case "local":
			case "traditional":
			case "national":
			case "popular": {
				let word2=parsed_src.shift();
				if(word2===void 0) throw new Error("word2 null");
				if(!word3_dict.includes(word2)) {
					console.log("@w3",["w2",word2]);
					break x;
				}
			} break x;
			case "plant": {
				let word2=parsed_src.shift();
				console.log(["w1",word1,"w2",word2]);
			} break x;
			case "sort":
			case "kind":
			case "type": {
				let word2=parsed_src.shift();
				if(word2!=="of") throw new Error("word2 not of");
				let word3=parsed_src.shift();
				if(word3===void 0) throw new Error("word3 null");
				if(!word3_dict.includes(word3)) {
					console.log("@w3",["w3",word3]);
					break x;
				}
			} break x;
			default: {
				console.log(["w1",word1]);
			} break;
		}
	}
	if(str.startsWith("This is ")) {
		let parsed=[];
		let parsed_src=str.split(/(?:[ ,]|\.\.\.)/);
		parsed_src.shift(); parsed_src.shift();
		parsed.push({type: "this_is"});
		switch(parsed_src[0]) {
			case "a": {
				parse_a(parsed,parsed_src);
			} break;
			case "usually": {
				parsed.push({type: "usually"});
				parsed_src.shift();
				let next=parsed_src.shift();
				if(next==="a") {
					parsed_src.unshift(next);
					parse_a(parsed,parsed_src);
					break;
				}
				console.log([arr_end(parsed).type,parsed_src[0]]);
				throw 1;
			}
			case "generally": {
				parsed.push({type: "generally"});
				parsed_src.shift();
				let next=parsed_src.shift();
				if(next==="a") {
					parsed_src.unshift(next);
					parse_a(parsed,parsed_src);
					break;
				}
				console.log([arr_end(parsed).type,parsed_src[0]]);
				throw 1;
			}
			default: {
				console.log("parsed default:",parsed_src[0]);
				throw 1;
			}
		}
	}
	return str;
}
/**
 * @param {string} str
 * @param {string} needle
 */
function split_at(str,needle) {
	let idx=str.indexOf(needle);
	if(idx===-1) return [str];
	let n_len=needle.length;
	let arr=[];
	let start=0;
	do {
		let sp=str.slice(start,idx+n_len);
		arr.push(sp);
		start=idx+n_len;
		idx=str.indexOf(needle,start);
	} while(idx!==-1);
	return arr;
}
async function run() {
	let dict=new Set;
	let description_set=new Set;
	let arr=[];
	for(let j=0;j<1;j++) {
		const request_count=4;
		for(let i=0;i<request_count;i++) {
			async function one_page() {
				let res=await fetch("https://louigiverona.com/iwgh/?page=dictionary");
				let rt=await res.text();
				let start_pos=rt.indexOf("table ",rt.indexOf("table ")+43)+57;
				let end_pos=rt.indexOf("</table>");
				rt=rt.slice(start_pos+26,end_pos-10);
				let page_arr=split_at(rt,"</p>");
				page_arr=page_arr.map(v => v.slice(3,-4));
				page_arr.forEach(v => {
					let [word,description]=v.split(" - ");
					word=word.slice(3,-4);
					dict.add(word);
					description=parse_sentence(description);
					description_set.add(description);
				});
			}
			arr.push(one_page());
		}
		let before_wait=dict.size;
		await Promise.all(arr);
		console.log("dict word num",dict.size-before_wait);
		arr.length=0;
	}
	let description_arr=[...description_set.values()].sort();
	for(let description of description_arr) {
		console.log("%o",description);
	}
}
await run();

export {};