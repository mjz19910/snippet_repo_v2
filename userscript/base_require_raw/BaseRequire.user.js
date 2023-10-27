// ==UserScript==
// @name	Base Require
// @namespace	https://github.com/mjz19910/
// @version	0.1.0
// @description	try to take over the world!
// @author	@mjz19910
// @copyright	@mjz19910 2020-2023
// @match		https://*/*
// @match		http://*/*
// @grant	none
// @run-at	document-start
// @updateURL	https://github.com/mjz19910/snippet_repo/raw/master/userscript/base_require_raw/BaseRequire.user.js
// @downloadURL	https://github.com/mjz19910/snippet_repo/raw/master/userscript/base_require_raw/BaseRequire.user.js
// ==/UserScript==
/* eslint-disable no-native-reassign,no-implicit-globals,no-undef,no-lone-blocks,no-sequences */
// deno-lint-ignore-file
const __module_name__="mod$base_require";

const path_map={
	/** @type {["mod","base_require"]} */
	["./base_require_raw/BaseRequire.user"]: ["mod","base_require"],
	/** @type {["raw","DebugApi"]} */
	["./DebugApi_raw/DebugApi.user"]: ["raw","DebugApi"],
	/** @type {["mod","YoutubePluginBase"]} */
	["./youtube_plugin_raw/zc_child_modules/YTPlugin_Base.user"]: ["mod","YoutubePluginBase"],
	/** @type {["mod","SupportService"]} */
	["./youtube_plugin_raw/zc_child_modules/YTPlugin_Support_Service.user"]: ["mod","SupportService"],
	/** @type {["mod","ECatcherService"]} */
	["./youtube_plugin_raw/zc_child_modules/YTPlugin_ECatcherService_Plugin.user"]: ["mod","ECatcherService"],
	/** @type {["mod","ServiceMethods"]} */
	["./youtube_plugin_raw/zc_child_modules/YTPlugin_ServiceMethods.user"]: ["mod","ServiceMethods"],
	/** @type {["mod","ServiceLoaderPlugin"]} */
	["./youtube_plugin_raw/zc_child_modules/YTPlugin_ServiceLoader_Plugin.user"]: ["mod","ServiceLoaderPlugin"],
	/** @type {["mod","CodegenService"]} */
	["./youtube_plugin_raw/zc_child_modules/YTPlugin_Codegen.user"]: ["mod","CodegenService"],
	/** @type {["mod","HandleTypes"]} */
	["./youtube_plugin_raw/zc_child_modules/YTPlugin_HandleTypes.user"]: ["mod","HandleTypes"],
	/** @type {["mod","IndexedDBService"]} */
	["./youtube_plugin_raw/zc_child_modules/YTPlugin_IndexedDB.user"]: ["mod","IndexedDBService"],
	/** @type {["mod","ParserService"]} */
	["./youtube_plugin_raw/zc_child_modules/YTPlugin_Parser_Service.user"]: ["mod","ParserService"],
	/** @type {["sys","moment"]} */
	["moment"]: ["sys","moment"],
};
/** @private @template U @template {U} T @arg {U} e @arg {any} [x] @returns {T} */
function as(e,x=e) {return x;}
/** @public @template {string} T_Needle @template {string} T_Str @arg {T_Needle} needle @arg {T_Str} str @returns {str is `${T_Needle}${string}`} */
function str_starts_with(str,needle) {return str.startsWith(needle);}
/** @private @template {string} X @arg {X} x @template {string} S @arg {S} s @returns {import("../youtube_plugin_raw/yt_json_types/stu/group_T.ts").T_Split<X,string extends S?",":S>} */
function split_string(x,s=as(","))
{
	if(!x) {debugger;}
	let r=x.split(s);
	return as(r);
}
const log_path_resolve=false;
/** @template {import("../youtube_plugin_raw/zb_plugin_types/AllImportPaths.ts").AllImportPaths} T @arg {T} x @returns {(keyof typeof path_map)|null} */
function resolve_path_to_userscript_dir(x)
{
	/** @type {import("../youtube_plugin_raw/zb_plugin_types/AllImportPaths.ts").AllImportPaths} */
	let u=x;
	const yt_plugin_base_path="youtube_plugin_raw/zc_child_modules";
	if(!str_starts_with(u,".")) return u;
	let parts=split_string(u,"/");
	/** @type {(keyof typeof path_map)|null} */
	let resolved_path=null;
	m: switch(parts[0])
	{
		case "..": switch(parts[1])
		{
			case "DebugApi_raw": switch(parts[2])
			{
				case "DebugApi.user": resolved_path=`./${parts[1]}/${parts[2]}`; break m;
			}
			case "base_require_raw": resolved_path=`./${parts[1]}/${parts[2]}`; break m;
			case "..": switch(parts[2])
			{
				case "base_require_raw": switch(parts[3])
				{
					case "BaseRequire.user": resolved_path=`./${parts[2]}/${parts[3]}`; break m;
				}
			}
		}
		case ".": switch(parts[1])
		{
			case "YTPlugin_Base.user": resolved_path=`./${yt_plugin_base_path}/${parts[1]}`; break;
			case "YTPlugin_Codegen.user": resolved_path=`./${yt_plugin_base_path}/${parts[1]}`; break;
			case "YTPlugin_ECatcherService_Plugin.user": resolved_path=`./${yt_plugin_base_path}/${parts[1]}`; break;
			case "YTPlugin_HandleTypes.user": resolved_path=`./${yt_plugin_base_path}/${parts[1]}`; break;
			case "YTPlugin_IndexedDB.user": resolved_path=`./${yt_plugin_base_path}/${parts[1]}`; break;
			case "YTPlugin_Parser_Service.user": resolved_path=`./${yt_plugin_base_path}/${parts[1]}`; break;
			case "YTPlugin_ServiceLoader_Plugin.user": resolved_path=`./${yt_plugin_base_path}/${parts[1]}`; break;
			case "YTPlugin_ServiceMethods.user": resolved_path=`./${yt_plugin_base_path}/${parts[1]}`; break;
			case "YTPlugin_Support_Service.user": resolved_path=`./${yt_plugin_base_path}/${parts[1]}`; break;
		}
	}
	if(resolved_path)
	{
		if(log_path_resolve) console.log("resolved path",x,"->",resolved_path);
	} else
	{
		console.log("resolved_path",x);
	}
	return resolved_path;
}
function get_exports()
{
	window.__require_module_cache__??={};
	let all_modules=window.__require_module_cache__;
	/** @type {{[U in keyof import("../_module_cache/RequireModuleCache.ts").RequireModuleCache]?:import("../youtube_plugin_raw/zb_plugin_types/ambient_exports.ts").BaseModuleType}} */
	let ok_modules=all_modules;
	return ok_modules;
}
/** @arg {keyof import("../_module_cache/RequireModuleCache.ts").RequireModuleCache} module_name @template {import("../youtube_plugin_raw/zb_plugin_types/ambient_exports.ts").BaseModuleType} T @arg {(x:T)=>void} fn @arg {{global:boolean}} flags @arg {T} exports */
function do_export(fn,flags,exports,module_name)
{
	/** @typedef {typeof exports} ExportsT */
	if(typeof exports==="object") {fn(exports);} else
	{
		/** @type {ExportsT} */
		let exports;
		if(flags.global)
		{
			/** @type {{}} */
			let win_exp=window;
			exports=as(win_exp);
		} else
		{
			window.__require_module_cache__??={};
			let all_modules=window.__require_module_cache__;
			exports=as(all_modules[module_name]??{});
			/** @type {{[U in keyof import("../_module_cache/RequireModuleCache.ts").RequireModuleCache]?:import("../youtube_plugin_raw/zb_plugin_types/ambient_exports.ts").BaseModuleType}} */
			let ok_modules=all_modules;
			ok_modules[module_name]=as(exports);
		}
		fn(as(exports));
	}
}
/** @private @arg {(x:typeof exports)=>void} fn */
function export_(fn,flags={global: false}) {do_export(fn,flags,exports,__module_name__);}
export_(exports => {exports.__is_module_flag__=true;});

