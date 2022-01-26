function main() {
	var fnlist = [];
	var fnname = [];
	{
		function add_func(name, func) {
			var y = fnlist.push(func);
			if (fnname.indexOf(name) > -1) {
				throw SyntaxError("Name conflict")
			}
			var x = fnname.push(name);
			func.user_run_name = name;
			if (x != y) {
				throw SyntaxError("unbalanced function or name number")
			}
			return x;
		}
		var execute = function(t, pre_exec, post_exec) {
			var r_fnname = fnname[t]
			var func = fnlist[t]
			try {
				var sf = func.toString();
				if (sf.indexOf("/*arg_start*/") > -1) {
					let eval_func;
					{
						var func_split = sf.split(/(\/\*arg_start\*\/|\/\*arg_end\*\/)/)
						var no_head = func_split[4].trim().slice(1).trim().slice(1)
						var body = no_head.slice(0, no_head.length - 2)
						var is_strict
						var is_strict_p1 = body.split('"use strict"')
						is_strict = is_strict_p1.length > 1
						if (is_strict) {
							body = is_strict_p1[1].trim()
						}
						var args = "/*arg_start*/" + func_split[2].trim() + "/*arg_end*/";
						var n;
						let src_url = '//' + '# sourceURL=' + r_fnname;
						let func_str;
						if (is_strict) {
							func_str = `"use strict";\nconsole.log("run ${r_fnname}")\n${body}\n${src_url}`
							eval_func = new Function(args,func_str);
						} else {
							func_str = `console.log("run ${r_fnname}")\n${body}\n${src_url}`
							eval_func = new Function(args,func_str);
						}
						var s = eval_func.length
						if (window.hasOwnProperty('mc')) {
							mc.port2.onmessage = function() {}
							mc.port2.close()
							mc.port1.onmessage = function() {}
							mc.port1.close()
							delete window.mc;
							if (typeof mc != 'undefined') {
								window.mc = undefined
							}
						}
						console.log("fi:", eval_func.name == "anonymous", "len:", eval_func.length);
					}
					if (eval_func) {
						eval_func(func);
					}
					let ret = eval_func()
					if (post_exec)
						post_exec(ret);
					return ret;
				} else {
					if (pre_exec) {
						pre_exec(func);
					}
					let ret = func();
					if (post_exec)
						post_exec(ret);
					return ret;
				}
			} finally {}
			return;
		}
		let stt = eval(`(class {
			static #unused = this.#init();
			static #init(){
				
			}
			static _f(){}
			static _n = "<empty>";
			static n_on = true;
			static f_on = true;
		})`);
		window.CustomInputMatcher = class {
			constructor(t_needle, t_string_getter) {
				this.ts_get = t_string_getter;
				this.tr = t_needle;
			}
			get test_string() {
				return this.ts_get();
			}
			get test_needle() {
				return this.tr;
			}
		}
		var cur = class extends stt {
			static get f() {
				return this._f
			}
			static set f(f) {
				let cur = this._ln;
				this._lf = f;
				if (fnlist.indexOf(this._lf) == -1) {
					add_func(this._ln, this._lf)
				}
				if (cur instanceof CustomInputMatcher) {
					let custom_str = cur.test_string;
					let needle = cur.test_needle;
					if (custom_str.match(needle) == null) {
						this._f = f;
						return;
					}
				}
				if (this.f_on) {
					this.f_on = false
					this._f = f
				}
			}
			static get n() {
				return this._n
			}
			static set n(n) {
				let cur = n;
				if (cur instanceof CustomInputMatcher) {
					let custom_str = cur.test_string;
					let m_needle = cur.test_needle;
					if (m_needle instanceof RegExp) {
						let m_match = custom_str.match(m_needle);
						if (m_match == null) {
							this._ln = n;
							return;
						} else if (this.rx_off === undefined) {
							this.rx_off = true;
							this.rx_lx = n;
						}
					}
					if (typeof m_needle == 'string' && custom_str != m_needle) {
						this._ln = n;
						return;
					}
				}
				this._ln = n;
				if (this.n_on) {
					this.n_on = false
					this._n = n
				}
			}
		}
		let sym=Symbol();
		var cur__class = {[sym]:cur};
		cur.self_sym=sym;
		cur.funcs=fnlist;
		cur.names=fnname;
	}
	cur.n = 'js_wasm_importing';
	cur.f = function() {
		/*location.origin==="https://wasmbyexample.dev/"*/
		let fn = async function() {
			let fr = await fetch('/examples/importing-javascript-functions-into-webassembly/demo/rust/pkg/importing_javascript_functions_into_webassembly_bg.wasm');
			let cr, rd = fr.body.getReader();
			let u8;
			while (!(cr = await rd.read()).done) {
				let v = cr.value;
				if (u8) {
					v = u8.concat(u8, v)
				}
				u8 = v
			}
			u8[125] = 1;
			let u8_edx = 175 + 3;
			let u8_dt = u8[u8_edx];
			console.log(u8_dt);
			u8[175 + 3] = 128;
			u8[175 + 1] = 128;
			let u8_idx = u8.indexOf(128 + 40);
			console.log(u8_idx, u8.indexOf(192, u8_idx));
			u8[232] = 128 + 32;
			u8[234] = 128;
			u8[248] = 128 + 40;
			u8[250] = 128;
			u8[196] = 128;
			u8[194] = 128;
			window.module_bytes = u8;
			let wasm;
			function console_log_from_wasm() {
				wasm.console_log_from_wasm()
			}
			function __wbg_log_f48fd9f1562bf74d(arg0, arg1) {
				let varg0 = getStringFromWasm(arg0, arg1);
				console.log(varg0);
			}
			window.wasm_inst = await WebAssembly.instantiate(u8, {
				"./importing_javascript_functions_into_webassembly": {
					__wbg_log_f48fd9f1562bf74d: __wbg_log_f48fd9f1562bf74d
				}
			});
			wasm = window.wasm_inst.instance.exports;
			let cachedTextDecoder = new TextDecoder("utf-8");
			let wasm_memory_cache = wasm.memory.buffer;
			function getUint8Memory() {
				if (wasm_memory_cache.buffer !== wasm.memory.buffer) {
					wasm_memory_cache = new Uint8Array(wasm.memory.buffer)
				}
				return wasm_memory_cache
			}
			function getStringFromWasm(ptr, len) {
				return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len))
			}
			console_log_from_wasm();
			return wasm;
		};
		let pr = fn();
		pr.then(e=>console.log(e));
		return pr;
	}
	do_cur = function(...e) {
		var i;
		if (cur.rx_lx) {
			i = fnname.indexOf(cur.rx_lx);
		} else {
			i = fnname.indexOf(cur.n);
		}
		let px_fn = function(fn) {
			fn.argv = e;
		}
		var _result = execute(i, px_fn);
		return _result;
	}
	let ret;
	if (top !== window) {
		if (window.debugApi == undefined) {
			debugApi = new DebugAPI;
		}
		//console.log('restart on top frame');
		ret = debugApi.asyncExecuteFunction(top, main);
	} else {
		ret = do_cur();
	}
	if (ret instanceof Promise) {
		ret.then(()=>void 0).catch(e=>console.error(e));
	}
	cur.value=ret;
	return {...cur,_class:cur__class};
	//# sourceURL=snippet:///%24_2
}
window.__ret=main();
