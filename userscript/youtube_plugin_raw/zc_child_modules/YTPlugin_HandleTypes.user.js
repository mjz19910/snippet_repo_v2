// ==UserScript==
// @name	YTPlugin HandleTypes Service
// @namespace	https://github.com/mjz19910/
// @version	0.1.2
// @description	try to take over the world!
// @author	@mjz19910
// @copyright	@mjz19910 2020-2023
// @match	https://*.youtube.com/*
// @grant	none
// @run-at	document-start
// @updateURL	https://github.com/mjz19910/snippet_repo/raw/master/userscript/youtube_plugin_raw/za_userscript_meta/YTPlugin_HandleTypes.meta.js
// @downloadURL	https://github.com/mjz19910/snippet_repo/raw/master/userscript/youtube_plugin_raw/zc_child_modules/YTPlugin_HandleTypes.user.js
// ==/UserScript==
/* eslint-disable no-native-reassign,no-implicit-globals,no-undef,no-lone-blocks,no-sequences */

const {as,base64_url_dec,split_string_once,MyReader,split_string,do_export,as_any,JsonReplacerState}=require("./YtPlugin_Base.user"); const {ECatcherService}=require("./YTPlugin_ECatcherService.user"); const {ServiceMethods}=require("./YTPlugin_ServiceMethods.user");