const log_module_loading_enabled=false;
/** @template T @arg {T|undefined} x @returns {T} */
function required(x)
{
	if(x===void 0) {throw new Error("missing required");}
	return x;
}
/** @template {import("../youtube_plugin_raw/zb_plugin_types/AllImportPaths.ts").AllImportPaths} T @arg {T} arg @arg {[]} r_args @returns {import("./ProcessImport.ts").ProcessImport<T>} */
function require(arg,...r_args)
{
	if(arg===void 0) {throw new Error("missing required argument");}
	window.__require_module_cache__??={};
	const M=window.__require_module_cache__,i=required;
	const resolved_path=resolve_path_to_userscript_dir(arg);
	if(resolved_path===null)
	{
		if(cur_require&&cur_require.__system_require) return cur_require(arg,...r_args);
		throw new Error("Unable to resolve path: "+arg);
	}
	/** @arg {any} x @returns {asserts x is import("./ProcessImport.ts").ProcessImport<T>} */
	function correct_return_type(x) {x;}
	const loc=path_map[resolved_path];
	/** @type {import("./ProcessImport.ts").ProcessImport<import("../youtube_plugin_raw/zb_plugin_types/AllImportPaths.ts").AllImportPaths>} */
	let mod;
	if(loc[0]==="sys") mod=i(window[loc[1]]);
	else if(loc[0]==="raw") mod=i(M[loc[1]]);
	else mod=i(M[`${loc[0]}$${loc[1]}`]);
	correct_return_type(mod);
	return mod;
}

// module exports
export_(exports =>
{
	exports.get_exports=get_exports;
	exports.do_export=do_export;
	exports.as=as;
	exports.required=required;
	exports.__path_map__=path_map;
});
require.__system_require=false;
/** @type {({__system_require:boolean;system_require?:any;<T extends import("../youtube_plugin_raw/zb_plugin_types/AllImportPaths.ts").AllImportPaths>(x:T):import("./ProcessImport.ts").ProcessImport<T>})} */
let cur_require=require;

// global exports
export_(exports =>
{
	exports.__module_require__=require;
	exports.__base_require_module_loaded__=true;
	exports.__log_module_loading_enabled__=log_module_loading_enabled;
},{global: true});

// module loaded
export_(exports => exports.__module_loaded__=true);
