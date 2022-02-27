import {IStackInstructionType} from "./IStackInstructionType";
import {IObjectInstructionType} from "./IObjectInstructionType";
import {ICallInstructionType} from "./ICallInstructionType";
import {ITuringInstructionType} from "./ITuringInstructionType";
import {ISpecialInstructionType} from "./ISpecialInstructionType";
import {IDebugInstructionType} from "./IDebugInstructionType";
import {InstructionJumpTypes} from "./InstructionJumpTypes";
import {InstructionExecutionTypes} from "./InstructionExecutionTypes";
import {InstructionExec} from "./InstructionExec";
import {InstructionAppend} from "./InstructionAppend";
import {InstructionModifyOperand} from "./InstructionModifyOperand";
import {InstructionConstruct} from "./InstructionConstruct";
import {InstructionPushInstructionPointer} from "./InstructionPushInstructionPointer";


export type InstructionType =
	IStackInstructionType | IObjectInstructionType |
	ICallInstructionType | ITuringInstructionType |
	ISpecialInstructionType | IDebugInstructionType |
	InstructionJumpTypes | InstructionExecutionTypes |
	InstructionPushInstructionPointer | InstructionConstruct |
	InstructionModifyOperand | InstructionExec |
	InstructionAppend | InstructionCastObject;
