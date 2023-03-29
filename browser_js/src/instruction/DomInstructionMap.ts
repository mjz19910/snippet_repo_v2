import {DomTaggedPack} from "./DomTaggedPack.js";
import {VMBlockTraceOperand} from "./VMBlockTraceOperand.js";
import {Box} from "../box/Box.js";
import {CastOperandTarget} from "./CastOperandTarget.js";
import {AsyncFunctionBox} from "../box/AsyncFunctionBox.js";


export type DomInstructionMap={
	append: [number,"append"];
	breakpoint: [number,"breakpoint"];
	call: [number,"call",number];
	cast: [number,"cast",CastOperandTarget];
	construct: [number,"construct",number];
	dom_get: [number,"dom_get",string];
	dom_create_element_with_props: [number,"dom_create_element_with_props","div",string,{id: string;}];
	dom_create_element: [number,"dom_create_element","div",string,string];
	dom_new: [number,"dom_new",typeof CSSStyleSheet,[],AsyncFunctionBox,[string]];
	dom_peek: [number,"dom_peek",number,number];
	dom_filter: [number,"dom_filter",[4,any,any,any,any]];
	drop: [number,"drop"];
	dup: [number,"dup"];
	get: [number,"get"];
	halt: [number,"halt"];
	je: [number,"je",number];
	jmp: [number,"jmp",number];
	marker: [number,"marker",null];
	modify_operand: [number,"modify_operand",number,number];
	nop: [number,"nop"];
	peek: [number,"peek",number];
	push_window_object: [number,"push_window_object"];
	push: [number,"push",Box];
	return: [number,"return"];
	vm_block_trace: [number,"vm_block_trace",VMBlockTraceOperand];
	vm_call_at: [number,"vm_call_at",DomTaggedPack];
	vm_call: [number,"vm_call",number];
	vm_push_args: [number,"vm_push_args"];
	vm_push_ip: [number,"vm_push_ip"];
	vm_push_self: [number,"vm_push_self"];
	vm_return: [number,"vm_return"];
};
