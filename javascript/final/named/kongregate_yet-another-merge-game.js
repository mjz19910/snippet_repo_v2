import {Runner} from "../support/Runner.js";

/* spell:words
--- version_list item 2 ---
v1 (cur): snippet_repo/javascript/final/kongregate_yet-another-merge-game.js
*/
function main() {
	/** @type {import("./__global.js").Holder} */
	let holder={
		use() {}
	};
	holder.use();
	class CustomInputMatcher {
		/**
		 * @param {any} t_needle
		 * @param {any} t_string_getter
		 */
		constructor(t_needle,t_string_getter) {
			this.ts_get=t_string_getter;
			this.tr=t_needle;
		}
		get test_string() {
			return this.ts_get();
		}
		get test_needle() {
			return this.tr;
		}
		str="";
	}
	let cur=new Runner;
	if("https://www.kongregate.com/games/cook1eegames/yet-another-merge-game") {
		/* cspell: disable-next-line */
		let rx=/https:\/\/www\.kongregate\.com\/games\/cook1eegames\/yet-another-merge-game/;
		//@cspell-enable
		let mx=() => location.origin+location.pathname;
		let mto=new CustomInputMatcher(rx,mx);
		cur.n=mto;
		mto.str="https://www.kongregate.com/games/cook1eegames/yet-another-merge-game";
	}
	cur.f=function() {
		let _function=function() {
			console.log('run');
			let do_zero_spawn_timer=false;
			if(do_zero_spawn_timer) {
				zero_spawn_timer();
			}
			function zero_spawn_timer() {
				game.spawnTime.cd=0;
			}
			if(window.cint)
				clearInterval(window.cint);
			if(window.citv)
				clearInterval(window.citv);
			window.citv=setInterval(function() {
				let g_u_maxObjects_int=Upgrade.apply(game.upgrades.maxObjects).toNumber();
				let g_mO_l=game.mergeObjects.length;
				if(g_mO_l>=g_u_maxObjects_int)
					return;
				let scd=game.spawnTime.cd;
				let scd_c=scd;
				for(;scd_c<30;)
					scd_c+=0.075;
				gameFunctions.decreaseSpawnCooldown(scd_c-scd);
			},100);
			window.cint=setInterval(function() {
				gameFunctions.maxUpgrades(game.matter,game.upgrades);
			},150);
			x: {
				let time_disabled=true;
				function time_main() {
					if(time_disabled) {
						return 0;
					}
					let tb=new Float64Array(1);
					function time_base() {
						let ps=performance.now();
						return performance.now()-ps;
					}
					function time_it() {
						let ps=performance.now();
						for(let i=0;i<8;i++) {
							tb[0]=0;
						}
						return performance.now()-ps;
					}
					let c=0
						,tc=1000;
					/**
					 * @param {number} tc
					 * @param {number} c
					 */
					function time_loop_1(tc,c) {
						for(let i=0;i<tc;i++)
							c+=time_it();
						return c;
					}
					/**
					 * @param {number} tc
					 * @param {number} c
					 */
					function time_loop_2(tc,c) {
						for(let i=0;i<tc;i++)
							c+=time_base();
						return c;
					}
					for(;c<120;) {
						c=time_loop_1(tc,0);
						console.log('time_2',c);
						tc*=2;
					}
					tc/=2;
					let ct=0;
					let cb=0;
					let tx=7;
					let carr=[];
					for(let i=0;i<tx;i++) {
						c=time_loop_1(tc,0);
						console.log('time_c1',c);
						c=time_loop_2(tc,0);
						console.log('time_c2',c);
					}
					for(let i=0;i<tx;i++) {
						c=time_loop_1(tc,0);
						carr.push(c);
						console.log('time_ct',c);
						ct+=c;
					}
					for(let i=0;i<tx;i++) {
						c=time_loop_2(tc,0);
						carr.push(c);
						console.log('time_cb',c);
						cb+=c;
					}
					let rt=ct-cb;
					let ret=(rt/tx)/tc;
					ret=ret*1000000;
					return ret;
				}
				let ret=time_main();
				return ret;
			}
		};
		if(document.gameiframe) {
			if(window.debugApi && 'asyncExecuteEval' in window.debugApi && typeof window.debugApi.asyncExecuteEval==='function') {
				return window.debugApi.asyncExecuteEval(document.gameiframe,_function);
			} else {
				throw new Error("Missing debugApi");
			}
		} else {
			if(top===window) {
				console.log('no document.gameiframe');
			}
		}
	};
	cur.value=cur.do_cur();
	return cur;
	//# sourceURL=snippet:///%24_2
}
window.__ret=main();
