import {Dispatcher} from "./Dispatcher.js";

export const debug_flag_override=false;

export class LexerBase {
	readonly type="LexerBase";
	m_dispatcher: Dispatcher;
	constructor(dispatcher: Dispatcher) {
		this.m_dispatcher=dispatcher;
	}
}