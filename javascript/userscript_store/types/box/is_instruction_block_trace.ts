import { BlockTrace } from "../vm/instruction/vm/VMBlockTrace";
import { is_array } from "./is_array";
import { is_DomTaggedPack } from "./is_DomTaggedPack";
import { is_dom_instruction_type } from "./is_dom_instruction_type";
import { is_null } from "./is_null";

export function is_instruction_block_trace<T>(v: T | BlockTrace): v is BlockTrace {
	if (!is_array(v)) throw new Error("Invalid type");
	switch (v[0]) {
		case 'vm_block_trace': {
			switch (v[1]) {
				case 'begin': {
					let vv = v[2];
					if (is_null(vv))
						return true;
					if (is_dom_instruction_type(vv)) {
						return true;
					}
				} break;
				case 'call': {
					let vv = v[2];
					if (is_null(vv))
						return true;
					if (is_dom_instruction_type(vv)) {
						return true;
					}
				} break;
				case 'tagged': {
					let vv = v[2];
					if (is_null<typeof vv>(vv))
						return true;
					if (is_DomTaggedPack(vv))
						return true;
				} break;
				case 'tagged_begin': {
					let vv = v[2];
					if (is_null<typeof vv>(vv))
						return true;
					if (is_DomTaggedPack(vv)) {
						return true;
					}
				} break;
				case 'tagged_call': {
					let vv = v[2];
					if (is_null<typeof vv>(vv))
						return true;
					if (is_DomTaggedPack(vv)) {
						return true;
					}
				} break;
			}
		}
	}
}