//#region module setup
const __module_name__="mod$HandleTypes";
if(!window.__youtube_plugin_base_loaded__) {throw new Error("Failed to load base plugin");}
if(window.__yt_plugin_log_imports__) console.log("Load HandleTypes Service");
/** @private @arg {(x:typeof exports)=>void} fn */
function export_(fn,flags={global: false}) {do_export(fn,flags,exports,__module_name__);}
export_(exports => {exports.__is_module_flag__=true;});
//#endregion
// [new_fexp_expected]
ECatcherService.known_experiments.push(...[
	[24456736],
	[24486981],
].flat());
//#region HandleTypes
class HandleTypes extends ServiceMethods {
	//#region remote service plugins
	/** @api @public @arg {IndexedDBService} service @arg {number} old_version @arg {IDBDatabase} db */
	indexed_db_createDatabaseSchema(service,old_version,db) {
		if(old_version<1) {
			service.create_store("video_id",db);
			service.create_store("hashtag_id",db);
			service.create_store("boxed_id",db);
			service.create_store("channel_id",db);
			service.create_store("playlist_id",db);
			service.create_store("browse_id",db);
		}
	}
	//#endregion
	//#region other
	/** @arg {D_ProtobufObj[]} x */
	tr_arr_to_obj(x) {
		if(!x) {debugger; return null;}
		/** @private @type {V_ParamObj} */
		let res_obj={};
		/** @arg {number} id @arg {V_Param} obj */
		const add_obj=(id,obj) => {
			res_obj[id]??=["v_param_arr",[]];
			res_obj[id][1].push(obj);
		};
		for(let v of x) {
			switch(v[0]) {
				default: debugger; break;
				case "child": {
					let [,id,a,b]=v;
					if(b===null) {
						let decoded_string=this._decoder.decode(a);
						if(decoded_string===null) {debugger; continue;}
						add_obj(id,["v_raw_child",a,b,["string",decoded_string]]);
						continue;
					}
					let c=this.tr_arr_to_obj(b);
					if(c===null) {
						let decoded_string=this._decoder.decode(a);
						if(decoded_string===null) {debugger; continue;}
						add_obj(id,["v_child_str",a,null,["string",decoded_string]]);
						continue;
					}
					let decoded_string=this._decoder.decode(a);
					if(decoded_string===null) {debugger; continue;}
					add_obj(id,["v_child",a,c,["string",decoded_string]]);
				} break;
				case "data32": {
					let [,id,a]=v;
					add_obj(id,["v_data32",a]);
				} break;
				case "data64": {
					let [,id,a,b]=v;
					add_obj(id,["v_data64",a,b]);
				} break;
				case "data_fixed32": {
					let [,id,a]=v;
					add_obj(id,["v_data_fixed32",a]);
				} break;
				case "data_fixed64": {
					let [,id,a]=v;
					add_obj(id,["v_data_fixed64",a]);
				} break;
				case "group": {
					let [,id,a]=v;
					let res=this.tr_arr_to_obj(a);
					if(res===null) return null;
					add_obj(id,["v_group",res]);
				} break;
				case "info": {
					let [,id,a]=v;
					add_obj(id,["v_info",a]);
				} break;
				case "struct": {
					let [,id,a]=v;
					let res=this.tr_arr_to_obj(a);
					if(res) {
						add_obj(id,["v_struct",res]);
					} else {
						debugger;
					}
				} break;
				case "error": return null;
			}
		}
		/*
		let x1=this.make_param_map(x);
		if(!x1) {debugger; return null;}
		return this.convert_map_to_obj(x1);*/
		return res_obj;
	}
	/** @arg {V_ParamMapValue} x @returns {V_ParamObj|null} */
	tr_to_param_item(x) {
		if(typeof x==='string') return {0: ["v_param_arr",[["v_raw",["string",x]]]]};
		if(typeof x==="number") return {0: ["v_param_arr",[["v_raw",["number",x]]]]};
		if(x instanceof Map) {
			let x1=this.tr_map_to_obj(x);
			if(!x1) {debugger; return null;}
			return {0: ["v_param_arr",[["v_raw",["V_ParamMapType",x]]]]};
		}
		if(x instanceof Array) {
			if(x[0]==="bigint") return {0: ["v_param_arr",[["v_raw",["bigint",x[2]]]]]};
			if(x[0]==="group") {
				const [,r]=x;
				let vr=this.tr_arr_to_obj(r);
				if(!vr) {debugger; return null;}
				return vr;
			}
			if(x[0]==="failed") {debugger; return null;}
			x==="";
			return null;
		}
		if(x instanceof Uint8Array) return {0: ["v_param_arr",[["v_raw",["binary",x]]]]};
		x==="";
		return null;
	}
	/** @arg {V_ParamMapType} x @returns {V_ParamObj|null} */
	tr_map_to_obj(x) {
		/** @template T @arg {T[]} x */
		function first(x) {
			if(x.length!==1) return null;
			return x[0];
		}
		/** @type {V_ParamObj} */
		let res={};
		debugger;
		for(let k of x.keys()) {
			let value=x.get(k);
			if(k in res) {
				debugger;
			}
			if(value===void 0) {debugger; continue;}
			res[k]??=["v_param_arr",[["v_raw",["array",[]]]]];
			let cv=res[k];
			let ca=cv[1][0];
			if(cv[0]!=="v_param_arr") {debugger; continue;}
			if(ca[0]!=="v_raw") {debugger; continue;}
			if(ca[1][0]!=="array") {debugger; continue;}
			const t=ca[1][1];
			if(value.length===0) {
				t.push({});
				continue;
			}
			if(value.length!==1) {
				/** @template T @arg {T|null} x @returns {x is T} */
				function is_not_null(x) {return x!==null;}
				let v1=value.map(x => {
					let r=this.tr_to_param_item(x);
					if(r===null) {debugger; return null;}
					return r;
				}).filter(is_not_null);
				t.push(...v1);
				continue;
			}
			let v2=first(value);
			if(v2===null) {debugger; continue;}
			let v3=this.tr_to_param_item(v2);
			if(v3===null) {debugger; continue;}
			t.push(v3);
		}
		return res;
	}
	/** @type {([type:"number",cf:string,key:string,size:"milliseconds",value:number])[]} */
	log_buffer=[];
	/** @type {Promise<null>|null} */
	loading_promise=null;
	load_moment_js_if_not_loaded() {
		if(this.loading_promise!==null) return this.loading_promise;
		if(this.is_moment_js_loading) return null;
		let s=document.createElement("script");
		s.src="https://momentjs.com/downloads/moment.min.js";
		this.is_moment_js_loading=true;
		this.loading_promise=new Promise((a) => {
			s.onload=() => {
				this.is_moment_js_loaded=true;
				this.loading_promise=null;
				a(null);
			};
			document.head.append(s);
		});
		return this.loading_promise;
	}
	async run_logger() {
		if(this.log_buffer.length===0) return;
		let ms_set=new Set;
		for(let log of this.log_buffer) {
			let [type,cf1,cf2,size,value]=log;
			if(type!=="number") continue;
			if(ms_set.has(value)) continue;
			// `moment(x/1000).toString()` -> "Sun Feb 19 2023 12:32:55 GMT-0700"
			if(value>=0b101111101_010001_0010_100111_001_11110110110_000000000000) {
				ms_set.add(value);
				let skip=true;
				if(skip) break;
				let lp=this.load_moment_js_if_not_loaded();
				if(lp!==null) await lp;
				let moment=require("moment");
				switch(size) {
					case "milliseconds": {
						let as_moment=moment(value/1000);
						let now_moment=moment(); let load_moment=moment(this.client_now);
						let diff_from_load_time=as_moment.diff(load_moment)/1000;
						let diff_from_now=as_moment.diff(now_moment)/1000;
						// skip time that is now
						if(diff_from_now>-5&&diff_from_now<5) break;
						// skip time that is close to first load
						if(diff_from_load_time>-5&&diff_from_load_time<5) break;
						console.group("[run_logger_moment] [moment.js]");
						console.log(`[cf1:${cf1}]`,`[cf2:${cf2}]`,`[type:${type}] [size:${size}]`);
						console.log(`[from_load:${diff_from_load_time}] [${as_moment.from(load_moment)}]`);
						console.log(`[from_now:${diff_from_now}] [${as_moment.from(now_moment)}]`);
						console.groupEnd();
					} break;
				}
				continue;
			}
			console.log(cf1,cf2,value);
		}
	}
	/** @type {number} */
	static client_now=Date.now();
	client_now=HandleTypes.client_now;
	/** @type {number|null} */
	request_start_time=null;
	/** @type {null|Promise<void>} */
	imm_wait_promise=null;
	immediate_run_logger() {
		if(this.imm_wait_promise) return;
		let wait_promise=Promise.resolve().then(this.run_logger.bind(this)).then(() => {
			this.imm_wait_promise=null;
		});
		this.imm_wait_promise=wait_promise;
	}
	/** @template {number} T @arg {T} t @arg {{1:T_D32<number>}} x @returns {x is {1:T_D32<T>}} */
	is_tp_xx(x,t) {return x[1][0]==="v_param_arr"&&x[1][1][0][1]===t;}
	/** @template {number} T @arg {T} t @arg {{2:T_D32<number>}} x @returns {x is {2:T_D32<T>}} */
	is_tp_xx_2(x,t) {return x[2][0]==="v_param_arr"&&x[2][1][0][1]===t;}
	/** @private @arg {V_BinaryTimestamp} x */
	V_BinaryTimestamp(x) {
		const cf="V_BinaryTimestamp";
		const {1: request_timestamp_milli_utc,2: microseconds_ts,3: nanoseconds_ts}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.log_buffer.push(["number",`max_gen:${cf}:binary_ts_gen`,"f1","milliseconds",this.T_D32(request_timestamp_milli_utc)]);
		this.immediate_run_logger();
		let mts=this.T_FD32(microseconds_ts);
		x: {
			if(mts<=0b1010111011010101100110010011) break x;
			console.log(`-- [max_gen:V_BinaryTimestamp_gen:f2] --\n\n[0b${mts.toString(2)}]`);
		}
		let nts=this.T_FD32(nanoseconds_ts);
		x: {
			if(nts<=0b11111111000011111010011111000000) break x;
			console.log(`-- [max_gen:V_BinaryTimestamp_gen:f3] --\n\n[0b${(nts).toString(2)}]`);
		}
	}
	/** @private @arg {P_ParamParse} cf @arg {V_ParamObj} x */
	decode_binary_object_log_info(cf,x) {
		this._continuation_logged_str.push(cf);
		const n_cf=`P_${cf.replaceAll(".","_")}`;
		this.codegen_typedef_bin(n_cf,x,false);
		let str_arr=[""];
		/** @arg {string} code */
		function ap(code) {str_arr.push(`${"\t".repeat(pad)}${code}`);}
		let pad=1;
		ap(`case "${cf}": {`);
		pad+=1;
		ap(`/** @type {${n_cf}} */`);
		ap(`this.${n_cf}(u);`);
		pad-=1;
		ap(`} break;`);
		console.log(`-- [binary_gen_case:${cf}] --\n${str_arr.join("\n")}`);
		console.log(`-- [binary_gen_function:${cf}] --\n\n/** @private @arg {${n_cf}} x */\n${n_cf}(x) {x;}`);
	}
	/** @protected @template T @arg {[T]} x */
	unwrap_tuple_1(x) {
		if(x.length!==1) return null;
		return x[0];
	}
	/** @protected @template {(string|number)[]} T @template {T} R @arg {T} src @arg {R} target @returns {src is R} */
	is_eq_keys(src,target) {return this.eq_keys(src,target);}
	/** @template U @template {U[]} T @arg {T} x @returns {Join<{[R in keyof T]:`${T[R]}`},".f">} */
	fmt_arr(x) {
		return as(x.map(v => `${v}`).join(".f"));
	}
	/** @arg {"continuation_token.data.f49"} cf @arg {string} x */
	_continuation_token_data_f49(cf,x) {
		let x1=decodeURIComponent(x);
		let buffer=base64_url_dec.decodeByteArray(x1);
		if(!buffer) {debugger; return;}
		let c_pos=0;
		for(;c_pos<6;c_pos++) this.save_number(`${cf}.${c_pos}`,buffer[c_pos]);
		{const n_len=4,na_arr=[...buffer.slice(c_pos,c_pos+n_len)]; this.save_number_arr(`${cf}.${c_pos}-${c_pos+n_len}`,na_arr); c_pos+=n_len;}
		{let n_len=4; console.log(`[continuation_token_data_f49_log] [range:${c_pos}-${c_pos+n_len}]`,buffer.slice(c_pos,c_pos+4));}
	}
	cg_mismatch_set=new Set();
	/** @type {[string,string][]} */
	cg_mismatch_list=[];
	/** @template A1,A2,A3,A4 @template {[(a1:A1,a2:A2,a3:A3,a4:A4,...n:any[])=>void]} T @arg {[T,A1,A2,A3,A4]} arg0 */
	make_bind([func,a1,a2,a3,a4]) {return [func,a1,a2,a3,a4];}
	//#endregion
	//#region Renderer Templates & Binary Templates; T & TV
	/** @private @arg {CF_T_Attachment} cf @template {{startIndex:number;length:number;}} T @arg {T} x */
	T_Attachment(cf,x) {
		const {startIndex,length,...y}=this.s(cf,x);
		this.a_primitive_num(startIndex);
		this.a_primitive_num(length);
		return y;
	}
	/** @private @template {number} T @arg {T_D32<T>} x */
	T_D32(x) {return this.T_RawChild(x)[1];}
	/** @private @template {number} T @arg {T_D32<T>} x */
	T_D32_v(x) {return this.T_RawChild(x)[1];}
	/** @private @template {bigint} T @arg {T_D64<T>} x */
	T_D64(x) {return this.T_RawChild(x)[2];}
	/** @private @template {number} T @arg {T_FD32<T>} x */
	T_FD32(x) {return this.T_RawChild(x)[1];}
	/** @private @template{bigint} T @arg {T_FD64<T>} x */
	T_FD64(x) {return this.T_RawChild(x)[1];}
	/** @protected @template T @arg {T_VW<T>} x */
	T_VW(x) {return this.T_RawChild(x)[2];}
	/** @protected @template {bigint} T @arg {T_VW_Bigint<T>} x */
	T_VW_Bigint(x) {return this.T_RawChild(x)[2];}
	/** @private @template {string} T @arg {TV_Str<T>} x */
	TV_Str(x) {return this.T_RawChild(x)[3][1];}
	/** @protected @template T @template {string} Str @arg {T_VW<T>|TV_Str_CS<Str>} x */
	T_PArr_1(x) {return x[1];}
	/** @protected @template T @arg {T_PArr_1<[T]>} x */
	T_RawChild(x) {
		if(x===void 0) debugger;
		return x[1][0];
	}
	/** @template {{}} T @arg {T} x @arg {keyof T} k */
	T_EP_In(x,k) {return x[k];}
	/** @protected @template T @arg {T_Command_TP<T>} x @arg {(this:this,x:T)=>void} f */
	T_Command_TP(x,f) {
		const cf="T_Command_TP";
		const {trackingParams,command: a,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.trackingParams(trackingParams);
		f.call(this,a);
	}
	//#endregion
	//#region is_T
	/** @arg {P_EntityKey} x @template {number} T @arg {T} t @returns {x is {4:T_D32<T>;}} */
	is_T_D32_at(x,t) {return x[4][1][0][1]===t;}
	/** @arg {T_D32<number>|T_D64<bigint>} x @returns {x is T_D32<number>} */
	is_T_D32(x) {return x[1][0][0]==="v_data32";}
	/** @arg {T_VW<any>|TV_Str<string>} x @returns {x is T_VW<any>} */
	is_T_VW(x) {return x[1][0][0]==="v_child";}
	//#endregion
	//#region moved data methods
	/** @public @arg {D_WebPlayerConfig} x */
	D_WebPlayerConfig(x) {
		const cf="D_WebPlayerConfig";
		const {useCobaltTvosDash,webPlayerActionsPorting,...y}=this.s(cf,x); this.g(y);
		this.cq(useCobaltTvosDash,true);
		this.D_WebPlayerActionsPorting(webPlayerActionsPorting);
	}
	/** @public @arg {D_WebPlayerActionsPorting} x */
	D_WebPlayerActionsPorting(x) {
		const cf="D_WebPlayerActionsPorting";
		const {getSharePanelCommand,subscribeCommand,unsubscribeCommand,addToWatchLaterCommand,removeFromWatchLaterCommand,...y}=this.s(cf,x); this.g(y);
	}
	/** @public @arg {CF_L_TP_Params} cf @arg {D_WatchPageUrl} x */
	D_WatchPageUrl(cf,x) {
		let u1=split_string_once(x,"/")[1];
		let u2=split_string_once(u1,"?")[1];
		let u3=this.parse_url_search_params(u2);
		let u4=this.keyof_search_params(u2);
		x: {
			if(this.is_eq_keys(u4,this.exact_arr("v"))) {
				u4;
				return;
			}
			if(this.is_eq_keys(u4,this.exact_arr("v","pp"))) break x;
			u4;
			if(this.is_eq_keys(u4,this.exact_arr("v","t"))) break x;
			u4;
			if(this.is_eq_keys(u4,this.exact_arr("v","list","start_radio"))) break x;
			if(this.is_eq_keys(u4,this.exact_arr("v","list","index"))) break x;
			u4==="";
		}
		this.parser.parse_url(cf,x);
		return u3;
	}
	//#endregion
	//#region Renderer Data Templates
	/** @private @arg {string} cf @arg {K} k @template {keyof T} K @public @template {{}} T @arg {T} x */
	HD_(cf,k,x) {
		this.k(cf,x);
		let kx=this.get_keys_of(x);
		if(kx.length!==1) debugger;
		if(kx[0]!==k) debugger;
	}
	//#endregion
	//#region helpers
	/** @protected @template {{}} T @arg {CF_M_s} cf @arg {{} extends T?T_DistributedKeysOf<T> extends []?T:never:never} x */
	gs(cf,x) {this.g(this.s(cf,x));}
	//#endregion
	//#region static & typedefs
	/** @typedef {{}} minimal_handler_member */
	static {this.prototype.minimal_handler_member_2({});}
	//#endregion
	//#region member functions
	/** @protected @arg {K} k @template {T_DistributedKeyof<T>} K @template {{}} T @arg {T} x @returns {T[K]|null} */
	w_priv(k,x) {
		if(!(k in x)) {debugger; return null;}
		return x[k];
	}
	/** @protected @arg {CF_M_zy} cf @template U @arg {K} k @template {T_DistributedKeyof<T>} K @template {{}} T @arg {T} x @arg {(this:this,x:T[K][number],i:number)=>U} f */
	zy(cf,k,x,f) {return this.z(this.w(cf,k,x),f);}
	//#endregion
	//#region CheckedTemplates
	/** @private @arg {CF_TA_Page} cf @template T @arg {T_Page<T>} x @template U @arg {(this:this,x:T)=>U} f */
	TA_Page(cf,x,f) {f.call(this,this.w(cf,"page",x));}
	//#endregion
	//#region Action methods
	/** @private @arg {A_GetMultiPageMenu} x */
	A_GetMultiPageMenu(x) {this.H_("getMultiPageMenuAction",x,this.AD_GetMultiPageMenu);}
	/** @public @arg {A_AccountItem} x */
	A_AccountItem(x) {this.H_("accountItem",x,this.AD_AccountItem);}
	//#endregion
	//#region Renderer methods
	/** @public @arg {R_VideoSecondaryInfo} x */
	R_VideoSecondaryInfo(x) {this.H_("videoSecondaryInfoRenderer",x,this.D_VideoSecondaryInfo);}
	/** @private @arg {D_VideoSecondaryInfo} x */
	D_VideoSecondaryInfo(x) {
		const cf="D_VideoSecondaryInfo";
		const {owner,description,subscribeButton,metadataRowContainer,showMoreText,showLessText,trackingParams,defaultExpanded,descriptionCollapsedLines,showMoreCommand,showLessCommand,attributedDescription,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.trackingParams(trackingParams);
		this.t(description,this.G_Text);
		this.R_SubscribeButton(subscribeButton);
		this.RMD_RowContainer(metadataRowContainer);
		this.G_Text(showMoreText);
		this.G_Text(showLessText);
		this.R_VideoOwner(owner);
		this.a_primitive_bool(defaultExpanded);
		this.a_primitive_num(descriptionCollapsedLines);
		this.t(showMoreCommand,this.C_Executor);
		this.t(showLessCommand,this.A_ChangeEngagementPanelVisibility);
		this.t(attributedDescription,this.D_AttributedDescription);
	}
	/** @private @arg {D_CommandRunItem} x */
	D_CommandRunItem(x) {
		const cf="D_CommandRunItem";
		const {onTap,loggingDirectives,...y}=this.T_Attachment(cf,x); this.g(y);/*#destructure_done*/
		this.C_Innertube(onTap);
		this.t(loggingDirectives,this.D_LoggingDirectives);
	}
	/** @private @arg {D_StyleRunItem} x */
	D_StyleRunItem(x) {
		const cf="D_StyleRunItem";
		const {fontColor,fontName,weight,...y}=this.T_Attachment(cf,x); this.g(y);/*#destructure_done*/
		this.save_number(`${cf}.fontColor`,fontColor);
		this.t(fontName,x => this.save_string("style.font_name",x));
		this.t(weight,x => this.save_number("style.weight",x));
	}
	/** @private @arg {D_AttributedDescription} x */
	D_AttributedDescription(x) {
		const cf="D_VideoSecondaryInfo";
		const {content,commandRuns,styleRuns,attachmentRuns,decorationRuns,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.a_primitive_str(content);
		this.tz(commandRuns,this.D_CommandRunItem);
		this.tz(styleRuns,this.D_StyleRunItem);
		this.tz(attachmentRuns,this.R_AttachmentElement);
		this.tz(decorationRuns,this.R_TextDecorator);
	}
	/** @private @arg {R_AttachmentElement} x */
	R_AttachmentElement(x) {
		const cf="D_VideoSecondaryInfo";
		const {element,alignment,...y}=this.T_Attachment(cf,x); this.g(y);/*#destructure_done*/
		this.D_AttachmentElement(element);
		this.save_enum(cf,"ALIGNMENT",alignment);
	}
	/** @private @arg {R_TextDecorator} x */
	R_TextDecorator(x) {this.H_("textDecorator",x,this.R_HighlightTextDecorator);}
	/** @private @arg {R_HighlightTextDecorator} x */
	R_HighlightTextDecorator(x) {this.H_("highlightTextDecorator",x,this.D_HighlightTextDecorator);}
	/** @public @arg {R_ExpandableVideoDescriptionBody} x */
	R_ExpandableVideoDescriptionBody(x) {this.H_("expandableVideoDescriptionBodyRenderer",x,this.D_ExpandableVideoDescriptionBody);}
	/** @private @arg {D_ExpandableVideoDescriptionBody} x */
	D_ExpandableVideoDescriptionBody(x) {
		const cf="D_ExpandableVideoDescriptionBody";
		const {descriptionBodyText,showMoreText,showLessText,attributedDescriptionBodyText,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.t(descriptionBodyText,this.G_Text);
		this.t(showMoreText,this.G_Text);
		this.t(showLessText,this.G_Text);
		this.t(attributedDescriptionBodyText,this.D_AttributedDescription);
	}
	/** @private @arg {D_HighlightTextDecorator} x */
	D_HighlightTextDecorator(x) {
		const cf="D_HighlightTextDecorator";
		const {backgroundColor,backgroundCornerRadius,...y}=this.T_Attachment(cf,x); this.g(y);/*#destructure_done*/
		this.save_number(`${cf}.backgroundColor`,backgroundColor);
		this.cq(backgroundCornerRadius,8);
	}
	/** @private @arg {D_AttachmentElement} x */
	D_AttachmentElement(x) {
		const cf="D_AttachmentElement";
		const {type,properties,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.D_ImageType(type);
		this.R_LayoutProperties(properties);
	}
	/** @private @arg {R_LayoutProperties} x */
	R_LayoutProperties(x) {this.H_("layoutProperties",x,this.D_LayoutProperties);}
	/** @private @arg {D_LayoutProperties} x */
	D_LayoutProperties(x) {
		const cf="D_LayoutProperties";
		const {height,width,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		if(height) {
			this.cq(height.unit,"DIMENSION_UNIT_POINT");
			this.cq(height.value,10);
		} else debugger;
		if(width) {
			this.cq(width.unit,"DIMENSION_UNIT_POINT");
			this.cq(width.value,14);
		} else debugger;
	}
	/** @private @arg {D_ImageType} x */
	D_ImageType(x) {this.H_("imageType",x,this.D_Image);}
	/** @private @arg {D_Image} x */
	D_Image(x) {this.H_("image",x,this.D_Sources);}
	/** @private @arg {D_Sources} x */
	D_Sources(x) {
		this.H_("sources",x,x => this.z(x,x => {
			const {url,...y}=this.s("D_Sources.sources[]",x); this.g(y);
			this.cq(url,"https://www.gstatic.com/youtube/img/watch/yt_favicon.png");
		}));
	}
	/** @public @arg {R_BackgroundPromo} x */
	R_BackgroundPromo(x) {this.H_("backgroundPromoRenderer",x,this.D_BackgroundPromo);}
	/** @public @arg {D_BackgroundPromo} x */
	D_BackgroundPromo(x) {
		const cf="D_LayoutProperties";
		const {title,bodyText,icon,trackingParams,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.G_Text(title);
		this.G_Text(bodyText);
		this.T_Icon(cf,icon);
		this.trackingParams(trackingParams);
	}
	//#endregion
	//#region G
	/** @public @arg {G_SI_DB_EngagementPanel} x */
	G_SI_DB_EngagementPanel(x) {
		const cf="DB_SI_EngagementPanel";
		switch(x.targetId) {
			default: x===""; debugger; break;
			case "engagement-panel-ads": return this.SI_DB_EngagementPanel_Ads(x);
			case "engagement-panel-clip-create": {
				const {panelIdentifier,header,content,targetId: {},visibility,loggingDirectives,onShowCommands,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
				if(panelIdentifier!=="engagement-panel-clip-create") debugger;
				this.R_EngagementPanelTitleHeader(header);
				this.R_ClipSection(content);
				if(visibility!=="ENGAGEMENT_PANEL_VISIBILITY_HIDDEN") debugger;
				this.D_LoggingDirectives(loggingDirectives);
				this.z(onShowCommands,this.G_EngagementPanelSectionShowCommands);
			} break;
			case "engagement-panel-macro-markers-description-chapters": {
				const {panelIdentifier,header,content,targetId: {},visibility,loggingDirectives,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
				if(panelIdentifier!=="engagement-panel-macro-markers-description-chapters") debugger;
				this.R_EngagementPanelTitleHeader(header);
				this.xr.R_MacroMarkersList(content);
				if(visibility!=="ENGAGEMENT_PANEL_VISIBILITY_HIDDEN") debugger;
				this.D_LoggingDirectives(loggingDirectives);
			} break;
			case "engagement-panel-macro-markers-auto-chapters": {
				const {panelIdentifier,header,content,targetId: {},visibility,loggingDirectives,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
				if(panelIdentifier!=="engagement-panel-macro-markers-auto-chapters") debugger;
				this.R_EngagementPanelTitleHeader(header);
				this.xr.R_MacroMarkersList(content);
				if(visibility!=="ENGAGEMENT_PANEL_VISIBILITY_HIDDEN") debugger;
				this.D_LoggingDirectives(loggingDirectives);
			} break;
		}
	}
	/** @private @arg {G_EngagementPanelSectionShowCommands} x */
	G_EngagementPanelSectionShowCommands(x) {
		const cf="G_EngagementPanelSectionShowCommands";
		if("changeEngagementPanelVisibilityAction" in x) return this.A_ChangeEngagementPanelVisibility(x);
		if("showEngagementPanelScrimAction" in x) return this.A_ShowEngagementPanelScrim(x);
		if("scrollToEngagementPanelCommand" in x) return this.C_ScrollToEngagementPanel(x);
		x===""; this.codegen_typedef(cf,x);
	}
	/** @public @arg {C_Innertube} x */
	C_Innertube(x) {this.H_("innertubeCommand",x,this.G_DC_Innertube);}
	/** @private @arg {G_DC_Innertube} x */
	G_DC_Innertube(x) {
		const cf="G_DC_Innertube"; this.k(cf,x);
		if("setActivePanelItemAction" in x) return this.A_SetActivePanelItem(x);
		if("ypcGetOfflineUpsellEndpoint" in x) return this.E_YpcGetOfflineUpsell(x);
		if("changeEngagementPanelVisibilityAction" in x) return this.A_ChangeEngagementPanelVisibility(x);
		if("urlEndpoint" in x) return this.xr.E_Url(x);
		if("browseEndpoint" in x) {
			if(this.is_TE_VE(x,3611)) return this.E_VE3611(x);
			if(this.is_TE_VE(x,5754)) return this.E_VE5754(x);
			if(this.is_TE_VE(x,6827)) return this.E_VE6827(x);
			debugger;
			return;
		}
		if("watchEndpoint" in x) return this.E_Watch(x);
		debugger;
	}
	//#endregion
	//#region CD & AU & C & DC
	/** @private @arg {CD_TimedContinuation} x */
	CD_TimedContinuation(x) {this.H_("timedContinuationData",x,this.DC_Timed);}
	/** @private @arg {AU_ChannelSwitcherPage} x */
	AU_ChannelSwitcherPage(x) {this.H_("updateChannelSwitcherPageAction",x,this.AD_UpdateChannelSwitcherPage);}
	/** @private @arg {AD_GetMultiPageMenu} x */
	AD_GetMultiPageMenu(x) {this.H_("menu",x,x => this.TR_MultiPageMenu("TR_MultiPageMenu_Empty",x));}
	/** @private @arg {C_ResetChannelUnreadCount} x */
	C_ResetChannelUnreadCount(x) {let [a,y]=this.TE_Endpoint_2("C_ResetChannelUnreadCount","resetChannelUnreadCountCommand",x); this.g(y); this.DC_ResetChannelUnreadCount(a);}
	/** @arg {C_FollowUp} x */
	C_FollowUp(x) {let [a,y]=this.TE_Endpoint_2("C_FollowUp","addFollowUpSurveyCommand",x); this.g(y); this.DC_AddFollowUpSurvey(a);}
	/** @private @arg {DC_AddFollowUpSurvey} x */
	DC_AddFollowUpSurvey(x) {
		const cf="DC_AddFollowUpSurvey";
		const {followUpOptions,followUpText,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
	}
	/** @private @arg {DC_ResetChannelUnreadCount} x */
	DC_ResetChannelUnreadCount(x) {
		const cf="DC_ResetChannelUnreadCount";
		const {channelId,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.channelId(channelId);
	}
	/** @private @arg {DC_Timed} x */
	DC_Timed(x) {
		const cf="DC_Timed";
		const {timeoutMs,continuation,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.D_TimeoutMs(timeoutMs);
		this.params("timed_continuation.data",continuation);
	}
	/** @private @arg {D_TimeoutMs} x */
	D_TimeoutMs(x) {
		switch(x) {
			default: debugger; break;
			case 60000:
			case 5000:
		}
	}
	//#endregion
	//#region E & M & GM & DE
	/** @public @arg {DE_SuperThanksSelectedTier} x */
	DE_SuperThanksSelectedTier(x) {
		const cf="DE_SuperThanksSelectedTier";
		const {index,key,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		console.log("super_thanks_selected_tier.index",index);
		console.log("super_thanks_selected_tier.key",key);
	}
	//#endregion
	//#region B
	/** @public @arg {B_HrefUrl} x */
	B_HrefUrl(x) {this.y("B_HrefUrl","hrefUrl",x,x => this.parser.parse_url("B_HrefUrl.url",x));}
	//#endregion
	//#region D
	/** @arg {Omit<Omit<Omit<D_Microformat, `url${string}`>, `ios${string}`>, `twitter${string}`>} x */
	D_Microformat_Other(x) {
		const cf="D_Microformat_Other";
		let {tags,familySafe,noindex,unlisted,thumbnail,title,description,schemaDotOrgType,androidPackage,appName,availableCountries,linkAlternates,siteName,ogType,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.tz(tags,this.a_primitive_str);
		this.t(familySafe,x => {if(x!==true) debugger;});
		if(noindex!==false) debugger;
		if(unlisted!==false) debugger;
		this.D_Thumbnail(thumbnail);
		this.z([title,description,schemaDotOrgType,androidPackage,appName,siteName,ogType],this.a_primitive_str);
		this.tz(availableCountries,this.a_primitive_str);
		this.z(linkAlternates,this.B_HrefUrl);
	}
	/** @protected @template T @template {string} U @arg {D_MenuServiceItem_Icon<U, T>} x @arg {(this:this,x:T)=>void} f */
	D_MenuServiceItem_Omit(x,f) {const cf="D_MenuServiceItem_Omit"; const {text,serviceEndpoint,trackingParams,...y}=this.s(cf,x); f.call(this,serviceEndpoint); return y;}
	/** @protected @arg {D_MenuServiceItem<{}>} x */
	D_MenuServiceItem(x) {
		const cf="D_MenuServiceItem";
		const {text,serviceEndpoint,trackingParams,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.G_Text(text);
		this.g(serviceEndpoint);
		this.trackingParams(trackingParams);
	}
	/** @type {{cache:string[];new_:string[]}} */
	selector={cache: [],new_: []};
	/** @type {{cache:string[];new_:string[]}} */
	partition={cache: [],new_: []};
	/** @private @arg {D_GoogleVideoHostPartition} x */
	D_GoogleVideoHostPartition(x) {
		const cf="google_video";
		const {partition,selector}=x;
		this.save_string(`${cf}.partition`,partition);
		this.save_string(`${cf}.selector`,selector);
		/** @type {G_GV_0} */
		// cSpell:ignoreRegExp /"(5u|qx|vg)[a-z]{3}"/
		switch(partition) {
			default: {
				if(!this.partition.new_.includes(partition)) this.partition.new_.push(partition);
				if(!this.partition.cache.includes(partition)) this.partition.cache.push(partition);
				let gen=this.cg.codegen_case_cache(`g_case:${cf}:host_partition`,partition);
				if(gen.has) break;
				console.log(`-- [g_case:${cf}:host_partition] --\n\n${this.cg.codegen_case_ret(gen)}`);
				debugger;
				switch((partition)) {
				}
			}; break;
			case "5uaez":
			case "5uald":
			case "9gv7e":
			case "9gv7l":
			case "9gv7z":
			case "a5mek":
			case "a5mlr":
			case "a5mse":
			case "ab5l6":
			case "ab5sz":
			case "hp57k":
			case "hp57y":
			case "n4v7s":
				if(!this.partition.cache.includes(partition)) this.partition.cache.push(partition);
				break;
			case "n8v7z":
				if(!this.partition.cache.includes(partition)) this.partition.cache.push(partition);
				/*not seen yet*/ debugger; break;
			case "nx5s7":
			case "nx57y":
			case "o097z":
			case "p5qls":
			case "p5qs7":
			case "q4fl6":
			case "q4flr":
				if(!this.partition.cache.includes(partition)) this.partition.cache.push(partition);
				break;
			case "q4fze":
				if(!this.partition.cache.includes(partition)) this.partition.cache.push(partition);
				/*not seen yet*/ debugger; break;
			case "qxo7r":
				if(!this.partition.cache.includes(partition)) this.partition.cache.push(partition);
				break;
			case "qxoed":
			case "t0a7l":
			case "t0a7s":
			case "tt1e7":
			case "tt1el":
			case "vgqsk":
			case "vgqsr":
				if(!this.partition.cache.includes(partition)) this.partition.cache.push(partition);
				break;
		}
		/** @type {G_GV_1} */
		switch(selector) {
			default: {
				if(!this.selector.new_.includes(selector)) this.selector.new_.push(selector);
				if(this.selector.cache.includes(selector)) break;
				this.selector.cache.push(selector);
				selector===""; debugger;
			} break;
			case "6 ": case "6 ": case "6d": case "6 ": case "6 ": case "6l": case "6r": case "6 ": case "6 ": case "6z":
			case "76": case "7 ": case "7d": case "7 ": case "7k": case "7l": case "7r": case "7s": case "7y": case "7z":
			case "d6": case "d ": case "d ": case "d ": case "d ": case "d ": case "dr": case "ds": case "dy": case "dz":
			case "e6": case "e7": case "e ": case "ee": case "ek": case "el": case "e ": case "es": case "ey": case "ez":
			case "k6": case "k ": case "kd": case "k ": case "k ": case "k ": case "k ": case "k ": case "k ": case "k ":
			case "l6": case "l7": case "ld": case "le": case "lk": case "ll": case "lr": case "ls": case "ly": case "l ":
			case "r ": case "r ": case "r ": case "r ": case "r ": case "rl": case "rr": case "r ": case "r ": case "r ":
			case "s6": case "s7": case "sd": case "se": case "sk": case "sl": case "sr": case "ss": case "sy": case "sz":
			case "z ": case "z7": case "zd": case "ze": case "zk": case "z ": case "zr": case "zs": case "zy": case "zz":
				if(!this.selector.cache.includes(selector)) this.selector.cache.push(selector);
				break;
		}
	}
	/** @type {Map<string,Intl.RelativeTimeFormat>} */
	rtf_lang=new Map;
	/** @arg {string} lang */
	get_rtf_lang(lang) {
		let rtf_val=this.rtf_lang.get(lang);
		if(rtf_val) return rtf_val;
		const rtf=new Intl.RelativeTimeFormat(lang,{numeric: "auto"});
		this.rtf_lang.set(lang,rtf);
		return rtf;
	}
	/**
	 * @arg {Date|number} date
	 * adapted from https://gist.github.com/LewisJEllis/9ad1f35d102de8eee78f6bd081d486ad
	 */
	getRelativeTimeString(date,lang=navigator.language) {
		// Allow dates or times to be passed
		const timeMs=typeof date==="number"? date:date.getTime();
		// Get the amount of seconds between the given date and now
		const deltaSeconds=Math.round((timeMs-Date.now())/1000);
		// Array representing one minute, hour, day, week, month, etc in seconds
		const cutoffs=[60,3600,86400,86400*7,86400*30,86400*365,Infinity];
		// Array equivalent to the above but in the string representation of the units
		/** @type {Intl.RelativeTimeFormatUnit[]} */
		const units=["second","minute","hour","day","week","month","year"];
		// Grab the ideal cutoff unit
		const unitIndex=cutoffs.findIndex(cutoff => cutoff>Math.abs(deltaSeconds));
		// Get the divisor to divide from the seconds. E.g. if our unit is "day" our divisor
		// is one day in seconds, so we can divide our seconds by this to get the # of days
		const divisor=unitIndex? cutoffs[unitIndex-1]:1;
		// Intl.RelativeTimeFormat do its magic
		const rtf=this.get_rtf_lang(lang);
		return rtf.format(Math.floor(deltaSeconds/divisor),units[unitIndex]);
	}
	/** @private @arg {D_VideoPlaybackShape_S_Params} x */
	D_VideoPlaybackShape_S_Params(x) {
		const cf1="D_VideoPlaybackShape_S_Params",cf2="video_playback.api_url"; cf2;
		const {expire,ei,ip,aitags,id,itag,source,requiressl,ctier,gcr,spc,vprv,ufph,live,hang,noclen,xtags,mime,ns,cnr,gir,clen,ratebypass,dur,lmt,...y}=this.s(cf1,x); this.g(y);
		this.a_primitive_str(expire);
		this.a_primitive_str(ei);
		this.a_primitive_str(ip);
		aitags&&this.save_string(`${cf1}.aitags`,aitags);
		{
			let idp=split_string_once(id,".");
			switch(idp.length) {
				case 2: this.save_b64_binary(`${cf2}.id.0`,idp[0]); this.save_string(`${cf2}.id.1`,idp[1]); break;
				case 1: this.save_b64_binary(`${cf2}.id.0`,idp[0]); break;
			}
		}
		itag&&this.save_string(`${cf1}.itag`,itag);
		this.save_string(`${cf1}.source`,source);
		this.save_string(`${cf1}.requiressl`,requiressl);
		this.t(ctier,x => this.save_string(`${cf1}.ctier`,x));
		gcr&&this.save_string(`${cf1}.gcr`,gcr);
		spc&&this.save_b64_binary(`${cf1}.spc`,spc);
		this.save_string(`${cf1}.vprv`,vprv);
		this.save_string(`${cf1}.vprv`,vprv);
		this.t(ufph,x => this.save_string(`${cf1}.ufph`,x));
		this.t(live,x => this.save_string(`${cf1}.live`,x));
		this.t(hang,x => this.save_string(`${cf1}.hang`,x));
		this.t(noclen,x => this.save_string(`${cf1}.noclen`,x));
		this.t(xtags,x => this.save_string(`${cf1}.xtags`,x));
		this.save_string(`${cf1}.mime`,mime);
		this.save_b64_binary(`${cf2}.ns`,ns);
		cnr&&this.save_string(`${cf1}.cnr`,cnr);
		if(gir) this.save_string(`${cf1}.gir`,gir);
		this.t(clen,x => {
			let x1=this.parse_number_template(x);
			this.a_primitive_num(x1);
		});
		ratebypass&&this.save_string(`${cf1}.ratebypass`,ratebypass);
		this.t(dur,x => {
			let dur_=this.parse_number_template(x);
			this.a_primitive_num(dur_);
		});
		this.t(lmt,x => {
			let lmt_=this.parse_number_template(x);
			this.a_primitive_num(lmt_);
		});
	}
	/** @private @arg {D_VideoPlaybackShape_LS_Params} x */
	D_VideoPlaybackShape_LS_Params(x) {
		const cf1="D_VideoPlaybackShape_LS_Params",cf2="video_playback.api_url"; cf2;
		const {mh,mm,mn,ms,mv,mvi,pl,initcwndbps,...y}=this.s(cf1,x); this.g(y);
		this.save_string(`${cf1}.mh`,mh);
		this.save_string(`${cf1}.mm`,mm);
		// cSpell:ignoreRegExp /"sn-(?:(o097zn|9gv7ln|n4v7sn|nx57yn).{2})"/
		let mn_arr=split_string(mn);
		for(let mi of mn_arr) {
			let ap=this.get_host_partition(mi);
			switch(ap.partition) {
				default: {
					let {partition: x}=ap;
					let gen=this.cg.codegen_case_cache(`js_gen_case:log_videoplayback:${cf1}.mn.host_partition`,x);
					if(gen.has) break;
					console.log(`-- [js_gen_case:log_videoplayback:${cf1}.mn.host_partition] --\n\n${this.cg.codegen_case_ret(gen)}`);
				}; break;
				case "n4v7s": case "nx57y": case "o097z": case "nx5s7": case "9gv7l":
			}
		}
		this.save_string(`${cf1}.ms`,ms);
		this.save_string(`${cf1}.mv`,mv);
		this.save_string(`${cf1}.mvi`,mvi);
		this.save_string(`${cf1}.pl`,pl);
		x: {
			let x2=initcwndbps;
			if(!x2) break x;
			let x3=this.parse_number_template(x2);
			this.a_primitive_num(x3);
		}
	}
	/** @private @arg {D_VideoPlaybackShape_Other} x */
	D_VideoPlaybackShape_Other(x) {
		const cf1="D_VideoPlaybackShape_Other",cf2="video_playback.api_url";
		const {fvip,keepalive,fexp,c,txp,n,lsig,sig,...y1}=this.s(cf1,x);
		this.save_string(`${cf1}.fvip`,fvip);
		keepalive&&this.save_string(`${cf1}.keepalive`,keepalive);
		this.save_string(`${cf1}.fexp`,fexp);
		this.save_string(`${cf1}.c`,c);
		txp&&this.save_string(`${cf1}.txp`,txp);
		this.save_b64_binary(`${cf2}.n`,n);
		this.save_b64_binary(`${cf2}.lsig`,lsig);
		this.t(sig,x => this.save_b64_binary(`${cf2}.sig`,x));
		const {gcr,mt,itag,...y}=y1; this.g(y);
		itag&&this.save_string(`${cf1}.itag`,itag);
		{
			let x=mt;
			let x1=this.parse_number_template(x);
			this.a_primitive_num(x1);
		}
		this.t(gcr,x => this.cq(x,"ca"));
	}
	/** @private @arg {D_VideoPlaybackShape} uv */
	D_VideoPlaybackShape(uv) {
		const cf1="D_VideoPlaybackShape";
		const {s,ls,y}=this.extract_shape_params(cf1,uv);
		this.D_VideoPlaybackShape_S_Params(s);
		this.D_VideoPlaybackShape_LS_Params(ls);
		this.D_VideoPlaybackShape_Other(y);
	}
	/** @public @arg {D_PlayerConfig} x */
	D_PlayerConfig(x) {
		const cf="D_PlayerConfig";
		const {audioConfig,playbackStartConfig,streamSelectionConfig,livePlayerConfig,mediaCommonConfig,webPlayerConfig,...y}=this.s(cf,x); this.g(y);
		this.xr.D_AudioConfig(audioConfig);
		this.t(playbackStartConfig,this.D_StartSeconds);
		this.t(streamSelectionConfig,this.D_StreamSelectionConfig);
		this.t(livePlayerConfig,this.D_LivePlayerConfig);
		this.xr.R_DynamicReadaheadConfig(mediaCommonConfig);
		this.D_WebPlayerConfig(webPlayerConfig);
	}
	/** @private @arg {D_LivePlayerConfig} x */
	D_LivePlayerConfig(x) {
		const cf="D_LivePlayerConfig";
		const {liveReadaheadSeconds,hasSubfragmentedFmp4,isLiveHeadPlayable,...y}=this.s(cf,x); this.g(y);
		this.cq(liveReadaheadSeconds,1.6);
		this.cq(hasSubfragmentedFmp4,true);
		this.t(isLiveHeadPlayable,x => this.cq(x,true));
	}
	/** @public @arg {D_VideoDetails} x */
	D_VideoDetails(x) {
		const cf="D_VideoDetails";
		const {videoId,title,lengthSeconds,isLive,keywords,channelId,isOwnerViewing,shortDescription,isCrawlable,isLiveDvrEnabled,thumbnail,liveChunkReadahead,allowRatings,viewCount,author,isLowLatencyLiveStream,isPrivate,isUnpluggedCorpus,latencyClass,isLiveContent,isPostLiveDvr,...y}=this.s(cf,x); this.g(y);
		this.videoId(videoId);
		this.a_primitive_str(title);
		this.a_primitive_num(this.parse_number_template(lengthSeconds));
		this.t(isLive,x => this.cq(x,true));
		this.tz(keywords,this.a_primitive_str);
		this.channelId(channelId);
		this.a_primitive_bool(isOwnerViewing);
		this.cq(isOwnerViewing,false);
		this.a_primitive_str(shortDescription);
		this.a_primitive_bool(isCrawlable);
		this.t(isLiveDvrEnabled,x => this.cq(x,true));
		this.D_Thumbnail(thumbnail);
		this.t(liveChunkReadahead,x => this.cq(x,2));
		this.a_primitive_bool(allowRatings);
		this.t(viewCount,x => {
			let num=this.parse_number_template(x);
			this.a_primitive_num(num);
		});
		this.a_primitive_str(author);
		this.cq(isPrivate,false);
		this.cq(isUnpluggedCorpus,false);
		this.a_primitive_bool(isLiveContent);
		this.t(isPostLiveDvr,x => this.cq(x,true));
	}
	/** @public @arg {D_StartSeconds} x */
	D_StartSeconds(x) {this.y("D_StartSeconds","startSeconds",x,this.a_primitive_num);}
	/** @public @arg {D_StreamSelectionConfig} x */
	D_StreamSelectionConfig(x) {this.y("D_StreamSelectionConfig","maxBitrate",x,x => this.a_primitive_num(this.parse_number_template(x)));}
	/** @arg {D_Menu_WithItems} x */
	D_Menu_WithItems(x) {
		const cf="D_Menu_WithItems";
		const {items,...u1}=this.s(cf,x);
		if(!this.is_not_empty_obj(u1)) return this.g(u1);
		this.z(items,x => {
			if("menuNavigationItemRenderer" in x) return this.R_MenuNavigationItem(x);
			if("menuServiceItemRenderer" in x) return this.R_MenuServiceItem(x);
			debugger;
		});
		const {trackingParams,...u2}=u1;
		this.trackingParams(trackingParams);
		if(!this.is_not_empty_obj(u2)) return this.g(u2);
		const {accessibility,...u3}=u2;
		this.D_Accessibility(accessibility);
		if(!this.is_not_empty_obj(u3)) return this.g(u3);
		let u=u3;
		if("flexibleItems" in u) {
			const {topLevelButtons,flexibleItems,...y}=u; this.g(y);/*#destructure_done*/
			this.z(topLevelButtons,x => {
				if("segmentedLikeDislikeButtonRenderer" in x) return this.R_SegmentedLikeDislikeButton(x);
				if("buttonRenderer" in x) return this.R_Button(x);
				debugger;
			});
			this.z(flexibleItems,this.R_MenuFlexibleItem);
			return;
		}
		if("topLevelButtons" in u) {
			const {topLevelButtons,...y}=u; this.g(y);/*#destructure_done*/
			this.z(topLevelButtons,x => {
				if("buttonRenderer" in x) return this.R_Button(x);
				debugger;
			});
			return;
		}
		if("loggingDirectives" in u) {
			const {loggingDirectives,...y}=u; this.g(y);/*#destructure_done*/
			this.D_LoggingDirectives(loggingDirectives);
			return;
		}
		if("menuPopupAccessibility" in u) {
			const {menuPopupAccessibility,...y}=u; this.g(y);/*#destructure_done*/
			this.D_Label(menuPopupAccessibility);
			return;
		}
		this.g(u);
	}
	/** @private @arg {D_TextRun_NavEP_1} x */
	D_TextRun_NavEP_1(x) {
		const cf="D_TextRun_NavEP_1"; this.k(cf,x);
		if("browseEndpoint" in x) {
			if(this.is_TE_VE(x,3611)) return this.E_VE3611(x);
			if(this.is_TE_VE(x,5754)) return this.E_VE5754(x);
			if(this.is_TE_VE(x,6827)) return this.E_VE6827(x);
			if(this.is_TE_VE(x,11487)) return this.E_VE11487(x);
			x===""; debugger;
			return;
		}
		if("watchEndpoint" in x) return this.E_Watch(x);
		if("urlEndpoint" in x) return this.xr.E_Url(x);
		if("reelWatchEndpoint" in x) return this.x.get("x_VE37414").E_VE37414_ReelWatch(x);
		x===""; debugger;
	}
	/** @public @arg {Extract<D_TextRun,{navigationEndpoint:any;loggingDirectives:any}>["navigationEndpoint"]} x */
	D_TextRun_NavEP_2(x) {
		if("browseEndpoint" in x) {
			if(this.is_TE_VE(x,3611)) return this.E_VE3611(x);
			if(this.is_TE_VE(x,5754)) return this.E_VE5754(x);
			if(this.is_TE_VE(x,6827)) return this.E_VE6827(x);
			debugger;
			return;
		}
		if("urlEndpoint" in x) return this.xr.E_Url(x);
		if("searchEndpoint" in x) return this.E_Search(x);
		x===""; debugger;
	}
	/** @public @arg {D_TextRun} x */
	D_TextRun(x) {
		const cf="D_TextRun";
		const {text,...u}=this.s(cf,x);/*#destructure_done*/
		this.a_primitive_str(text);
		if("strikethrough" in u) {
			const {strikethrough,...y}=u; this.g(y);/*#destructure_done*/
			if(strikethrough!==true) debugger;
			return;
		}
		if("italics" in u) {
			const {italics,...y}=u; this.g(y);/*#destructure_done*/
			if(italics!==true) debugger;
			return;
		}
		if("navigationEndpoint" in u&&"loggingDirectives" in u) {
			const {navigationEndpoint,loggingDirectives,...y}=u;/*#destructure_done*/
			this.D_TextRun_NavEP_2(navigationEndpoint);
			this.D_LoggingDirectives(loggingDirectives);
			if("bold" in y) {
				const {bold,...y1}=y; this.g(y1);/*#destructure_done*/
				this.cq(bold,true);
				return;
			}
			this.g(y);
			return;
		}
		if("navigationEndpoint" in u) {
			const {navigationEndpoint,...y}=u; this.g(y);/*#destructure_done*/
			this.D_TextRun_NavEP_1(navigationEndpoint);
			return;
		}
		if("bold" in u) {
			const {bold,...y}=u; this.g(y);/*#destructure_done*/
			this.a_primitive_bool(bold);
			return;
		}
		if("emoji" in u) {
			const {emoji,...y}=u; this.g(y);/*#destructure_done*/
			this.D_Emoji(emoji);
			return;
		}
		this.g(u);
	}
	//#endregion
	//#region RS & RSG & RSL & REG & RSW
	/** @public @arg {RS_AccountMenu} x */
	RS_AccountMenu(x) {
		const cf="RS_AccountMenu";
		const {responseContext: {},actions,trackingParams,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.z(actions,x => {
			if("openPopupAction" in x) return this.xr.A_GetSystemMenu(x);
			return null;
		});
		this.trackingParams(trackingParams);
	}
	/** @public @arg {RS_UpdateMetadata} x */
	RS_UpdateMetadata(x) {
		const cf="RS_UpdateMetadata";
		const {responseContext: {},continuation,actions,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.CD_TimedContinuation(continuation);
		this.z(actions,x => {
			if("updateViewershipAction" in x) return this.AU_Viewership(x);
			if("updateToggleButtonTextAction" in x) return this.AU_ToggleButtonText(x);
			if("updateDateTextAction" in x) return this.AU_DateText(x);
			if("updateTitleAction" in x) return this.AU_Title(x);
			if("updateDescriptionAction" in x) return this.AU_Description(x);
			console.log(x);
		});
	}
	/** @public @arg {RS_Search} x */
	RS_Search(x) {
		const cf="RS_Search";
		const {responseContext: {},estimatedResults,contents,trackingParams,topbar,refinements,onResponseReceivedCommands,targetId,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.a_primitive_str(estimatedResults);
		this.xr.R_TwoColumnSearchResults(contents);
		this.trackingParams(trackingParams);
		this.R_DesktopTopbar(topbar);
		this.z(refinements,this.a_primitive_str);
		this.z(onResponseReceivedCommands,x => {
			if("adsControlFlowOpportunityReceivedCommand" in x) return this.C_AdsControlFlowOpportunityReceived(x);
		});
		this.targetId(cf,targetId);
	}
	/** @public @arg {RS_ReelWatchSequence} x */
	RS_ReelWatchSequence(x) {
		const cf="RS_ReelWatchSequence";
		const {responseContext: {},entries,prevEntries,trackingParams,continuationEndpoint,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.z(entries,x => this.T_Command_TP(x,x => this.x.get("x_VE37414").E_VE37414_ReelWatch(x)));
		this.tz(prevEntries,x => this.T_Command_TP(x,x => this.x.get("x_VE37414").E_VE37414_ReelWatch(x)));
		this.trackingParams(trackingParams);
		this.t(continuationEndpoint,x => this.xr.C_Continuation(x));
	}
	/** @public @arg {RS_GetLiveChat} x */
	RS_GetLiveChat(x) {
		const cf="RS_GetLiveChat";
		const {responseContext: {},continuationContents: a1,trackingParams: a2,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.RC_LiveChat(a1);
		this.t_cf(cf,a2,this.trackingParams);
	}
	/** @private @arg {string} x */
	RS_Next_ContextParams(x) {this.params("next.queue_context.params",x);}
	/** @public @arg {RS_Next} x */
	RS_Next(x) {
		const cf="RS_Next";
		const {responseContext: {},contents,currentVideoEndpoint,trackingParams,playerOverlays,onResponseReceivedEndpoints,engagementPanels,topbar,pageVisualEffects,frameworkUpdates,videoReporting,queueContextParams,continuationContents,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.t(contents,x => this.xr.G_NextContents(x));
		this.t(currentVideoEndpoint,this.E_Watch);
		this.trackingParams(trackingParams);
		this.t(playerOverlays,this.R_PlayerOverlay);
		this.tz(onResponseReceivedEndpoints,a => this.GE_ResponseReceived(cf,a));
		this.tz(engagementPanels,this.R_EngagementPanelSectionList);
		this.t(topbar,this.R_DesktopTopbar);
		this.tz(pageVisualEffects,this.R_CinematicContainer);
		this.t(frameworkUpdates,this.D_FrameworkUpdates);
		this.t(videoReporting,x => this.xr.R_ReportFormModal(x));
		this.t(queueContextParams,this.RS_Next_ContextParams);
		this.t(continuationContents,this.RC_PlaylistPanel);
	}
	/** @public @arg {RS_AccountsList} x */
	RS_AccountsList(x) {
		const cf="RS_AccountsList";
		const {responseContext: {},selectText,actions,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.G_Text(selectText);
		this.z(actions,this.AU_ChannelSwitcherPage);
	}
	/** @public @arg {RS_SetSetting} x */
	RS_SetSetting(x) {
		const cf="RS_SetSetting";
		const {responseContext: {},settingItemId,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		if(settingItemId!=="407") debugger;
	}
	/** @public @arg {RS_Feedback} x */
	RS_Feedback(x) {
		const cf="RS_Feedback";
		const {responseContext: {},feedbackResponses,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.z(feedbackResponses,x => this.xr.D_FeedbackResponseProcessedStatus(x));
	}
	/** @public @arg {RS_AttGet} x */
	RS_AttGet(x) {
		const cf="RS_AttGet";
		const {responseContext: {},challenge,bgChallenge,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.a_primitive_str(challenge);
		this.xr.D_AttBgChallenge(bgChallenge);
	}
	/** @public @arg {RS_Guide} x */
	RS_Guide(x) {
		const cf="RS_Guide";
		const {responseContext: {},items,trackingParams,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.z(items,x => this.xr.G_GuideSectionItem(x));
		this.trackingParams(trackingParams);
	}
	/** @public @arg {RS_WatchReelItem} x */
	RS_WatchReelItem(x) {
		const cf="RS_WatchReelItem";
		const {responseContext: {},overlay,status,trackingParams,replacementEndpoint,sequenceContinuation,desktopTopbar,engagementPanels,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.xr.R_ReelPlayerOverlay(overlay);
		if(status!=="REEL_ITEM_WATCH_STATUS_SUCCEEDED") debugger;
		this.trackingParams(trackingParams);
		this.t(replacementEndpoint,x => this.x.get("x_VE37414").E_VE37414_ReelWatch(x));
		this.t(sequenceContinuation,this.a_primitive_str);
		this.R_DesktopTopbar(desktopTopbar);
		this.z(engagementPanels,this.R_EngagementPanelSectionList);
	}
	/** @public @arg {RSG_Survey} x */
	RSG_Survey(x) {
		const cf="RSG_Survey";
		const {responseContext: {},trackingParams,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.trackingParams(trackingParams);
	}
	/** @public @arg {RSG_PdgBuyFlow} x */
	RSG_PdgBuyFlow(x) {
		const cf="RSG_PdgBuyFlow";
		const {responseContext: {},command,trackingParams,frameworkUpdates,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		let pu=this.TA_OpenPopup("TA_OpenPopup:R_PdgBuyFlow",command);
		if("pdgBuyFlowRenderer" in pu) {this.xr.R_PdgBuyFlow(pu);}
		pu.pdgBuyFlowRenderer;
		this.trackingParams(trackingParams);
		this.D_FrameworkUpdates(frameworkUpdates);
	}
	/** @public @arg {RSG_SearchSuggestions} x */
	RSG_SearchSuggestions(x) {
		const cf="RSG_SearchSuggestions";
		const {responseContext: {},trackingParams,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.trackingParams(trackingParams);
	}
	/** @public @arg {RSG_Transcript} x */
	RSG_Transcript(x) {
		const cf="RSG_Transcript";
		const {responseContext: {},actions,trackingParams,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.z(actions,a => {
			if("updateEngagementPanelAction" in a) {return this.AU_EngagementPanel(a);}
		});
		this.trackingParams(trackingParams);
	}
	/** @public @arg {RSL_Like} x */
	RSL_Like(x) {
		const cf="RSL_Like";
		const {responseContext: {},actions,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.tz(actions,x => {
			if("openPopupAction" in x) return this.TA_OpenPopup("TA_OpenPopup_Empty",x);
			return null;
		});
	}
	/** @public @arg {RSL_Dislike} x */
	RSL_Dislike(x) {
		const cf="RSL_Dislike";
		const {responseContext: {},actions,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		let ac=this.tz(actions,x => {
			if("openPopupAction" in x) return this.TA_OpenPopup("TA_OpenPopup_Empty",x);
			return null;
		});
		if(!ac) return;
		let [r1]=ac;
		this.z(r1,this.g);
	}
	/** @public @arg {RSL_RemoveLike} x */
	RSL_RemoveLike(x) {
		const cf="RSL_RemoveLike";
		const {responseContext: {},actions,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.tz(actions,(x => {
			if("openPopupAction" in x) return this.TA_OpenPopup("TA_OpenPopup_Empty",x);
			return null;
		}));
	}
	/** @public @arg {REG_DatasyncIds} x */
	REG_DatasyncIds(x) {
		const cf="REG_DatasyncIds";
		const {responseContext: {},datasyncIds,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.z(datasyncIds,this.a_primitive_str);
	}
	/** @public @arg {REG_AccountSwitcher} x */
	REG_AccountSwitcher(x) {
		const cf="REG_AccountSwitcher";
		const {responseContext: {},selectText,actions,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.G_Text(selectText);
		this.z(actions,this.A_GetMultiPageMenu);
	}
	//#endregion
	//#region A & AU
	/** @private @arg {AU_Description} x */
	AU_Description(x) {
		const cf="AU_Description";
		this.y(cf,"updateDescriptionAction",x,this.AD_Description);
	}
	/** @private @arg {AD_Description} x */
	AD_Description(x) {
		const cf="AD_Description";
		const {description,...y}=this.s(cf,x); this.g(y);
		this.G_Text(description);
	}
	/** @private @arg {AU_Title} x */
	AU_Title(x) {this.y("UA_Title","updateTitleAction",x,x => this.y("UA_TitleData","title",x,this.G_Text));}
	/** @private @arg {AU_DateText} x */
	AU_DateText(x) {this.y("UA_DateText","updateDateTextAction",x,x => this.y("UA_DateTextData","dateText",x,this.G_Text));}
	/** @private @arg {AU_ToggleButtonText} x */
	AU_ToggleButtonText(x) {
		this.y("AU_ToggleButtonText","updateToggleButtonTextAction",x,x1 => {
			const cf="AU_ToggleButtonTextData";
			const {buttonId,defaultText,toggledText,...y}=this.s(cf,x1); this.g(y);
			if(buttonId!=="TOGGLE_BUTTON_ID_TYPE_LIKE") debugger;
			this.G_Text(defaultText);
			this.G_Text(toggledText);
		});
	}
	/** @private @arg {AU_Viewership} x */
	AU_Viewership(x) {this.y("AU_Viewership","updateViewershipAction",x,x => this.y("AU_ViewershipData","viewCount",x,this.R_VideoViewCount));}
	/** @private @arg {AU_EngagementPanel} x */
	AU_EngagementPanel(x) {
		const cf="AU_EngagementPanel";
		const {updateEngagementPanelAction,clickTrackingParams,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.AD_UpdateEngagementPanel(updateEngagementPanelAction);
		this.clickTrackingParams(clickTrackingParams);
	}
	/** @private @arg {AD_UpdateEngagementPanel} x */
	AD_UpdateEngagementPanel(x) {
		const cf="AD_UpdateEngagementPanel";
		const {content,targetId,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.xr.R_Transcript(content);
		if(targetId!=="engagement-panel-searchable-transcript") debugger;
	}
	//#endregion
	//#region Continuation [RC]
	/** @private @arg {RC_PlaylistPanel} x */
	RC_PlaylistPanel(x) {this.H_("playlistPanelContinuation",x,this.g);}
	/** @private @arg {RC_LiveChat} x */
	RC_LiveChat(x) {this.H_("liveChatContinuation",x,this.DC_LiveChat);}
	//#endregion
	//#region Misc
	/** @template {string} T @arg {string} x @arg {T} tag @returns {string&{_tag:T}} */
	make_str_tag(x,tag) {
		/** @template T */
		class UrlEncodedTag extends String {
			/** @arg {string} str @arg {T} tag */
			constructor(str,tag) {
				super(str);
				this._tag=tag;
			}
		}
		let tagged_obj=new UrlEncodedTag(x,tag);
		return as(tagged_obj);
	}
	/** @template {keyof D_UrlInfoMap} K @arg {K} k @arg {D_UrlInfoMap[K]["url"]} x @returns {D_UrlInfoMap[K]} */
	getInfoForUrl(x,k) {
		switch(k) {
			case "https://www.youtube.com/redirect": {
				let parsed_url=this._convert_url_to_obj(x);
				if("_tag" in parsed_url) throw new Error();
				let parsed_params=this.parse_url_search_params(parsed_url.search);
				if(!("q" in parsed_params)) {debugger; throw new Error();}
				/** @type {GU_YoutubeUrlRedirect_Info} */
				let wt={
					url: x,
					encoded_params: {q: this.make_str_tag(parsed_params.q,"EncodedURIComponent"),}
				};
				return wt;
			}
		}
		throw new Error();
	}
	/** @template {{}} T @arg {T} x */
	get_omit_gen(x) {
		return new (class Gen1 {
			/** @arg {T} x */
			constructor(x) {
				this.x=x;
			}
			/** @arg {T} x */
			set(x) {
				this.x=x;
			}
			/** @returns {T} */
			get() {
				return this.x;
			}
		})(x);
	}
	/** @public @arg {P_ParamParse} cf @arg {string} x */
	decode_binary_obj(cf,x) {
		let binary_arr=this.read_b64_protobuf(decodeURIComponent(x));
		if(!binary_arr) {debugger; return;}
		this.decode_binary_arr(cf,binary_arr);
	}
	/** @private @type {string[]} */
	typedef_cache=[];
	/** @arg {JsonReplacerState} s @arg {V_ParamObj} x @returns {RetParam_BinaryTimestamp|RetParam_VW_2|null} */
	replace_bin_binary_ts(s,x) {
		if(!(1 in x&&2 in x&&3 in x)) return null;
		let f1=i(x[1]); let f2=i(x[2]); let f3=i(x[3]);
		let kk=this.get_keys_of(x);
		/** @type {V_BinaryTimestamp} */
		if(f1&&f2&&f3&&f1[0]==="v_data32"&&f2[0]==="v_data_fixed32"&&f3[0]==="v_data_fixed32"&&this.eq_keys(kk,[1,2,3])) {
			return `TYPE::T_VW<V_BinaryTimestamp>`;
		};
		let gen_json=this.gen_typedef_bin_json(s,x);
		console.log("maybe_handle_bin.do_V_BinaryTimestamp",x,gen_json);
		return `TYPE::T_VW_BinTs<${gen_json},"json">`;
		/** @arg {V_ParamArrBox} x */
		function i(x) {if(x[1].length!==1) return null; return x[1][0];}
	}
	/** @arg {JsonReplacerState} s @arg {V_ParamObj} x @returns {RetParam_ShortTimestamp|null} */
	replace_bin_short_ts(s,x) {
		if(!(1 in x&&2 in x&&3 in x)) return null;
		if(x[1][1].length!==1) return null;
		if(x[2][1].length!==1) return null;
		let f1=x[1][1][0];
		let f2=x[2][1][0];
		if(f1[0]==="v_data32"&&f2[0]==="v_data32") {
			let kk=this.get_keys_of(x);
			if(this.eq_keys(kk,[1,2,3])) {
				/** @type {V_ShortTimestamp} */
				let bts={...x,1: ["v_param_arr",[f1]],2: ["v_param_arr",[f2]]}; bts;
				return `TYPE::T_VW<V_ShortTimestamp>`;
			}
		}
		let gen_json=this.gen_typedef_bin_json(s,x);
		console.log("maybe_handle_bin.do_V_ShortTimestamp",x,gen_json);
		return null;
	};
	/** @arg {JsonReplacerState} s @arg {V_Param_Child} x @returns {RetParam_child|RetParam_VW_2} */
	v_param_2_child(s,x) {
		const [,binary_arr,obj]=x;
		if(obj!==null) {
			let bin_ts=this.replace_bin_binary_ts(s,obj);
			if(bin_ts) return bin_ts;
			let short_ts=this.replace_bin_short_ts(s,obj);
			if(short_ts) return short_ts;
			let gen_json=this.gen_typedef_bin_json(s,obj);
			return `TYPE::T_VW_Child<${gen_json},"json">`;
		}
		let decoded_string=this._decoder.decode(binary_arr);
		if(binary_arr[0]===0) {
			console.log("[maybe_handle_bin.do_maybe_string]",x,decoded_string);
			throw new Error();
		}
		return `TYPE::T_VW_Child<"${decoded_string}","string">`;
	}
	/** @arg {[type:"v_data32",value: number]} x @returns {RetParam_D32} */
	v_param_2_D32(x) {return `TYPE::T_D32<${x[1]}>`;}
	/** @arg {[type:"v_data64",raw:number[],value: bigint]} x @returns {RetParam_D64} */
	v_param_2_D64(x) {return `TYPE::T_D64<${x[2]}n>`;}
	/** @arg {[type:"v_data_fixed32",value: number]} x @returns {RetParam_FD32} */
	v_param_2_FD32(x) {return `TYPE::T_FD32<${x[1]}>`;}
	/** @arg {[type:"v_data_fixed64",value: bigint]} x @returns {RetParam_FD64} */
	v_param_2_FD64(x) {return `TYPE::T_FD64<${x[1]}n>`;};
	/** @arg {JsonReplacerState} s @arg {V_Param_Raw} x @returns {RetParam_raw} */
	v_param_2_raw(s,x) {
		switch(x[1][0]) {
			case "string": return `TYPE::T_VW_Str<"${x[1][1]}">`;
			case "bigint": return `TYPE::T_VW_Bigint<${x[1][1]}n>`;
			case "number": return `TYPE::T_VW_R<"${x[1][0]}",${x[1][1]}>`;
		}
		let obj_json=this.gen_typedef_bin_json(s,x[1][1]);
		return `TYPE::T_VW_R<"${x[1][0]}",${obj_json}>`;
	};
	/** @arg {V_Param_D64} x @returns {RetParam_VW_Bigint} */
	param_vw_bigint(x) {return `TYPE::T_VW_Bigint<${x[2]}n>`;}
	/** @arg {JsonReplacerState} s @arg {V_Param_RawChild} x @returns {RetParam_raw_child} */
	v_param_rc_def(s,x) {
		let gen_json_binary_arr=this.gen_typedef_bin_json(s,x[1]);
		let obj_json;
		let raw_json="{}";
		if(x[2]===null) {
			obj_json="null";
		} else {
			obj_json=this.gen_typedef_bin_json(s,x[1]);
		}
		return `TYPE::["raw_child",${gen_json_binary_arr},${obj_json},${raw_json}]`;
	};
	/** @arg {JsonReplacerState} s @arg {V_Param_RawChild} x @returns {RetParam_raw_child} */
	v_param_2_raw_child(s,x) {
		let x1=x[3];
		switch(x1[0]) {
			default: return this.v_param_rc_def(s,x);
			case "string": return `TYPE::T_RC_Str<"${x1[1]}">`;
		}
	};
	/** @arg {JsonReplacerState} s @arg {V_Param} x @returns {V_ParamItemFiltered} */
	v_param_item(s,x) {
		switch(x[0]) {
			default: x[0]===""; debugger; return x;
			case "v_child": return this.v_param_2_child(s,x);
			case "v_data_fixed32": return this.v_param_2_FD32(x);
			case "v_data_fixed64": return this.v_param_2_FD64(x);
			case "v_data32": return this.v_param_2_D32(x);
			case "v_data64": return this.param_vw_bigint(x);
			case "v_raw_child": return this.v_param_2_raw_child(s,x);
			case "v_raw": return this.v_param_2_raw(s,x);
			case "v_struct": return ["f_struct",x[1]];
			case "v_group": return ["f_group",x[1]];
			case "v_error": return ["f_error",x[1]];
			case "v_info": return ["f_info",x[1]];
			case "v_child_str": return x;
			case "v_param_arr": return ["f_param_arr",x[1]];
		}
	}
	/** @arg {JsonReplacerState} s @arg {V_ParamArrBox} x */
	v_param_arr(s,x) {
		let x1=x[1];
		let res=[];
		if(x1.length===1) {
			let x2=x1[0];
			switch(x2[0]) {
				default: x2[0]===""; debugger; break;
				case "v_raw": {
					let x3=x2[1];
					switch(x3[0]) {
						default: debugger; break;
						case "string": return `TYPE::TV_Str_R<"${x2[1]}">`;
					}
					debugger;
				} break;
				case "v_data32": return this.v_param_2_D32(x2);
				case "v_data64": return this.v_param_2_D64(x2);
				case "v_data_fixed32": return this.v_param_2_FD32(x2);
				case "v_data_fixed64": return this.v_param_2_FD64(x2);
				case "v_raw_child": {
					let x3=x2[3];
					if(x2[2]===null) {
						switch(x3[0]) {
							default: break;
							case "string": return `TYPE::TV_Str<"${x3[1]}">`;
						}
					}
					debugger;
				} break;
				case "v_child_str": {
					let x3=x2[3];
					if(x2[2]===null) {
						switch(x3[0]) {
							default: break;
							case "string": return `TYPE::TV_Str_CS<"${x3[1]}">`;
						}
					}
					debugger;
				} break;
				case "v_child": {
					let x3=x2[2]; x3;
					if(x3===null) {debugger; break;}
					let bin_ts=this.replace_bin_binary_ts(s,x3);
					if(bin_ts) return bin_ts;
					let short_ts=this.replace_bin_short_ts(s,x3);
					if(short_ts) return short_ts;
					let gen_json=this.gen_typedef_bin_json(s,x3);
					return `TYPE::T_VW_J<${gen_json}>`;
				}
				case "v_error": throw new Error("Found error in input stream");
				case "v_group":
				case "v_struct":
				case "v_info": debugger; break;
				case "v_param_arr": debugger; break;
			}
		}
		for(let x2 of x1) {
			res.push(this.v_param_item(s,x2));
		}
		if(res.length===1) return res;
		if(res.every(v => typeof v==="string")) return res;
		if(res.every(v => typeof v!=="string"&&v!==null&&v[0]==="f_group")) return res;
		debugger;
		return res;
	}
	//#endregion
	//#region codegen_typedef_bin
	/** @private @arg {JsonReplacerState} s @arg {object|null} x @returns {string|object|null} */
	typedef_json_replace_bin_obj(s,x) {
		if(x===null) return x;
		if(x instanceof Array) {
			if(x.length===1) {
				if(typeof x[0]==="number") {
					return `TYPE::T_Tuple_1<${x[0]}>`;
				}
				return `TYPE::T_Tuple_1<${this.gen_typedef_bin_json(s,x[0])}>`;
			}
			/** @type {D_ProtobufObj|V_ParamArrBox} */
			let x3=as(x);
			switch(x3[0]) {
				case "data32": case "data_fixed32": case "data_fixed64": {
					if(x3.length!==3) {debugger; return null;}
					return this.tr_arr_to_obj([x3]);
				}
				case "data64":
				case "child": {
					if(x3.length!==4) {debugger; return null;}
					return this.tr_arr_to_obj([x3]);
				}
				case "v_param_arr": return this.v_param_arr(s,x3);
			}
			if(x3.length===2&&typeof x3[0]==="string") {
				switch(x3[0]) {
					case "error": debugger; break;
				}
			}
			let fx=x[0];
			console.log("[maybe_handle_bin.do_fx]",fx);
			/** @type {(D_ProtobufObj|V_ParamArrBox)[]} */
			let x_t1=x;
			if(x_t1[0][0]==="child") {
				debugger;
				return x_t1;
			}
			console.log("[maybe_handle_bin.do_handle_arr]",x);
			return x;
		}
		if(x instanceof Uint8Array) return `TYPE::T_Uint8Array<${x.length}>`;
		if(s.is_root&&s.cur_key==="") {
			/** @type {{}} */
			let xt=x;
			/** @type {{[U in string|number]: unknown}} */
			let xa=xt;
			/** @type {{[U in string|number]: unknown}} */
			let fx={};
			let fk=Object.keys(x);
			for(let kk of fk) {
				if(kk.match(/^\d+$/)) {
					let num=parseInt(kk,10);
					if(num>=256) {
						fx[`0x${num.toString(16)}`]=xa[kk];
						continue;
					}
					fx[kk]=xa[kk];
					continue;
				}
				fx[kk]=xa[kk];
			}
			return fx;
		}
		/** @type {(`${number}`|string)[]} */
		let keys=Object.keys(x);
		let kn=keys.map(e => {
			/** @arg {string} _x @returns {asserts _x is `${number}`} */
			function assume_numeric_template(_x) {}
			assume_numeric_template(e);
			return this.parse_number_template(e);
		});
		if(kn.every(x => !Number.isNaN(x))) return x;
		if("message" in x) return x;
		if("type" in x&&"v" in x&&keys.length===2) {
			console.log("[maybe_handle_bin.keys.typed_obj]",x.type,x.v);
			return x;
		}
		console.log("[maybe_handle_bin.keys.string_like]",keys);
		debugger;
		return x;
	}
	/** @private @arg {JsonReplacerState} s @arg {string} k @arg {unknown} x @returns {string|symbol|number|boolean|undefined|object|null} */
	typedef_json_replace_bin(s,k,x) {
		s.next_key(k,x);
		switch(typeof x) {
			default: x===""; throw new Error("New type from typeof obj");
			case "undefined": return x;
			case "symbol": return x;
			case "string": return x;
			case "object": return this.typedef_json_replace_bin_obj(s,x);
			case "number": return x;
			case "function": return x;
			case "boolean": return x;
			case "bigint": return `TYPE::V_Bigint<${x}n>`;
		}
	}
	/** @private @arg {JsonReplacerState} s @arg {object} x @returns {Ret_gen_json} */
	gen_typedef_bin_json(s,x) {
		let json_res=JSON.stringify(x,this.typedef_json_replace_bin.bind(this,s),"\t");
		json_res=this.replace_until_same(json_res,/\[\s+{([^\[\]]*)}\s+\]/g,(_a,/**@type {string} */v) => {
			let vi=v.split("\n").map(e => `${e.slice(0,1).trim()}${e.slice(1)}`).join("\n");
			return `[${vi}]`;
		});
		json_res=json_res.replaceAll(/"TYPE::(.+)"/gm,(_a,/**@type {string} */x) => {
			let [f,...r]=x.replaceAll(/\\"|\\n|\\t/g,(/**@type {string} */v) => {
				if(v==="\\\"") return "\"";
				if(v==="\\n") return "\n";
				if(v==="\\t") return "\t";
				return v;
			}).split("\n");
			r=r.map(e => `\t${e}`);
			return [f,...r].join("\n");
		});
		json_res=json_res.replaceAll(/\"(\w+)\":/g,(_a,g) => {return g+":";});
		return json_res;
	}
	/** @private @arg {JsonReplacerState} s @arg {string} cf @arg {object} x @returns {string} */
	gen_typedef_bin(s,cf,x) {
		return `\ntype ${cf}=${this.gen_typedef_bin_json(s,x)};\n`;
	}
	/** @api @public @arg {string} cf @arg {object} x @arg {boolean} [do_break] */
	codegen_typedef_bin(cf,x,do_break=true) {
		/** @private @type {JsonReplacerState} */
		let s=new JsonReplacerState({
			text_decoder: this._decoder,
			cf,keys: [],is_root: true
		});
		let res_str=this.gen_typedef_bin(s,cf,x);
		let is_new=false;
		if(res_str) {
			if(!this.typedef_cache.includes(res_str)) {
				this.typedef_cache.push(res_str);
				console.log(res_str);
				is_new=true;
			}
		}
		if(do_break) {debugger;}
		return is_new;
	}
	//#endregion
	//#region More misc
	/** @protected @arg {K} k @template U @template {T_DistributedKeyof<T>} K @template {{[U in string]:[T];}} T @arg {string} cf @arg {T} x @arg {(this:this,x:T[K][0])=>U} f */
	H_d(cf,k,x,f) {
		if(!x) {debugger; return null;}
		this.k(cf,x);
		let keys=this.get_keys_of(x);
		if(keys.length!==1) debugger;
		if(k!=keys[0]) {debugger; return null;}
		const a=x[k];
		if(!a) {debugger; return null;}
		const [value]=a;
		return f.call(this,value);
	}
	/**
	 * @protected
	 * @template V @template {PropertyKey} K @template {{[U in K]:[T];}} T
	 * @arg {K} k @arg {CF_H_a} cf @arg {T} x @arg {(this:this,x:T[K][0])=>V} f
	 * @returns {[y,ret]}
	 */
	H_a(cf,k,x,f,save=false) {
		if(save) this.k(cf,x);
		const {[k]: [a],...y}=this.s(cf,x);
		const ret=f.call(this,a);
		return [y,ret];
	}
	/** @type {string[]} */
	_continuation_logged_str=[];
	/** @private @arg {P_ParamParse} cf @arg {D_ProtobufObj[]} x */
	decode_binary_arr(cf,x) {
		if(x.length===0) debugger;
		let bin_obj=this.tr_arr_to_obj(x);
		if(!bin_obj) {debugger; return;}
		try {
			this.binary_result(cf,bin_obj);
		} catch(e) {
			if(e instanceof Error) {
				console.log("binary_result err",e);
				this.codegen_typedef_bin(`P_${cf.replaceAll(".","_")}`,bin_obj,false);
			} else {
				debugger;
			}
		}
	}
	/** @private @arg {string} x */
	read_b64_protobuf(x) {
		let buffer=base64_url_dec.decodeByteArray(x);
		if(!buffer) {debugger; return null;}
		let reader=new MyReader(buffer);
		let protobuf_arr=reader.try_read_any();
		if(protobuf_arr===null) return null;
		if(protobuf_arr.find(e => e[0]==="error")) return null;
		return protobuf_arr;
	}
	/** @public @arg {Extract<T_SplitOnce<NS_DP_Parse.ParseUrlStr_0,"/">,["shorts",any]>} x */
	parse_shorts_url(x) {
		const [sec,raw_id]=x; if(sec!=="shorts") debugger;
		this.videoId(raw_id);
	}
	/** @private @type {string[]} */
	cache_playlist_index=[];
	log_start_radio=false;
	log_playlist_index=false;
	/** @public @arg {CF_L_TP_Params} root @arg {Extract<T_SplitOnce<ParseUrlWithSearchIn,"?">,["watch",...any]>[1]} x */
	parse_watch_page_url_url_arr(root,x) {
		root;
		let {...x2}=this.parse_url_search_params(x);
		/** @arg {typeof x2} x @returns {typeof y2|null} */
		const px_x2=(x) => {
			const {v,...y}=x;
			this.videoId(v);
			if(this.is_empty_obj(y)) return null;
			let y2=y;
			return y2;
		};
		let x3=px_x2(x2);
		if(x3===null) return;
		if("pp" in x3) {
			const {pp,...y}=x3;
			this.playerParams("watch.player_params",pp);
			if(this.is_empty_obj(y)) return;
			this.g(y);
			return;
		}
		if("t" in x3) {
			const {t,...y}=x3;
			if(this.is_empty_obj(y)) return;
			this.g(y); return;
		}
		x: if("list" in x3) {
			lx: {
				const {list,...y2}=x3;
				this.playlistId(list);
				if("playnext" in y2) {
					const {playnext,...y}=y2;
					this.save_string("video_url.info.playnext",playnext);
					if(this.is_empty_obj(y)) break lx;
					this.g(y); break lx;
				}
				if(this.is_empty_obj(y2)) break x;
				if("index" in y2) {
					const {index,...y3}=y2; this.g(y3);
					if(this.cache_playlist_index.includes(index)) break x;
					this.cache_playlist_index.push(index);
					if(this.log_playlist_index) console.log("[playlist_index]",index);
					return;
				}
				const {start_radio,...y3}=y2;
				this.save_string("video_url.info.start_radio",start_radio);
				this.DI_AGR_UrlInfo({type: "raw",tag: "key:start_radio",info_arr: [{start_radio}]});
				if(this.log_start_radio) console.log("[playlist_start_radio] [v=%s] [start_radio=%s]",x2.v,start_radio);
				if(this.is_empty_obj(y3)) break x;
				const {rv,...y4}=y3;
				this.videoId(rv);
				this.g(y4);
			}
			return;
		}
	}
	/** @public @arg {[RE_D_VE3832_PreconnectUrl]} x */
	parse_preconnect_arr(x) {
		if(x.length!==1) debugger;
		this.RE_D_VE3832_PreconnectUrl(x[0]);
	}
	/** @type {string[]} */
	logged_hosts=[];
	log_googlevideo_host=false;
	/** @private @template {D_GoogleVideoPathname} T @arg {D_GoogleVideoHostPartitionRet<T>} x */
	D_GoogleVideoHostPartitionRet(x) {
		if(this.log_googlevideo_host) {
			if(this.logged_hosts.includes(x.host)) return;
			this.logged_hosts.push(x.host);
			let [s1,s2,s3,s4,s5,partition,s7,selector,s8,s9,s10,s11,...py]=x.parts; this.eq_keys(py,[]);
			console.log(`[google_video_host] ["https-parts://[${s1}][${s2}][${s3}][${s4}][${s5}][${partition}][${s7}][${selector}][${s8}][${s9}][${s10}][${s11}]"]`);
			Promise.resolve().then(() => this.logged_hosts.length=0);
		}
	}
	/** @private @template {UrlParse<RE_D_GoogleVideoUrl>} T @arg {T} x @returns {D_GoogleVideoHostPartitionRet<T["pathname"]>} */
	get_google_host_parts(x) {
		/** @type {`${"r"|"rr"}${number}---sn-${string}n${string}.googlevideo.com`} */
		const host=as_any(x.host);
		if(!this.str_starts_with(host,"rr")) {
			let [host_parts_1,empty_1,...y]=split_string(host,".googlevideo.com");
			if(empty_1!=="") debugger; if(y.length!==0) debugger;
			let parts_1=split_string(host_parts_1,"---");
			let part_2=split_string_once(parts_1[0],"r")[1];
			let partitioned=this.get_host_partition(parts_1[1]);
			return {
				host,
				path: x.pathname,
				parts: ["r",part_2,"---",...partitioned.parts,".","googlevideo",".","com"],
				partitioned,
			};
		}
		let [host_parts_1,empty_1,...y]=split_string(host,".googlevideo.com");
		if(empty_1!=="") debugger; if(y.length!==0) debugger;
		let parts_1=split_string(host_parts_1,"---");
		let part_2=split_string_once(parts_1[0],"rr")[1];
		let partitioned=this.get_host_partition(parts_1[1]);
		return {
			host,
			path: x.pathname,
			parts: ["rr",part_2,"---",...partitioned.parts,".","googlevideo",".","com"],
			partitioned,
		};
	}
	/** @private @arg {RE_D_VE3832_PreconnectUrl} x */
	RE_D_VE3832_PreconnectUrl(x) {
		let pu=this._convert_url_to_obj(x);
		let parts=this.get_google_host_parts(pu);
		if(parts.path!=="/generate_204") debugger;
		this.D_GoogleVideoHostPartitionRet(parts);
	}
	/** @public @arg {RS_AttLog_RC} x */
	RS_AttLog_RC(x) {this.HD_("RS_AttLog_RC","responseContext",x);}
	/** @type {Map<string,((y:C_UpdateToggleButtonState)=>void)>} */
	h_m=new Map;
	/** @public @arg {RS_Channel} x */
	RS_Channel(x) {
		const cf="RS_Channel";
		const {responseContext: {},contents,header,metadata,topbar,trackingParams,microformat,onResponseReceivedActions,cacheMetadata,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.R_TwoColumnBrowseResults(contents);
		this.xr.R_C4TabbedHeader(header);
		this.xr.R_Channel_MD(metadata);
		this.R_DesktopTopbar(topbar);
		this.trackingParams(trackingParams);
		this.R_Microformat(microformat);
		this.tz(onResponseReceivedActions,this.C_ResetChannelUnreadCount);
		this.t(cacheMetadata,this.D_Cache_MD);
	}
	/** @public @arg {RSG_SharePanel} x */
	RSG_SharePanel(x) {
		const cf="RSG_SharePanel";
		const {responseContext: {},trackingParams,actions,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.trackingParams(trackingParams);
		this.z(actions,x => {
			const cf="RSG_SharePanel_Action";
			const {clickTrackingParams,openPopupAction,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
			this.clickTrackingParams(clickTrackingParams);
			console.log("[RSG_SharePanel.openPopupAction]",openPopupAction);
		});
	}
	/** @public @arg {RS_Subscribe} x */
	RS_Subscribe(x) {
		const cf="RS_Subscribe";
		const {responseContext: {},actions,newNotificationButton,trackingParams,frameworkUpdates,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.z(actions,x => this.xr.G_RS_Subscribe_Action(x));
		this.R_SubscriptionNotificationToggleButton(newNotificationButton);
		this.trackingParams(trackingParams);
		this.D_FrameworkUpdates(frameworkUpdates);
	}
	/** @private @arg {AD_UpdateChannelSwitcherPage} x */
	AD_UpdateChannelSwitcherPage(x) {this.TA_Page("AD_UpdateChannelSwitcherPage",x,x => this.xr.R_ChannelSwitcherPage(x));}
	/** @public @arg {RS_Unsubscribe} x */
	RS_Unsubscribe(x) {
		const cf="RS_Unsubscribe";
		const {responseContext,actions,trackingParams,frameworkUpdates,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.RC_ResponseContext(responseContext);
		this.z(actions,x => {
			x;
		});
		this.trackingParams(trackingParams);
		this.D_FrameworkUpdates(frameworkUpdates);
	}
	/** @private @arg {DC_LiveChat} x */
	DC_LiveChat(x) {
		const cf="DC_LiveChat";
		const {continuations,actionPanel,actions,clientMessages,emojis,header,itemList,ticker,trackingParams,participantsList,popoutMessage,viewerName,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.z(continuations,x => this.xr.G_LiveChatContinuationItem(x));
		this.t(actionPanel,x => this.xr.R_LiveChatMessageInput(x));
		this.tz(actions,x => this.xr.G_LiveChatContinuationActions(x));
		this.t(clientMessages,this.D_ClientMessages);
		this.tz(emojis,x => this.xr.D_LiveChatEmoji(x));
		this.t(header,this.R_LiveChatHeader);
		this.t(itemList,x => this.xr.R_LiveChatItemList(x));
		this.t(ticker,x => this.xr.R_LiveChatTicker(x));
		this.trackingParams(trackingParams);
		this.t(participantsList,x => this.xr.R_LiveChatParticipantsList(x));
		this.t(popoutMessage,x => this.xr.R_Message(x));
		this.t(viewerName,this.a_primitive_str);
	}
	/** @private @arg {AD_AccountItem} x */
	AD_AccountItem(x) {
		const cf="AD_AccountItem";
		const {accountName,accountPhoto,isSelected,isDisabled,hasChannel,serviceEndpoint,accountByline,channelHandle,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.G_Text(accountName);
		this.D_Thumbnail(accountPhoto);
		this.a_primitive_bool(isSelected);
		this.a_primitive_bool(isDisabled);
		this.a_primitive_bool(hasChannel);
		this.g(serviceEndpoint);
		this.G_Text(accountByline);
		this.G_Text(channelHandle);
	}
	/** @arg {S_VideoGoodPutShape} x */
	S_VideoGoodPutShape(x) {
		const cf="S_VideoGoodPutShape";
		const {id,source,range,expire,ip,ms,mm,pl,nh,sparams,signature,key,...y}=this.s(cf,x); this.g(y);
		this.save_b64_binary(`${cf}.id`,id);
		this.save_string(`${cf}.source`,source);
		this.save_string(`${cf}.range`,range);
		let exp=this.parse_number_template(expire);
		this.a_primitive_num(exp);
		this.save_string(`${cf}.ip`,ip);
		this.save_string(`${cf}.ms`,ms);
		this.save_string(`${cf}.mm`,mm);
		this.save_string(`${cf}.pl`,pl);
		this.save_b64_binary(`${cf}.nh`,nh);
		switch(sparams) {
			default: this.cg.codegen_case(`${cf}.sparams`,sparams); debugger; break;
			case "id,source,range,expire,ip,ms,mm,pl,nh": break;
		}
		this.parse_signature(signature);
		this.save_string(`${cf}.key`,key);
	}
	/** @private @arg {`sn-${string}n${string}`} x @returns {D_GoogleVideoHostPartition} */
	get_host_partition(x) {
		let parts=this.get_gv_parts_impl(x);
		let partition={
			parts,
			partition: parts[2],
			selector: parts[4],
		};
		this.D_GoogleVideoHostPartition(partition);
		return partition;
	}
	/** @private @arg {`sn-${string}n${string}`} x @returns {["sn","-",G_GV_0,"n",G_GV_1]} */
	get_gv_parts_impl(x) {
		let ss=split_string(x,"-")[1];
		let idx=5;
		let r1=ss.slice(0,idx);
		let r2=ss.slice(idx+1);
		if(ss[idx]!=="n") debugger;
		this.assert_assume_is_type(r1,/**@returns {G_GV_0} */() => {throw new Error();});
		this.assert_assume_is_type(r2,/**@returns {G_GV_1} */() => {throw new Error();});
		return ["sn","-",r1,"n",r2];
	}
	/** @template T @arg {T} trg @arg {T} src @arg {keyof T} k */
	y_copy_key(trg,src,k) {
		trg[k]=src[k];
	}
	/** @private @template {"sparams"|"lsparams"} K @arg {(keyof D_VideoPlaybackShape)[]} key_list @arg {D_VideoPlaybackShape} x @arg {D_VideoPlaybackShape[K]} params_list @arg {K} target_src_key */
	extract_sparams(key_list,x,params_list,target_src_key) {
		/** @type {{[U in T_Split<typeof params_list>[number]]:D_VideoPlaybackShape[U&keyof D_VideoPlaybackShape]}} */
		let obj_sparams=as({});
		let kk_x=key_list;
		let idx=kk_x.indexOf(target_src_key);
		kk_x.splice(idx,1);
		let kk_sparams=this.split_str(params_list);
		/** @type {any} */
		let xa=x;
		/** @type {typeof obj_sparams} */
		let xt=xa;
		for(let k of kk_sparams) {
			this.y_copy_key(obj_sparams,xt,k);
			let idx=kk_x.indexOf(k);
			kk_x.splice(idx,1);
		}
		return obj_sparams;
	}
	/** @private @arg {"D_VideoPlaybackShape"} cf @arg {D_VideoPlaybackShape} uv */
	extract_shape_params(cf,uv) {
		const {sparams,lsparams}=this.s(cf,uv);
		this.save_string(`${cf}.sparams`,sparams);
		this.save_string(`${cf}.lsparams`,lsparams);
		let kk_x=this.get_keys_of(uv);
		let s_params_obj=this.extract_sparams(kk_x,uv,sparams,"sparams");
		let ls_params_obj=this.extract_sparams(kk_x,uv,lsparams,"lsparams");
		/** @typedef {"sparams"|"lsparams"|keyof D_VideoPlaybackShape_S_Params|keyof D_VideoPlaybackShape_LS_Params} OmitY1Keys */
		/** @type {Omit<typeof uv,OmitY1Keys>} */
		let y1=as({});
		/** @type {Exclude<(typeof kk_x)[number],OmitY1Keys>[]} */
		let kk_y1=as(kk_x);
		for(let k of kk_y1) this.y_copy_key(y1,uv,k);
		return {
			s: s_params_obj,
			ls: ls_params_obj,
			y: y1,
		};
	}
	/** @arg {D_InitPlayback} x */
	D_InitPlayback(x) {
		this.save_keys("D_InitPlayback",x);
	}
	/** @api @public @arg {UrlParse<Extract<D_UrlFormat,`https://${string}.googlevideo.com/${string}`>>} x */
	on_google_video_url(x) {
		// cSpell:ignoreRegExp /r\d---sn-.+?"/
		let s_host=split_string_once(x.host,".");
		let p_ret=this.get_google_host_parts(x);
		this.D_GoogleVideoHostPartitionRet(p_ret);
		switch(s_host[1]) {
			case "googlevideo.com": {
				switch(x.pathname) {
					case "/videoplayback": {
						let vp_search=x.search;
						let {...pp}=this.parse_url_search_params(vp_search);
						this.D_VideoPlaybackShape(as_any(pp));
					} break;
					case "/initplayback": {
						let ip_search=x.search;
						let {...pp}=this.parse_url_search_params(ip_search);
						this.D_InitPlayback(pp);
					} break;
					case "/videogoodput": {
						let pp=this.parse_url_search_params(x.search);
						this.S_VideoGoodPutShape(pp);
					} break;
				}
			} return;
			default:
		}
		/** @private @type {D_UrlFormat|GU_ExternalUrl} */
		console.log("[parse_url_external_1]",x);
		{debugger;}
	}
	/** @arg {string} cf @arg {string} sig_str */
	validate_sig(cf,sig_str) {
		if(sig_str.match(/^[0-9A-F]+$/)===null) debugger;
		this.save_number(cf,sig_str.length);
		switch(sig_str.length) {
			default: debugger; break;
			case 38: case 40:
		}
	}
	/** @arg {`${string}.${string}`} x */
	parse_signature(x) {
		let [sig_0,sig_1]=split_string_once(x,".");
		this.validate_sig("sig.0",sig_0);
		this.validate_sig("sig.1",sig_1);
	}
	/** @api @public @arg {CF_L_TP_Params} cf @arg {`/${string}`} x */
	parse_url_alt(cf,x) {
		cf;
		let s=split_string_once(x,"/"); this.cq(s[0],"");
		let [,v]=s;
		let s2=split_string_once(v,"/");
		if(s2.length===1) return;
		debugger;
	}
	//#endregion
	//#region binary
	//#region binary done
	/** @public @arg {BinaryVe} x */
	BinaryVe(x) {
		switch(x) {
			default: x; debugger; break;
			case 3832:
			case 3854:
			case 5754: break;
		}
	}
	/** @protected @arg {RB_Obj_f19} x @name V_VeDescObj */
	RB_Obj_f19(x) {
		const cf="R_Obj_f19",t=this;
		const {1: obj_tag,2: binary_ve,3: v3}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		t.t(obj_tag,x => t.save_number(`${cf}.tag`,t.T_D32(x)));
		t.save_number(`${cf}.BinaryVe`,this.T_D32(binary_ve));
		t.BinaryVe(t.T_D32(binary_ve));
		t.t(v3,x => t.save_number(`${cf}.f3`,t.T_D32(x)));
		this.codegen_typedef_bin(cf,x,false);
	}
	/** @protected @arg {D_TrackingObj_f16} x */
	PR_TrackingObj_f16(x) {
		const cf="G_PR_TrackingObj_f16";
		const {1: v_tag,2: v_id,3: v3,4: f4}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f1`,this.T_D32(v_tag));
		this.save_number(`${cf}.f2`,this.T_D32(v_id));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
		f4;
	}
	/** @protected @arg {H_TrackingObj} x */
	H_TrackingObj(x) {
		const cf="H_TrackingObj",t=this;
		const {1: obj_tag,2: obj_id,3: v3,4: f4,6: f6,7: f7,8: f8,9: f9,11: v11,16: f16,19: f19,21: f21}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		t.t(obj_tag,x => t.TK_D32(cf,x,"tag"));
		t.t(obj_id,x => t.TK_D32(cf,x,"id"));
		t.t(v3,x => t.TK_D32(cf,x,"f3"));
		t.t(f4,t.VW_BinaryTimestamp);
		t.t_cf(`${cf}_f6`,f6,t.H_TrackingObj_f6);
		t.t(f7,x => t.save_b64_binary(`${cf}.f7`,t.TV_Str(x)));
		t.ms_t(f8,u8 => {
			let [v8]=u8[1];
			switch(v8[0]) {
				default: debugger; break;
				case "v_data32": {
					let [,i8]=v8; this.save_number(`${cf}.f8`,i8);
				} break;
				case "v_data64": {
					let [,,i8]=v8; this.save_bigint(`${cf}.f8`,i8);
				} break;
			}
		});
		f9;
		v11&&(x => {
			switch(x) {
				default: debugger; break;
				case "FEwhat_to_watch":
			}
			this.browseId(x);
		})(this.TV_Str(v11));
		f16;
		f19;
		f21;
	}
	/** @arg {VW_BinaryTimestamp} x */
	VW_BinaryTimestamp(x) {this.V_BinaryTimestamp(this.T_VW(x));}
	/** @arg {"H_TrackingObj"} cf @arg {T_D32<number>} x @arg {T_ObjGetNumKey<H_TrackingObj,KM_TrackingObj>} k */
	TK_D32(cf,x,k) {this.save_number(`${cf}.${k}`,this.T_D32(x));}
	/** @arg {"H_TrackingObj_f6"} cf @arg {H_TrackingObj_f6} x */
	H_TrackingObj_f6(cf,x) {
		if(x[0]!=="v_param_arr") debugger;
		let [,[a,...y1]]=x; this.cq(y1.length,0);
		const [t]=a;
		/** @type {["raw_str",H_TrackingObj_f6_Str]|["child_str",H_TrackingObj_f6_Str_2]|["unknown",string]|null} */
		let r_str=null;
		switch(t) {
			default: debugger; break;
			case "v_child_str": {const [,,,b]=a; const [,c]=b; r_str=["child_str",c];} break;
			case "v_child": {
				const [,b]=a;
				let c=this._decoder.decode(b);
				if(!c) {debugger; break;}
				r_str=["unknown",c];
			} break;
			case "v_raw_child": {const [,,,b]=a; const [,c]=b; r_str=["raw_str",c];} break;
		}
		if(!r_str) return;
		this.save_string(`${cf}.str`,r_str[1]);
		if(r_str[0]==="unknown") {
			this.save_string(`${cf}.str.unk`,`${r_str[0]}:${r_str[1]}`);
			return;
		}
		switch(r_str[1]) {
			default: this.save_string_arr(`${cf}.str.default`,r_str); break;
			case "cards":
			case "endscreen":
			case "external":
			case "iv-endscreen":
			case "list_other":
			case "ni-push-u-sub":
			case "related-auto":
			case "related":
			case "rellist":
			case "shortswatch":
			case "watch":
		}
	}
	/** @arg {"H_TrackingObj"} cf @arg {{tag: H_TrackingObj_Tag,id: H_TrackingObj_Id;}} x */
	P_Tag_TrackingObj(cf,x) {this.TK_D32(cf,x.tag,"tag"); this.TK_D32(cf,x.id,"id");}
	/** @protected @arg {{type:"click_tracking",v:H_TrackingObj}|{type:"tracking",v:H_TrackingObj}} x */
	P_Typed_TrackingObj(x) {
		const cf="P_Typed_TrackingObj";
		const {type,v: z}=x; this.k(cf,z);
		switch(type) {
			case "click_tracking": return this.H_TrackingObj(z);
			case "tracking": return this.H_TrackingObj(z);
		}
	}
	/** @arg {string} cf @arg {{}} x @arg {{}} y */
	h_gen_keys(cf,x,y) {
		let u=this.get_keys_of_2(y); if(u.length>0) {
			let is_new=this.codegen_typedef_bin(cf,x,false);
			if(is_new) {
				let k=u.join(); console.log(`[${cf}.next_key]`,k);
			}
		}
	}
	/** @private @arg {"P_invalidation_continuation"|"P_timed_continuation_data"|"PR_continuation_params"} [cf] @arg {PR_continuation_params} x */
	PR_continuation_params(x,cf="PR_continuation_params") {
		if(0x6b7c87f in x) {
			const {0x6b7c87f: n}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
			this.PD_timed_continuation(this.T_VW(n));
			return;
		}
		if(0x722607a in x) {
			const {0x722607a: n}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
			this.PD_invalidation_continuation(this.T_VW(n));
			return;
		}
		if(0x94d81d4 in x) {
			const {0x94d81d4: n}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
			this.PD_continuation_params(this.T_VW(n));
			return;
		}
		this.h_gen_keys(cf,x,x);
	}
	/** @private @arg {P_invalidation_continuation} x */
	P_invalidation_continuation(x) {this.PR_continuation_params(x,"P_invalidation_continuation");}
	/** @private @arg {P_timed_continuation_data} x */
	P_timed_continuation_data(x) {this.PR_continuation_params(x,"P_timed_continuation_data");}
	/** @private @arg {P_trending_bp} x */
	P_trending_bp(x) {
		const cf="P_trending_bp";
		const {77: a}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.t(this.TV_Str(a),x => this.save_string(`${cf}.f77`,x));
	}
	/** @private @arg {V_ShortTimestamp} x */
	V_ShortTimestamp(x) {
		const cf="V_ShortTimestamp";
		const {1: request_timestamp_milli_utc,2: nanoseconds_ts}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.log_buffer.push(["number",`max_gen:V_ShortTimestamp:binary_ts_gen`,"f1","milliseconds",this.T_D32(request_timestamp_milli_utc)]);
		this.immediate_run_logger();
		let x2=this.T_D32(nanoseconds_ts);
		if(x2<=0b111011001010010001111110101000) return;
		console.log(`-- [max_gen:V_ShortTimestamp:f2] --\n\n[0b${x2.toString(2)}]`);
	}
	/** @private @arg {P_logging_context_serialized_context_data} x */
	P_logging_context_serialized_context_data(x) {
		const cf="P_logging_context_serialized_context_data",t=this;
		const {1: v1,3: v3}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		v1&&this.PK_f1(this.T_VW(v1));
		t.t(t.t(v3,t.TV_Str),this.playlistId);
	}
	/** @type {string[]} */
	params_to_decode=[];
	/** @private @arg {PD_continuation_request_browse_token} x */
	PD_continuation_request_browse_token(x) {
		const cf="PD_continuation_request_browse_token";
		const {2: browse_id,3: target_params,35: target_id}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.t(this.TV_Str(browse_id),x => this.save_string(`${cf}.f2`,x));
		this.t(this.TV_Str(target_params),x => {
			if(this.params_to_decode.includes(x)) return;
			this.params_to_decode.push(x);
		});
		this.t(target_id,x => this.t(this.TV_Str(x),x => this.save_string(`${cf}.f35`,x)));
	}
	/** @private @arg {PR_continuation_request_browse_token} x */
	PR_continuation_request_browse_token(x) {
		const cf="PR_continuation_request_browse_token";
		const {0x4c82a9c: a}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PD_continuation_request_browse_token(this.T_VW(a));
	}
	/** @private @arg {P_create_playlist_params} x */
	P_create_playlist_params(x) {
		const cf="P_create_playlist_params";
		const {1: v1}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f1`,this.T_D32(v1));
	}
	/** @private @arg {P_reel_player_params} x */
	P_reel_player_params(x) {
		const cf="P_reel_player_params"; let t=this;
		const {30: f30,57: f57,71: f71,72: f72}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		/** @template {number} T @arg {T_ObjGetNumKey<P_reel_player_params>} k @arg {T_D32<T>|undefined} v */
		let r=(k,v) => {t.mt_cf(t.mt(t.m(v),x => this.t(x,this.T_D32_v)),`${cf}.${k}`,(cf,x) => t.tn_cf(cf,x,t.save_number));};
		r("f30",f30); r("f57",f57); r("f71",f71);
		t.ms(f72,x => this.t(x,this.T_VW_Bigint));
	}
	/** @arg {CF_P_EntityKey} cf @arg {P_EntityKey} x */
	P_EntityKey(cf,x) {
		if(this.is_T_D32_at(x,341)||this.is_T_D32_at(x,194)) {
			const {2: video_id,4: f4,5: f5}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
			this.t(this.TV_Str(video_id),this.videoId);
			this.save_number(`${cf}.f4`,this.T_D32(f4));
			this.save_number(`${cf}.f5`,this.T_D32(f5));
			return;
		}
		if(this.is_T_D32_at(x,246)) {
			const {2: wrapped_str,4: f4,5: f5}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
			const {1: f2_f1,...y1}=this.T_VW(wrapped_str); this.g(y1);
			this.t(this.TV_Str(f2_f1),x => this.save_string(`${cf}.f2.f1`,x));
			this.save_number(`${cf}.f4`,this.T_D32(f4));
			this.save_number(`${cf}.f5`,this.T_D32(f5));
			return;
		}
		const {2: entity_target_id,4: f4,5: f5}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.t(this.TV_Str(entity_target_id),x => {
			if(this.str_starts_with(x,"RD")) return this.playlistId(x);
			if(this.str_starts_with(x,"UC")) return this.channelId(x);
			switch(x) {
				default: {
					debugger;
					switch(x) {
						case "":
					}
				} break;
				case "DESCRIPTION_CHAPTERS":
				case "KEY_MOMENTS":
				case "AUTO_CHAPTERS":
				case ".transcript.track.selection.key": break;
				case "/youtube/app/watch/player_state": break;
				case "183848276973": break;
				case "HEATSEEKER": break;
				case "repeat_state": break;
				case "topbar": break;
			}
		});
		this.save_number(`${cf}.f4`,this.T_D32(f4));
		this.save_number(`${cf}.f5`,this.T_D32(f5));
	}
	/** @private @arg {P_search_params} x */
	P_search_params(x) {
		const cf="P_search_params";
		const {2: pf_value}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PF_23n24n(this.T_VW(pf_value));
	}
	/** @private @arg {PF_23n24n} x */
	PF_23n24n(x) {
		const cf="PF_23n24n";
		const {23: a,24: b}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.cq(this.T_D32(a),1);
		this.t(this.TV_Str(b),b => this.params("pf_23n24n.bin_params",b));
	}
	/** @private @arg {P_bin_params_1_f1} x */
	P_bin_params_1_f1(x) {
		const cf="P_bin_params_1.f1";
		const {1: a,2: b}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		let iv_fa=parseInt(this.T_FD64(a).toString(16).slice(0,2),16);
		this.save_number(`${cf}.f1.first_byte`,iv_fa);
		let iv_fb=parseInt(this.T_FD64(b).toString(16).slice(0,2),16);
		this.save_number(`${cf}.f2.first_byte`,iv_fb);
	}
	/** @private @arg {P_bin_params_1} x */
	P_bin_params_1(x) {
		const cf="P_bin_params_1";
		const {1: a}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.P_bin_params_1_f1(this.T_VW(a));
	}
	//#endregion
	//#region binary partial
	//#region sub_region done
	/** @private @arg {PD_invalidation_continuation_f9} x */
	PD_invalidation_continuation_f9(x) {
		const cf="PD_invalidation_continuation.f9";
		const {
			1: v1,3: v3,4: f4,9: f9,
			10: f10,11: v11,15: f15,
			20: f20,21: f21,22: v22,24: f24,25: f25,28: f28,29: f29,
			30: f30,31: f31,33: v33,34: f34,
			...y
		}=this.s(cf,x); this.h_gen_keys(cf,x,y);
		this.save_number(`${cf}.f1`,this.T_D32(v1));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
		v11&&this.save_number(`${cf}.f11`,this.T_D32(v11));
		this.save_number(`${cf}.f22`,this.T_D32(v22));
		this.save_number(`${cf}.f33`,this.T_D32(v33));
	}
	/** @private @arg {PD_invalidation_continuation} x */
	PD_invalidation_continuation(x) {
		const cf="PD_invalidation_continuation";
		const {3: v3,5: f5,6: f6,8: f8,9: f9,10: f10,11: v11,16: f16,17: f17,19: f19,20: f20,21: f21,22: v22,23: f23}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_string(`${cf}.f3`,this.TV_Str(v3));
		f5;
		f6;
		f8;
		this.t(f9,x => this.PD_invalidation_continuation_f9(this.T_VW(x)));
		f10;
		v11&&console.log("f11",this.T_D32(v11));
		f16;
		f17;
		f19;
		f20;
		f21;
		this.g(this.T_VW(v22));
		f23;
	}
	PG_subscription_state_key=this.P_subscription_state_key;
	/** @private @arg {P_subscription_state_key} x */
	P_subscription_state_key(x) {
		const cf="P_subscription_state_key";
		const {2: a,4: f4,5: f5}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.t(this.TV_Str(a),x => this.channelId(x));
		this.save_number(`${cf}.f4`,this.T_D32(f4));
		this.save_number(`${cf}.f5`,this.T_D32(f5));
	}
	/** @type {string[]} */
	LP_dislike=[];
	/** @private @arg {P_dislike_params_f1} x */
	P_dislike_params_f1(x) {
		const cf="P_dislike_params.f1";
		const {1: v1}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		if(v1[0]!=="v_param_arr") {debugger; return;}
		let [,[a,...y1]]=v1; this.cq(y1.length,0);
		switch(a[0]) {
			default: debugger; break;
			case "v_child": {
				let [,bin,]=a;
				let video_id=this._decoder.decode(bin);
				if(video_id==null) {debugger; break;}
				this.videoId(video_id);
			} break;
			case "v_child_str": {
				let [,,,[,video_id]]=a;
				this.videoId(video_id);
			} break;
			case "v_raw_child": /*D_VideoIdStr*/{
				let [,,,tb]=a;
				if(tb[0]!=="string") {debugger; break;}
				let [,x]=tb;
				this.videoId(x);
			} break;
		}
	}
	/** @private @arg {P_dislike_params} x */
	P_dislike_params(x) {
		const cf="P_dislike_params";
		const {1: v1,2: v2,3: v3,4: f4,5: f5}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.P_dislike_params_f1(this.T_VW(v1));
		this.save_number(`${cf}.f2`,this.T_D32(v2));
		this.t(v3,x => this.save_number(`${cf}.f3`,this.T_D32(x)));
		this.V_ShortTimestamp(this.T_VW(f4));
		this.t(f5,x => this.save_number(`${cf}.f5`,this.T_D32(x)));
	}
	/** @private @arg {PK_f1} x */
	PK_f1(x) {
		const cf="PK_f1";
		const {1: v1}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.data`,this.T_D32(v1));
	}
	/** @protected @template T @arg {{1:T}} x */
	PT_f1(x) {
		const cf="PT_f1";
		const {1: v1}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		return v1;
	}
	/** @private @arg {P_playability_status_context_params} x */
	P_playability_status_context_params(x) {
		const cf="P_playability_status_context_params";
		const {1: v1,2: v2}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f1`,this.T_D32(v1));
		this.PK_f1(this.T_VW(v2));
	}
	//#endregion
	/** @private @arg {P_reel_params} x */
	P_reel_params(x) {
		const cf="P_reel_params";
		const {1: v1,3: v3,5: g5,6: v6}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f1`,this.T_D32(v1));
		v3&&this.VW_BinaryTimestamp(v3);
		g5&&this.g(this.T_VW(g5));
		v6&&this.save_number(`${cf}.f6`,this.T_D32(v6));
	}
	//#endregion
	//#region binary get keys
	//#region sub_region done
	/** @private @arg {P_ypc_get_offers_params_f1} x */
	P_ypc_get_offers_params_f1(x) {
		const cf="P_ypc_get_offers_params.f1";
		const {1: v1,2: v2,...y}=x; this.h_gen_keys(cf,x,y);
		this.save_number(`${cf}.f1`,this.T_D32(v1));
		this.t(this.TV_Str(v2),this.channelId);
	}
	/** @private @arg {P_ypc_get_offers_params} x */
	P_ypc_get_offers_params(x) {
		const cf="P_ypc_get_offers_params";
		const {1: v1,3: v3,5: f5}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.P_ypc_get_offers_params_f1(this.T_VW(v1));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
		f5;
	}
	/** @private @arg {P_create_comment_params} x */
	P_create_comment_params(x) {
		const cf="P_create_comment_params";
		const {2: v2,5: f5,10: f10}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.t(this.TV_Str(v2),this.videoId);
		f5;
		f10;
	}
	/** @private @arg {PD_continuation_params_f3} x */
	PD_continuation_params_f3(x) {
		const cf="PD_continuation_params.f3";
		const {4: f4,8: f8,9: f9,10: f10,12: f12,13: f13,14: f14}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		f4; f8; f9; f10; f12; f13; f14;
	}
	/** @private @arg {PD_continuation_params_f11} x */
	PD_continuation_params_f11(x) {
		const cf="PD_continuation_params.f11";
		const {2: f2}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		f2;
	}
	/** @private @arg {PD_continuation_params_f14} x */
	PD_continuation_params_f14(x) {
		const cf="PD_continuation_params.f14";
		const {1: f1,3: f3,4: f4}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		f1;
		f3;
		f4;
	}
	/** @private @arg {PD_continuation_params} x */
	PD_continuation_params(x) {
		const cf="PD_continuation_params";
		const {3: v3,8: f8,11: v11,14: f14,15: f15}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		if(this.is_T_VW(v3)) {
			this.PD_continuation_params_f3(this.T_VW(v3));
		} else {
			this.params(`${cf}.f3`,this.TV_Str(v3));
		}
		this.save_number(`${cf}.f8`,this.T_D32(f8));
		v11&&this.PD_continuation_params_f11(this.T_VW(v11));
		this.PD_continuation_params_f14(this.T_VW(f14));
		f15&&this.save_number(`${cf}.f15`,this.T_D32(f15));
	}
	/** @private @arg {P_get_pdg_buy_flow_params} x */
	P_get_pdg_buy_flow_params(x) {
		const cf="P_get_pdg_buy_flow_params";
		const {1: v1}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PX_buy_flow_params(this.T_VW(v1));
	}
	/** @private @arg {PX_buy_flow_params} x */
	PX_buy_flow_params(x) {
		const cf="PX_buy_flow_params";
		const {1: v1,2: v2,3: v3}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.videoId(this.TV_Str(v1));
		this.channelId(this.TV_Str(v2));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
	}
	/** @temporary @api @override @public @template {{}} T @arg {CF_M_s|string} cf @arg {T} x */
	s(cf,x) {
		if(!x) debugger;
		this.k(cf,x);
		return x;
	}
	/** @private @arg {TX_sequence_info} x */
	TX_sequence_info(x) {
		const cf="TX_sequence_info";
		const {3: f3}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f3`,this.T_D32(f3));
	}
	/** @private @arg {P_reel_sequence_params} x */
	P_reel_sequence_params(x) {
		const cf="P_reel_sequence_params";
		const {1: v1,3: v3,5: f5,8: f8,12: f12}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.videoId(this.TV_Str(v1));
		v3;
		this.TX_sequence_info(this.T_VW(f5));
		f8; f12;
	}
	/** @private @arg {PX_watch_sequence_info} x */
	PX_watch_sequence_info(x) {
		const cf="PX_watch_sequence_info",t=this;
		const {1: v1,3: v3,4: v4,6: f6}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		t.videoId(t.TV_Str(v1));
		t.save_number(`${cf}.f3`,t.T_D32(v3));
		t.save_number(`${cf}.f4`,t.T_D32(v4));
		t.t(t.T_VW_Bigint(f6),x => t.save_bigint(`${cf}.f6`,x));
	}
	/** @private @arg {P_continuation_request_reel_watch_sequence_token} x */
	P_continuation_request_reel_watch_sequence_token(x) {
		const cf="P_continuation_request_reel_watch_sequence_token",t=this;
		const {1: v1,3: v3,5: f5,8: f8,12: f12,15: f15}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		v1&&t.videoId(t.TV_Str(v1));
		t.PX_watch_sequence_info(t.T_VW(v3));
		f5; f8; f12; f15;
	}
	/** @arg {"P_transcript_track_selection_serialized_params"|"P_get_transcript_params"} cf @template {PE_transcript_params} T @arg {T} x */
	PE_transcript_params(cf,x) {
		const {1: v1,2: v2,3: v3,6: f6,7: f7,8: f8,...y}=this.s(cf,x);
		this.videoId(this.TV_Str(v1));
		this.params("transcript.params",this.TV_Str(v2));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
		this.save_number(`${cf}.f6`,this.T_D32(f6));
		this.save_number(`${cf}.f7`,this.T_D32(f7));
		this.save_number(`${cf}.f8`,this.T_D32(f8));
		return y;
	}
	/** @private @arg {P_transcript_track_selection_serialized_params} x */
	P_transcript_track_selection_serialized_params(x) {
		const cf="P_transcript_track_selection_serialized_params";
		const {...y}=this.PE_transcript_params(cf,x); this.h_gen_keys(cf,x,y);
	}
	/** @private @arg {P_get_transcript_params} x */
	P_get_transcript_params(x) {
		const cf="P_get_transcript_params";
		const {5: v5,...y}=this.PE_transcript_params(cf,x); this.h_gen_keys(cf,x,y);
		let i5=this.TV_Str(v5);
		switch(i5) {
			default: debugger; break;
			case "engagement-panel-searchable-transcript-search-panel": break;
		}
	}
	/** @private @arg {P_shorts_source_bp} x */
	P_shorts_source_bp(x) {
		const cf="P_shorts_source_bp";
		const {94: f94}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		f94;
	}
	/** @private @arg {P_create_backstage_post_params} x */
	P_create_backstage_post_params(x) {
		const cf="P_create_backstage_post_params";
		const {1: v1,2: v2}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.t(this.TV_Str(v1),this.channelId);
		this.save_number(`${cf}.f2`,this.T_D32(v2));
	}
	/** @private @arg {P_watch_playlist_params} x */
	P_watch_playlist_params(x) {
		const cf="P_watch_playlist_params";
		const {2: v2,3: v3,7: f7,12: f12,13: f13,27: f27}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f2`,this.T_D32(v2));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
		f7; f12; f13; f27;
	}
	/** @private @arg {PX_watch_next_token_info} x */
	PX_watch_next_token_info(x) {
		const cf="PX_watch_next_token_info";
		const {2: v2,4: f4,6: f6,7: f7,25: f25,28: f28,36: f36}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.videoId(this.TV_Str(v2));
		f4; f6; f7; f25; f28; f36;
	}
	/** @private @arg {PX_watch_next_token_item} x */
	PX_watch_next_token_item(x) {
		const cf="PX_watch_next_token_item";
		const {1: v1,3: v3}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		if(this.is_T_D32(v1)) {
			this.a_primitive_num(this.T_D32(v1));
		} else {
			this.a_primitive_bigint(this.T_D64(v1));
		}
		v3&&this.save_number(`${cf}.f3`,this.T_D32(v3));
	}
	/** @private @arg {PX_watch_next_token_6} x */
	PX_watch_next_token_6(x) {
		const cf="PX_watch_next_token_6";
		const {1: v1,3: v3,4: v4}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		let n1=v1[1];
		for(let [,,u1] of n1) this.PX_watch_next_token_item(u1);
		this.save_number(`${cf}.f3`,this.T_D32(v3));
		v4&&this.save_string(`${cf}.f4`,this.TV_Str(v4));
	}
	/** @private @arg {PX_watch_next_token_3} x */
	PX_watch_next_token_3(x) {
		const cf="PX_watch_next_token_3";
		const {1: v1,3: v3,4: v4,5: v5}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PX_watch_next_token_6(this.T_VW(v1));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
		this.save_string(`${cf}.f4`,this.TV_Str(v4));
		this.save_number(`${cf}.f5`,this.T_D32(v5));
	}
	/** @private @arg {PX_watch_next_token_1} x */
	PX_watch_next_token_1(x) {
		const cf="PX_watch_next_token_1";
		const {4: v4,6: v6,8: v8}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PX_watch_next_token_2(this.T_VW(v4));
		v6&&this.save_number(`${cf}.f6`,this.T_D32(v6));
		let i8=this.TV_Str(v8);
		switch(i8) {
			default: debugger; break;
			case "engagement-panel-comments-section":
			case "comments-section":
		}
	}
	/** @private @arg {PX_watch_next_token_2} x */
	PX_watch_next_token_2(x) {
		const cf="PX_watch_next_token_2";
		const {4: a,6: b,15: c,37: f37}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.videoId(this.TV_Str(a));
		this.save_number(`${cf}.f6`,this.T_D32(b));
		this.save_number(`${cf}.f15`,this.T_D32(c));
		f37&&this.save_string(`${cf}.f37`,this.TV_Str(f37));
	}
	/** @private @arg {PX_watch_next_token_4} x */
	PX_watch_next_token_4(x) {
		const cf="PX_watch_next_token_4";
		const {5: a,12: b}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f5`,this.T_FD32(a));
		this.save_bigint(`${cf}.f12`,this.T_FD64(b));
	}
	/** @private @arg {PX_watch_next_token_5} x */
	PX_watch_next_token_5(x) {
		const cf="PX_watch_next_token_5";
		const {1: a}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f1`,this.T_D32(a));
	}
	/** @private @arg {P_continuation_request_watch_next_token} x */
	P_continuation_request_watch_next_token(x) {
		const cf="P_continuation_request_watch_next_token";
		const {1: v1,2: v2,3: v3,5: f5,6: f6,9: f9,13: f13,14: f14}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		v1&&this.save_number(`${cf}.f1`,this.T_D32(v1));
		this.PX_watch_next_token_info(this.T_VW(v2));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
		f5&&this.a_primitive_str(this.TV_Str(f5));
		f6&&this.PX_watch_next_token_1(this.T_VW(f6));
		f9&&this.PX_watch_next_token_3(this.T_VW(f9));
		f13&&this.PX_watch_next_token_4(this.T_VW(f13));
		f14&&this.PX_watch_next_token_5(this.T_VW(f14));
	}
	/** @private @template {string} T @arg {TV_Str<T>|TW_TagStr<T>} x */
	TV_Str_ex(x) {return x[1][0][3][1];}
	/** @private @arg {P_unsubscribe_params} x */
	P_unsubscribe_params(x) {
		const cf="P_unsubscribe_params";
		const {1: v1,2: v2,3: v3}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PK_f1(this.T_VW(v1));
		this.t(v2,x => this.videoId(this.TV_Str_ex(x)));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
	}
	/** @private @arg {P_subscribe_params} x */
	P_subscribe_params(x) {
		const cf="P_subscribe_params";
		const {2: v2,3: v3,4: f4}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PK_f1(this.T_VW(v2));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
		f4;
	}
	/** @private @template {string} T @arg {TW_Str<T>} x */
	TW_Str(x) {
		let x2=x[1][0];
		switch(x2[0]) {
			default: debugger; throw new Error();
			case "v_child_str":
			case "v_child":
			case "v_raw_child": return x2[3][1];
		}
	}
	/** @private @arg {P_like_params} x */
	P_like_params(x) {
		const cf="P_like_params";
		const {1: v1,4: f4,5: f5,6: f6,7: f7}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		let m1=this.mw(this.m(v1));
		let v1_v1_str=m1.mc(this.T_VW).mc(this.PT_f1).mc(this.TW_Str).some.v;
		this.videoId(v1_v1_str);
		f4; f5; f6; f7;
	}
	/** @private @arg {{1:TV_Str<DU_VideoId>|TW_TagStr<DU_VideoId>;}} x */
	PK_f1_str(x) {
		let m1=this.mw(this.m(x));
		let v1_v1=m1.mc(this.PT_f1).some.v;
		let v1_v1i=v1_v1[1][0];
		switch(v1_v1i[0]) {
			default: debugger; break;
			case "v_child": {
				let x2=v1_v1i[3][1];
				this.videoId(x2);
			} break;
			case "v_raw_child": {
				let x2=v1_v1i[3][1];
				this.videoId(x2);
			} break;
		}
	}
	/** @private @arg {P_remove_like_params} x */
	P_remove_like_params(x) {
		const cf="P_remove_like_params";
		const {1: v1,3: v3,4: f4,5: f5,6: f6}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PK_f1_str(this.T_VW(v1));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
		f4; f5; f6;
	}
	/** @private @arg {P_ad_layout_ad_serving_data_entry} x */
	P_ad_layout_ad_serving_data_entry(x) {
		const cf="P_ad_layout_ad_serving_data_entry";
		const {4: f4,5: f5,6: f6,7: f7,9: f9,10: f10,13: f13,14: f14}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		f4; f5; f6; f7; f9; f10; f13; f14;
	}
	/** @arg {PX_ad_data_info} x */
	PX_ad_data_info(x) {
		const cf="PX_ad_data_info";
		const {1: v1,6: f6,11: f11}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f1`,this.T_D32(v1));
		this.save_number(`${cf}.f6`,this.T_D32(f6));
		this.save_number(`${cf}.f11`,this.T_D32(f11));
	}
	/** @private @arg {P_ad_slot_logging_data_serialized_slot_ad_serving_data_entry} x */
	P_ad_slot_logging_data_serialized_slot_ad_serving_data_entry(x) {
		const cf="P_ad_slot_logging_data_serialized_slot_ad_serving_data_entry";
		const {1: v1,3: v3,4: f4}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.VW_BinaryTimestamp(v1);
		this.PX_ad_data_info(this.T_VW(v3));
		f4;
	}
	/** @private @arg {P_ve_6827_params} x */
	P_ve_6827_params(x) {
		const cf="P_ve_6827_params";
		const {77: f77,84: f84,93: f93,94: f94}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		f77;
		f84;
		f93;
		f94;
	}
	/** @private @arg {PX_watch_bin} x */
	PX_watch_bin(x) {
		const cf="PX_watch_bin";
		const {2: v2,3: v3,4: v4,5: v5}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_string(`${cf}.f2`,this.TV_Str(v2));
		this.save_string(`${cf}.v3`,"0b"+this.T_D32(v3).toString(2));
		this.save_string(`${cf}.f4`,"0b"+this.T_D32(v4).toString(2));
		this.save_number(`${cf}.f5`,this.T_D32(v5));
	}
	/** @private @arg {PR_watch_bin} x */
	PR_watch_bin(x) {
		const cf="PR_watch_bin";
		const {1: r}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PD_watch_bin(this.T_VW(r));
	}
	/** @private @arg {PD_watch_bin} x */
	PD_watch_bin(x) {
		const cf="PD_watch_bin";
		const {2: v2,3: v3}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f2`,this.T_D32(v2));
		this.save_number(`${cf}.f3`,this.T_D32(v3));
	}
	/** @private @arg {P_watch_params} x */
	P_watch_params(x) {
		const cf="P_watch_params";
		const {2: v2,3: v3,7: f7,12: f12,13: f13,15: f15,24: f24,27: f27,33: v33,36: f36,39: f39,40: v40,56: f56}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		v2&&this.save_number(`${cf}.f2`,this.T_D32(v2));
		v3&&this.save_number(`${cf}.f3`,this.T_D32(v3));
		f7;
		f12;
		f13;
		f15;
		f24;
		f27;
		v33&&this.PX_watch_bin(this.T_VW(v33));
		f36;
		f39;
		v40&&this.PR_watch_bin(this.T_VW(v40));
		f56;
	}
	/** @private @arg {P_watch_player_params} x */
	P_watch_player_params(x) {
		const cf="P_watch_player_params";
		const {8: f8,9: f9,12: f12,25: f25,40: f40}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		f8; f9; f12; f25; f40;
	}
	/** @private @arg {P_format_item_xtags_f1} x */
	P_format_item_xtags_f1(x) {
		const cf="P_format_item_xtags.f1";
		const {1: v1,2: v2}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		console.log(this.TV_Str(v1));
		this.cq(this.TV_Str(v2),"true");
	}
	/** @private @arg {P_format_item_xtags} x */
	P_format_item_xtags(x) {
		const cf="P_format_item_xtags";
		const {1: v1}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.P_format_item_xtags_f1(this.T_VW(v1));
	}
	/** @private @arg {P_get_notification_menu_ctoken} x */
	P_get_notification_menu_ctoken(x) {
		const cf="P_get_notification_menu_ctoken";
		const {1: v1}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f1`,this.T_D32(v1));
	}
	/** @private @arg {P_notification_opt_out} x */
	P_notification_opt_out(x) {
		const cf="P_notification_opt_out";
		const {2: v2,3: v3,4: f4,7: f7}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f2`,this.T_D32(v2));
		this.save_string(`${cf}.f3`,this.TV_Str(v3));
		f4;
		f7;
	}
	/** @private @arg {P_get_report_form_params} x */
	P_get_report_form_params(x) {
		const cf="P_get_report_form_params";
		const {25: f25,26: f26,28: f28}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		f25;
		f26;
		f28;
	}
	/** @private @arg {P_notification_record_interactions} x */
	P_notification_record_interactions(x) {
		const cf="P_notification_record_interactions";
		const {2: v2,5: f5}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PK_f1(this.T_VW(v2));
		f5;
	}
	/** @private @arg {P_ve_3611_params} x */
	P_ve_3611_params(x) {
		const cf="P_ve_3611_params";
		const {2: v2,23: f23,110: f110}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		v2&&this.g(this.T_VW(v2));
		f23; f110;
	}
	/** @private @arg {P_playlist_edit_params} x */
	P_playlist_edit_params(x) {
		const cf="P_playlist_edit_params";
		const {1: v1}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f1`,this.T_D32(v1));
	}
	/** @private @arg {P_notification_add_upcoming_event_reminder_params} x */
	P_notification_add_upcoming_event_reminder_params(x) {
		const cf="P_notification_add_upcoming_event_reminder_params";
		const {1: v1,6: f6}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		let u1=this.T_PArr_1(v1)[0];
		switch(u1[0]) {
			case "v_child": {
				const {14: x2_f14,...y2}=u1[2]; this.g(y2);
				this.save_bigint(`${cf}.f1.f14`,this.T_FD64(x2_f14));
			} break;
			case "v_child_str": {
				this.save_string(`${cf}.f1`,u1[3][1]);
			} break;
		}
		f6;
	}
	//#endregion
	/** @private @arg {PD_event_info} x */
	PD_timed_continuation_f3(x) {
		const cf="PD_timed_continuation_f3";
		const {14: r}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_bigint(`${cf}.f14`,this.T_FD64(r));
	}
	/** @private @arg {PD_timed_continuation} x */
	PD_timed_continuation(x) {
		const cf="PD_timed_continuation";
		const {3: v3,4: f4,7: f7,8: f8}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PD_timed_continuation_f3(this.T_VW(v3));
		f4; f7; f8;
	}
	/** @private @arg {P_f3_PD_continuation_params} x */
	P_f3_PD_continuation_params(x) {
		const cf="P_f3_PD_continuation_params";
		const {1: r}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.T_VW(r);
	}
	/** @private @arg {P_PX_watch_next_token_2_f37} x */
	P_PX_watch_next_token_2_f37(x) {
		const cf="P_PX_watch_next_token_2_f37";
		const {10: r,15: f15,20: f20}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_string(`${cf}.f10`,this.TV_Str(r));
		f15;
		f20;
	}
	/** @private @arg {P_create_reply_params} x */
	P_create_reply_params(x) {
		const cf="P_create_reply_params";
		const {2: r,4: f4,5: f5,10: f10,14: f14,29: f29}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_string(`${cf}.f2`,this.TV_Str(r));
		f4;
		f5;
		f10;
		f14;
		f29;
	}
	/** @private @arg {P_perform_comment_action} x */
	P_perform_comment_action(x) {
		const cf="P_perform_comment_action";
		const {1: v1,2: v2,3: f3,5: f5,6: f6,7: f7,9: f9,21: f21}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f1`,this.T_D32(v1));
		this.save_number(`${cf}.f2`,this.T_D32(v2));
		f3;
		f5;
		f6;
		f7;
		f9;
		f21;
	}
	/** @private @arg {P_notification_remove_upcoming_event_reminder_params} x */
	P_notification_remove_upcoming_event_reminder_params(x) {
		const cf="P_notification_remove_upcoming_event_reminder_params";
		const {1: v1,6: v6}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.PD_event_info(this.T_VW(v1));
		this.PX_upcoming_event_reminder_info(this.T_VW(v6));
	}
	/** @private @arg {PD_event_info} x */
	PD_event_info(x) {
		const cf="PD_event_info";
		const {14: v14}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_bigint(`${cf}.f14`,this.T_FD64(v14));
	}
	/** @private @arg {PX_upcoming_event_reminder_info} x */
	PX_upcoming_event_reminder_info(x) {
		const cf="PX_upcoming_event_reminder_info";
		const {1: v1,2: v2}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_number(`${cf}.f1`,this.T_D32(v1));
		this.save_number(`${cf}.f2`,this.T_D32(v2));
	}
	/** @private @arg {P_transcript_params} x */
	P_transcript_params(x) {
		const cf="P_transcript_params";
		const {1: v1,2: v2,3: v3}=this.s(cf,x);//,...y}=t.s(cf,x); t.h_gen_keys(cf,x,y);/*#destructure_start*/
		this.save_string(`${cf}.f1`,this.TV_Str(v1));
		this.save_string(`${cf}.f2`,this.TV_Str(v2));
		this.g(this.T_VW(v3));
	}
	//#endregion
	//#region binary_result()
	/** @private @arg {P_ParamParse} cf @arg {V_ParamObj} x */
	binary_result(cf,x) {
		switch(cf) {
			case "_level_2_0._level_2_1":
			case "_level_1_0": debugger; break;
			//#region entity.key
			case "aadc_guidelines_state.entity.key": this.P_EntityKey("P_aadc_guidelines_state_entity_key",as_any(x)); break;
			case "change_markers_visibility.entity.key": this.P_EntityKey("P_change_markers_visibility_entity_key",as_any(x)); break;
			case "entity.key": this.P_EntityKey("P_entity_key",as_any(x)); break;
			case "load_markers.entity.key": this.P_EntityKey("P_load_markers_entity_key",as_any(x)); break;
			case "macro_marker_repeat_state.entity.key": this.P_EntityKey("P_macro_marker_repeat_state_entity_key",as_any(x)); break;
			case "macro_markers_list.entity.key": this.P_EntityKey("P_macro_markers_list_entity_key",as_any(x)); break;
			case "player_state.entity.key": this.P_EntityKey("P_player_state_entity_key",as_any(x)); break;
			case "playlist_loop_state.entity.key": this.P_EntityKey("P_playlist_loop_state_entity_key",as_any(x)); break;
			case "subscribe_button.entity.key": this.P_EntityKey("P_subscribe_button_entity_key",as_any(x)); break;
			case "transcript_track_selection.entity.key": this.P_EntityKey("P_transcript_track_selection_entity_key",as_any(x)); break;
			case "view_count.entity.key": this.P_EntityKey("P_view_count_entity_key",as_any(x)); break;
			//#endregion
			//#region done2
			case "ad_layout.ad_serving_data_entry": this.P_ad_layout_ad_serving_data_entry(as_any(x)); break;
			case "ad_slot_logging_data.serialized_slot_ad_serving_data_entry": this.P_ad_slot_logging_data_serialized_slot_ad_serving_data_entry(as_any(x)); break;
			case "continuation_request.browse.token": this.PR_continuation_request_browse_token(as_any(x)); break;
			case "continuation_request.reel_watch_sequence.token": this.P_continuation_request_reel_watch_sequence_token(as_any(x)); break;
			case "continuation_request.watch_next.token": this.P_continuation_request_watch_next_token(as_any(x)); break;
			case "continuation.params": this.PR_continuation_params(as_any(x)); break;
			case "create_backstage_post.params": this.P_create_backstage_post_params(as_any(x)); break;
			case "create_comment.params": this.P_create_comment_params(as_any(x)); break;
			case "create_playlist.params": this.P_create_playlist_params(as_any(x)); break;
			case "create_reply.params": this.P_create_reply_params(as_any(x)); break;
			case "dislike.params": this.P_dislike_params(as_any(x)); break;
			case "format_item.xtags": this.P_format_item_xtags(as_any(x)); break;
			case "get_notification_menu.ctoken": this.P_get_notification_menu_ctoken(as_any(x)); break;
			case "get_pdg_buy_flow.params": this.P_get_pdg_buy_flow_params(as_any(x)); break;
			case "get_report_form.params": this.P_get_report_form_params(as_any(x)); break;
			case "get_transcript.params": this.P_get_transcript_params(as_any(x)); break;
			case "invalidation.continuation": this.P_invalidation_continuation(as_any(x)); break;
			case "like.params": this.P_like_params(as_any(x)); break;
			case "logging_context.serialized_context_data": this.P_logging_context_serialized_context_data(as_any(x)); break;
			case "notification_add_upcoming_event_reminder.params": this.P_notification_add_upcoming_event_reminder_params(as_any(x)); break;
			case "notification_remove_upcoming_event_reminder.params": this.P_notification_remove_upcoming_event_reminder_params(as_any(x)); break;
			case "notification.opt_out": this.P_notification_opt_out(as_any(x)); break;
			case "notification.record_interactions": this.P_notification_record_interactions(as_any(x)); break;
			case "params.click_tracking": this.P_Typed_TrackingObj({type: "click_tracking",v: as_any(x)}); break;
			case "params.tracking": this.P_Typed_TrackingObj({type: "tracking",v: as_any(x)}); break;
			case "PD_continuation_params.f3": this.P_f3_PD_continuation_params(as_any(x)); break;
			case "perform_comment.action": this.P_perform_comment_action(as_any(x)); break;
			case "pf_23n24n.bin_params": this.P_bin_params_1(as_any(x)); break;
			case "playability_status.context_params": this.P_playability_status_context_params(as_any(x)); break;
			case "playlist_edit.params": this.P_playlist_edit_params(as_any(x)); break;
			case "PX_watch_next_token_2.f37": this.P_PX_watch_next_token_2_f37(as_any(x)); break;
			case "reel.params": this.P_reel_params(as_any(x)); break;
			case "reel.player_params": this.P_reel_player_params(as_any(x)); break;
			case "reel.sequence_params": this.P_reel_sequence_params(as_any(x)); break;
			case "remove_like.params": this.P_remove_like_params(as_any(x)); break;
			case "search.params": this.P_search_params(as_any(x)); break;
			case "shorts.source.bp": this.P_shorts_source_bp(as_any(x)); break;
			case "subscribe.params": this.P_subscribe_params(as_any(x)); break;
			case "subscription_state.key": this.PG_subscription_state_key(as_any(x)); break;
			case "timed_continuation.data": this.P_timed_continuation_data(as_any(x)); break;
			case "transcript_track_selection.serialized_params": this.P_transcript_track_selection_serialized_params(as_any(x)); break;
			case "transcript.params": this.P_transcript_params(as_any(x)); break;
			case "trending.bp": this.P_trending_bp(as_any(x)); break;
			case "unsubscribe.params": this.P_unsubscribe_params(as_any(x)); break;
			case "ve_3611.params": this.P_ve_3611_params(as_any(x)); break;
			case "ve_6827.params": this.P_ve_6827_params(as_any(x)); break;
			case "watch_playlist.params": this.P_watch_playlist_params(as_any(x)); break;
			case "watch.params": this.P_watch_params(as_any(x)); break;
			case "watch.player_params": this.P_watch_player_params(as_any(x)); break;
			case "ypc_get_offers.params": this.P_ypc_get_offers_params(as_any(x)); break;
			//#endregion
			//#region done
			//#endregion
			default: {
				if(this._continuation_logged_str.includes(cf)) break;
				this.decode_binary_object_log_info(cf,x);
				debugger;
			} break;
		}
	}
	//#endregion
	//#endregion binary
	//#endregion
	//#region import renderer
	//#endregion
	//#region import group
	/** @arg {`promise_rejected_with.errors.${number}`} cf @arg {unknown} x */
	log_error_sub(cf,x) {
		console.log(`[log_error_next_info.${cf}]`,x);
		if(x instanceof AggregateError) {
			for(let i=0;i<x.errors.length;i++) {
				let c=x.errors[i];
				console.log(`[log_error_next_info.${cf}]`,c);
			}
		}
	}
	/** @arg {"promise_rejected_with"} cf @arg {unknown} x */
	log_error(cf,x) {
		console.log(`[log_error_info.${cf}]`,x);
		if(x instanceof AggregateError) {
			for(let i=0;i<x.errors.length;i++) {
				let c=x.errors[i];
				this.log_error_sub(`${cf}.errors.${i}`,c);
			}
		}
	}
	/** @template T @arg {Promise<T>} x */
	execute_promise_def(x) {
		x.then(x => {
			console.log("[promise_resolved_with]",x);
		},x => {
			this.log_error("promise_rejected_with",x);
		});
	}
	/** @api @public @arg {"raw"} type @arg {Extract<DI_AGR_UrlInfo,{tag:any}>["tag"]} tag @arg {string} x */
	D_RawUrlFromTag(type,tag,x) {
		/** @type {{type:"raw";tag:Extract<DI_AGR_UrlInfo,{tag:any}>["tag"];info_arr: [{raw_id: string}]}} */
		let mo={type,tag,info_arr: [{raw_id: x}]};
		this.ht.DI_AGR_UrlInfo(as_any(mo));
	}
	/** @public @template {DI_AGR_UrlInfo} TI @arg {TI} x @returns {MakeRet_DI_AGR_UrlInfo<TI>} */
	make_DI_AGR_UrlInfo(x) {
		/** @template {DI_G_UrlInfo} U @arg {U} x @arg {U["type"]} t @returns {x is MakeRet_DI_AGR_UrlInfo<TI>} */
		function assume_is_type(x,t) {return x.type===t;}
		/** @template {DI_G_UrlInfo} U @arg {U} x @arg {U["type"]} t @returns {asserts x is MakeRet_DI_AGR_UrlInfo<TI>} */
		function assert_assume_is_type(x,t) {if(!assume_is_type(x,t)) throw new Error();}
		let ret;
		switch(x.tag) {
			case "channel_id": {
				const {info_arr: [{raw_id}]}=x;
				let [,id]=split_string_once(raw_id,"UC");
				/** @type {DI_ChannelId_UC} */
				const z={type: "channel_id",tag: "UC",info_arr: [{raw_id},{id}]}; ret=z;
			} break;
			case "browse_id": {
				const {info_arr: [{raw_id}]}=x;
				if(this.str_starts_with(raw_id,"UC")) {
					let [,id]=split_string_once(raw_id,"UC");
					/** @type {DI_ChannelId_UC} */
					const z={type: "channel_id",tag: "UC",info_arr: [{raw_id},{id}]}; ret=z;
				} else if(this.str_starts_with(raw_id,"FE")) {
					let [,id]=split_string_once(raw_id,"FE");
					/** @type {DI_BrowseId_FE} */
					const z={type: "browse_id",tag: "FE",info_arr: [{raw_id},{id}]}; ret=z;
				} else if(this.str_starts_with(raw_id,"SP")) {
					let [,id]=split_string_once(raw_id,"SP");
					/** @type {DI_BrowseId_SP} */
					const z={type: "browse_id",tag: "SP",info_arr: [{raw_id},{id}]}; ret=z;
				} else if(this.str_starts_with(raw_id,"MP")) {
					let [,id]=split_string_once(raw_id,"MP");
					let [a1,a2]=split_string_once(id,"_");
					/** @type {DI_BrowseId_MP} */
					const z={type: "browse_id",tag: "MP",info_arr: [{raw_id},{id: a1},{separator: "_"},{id: a2}]}; ret=z;
				} else if(this.str_starts_with(raw_id,"VL")) {
					if(raw_id==="VLLL") {
						let [,id]=split_string_once(raw_id,"VL");
						/** @type {DI_BrowseId_VL_LL} */
						const z={
							type: "browse_id",tag: "VL:LL",info_arr: [
								{raw_id},
								{tag: id,value: {type: "playlist_id",info_arr: [{raw_id: id}]}},
							]
						}; ret=z;
					} else if(raw_id==="VLWL") {
						let [,id]=split_string_once(raw_id,"VL");
						/** @type {DI_BrowseId_VL} */
						const z={
							type: "browse_id",tag: "VL:WL",
							info_arr: [
								{raw_id},
								{tag: id,value: {type: "playlist_id",info_arr: [{raw_id: id}]}},
							]
						}; ret=z;
					} else if(this.str_starts_with(raw_id,"VLPL")) {
						let [,id]=split_string_once(raw_id,"VL");
						/** @type {DI_BrowseId_VL["info_arr"][1]} */
						let itv;
						{
							let raw_id=id;
							{
								let [,id]=split_string_once(raw_id,"PL");
								itv={tag: "PL",value: {type: "playlist_id",tag: "PL",info_arr: [{raw_id},{id}]}};
							}
						}
						/** @type {DI_BrowseId_VL_PL} */
						const z={type: "browse_id",tag: "VL:PL",info_arr: [{raw_id},itv]}; ret=z;
					} else {
						raw_id===""; debugger; throw new Error();
					}
				} else {
					raw_id===""; debugger; throw new Error();
				}
			} break;
			case "guide_entry_id": {
				let {info_arr: [{raw_id}]}=x;
				/** @type {DI_GuideEntryId} */
				let itv;
				if(raw_id==="LL") {
					/** @type {DI_Playlist_LL} */
					let value={type: "playlist_id",info_arr: [{raw_id}]};
					/** @type {DI_BrowseId_VL} */
					itv={type: "guide_entry_id",info_arr: [{tag: raw_id,value}]};
				} else if(raw_id==="WL") {
					/** @type {DI_Playlist_WL} */
					let value={type: "playlist_id",info_arr: [{raw_id}]};
					/** @type {DI_BrowseId_VL} */
					itv={type: "guide_entry_id",info_arr: [{tag: raw_id,value}]};
				} else if(this.str_starts_with(raw_id,"PL")) {
					const tag="PL";
					let [,id]=split_string_once(raw_id,tag);
					/** @type {DI_Playlist_PL} */
					let value={type: "playlist_id",tag,info_arr: [{raw_id},{id}]};
					/** @type {DI_BrowseId_VL} */
					itv={type: "guide_entry_id",info_arr: [{tag,value}]};
				} else {
					debugger; break;
				}
				ret=itv;
			} break;
			case "key:start_radio": {
				let {tag,info_arr}=x;
				let parts=split_string_once(tag,":");
				{
					let [type,tag]=parts;
					/** @type {{type:"key";tag:"start_radio";info_arr:typeof info_arr}} */
					const z={type,tag,info_arr}; ret=z;
				}
			} break;
			case "playlist_id": {
				let {type,tag,info_arr: [{raw_id}]}=x;
				if(raw_id==="LL") {
					/** @type {DI_Playlist_LL} */
					const z={type: "playlist_id",info_arr: [{raw_id}]}; ret=z;
				} else if(raw_id==="WL") {
					/** @type {DI_Playlist_WL} */
					const z={type: "playlist_id",info_arr: [{raw_id}]}; ret=z;
				} else if(this.str_starts_with(raw_id,"PL")) {
					raw_id; debugger;
				} else if(this.str_starts_with(raw_id,"UU")) {
					raw_id; debugger;
				} else if(this.str_starts_with(raw_id,"RD")) {
					raw_id; debugger;
					this.make_DI_AGR_UrlInfo({type,tag: `${tag}:RD`,info_arr: [{raw_id}]});
				} else {
					raw_id;
				}
			} break;
			case "video_id": {
				let {tag,info_arr: [{raw_id}]}=x;
				/** @type {DI_VideoId} */
				const z={type: tag,info_arr: [{raw_id}]}; ret=z;
			} break;
		}
		if(!ret) {debugger; throw new Error();}
		switch(ret.type) {
			default: debugger; throw new Error();
			case "browse_id":
				assert_assume_is_type(ret,ret.type);
				return ret;
			case "channel_id":
				assert_assume_is_type(ret,ret.type);
				return ret;
			case "guide_entry_id":
				assert_assume_is_type(ret,ret.type);
				return ret;
			case "key":
				assert_assume_is_type(ret,ret.type);
				return ret;
			case "playlist_id":
				assert_assume_is_type(ret,ret.type);
				return ret;
			case "video_id":
				assert_assume_is_type(ret,ret.type);
				return ret;
		}
	}
	/** @public @arg {DI_AGR_UrlInfo} x */
	DI_AGR_UrlInfo(x) {
		/** @template T @arg {{tag:T}} x */
		function get_tag(x) {return x.tag;}
		switch(x.tag) {
			default: {
				switch(get_tag(x)) {
				}
			} break;
			case "channel_id": {
				let x2=this.make_DI_AGR_UrlInfo(x);
				/** @type {Extract<Y_PutBoxedArgs,[(typeof x)["tag"],...any]>} */
				let args=["channel_id","UC",x2];
				let box_res=this.put_boxed_id(...args);
				this.execute_promise_def((async () => (await box_res).ret)());
			} break;
			case "video_id": {
				let px=this.make_DI_AGR_UrlInfo(x);
				/** @type {Extract<Y_PutBoxedArgs,[(typeof x)["tag"],...any]>} */
				let args=[px.type,null,{...px,info_arr: x.info_arr}];
				let box_res=this.put_boxed_id(...args);
				this.execute_promise_def((async () => (await box_res).ret)());
			} break;
			case "browse_id": {
				const z=this.make_DI_AGR_UrlInfo(x);
				switch(z.tag) {
					default: console.log("todo",z.type,z.tag); break;
					case "FE": {
						const {type,tag}=z;
						/** @type {Extract<Y_PutBoxedArgs,[(typeof x)["tag"],...any]>} */
						const args=[type,tag,z];
						const box_res=this.put_boxed_id(...args);
						this.execute_promise_def((async () => (await box_res).ret)());
					} break;
				}
			} break;
			case "playlist_id": {
				let z=this.make_DI_AGR_UrlInfo(x);
				const {info_arr: [{raw_id}]}=z;
				switch(raw_id) {
					case "LL": {
						/** @type {Extract<Y_PutBoxedArgs,[(typeof x)["tag"],...any]>} */
						const args=["playlist_id","LL",{type: "playlist_id",info_arr: [{raw_id}]}];
						const box_res=this.put_boxed_id(...args);
						this.execute_promise_def((async () => (await box_res).ret)());
					} break;
					case "WL": {
						/** @type {Extract<Y_PutBoxedArgs,[(typeof x)["tag"],...any]>} */
						const args=["playlist_id","WL",{type: "playlist_id",info_arr: [{raw_id}]}];
						const box_res=this.put_boxed_id(...args);
						this.execute_promise_def((async () => (await box_res).ret)());
					} break;
				}
				debugger;
			} break;
		}
	}
	/** @arg {DI_G_BrowseId} x */
	DI_G_BrowseId(x) {
		switch(x.tag) {
			case "FE": {
				let async_p=this.indexed_db.put_boxed_id_async_3(this.indexed_db_version,x.type,x.tag,x);
				this.execute_promise_def(async_p);
			} break;
		}
	}
	/** @public @arg {DI_G_NoKey} value */
	DI_G_NoKey(value) {
		/** @template T @arg {{type:T}} x */
		function get_type(x) {return x.type;}
		switch(value.type) {
			default: get_type(value)===""; debugger; break;
			case "video_time": {
				let box_res=this.put_boxed_id(value.type,null,value);
				this.execute_promise_def((async () => (await box_res).ret)());
			} break;
			case "browse_id": return this.DI_G_BrowseId(value);
			case "video_id": {
				let box_res=this.put_boxed_id(value.type,null,value);
				this.execute_promise_def((async () => (await box_res).ret)());
			} break;
			case "channel_id": {
				let box_res=this.put_boxed_id(value.type,"UC",value);
				this.execute_promise_def((async () => (await box_res).ret)());
			} break;
			case "play_next": {
				let box_res=this.put_boxed_id(value.type,null,value);
				this.execute_promise_def((async () => (await box_res).ret)());
			} break;
			case "hashtag_id": {
				let box_res=this.put_boxed_id(value.type,null,value);
				this.execute_promise_def((async () => (await box_res).ret)());
			} break;
			case "user_id": {
				let box_res=this.put_boxed_id(value.type,null,value);
				this.execute_promise_def((async () => (await box_res).ret)());
			} break;
			case "channel_id": {
				let box_res=this.put_boxed_id(value.type,"UC",value);
				this.execute_promise_def((async () => (await box_res).ret)());
			} break;
			case "browse_id": {
				switch(value.tag) {
					case "FE": {
						let box_res=this.put_boxed_id(value.type,value.tag,value);
						this.execute_promise_def((async () => (await box_res).ret)());
					}
				}
			} break;
		}
	}
	/** @arg {G_UrlInfoSrc} x @returns {DI_G_NoKey} */
	make_G_UrlInfo(x) {
		throw new AggregateError([x],"TODO");
	}
	log_enabled_playlist_id=false;
	/** @private @type {string[]} */
	cache_playlist_id=[];
	/** @public @arg {string} type @arg {string} id */
	log_playlist_id(type,id,critical=false) {
		if(!this.cache_playlist_id.includes(id)) {
			this.cache_playlist_id.push(id);
			if(this.log_enabled_playlist_id||critical) console.log("[playlist]",type,id);
		}
	}
	/** @public @arg {R_VideoDescriptionMusicSection} x */
	R_VideoDescriptionMusicSection(x) {this.H_("videoDescriptionMusicSectionRenderer",x,this.D_VideoDescriptionMusicSection);}
	/** @private @arg {D_VideoDescriptionMusicSection} x */
	D_VideoDescriptionMusicSection(x) {
		const cf="D_VideoDescriptionMusicSection";
		const {sectionTitle,carouselLockups,topicLink,premiumUpsellLink,...y}=this.s(cf,x); this.g(y);/*#destructure_done*/
		this.G_Text(sectionTitle);
		this.z(carouselLockups,this.R_CarouselLockup);
		this.R_TopicLink(topicLink);
		this.G_Text(premiumUpsellLink);
	}
	//#endregion
	//#region TODO_minimal_member_fns
	/** @private @arg {minimal_handler_member} x */
	/** @private @arg {minimal_handler_member} x ! */
	minimal_handler_member_2(x) {x;/*!*/}
	//#endregion
}
//#endregion
export_((exports) => {exports.HandleTypes=HandleTypes;});
