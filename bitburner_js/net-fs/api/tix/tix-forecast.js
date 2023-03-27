/** @param {NS} ns */
export async function main(ns) {
	ns.tail();
	ns.disableLog("disableLog");
	ns.disableLog("sleep");

	const tix=ns.stock;

	/** @type {Map<string,number>} */
	const num_map=new Map;

	const symbols=tix.getSymbols();
	for(let header_printed=false;;) {
		for(let sym of symbols.slice(0,18)) {
			const cur=tix.getForecast(sym);
			let prev=num_map.get(sym);
			if(prev===void 0) {num_map.set(sym,cur); continue;}
			if(prev===cur) continue;
			num_map.set(sym,cur);
			if(!header_printed) {
				ns.printf("--- TIX Forecast ---");
				header_printed=true;
			}
			ns.printf("%s:\t%s%%",sym,ns.formatNumber(tix.getForecast(sym)*100,3));
		}
		await ns.sleep(1000);
		header_printed=false;
	}
}