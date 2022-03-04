import {InstructionType} from "../vm/instruction/mod";
import {BoxTemplate} from "./BoxTemplate";


export class InstructionTypeBox extends BoxTemplate<"instance_box", InstructionType> {
	type:"instance_box"="instance_box";
	inner_type:"InstructionType"="InstructionType";
}
