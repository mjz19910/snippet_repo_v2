
/**
 * @param {string} str
 */
function parse_sentence(str) {
	// remove period
	if(str.endsWith(".")) {
		str=str.slice(0,-1);
	}
	if(str.endsWith(", especially if you suspect you are being lied to")) {
		str=str.slice(0,str.length-", especially if you suspect you are being lied to".length);
	}
	if(str.endsWith(", in that meaning used by the younger generation")) {
		str=str.slice(0,str.length-", in that meaning used by the younger generation".length);
	}
	if(str.endsWith(", but the exact meaning was lost")) {
		str=str.slice(0,str.length-", but the exact meaning was lost".length);
	}
	if(str.endsWith(", as a profanity")) {
		str=str.slice(0,str.length-", as a profanity".length);
	}
	if(str.endsWith(" but the meaning may vary depending on time of the day")) {
		str=str.slice(0,str.length-" but the meaning may vary depending on time of the day".length);
	}
	if(str.endsWith("... or something like that")) {
		str=str.slice(0,str.length-"... or something like that".length);
	}
	if(str.startsWith("This is ")) {
		let parsed_src=str.split(" ");
		parsed_src.shift(); parsed_src.shift();
		console.log(parsed_src);
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
		const request_count=2;
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
