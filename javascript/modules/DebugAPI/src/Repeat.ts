import {ST} from "./ST.js";
import {WMap} from "./WMap";

export class Repeat<T> {
	static from_TU_entry(item: import("./TU.js").TU<string,number>,times: number): import("./TX.js").TX<string,number> {
		switch(item[0]) {
			case 'T': return ['T',Repeat.get(item[1],times)];
			case 'U': return ['U',Repeat.get_num(item[1],times)];
		}
	}
	static map_1<M extends Map<T,Map<C,V>>,T,C,V>(map: M,value: T) {
		if(map.has(value)) {
			return map.get(value);
		}
		/**@type {Map<C,V>} */
		let x: Map<C,V>=new Map;
		map.set(value,x);
		return x;
	}
	static get_with<T>(map: Map<T,Map<number,Repeat<T>>>,value: T,times: number) {
		let tm_map=this.map_1(map,value);
		if(!tm_map) throw 1;
		let rep=tm_map.get(times);
		if(rep) {
			return rep;
		} else {
			let rep=new this(value,times);
			tm_map.set(times,rep);
			return rep;
		}
	}
	static N: Repeat<null>=new Repeat(null,0);
	static map: Map<string,Map<number,Repeat<string>>>=new Map;
	static map_num: Map<number,Map<number,Repeat<number>>>=new Map;
	map_instance: Map<symbol,<T>() => WMap<T>>=new Map;
	get_map_T<U extends ST,V extends InstanceType<U>>(constructor_key: U,_: V): Map<number,Map<number,Repeat<V>>> {
		let res=Repeat.N.map_instance.get(constructor_key.type);
		if(!res) {
			/**@type {Map<number, Map<number, Repeat<V>>>} */
			let map: Map<number,Map<number,Repeat<V>>>=new Map;
			Repeat.N.map_instance.set(constructor_key.type,() => new WMap(map));
			return map;
		}
		let map: WMap<V>=res();
		return map.value;
	}
	has_map_T<U extends ST,V extends InstanceType<U>>(constructor_key: U,rep_null: Repeat<null>,key: number): boolean {
		let res=rep_null.map_instance.get(constructor_key.type);
		if(!res) {
			/**@type {Map<number, Map<number, Repeat<V>>>} */
			let map: Map<number,Map<number,Repeat<V>>>=new Map;
			rep_null.map_instance.set(constructor_key.type,() => new WMap(map));
			return false;
		}
		let map: WMap<V>=res();
		return map.value.has(key);
	}
	static get(value: string,times: number): Repeat<string> {
		if(!this.map.has(value)) {
			this.map.set(value,new Map);
		}
		let tm_map=this.map.get(value);
		if(!tm_map)
			throw new Error("no-reach");
		if(tm_map.has(times)) {
			let rep=tm_map.get(times);
			if(!rep)
				throw new Error("no-reach");
			return rep;
		} else {
			let rep=new this(value,times);
			tm_map.set(times,rep);
			return rep;
		}
	}
	static get_num(value: number,times: number) {
		if(!this.map_num.has(value)) {
			this.map_num.set(value,new Map);
		}
		let tm_map=this.map_num.get(value);
		if(!tm_map)
			throw new Error("no-reach");
		if(tm_map.has(times)) {
			let rep=tm_map.get(times);
			if(!rep)
				throw new Error("no-reach");
			return rep;
		} else {
			let rep=new this(value,times);
			tm_map.set(times,rep);
			return rep;
		}
	}
	value;
	times;
	constructor(value: T,times: number) {
		this.value=value;
		this.times=times;
	}
	toString() {
		if(typeof this.value==='number') {
			return this.value+"x"+this.times;
		}
	}
}
