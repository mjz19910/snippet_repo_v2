export function time_main() {
	const tb = new Float64Array(1);
	function time_base() {
		const ps = performance.now();
		return performance.now() - ps;
	}
	function time_it() {
		const ps = performance.now();
		for (let i = 0; i < 8; i++) {
			tb[0] = 0;
		}
		return performance.now() - ps;
	}
	let c = 0;
	let tc = 1000;
	/** @arg {number} tc @arg {number} c */
	function time_loop_1(tc, c) {
		for (let i = 0; i < tc; i++) {
			c += time_it();
		}
		return c;
	}
	/** @arg {number} tc @arg {number} c */
	function time_loop_2(tc, c) {
		for (let i = 0; i < tc; i++) {
			c += time_base();
		}
		return c;
	}
	for (; c < 120;) {
		c = time_loop_1(tc, 0);
		console.log("time_2", c);
		tc *= 2;
	}
	tc /= 2;
	let ct = 0;
	let cb = 0;
	const tx = 7;
	const carr = [];
	for (let i = 0; i < tx; i++) {
		c = time_loop_1(tc, 0);
		console.log("time_c1", c);
		c = time_loop_2(tc, 0);
		console.log("time_c2", c);
	}
	for (let i = 0; i < tx; i++) {
		c = time_loop_1(tc, 0);
		carr.push(c);
		console.log("time_ct", c);
		ct += c;
	}
	for (let i = 0; i < tx; i++) {
		c = time_loop_2(tc, 0);
		carr.push(c);
		console.log("time_cb", c);
		cb += c;
	}
	const rt = ct - cb;
	return ((rt / tx) / tc) * 1000000;
}