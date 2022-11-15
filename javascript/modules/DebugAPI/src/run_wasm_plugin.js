import {wasm_header,wasm_global_memory,wasm_global_memory_view} from "./mod";

export function run_wasm_plugin() {
	wasm_header=new Uint8Array([0,0x61,0x73,0x6d,1,0,0,0]);

	wasm_global_memory=new WebAssembly.Memory({initial: 1});

	wasm_global_memory_view=new Uint8Array(wasm_global_memory.buffer);

	wasm_global_memory_view.set(wasm_header,0);
}
