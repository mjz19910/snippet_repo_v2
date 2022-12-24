import {readFile} from 'fs/promises';
import {resolve} from 'path';
import {dirname} from 'path';
import {Root} from 'protobufjs';
import {fileURLToPath} from 'url';
import {get_token_data} from './get_token_data.js';
import {ProtoBufTypeA} from './ProtoBufTypeA.js';
import {useTypeA} from './useTypeA.js';

const __dirname=dirname(fileURLToPath(import.meta.url));

export function r(path: string) {
	return resolve(__dirname,"..","..",path);
}
async function run() {
	var protobuf=(await import('protobufjs') as any as {default: typeof import("protobufjs");}).default;
	let root=await protobuf.load(r("protobuf/bin0.proto"));
	return parse_types(root);
}
run();
async function parse_types(root: Root): Promise<void> {
	let file=await readFile(r("binary/bin0.txt"));
	let token_enc=file.toString();
	let base64_enc=decodeURIComponent(token_enc).replaceAll("_","/").replaceAll("-","+");
	const text=atob(base64_enc);
	const token_binary=new Uint8Array([...text].map(e => e.charCodeAt(0)));
	let {obj,id_arr}: {
		obj: ProtoBufTypeA;
		id_arr: Uint8Array;
	}=useTypeA(root,token_binary);
	let token_binary_2=get_token_data(obj.token1,r);
	let Type_2=root.lookupType("A_token1");
	id_arr=new Uint8Array(token_binary.slice(0,4).buffer);
	console.log('base64(A.token1).typeid=%o',btoa(String.fromCharCode.apply("",Array.from(id_arr))).replaceAll("=",""));
	id_arr=new Uint8Array(token_binary.slice(4,7).buffer);
	console.log('base64(A.token1).extra',id_arr);

	function decode_as(message_type: string|string[],data: Uint8Array) {
		let type=root.lookupType(message_type);
		let message=type.decode(data);
		let obj=type.toObject(message,{
			longs: Number,
		});
		return obj;
	}
	let tmp_data=decode_as("D",token_binary_2.slice(4));
	console.log('as D',tmp_data.data);
	let message_2=Type_2.decode(token_binary_2.slice(7));
	let obj_2=Type_2.toObject(message_2,{
		longs: Number,
	});
	type DesType={
		items: ({})[];
		keys: number[];
		keysAlt: number[];
		valueMap: {key:number;value:number}[]
	};
	let description:DesType=obj_2.description;
	function extract_items(description: DesType) {
		let items=[];
		let map=new Map(description.valueMap.map(e=>[e.key,e.value]));
		for(let x of description.keys) {
			let index=map.get(x);
			if(!index) {
				console.log("missing index");
				continue;
			}
			let item=description.items[index];
			items.push(item);
		}
		return items;
	}
	let items=extract_items(description);
	console.log(items[0]);
}

