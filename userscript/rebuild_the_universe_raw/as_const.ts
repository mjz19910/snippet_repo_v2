import {
	InstructionAppendImpl,
	InstructionBlockTraceImpl,
	InstructionBreakpointImpl,
	InstructionCallImpl,
	InstructionCastImpl,
	InstructionConstructImpl,
	InstructionDropImpl,
	InstructionDupImpl,
	InstructionGetImpl,
	InstructionHaltImpl,
	InstructionJeImpl,
	InstructionJmpImpl,
	InstructionModifyOpImpl,
	InstructionNopImpl,
	InstructionPeekImpl,
	InstructionPushArgsImpl,
	InstructionPushImpl,
	InstructionPushVMObjImpl,
	InstructionPushWindowObjectImpl,
	InstructionReturnImpl,
	InstructionVMCallImpl,
	InstructionVMPushIPImpl,
	InstructionVMReturnImpl
} from "./rebuild_the_universe.user";

export const instruction_descriptor_arr_type=[
	['append',InstructionAppendImpl],
	['breakpoint',InstructionBreakpointImpl],
	['call',InstructionCallImpl],
	['cast',InstructionCastImpl],
	['construct',InstructionConstructImpl],
	['drop',InstructionDropImpl],
	['dup',InstructionDupImpl],
	['get',InstructionGetImpl],
	['halt',InstructionHaltImpl],
	['je',InstructionJeImpl],
	['jmp',InstructionJmpImpl],
	['modify_operand',InstructionModifyOpImpl],
	['nop',InstructionNopImpl],
	['peek',InstructionPeekImpl],
	['push_window_object',InstructionPushWindowObjectImpl],
	['push',InstructionPushImpl],
	['return',InstructionReturnImpl],
	['vm_block_trace',InstructionBlockTraceImpl],
	['vm_call',InstructionVMCallImpl],
	['vm_push_args',InstructionPushArgsImpl],
	['vm_push_ip',InstructionVMPushIPImpl],
	['vm_push_self',InstructionPushVMObjImpl],
	['vm_return',InstructionVMReturnImpl],
] as const;

export const instruction_table_type={
	append: new InstructionAppendImpl,
	breakpoint: new InstructionBreakpointImpl,
	call: new InstructionCallImpl,
	cast: new InstructionCastImpl,
	construct: new InstructionConstructImpl,
	dom_create_element_with_props: new UnimplementedInstruction,
	dom_create_element: new UnimplementedInstruction,
	dom_exec: new UnimplementedInstruction,
	dom_get: new UnimplementedInstruction,
	dom_new: new UnimplementedInstruction,
	dom_peek: new UnimplementedInstruction,
	drop: new InstructionDropImpl,
	dup: new InstructionDupImpl,
	get: new InstructionGetImpl,
	halt: new InstructionHaltImpl,
	je: new InstructionJeImpl,
	jmp: new InstructionJmpImpl,
	modify_operand: new InstructionModifyOpImpl,
	nop: new InstructionNopImpl,
	peek: new InstructionPeekImpl,
	push_window_object: new InstructionPushWindowObjectImpl,
	push: new InstructionPushImpl,
	return: new InstructionReturnImpl,
	vm_block_trace: new InstructionBlockTraceImpl,
	vm_call: new InstructionVMCallImpl,
	vm_push_args: new InstructionPushArgsImpl,
	vm_push_ip: new InstructionVMPushIPImpl,
	vm_push_self: new InstructionPushVMObjImpl,
	vm_return: new InstructionVMReturnImpl,
};