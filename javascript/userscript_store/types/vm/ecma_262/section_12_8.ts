import {ecma_base} from "./LexerBase";
import {LexReturnType} from "./LexReturnType";

export class ecma_12_8 extends ecma_base {
	RegularExpressionNonTerminator(str:string, index:number):LexReturnType {
		let ret = this.m_dispatcher.LineTerminator(str, index);
		if(ret[0] && ret[1] === 0) {
			return ["RegularExpressionNonTerminator", 1];
		}
		return [null, 0];
	}
}
