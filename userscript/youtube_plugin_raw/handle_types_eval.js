import {as_ as as,ServiceMethods} from "./zc_child_modules/YTPlugin_Base_Plugin.user";
/** @returns {never} */
function n() {throw new Error("Make never type");}
n;
/** @template CLS_T,CLS_U @extends {ServiceMethods<CLS_T,CLS_U>} */
export class HandleTypesEval_ extends ServiceMethods {
	/** @protected @type {<T extends string[],U extends T[number]>(k:T,r:U[])=>Exclude<T[number],U>[]} */
	filter_out_keys(keys,to_remove) {
		to_remove=to_remove.slice();
		/** @private @type {Exclude<typeof keys[number],typeof to_remove[number]>[]} */
		let ok_e=[];
		for(let i=0;i<keys.length;i++) {
			let rm_idx=to_remove.findIndex(e => e===keys[i]);
			if(rm_idx>=0) {
				to_remove.splice(rm_idx,1);
				continue;
			}
			ok_e.push(as(keys[i]));
		}
		return ok_e;
	}
	/** @protected @arg {string} cf @arg {{}} x */
	k=(cf,x) => this.save_keys(`[${cf}]`,x);
	/** @protected @arg {CF_M_w} cf @arg {SI} k @template {T_DistributedKeyof<T>} SI @template {{}} T @arg {T} x @arg {SI[]} excl @returns {T[SI]} */
	w(cf,k,x,excl=[]) {
		this.k(cf,x);
		let ka=this.get_keys_of(x);
		let keys=this.filter_out_keys(ka,excl);
		if(keys.length!==1) debugger;
		let hk=keys[0];
		if(hk!==k) {debugger; throw new Error();}
		let r=x[hk];
		return r;
	}
	/** @protected @template {CF_M_y} T_CF  @arg {T_CF} cf @template U @arg {K} k @template {T_DistributedKeyof<T>} K @template {{}} T @arg {T} x @arg {(this:this,x:T[K],cf:`${T_CF}.${K}`)=>U} f */
	y(cf,k,x,f) {return f.call(this,this.w(`y:${cf}`,k,x),`${cf}.${k}`);}
	/** @protected @arg {D_YtConfig} x */
	D_YtConfig(x) {x;}
	/** @protected */
	gk=this.get_keys_of;
	// /** @protected @arg {D_CF_D_Params} cf @template U @template {string} T @arg {{params:T;}} x @arg {(this:this,x:DC_Params['params'],cf:string)=>U} f */
	// D_Params(cf,x,f) {const {params: p,...y}=this.s(`D_CF_D_Params:${cf}`,x); this.g(y); return f.call(this,x.params,cf);}
	// /** @protected @template {{}} T @arg {D_CF_s} cf @arg {T} x @returns {T} */
	// s_priv(cf,x) {this.s(cf,x);}
	// /** @protected @template {{}} T @arg {D_CF_s} cf @arg {T} x @returns {T} */
	// s(cf,x) {cf; x; n();}
	// /** @protected @template T @arg {T_Command$<T>} x @arg {(this:this,x:T)=>void} f */
	// T_Command_TP(x,f) {x; f;}
	// /** @protected @template CT,T,U @arg {TR_ItemSection_3<CT,T,U>} x @returns {TD_ItemSection_3<CT, T, U>} */
	// TR_ItemSection_3(x) {x; n();}
	// /** @protected @template {{}} T @arg {TR_ItemSection_2<T,"comments-entry-point">} x @returns {TD_ItemSection_2<T, "comments-entry-point">} */
	// TR_ItemSection_2(x) {x; n();}
	// /** @protected @template {{}} T @arg {TD_ItemSection_2<T,"comments-entry-point">} x @arg {(x:T)=>void} f */
	// TD_ItemSection_2_CommentsEntryPoint(x,f) {x; f; n();}
	// /** @protected @template T @arg {T_SecondaryResults<T>} x @arg {(this:this,x:T)=>void} f */
	// T_SecondaryResults(x,f) {x; f;}
	// /** @protected @template T @arg {T_Playlist<T>} x @arg {(this:this,x:T)=>void} f */
	// T_Playlist(x,f) {x; f;}
	// /** @protected @template T @arg {T_Autoplay<T>} x @arg {(this:this,x:T)=>void} f */
	// T_Autoplay(x,f) {x; f;}
	// /** @protected @template {number} T @arg {T_Types<T>} x @arg {T|null} _x @returns {T} */
	// T_Types(x,_x=null) {x; n();}
	// /** @protected @template U @template {T_DistributedKeyof<T>} K @template {{}} T @arg {string} cf @arg {T} x @arg {(x:T[K])=>U} f @returns {U} */
	// H_(cf,x,f) {cf; x; f; n();}
	// /** @protected @arg {G_Text} x */
	// G_Text(x) {x;}
}
