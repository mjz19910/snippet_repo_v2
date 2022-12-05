import arr from "./dynamic/enc_arr.mjs";
import first_run_code from "../api/first_run_code.js";

function start_process() {
	process_00(arr);
	first_run_code(arr);
}
/**
 * @param {number} a
 * @set _0x16d8 dx
 */
function dx(a) {
	return arr[a-0x1e9];
}

/**
 * @set _0x4aec3f get_enc_4_a
 * @param {number} _a
 * @param {number} _b
 * @param {number} _c
 * @param {number} _d
 * @param {number} a
 */
function get_enc_4_a(_a,_b,_c,_d,a) {
	return dx(a+0x298);
}

/**
 * @set _0x3d969b get_enc_4_b
 * @param {number} _a
 * @param {number} _b
 * @param {number} _c
 * @param {number} _d
 * @param {number} a
 */
function get_enc_4_b(_a,_b,_c,_d,a) {
	return dx(a+0x298);
}

/**
 * @type {(...x:number[])=>string}
 * @enc _0x314769 -> get_enc_4_c
 */
function get_enc_4_c(_b,_c,_d,_e,a) {
	return dx(a+0x298);
}

/**
 * @param {(string|undefined)[]} arr
 */
export function process_00(arr) {
	let target=0xd357d;
	while(!![]) {
		try {
			var cur=
				-parseInt(get_enc_4_a(0x15a,-0x1a,0x11b,-0x5,0xa6))+
				-parseInt(get_enc_4_a(-0xf5,-0x36,-0x82,0x4f,-0x67))+
				-parseInt(get_enc_4_b(0x18f,0x133,0xa5,0xfc,0xf6))+
				-parseInt(get_enc_4_c(0x24,-0x83,0xa0,-0x3d,-0xb))+
				-parseInt(get_enc_4_a(-0xb3,-0xf2,0x6,-0x36,-0x1d))+
				-parseInt(get_enc_4_c(0x87,0x10e,0x16a,0x78,0xb0))+
				parseInt(get_enc_4_a(0x17c,0x8c,0xb0,0x3e,0xb8))*
				parseInt(get_enc_4_a(0x37,-0x68,-0xc2,-0x67,-0x45));
			if(cur===target) break;
			else arr.push(arr.shift());
		} catch(_) {
			arr.push(arr.shift());
		}
	}
}

start_process();