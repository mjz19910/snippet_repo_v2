/** @arg {string[]} arr */
export function to_token_arr(arr,level=0) {
	/** @type {string[]} */
	let ret=[];
	/** @param {string} str */
	function is_open(str) {
		return str==="{}"[0]||str==="()"[0]||str==="[]"[0];
	}
	/** @param {string} str */
	function is_close(str) {
		return str==="{}"[1]||str==="()"[1]||str==="[]"[1];
	}
	for(let i=0;i<arr.length;i++) {
		let cur=arr[i];
		if(cur&&is_close(cur)) {
			level--;
		}
		let item=cur.split(/([;])/).filter(e => e!=="");
		let next_regex=/([()\[\],=]|\s|var|function)/;
		if(item.length>1) {
			let next=to_token_arr(item,level);
			for(let i=0;i<next.length;i++) {
				let cur=next[i];
				let item=cur.split(next_regex).filter(e => e!=="");
				let final=to_token_arr(item,level);
				ret.push(...final);
			}
		} else {
			let next=item[0];
			if(next.length>1)
				x: {
					let cur=next;
					let item=cur.split(next_regex).filter(e => e!=="");
					if(item.length===1) {
						ret.push(next);
						break x;
					}
					let final=to_token_arr(item,level);
					ret.push(...final);
					break x;
				} else {
				ret.push(next);
			}
		}
		if(arr[i]&&is_open(cur)) {
			level++;
		}
	};
	return ret;
}
