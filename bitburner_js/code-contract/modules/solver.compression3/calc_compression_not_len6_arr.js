import {log_sel} from "./log_sel.js";
import {min_len_sel} from "./min_len_sel.js";

export function calc_compression_not_len6_arr(r_not_len6) {
	let show_l2_rest=false;
	let show_l2_before=true;
	if(r_not_len6.length===0)
		return;
	let sel2=min_len_sel(r_not_len6); sel2;
	let sel_before=sel2[0];
	if(sel_before[1]!=="before")
		throw new Error("Unhandled");
	let before_compress=sel_before[4];
	if(!before_compress)
		throw new Error("Unhandled");
	if(show_l2_before) {
		log_sel(sel2);
		console.log("sel_before: ",[before_compress[0]]);
		console.log("sel_before.item: ",[[before_compress[0][2]]]);
		console.log("sel_mode_after: ",before_compress[0][2]);
	}
	let sel2_rest=sel2[4];
	if(sel2_rest[1]!=="rest")
		throw new Error("Unhandled");
	if(show_l2_rest)
		console.log("i2:",sel2_rest);
}
