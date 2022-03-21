import {writeFileSync} from "fs";
import {dirname} from "path";
import {runInContext} from "vm";
import {HTMLLexerState} from "./HTMLLexerState.js";
const my_filename = import.meta.url;
/**@arg {HTMLLexerState} obj*/
export function ctx_exec(obj) {
	const code=`
(function(){
	debugger;
	const obj_define_property=Object.defineProperty;
	const obj_own_props=Object.getOwnPropertyDescriptors;
	const arr_includes=Array.prototype.includes;
	const reflect_apply=Reflect.apply;
	const map_has=Map.prototype.has;
	const map_get=Map.prototype.get;
	const map_prototype_set=Map.prototype.set;
	const error_constructor=Error;
	const obj_entries=Object.entries;
	const obj_proto_of=Object.getPrototypeOf;
	/**
 * @param {DelPropertiesState} state
 * @param {any[][]} cc
 * @param {string} key
 * @param {(TypedPropertyDescriptor<any> & PropertyDescriptor)} property_descriptor
 * @param {any} obj
 */
function del_all_properties_1(state, obj, cc, key, property_descriptor) {
	state.del_parents.push([obj, key, property_descriptor]);
	cc.push([obj, key, property_descriptor.value]);
	try {
		if(property_descriptor.value !== void 0) {
			console.log('del', key, property_descriptor);
		}
		if(property_descriptor.get && property_descriptor.set){
			console.log('del', key, property_descriptor.get, property_descriptor.set);
		}
		if(property_descriptor.get) {
			console.log('del', key, property_descriptor.get);
		}
		if(property_descriptor.set) {
			console.log('del', key, property_descriptor.set);
		}
	} catch(e) {
		e;
		let undo_try_fn=()=>console.log('del', key, property_descriptor);
		state.del_undo_init();
		state.del_undo_until_ok(undo_try_fn);
	}
	if(property_descriptor.value === void 0)
		return;
	if(!state.new_cache.includes(property_descriptor.value)) {
		state.new_cache.push(property_descriptor.value);
		state.new_del.push(property_descriptor.value);
	}
}

// del_all_properties
/**@arg {DelPropertiesState} state@arg {any} tq*/
function del_all_properties(state, tq) {
	while(tq) {
		/**@type {[string, TypedPropertyDescriptor<any> & PropertyDescriptor][]}*/
		let cc;
		if(reflect_apply(map_has, state.remove_map, [tq])) {
			let v = reflect_apply(map_get, state.remove_map, [tq]);
			if(!v)
				throw new error_constructor("Unreachable");
			cc = v;
		} else {
			cc = [];
			reflect_apply(map_prototype_set, state.remove_map, [tq, cc]);
		}
		for(let k of obj_entries(obj_own_props(tq))) {
			if(k[1].configurable) {
				if(reflect_apply(arr_includes, state.ctx_req, [k[1].value]))
					continue;
				delete tq[k[0]];
				del_all_properties_1(state, tq, cc, ...k);
			} else {
				if(k[1].writable) {
					del_all_properties_1(state, tq, cc, ...k);
					tq[k[0]] = void 0;
				}
			}
		}
		tq = obj_proto_of(tq);
	}
}
class DelPropertiesState {
	/**@type {Map<any, [string, TypedPropertyDescriptor<any> & PropertyDescriptor][]>}*/
	remove_map = new Map;
	/**@type {any[]}*/
	new_cache = [];
	/**@type {any[]}*/
	new_del = [];
	/**@type {any[]}*/
	del_parents = [];
	/**
	 * @type {any}
	 */
	cur;
	/**
	 * @type {any}
	 */
	ctx_req;
	del_undo_init() {
		this.del_undo_start=this.del_parents.length;
		this.del_undo_cur=this.del_undo_start;
	}
	/**
	 * @param {() => void} fn
	 */
	del_undo_until_ok(fn) {
		let is_ok=false;
		while(!is_ok){
			try{
				fn();
				is_ok=true;
			}catch{
				this.del_undo();
			}
		}
	}
	del_undo() {
		if(this.del_undo_cur == void 0)return;
		if(this.del_undo_cur < 0)throw new Error("del undo underflow");
		this.del_undo_cur--;
		let undo_item=this.del_parents[this.del_undo_cur];
		obj_define_property(undo_item[0], undo_item[1], undo_item[2]);
	}
}
	let s = new DelPropertiesState;
	const arr_prototype_pop=Array.prototype.pop;
	s.cur = this;
	s.ctx_req = [s, console];
	console.log('ctx_exec ce', this);
	del_all_properties(s, s.cur);
	while(s.new_del.length > 60) {
		let xx=reflect_apply(arr_prototype_pop, s.new_del, []);
		s.cur=xx;
		let pl=s.new_del.length;
		del_all_properties(s, xx);
		let al=s.new_del.length;
		try {
			console.log('pd', al - pl);
		} catch(e) {
			e;
			debugger;
		}
	}
	console.log('cc pr', this.obj_api);
	console.log('s.cur', s.cur);
})()`;
	runInContext(code, obj.ctx, {filename: my_filename, lineOffset:7});
}
