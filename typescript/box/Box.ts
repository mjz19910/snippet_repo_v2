import {ArrayBox} from "./ArrayBox.js"
import {AsyncFunctionBox} from "./AsyncFunctionBox.js"
import {BoxWithPropertiesIsBox} from "./BoxWithPropertiesIsBox.js"
import {CSSStyleSheetBox} from "./CSSStyleSheetBox.js"
import {CSSStyleSheetConstructorBox} from "./CSSStyleSheetConstructorBox.js"
import {CSSStyleSheetInitBox} from "./CSSStyleSheetInitBox.js"
import {CSSStyleSheetPromiseBox} from "./CSSStyleSheetPromiseBox.js"
import {DocumentBox} from "./DocumentBox.js"
import {EmptyArrayBox} from "./EmptyArrayBox.js"
import {FunctionBox} from "./FunctionBox.js"
import {FunctionConstructorBox} from "./FunctionConstructorBox.js"
import {GlobalThisBox} from "./GlobalThisBox.js"
import {Primitives} from "./Primitives.js"
import {IndexBox} from "./IndexBox.js"
import {InstructionTypeArrayBox} from "./InstructionTypeArrayBox.js"
import {InstructionTypeBox} from "./InstructionTypeBox.js"
import {MediaListBox} from "./MediaListBox.js"
import {NewableFunctionBox} from "./NewableFunctionBox.js"
import {NewableInstancePackObjectBox} from "./NewableInstancePackObjectBox.js"
import {NodeBox} from "./NodeBox.js"
import {ObjectBox} from "./ObjectBox.js"
import {PromiseBox} from "./PromiseBox.js"
import {RealVoidBox} from "./RealVoidBox.js"
import {StackVMBox} from "./StackVMBox.js"
import {VoidBox} from "./VoidBox.js"
import {VoidPromiseBox} from "./VoidPromiseBox.js"
import {WindowBox} from "./WindowBox.js"
import {AnyTypeOfResult} from "./template/AnyTypeOfResult.js";

export class NumberBox {
	type: 'number'
	value: number
	constructor(value:number) {
		this.type='number';
		this.value=value;
	}
	as_type(input_typeof: AnyTypeOfResult): this|null {
		return typeof this.value===input_typeof? this:null
	}
}

export class StringBox {
	type: 'string';
	value: string;
	constructor(value:string) {
		this.type='string';
		this.value=value;
	}
	as_type(input_typeof: AnyTypeOfResult): this|null {
		return typeof this.value===input_typeof? this:null
	}
}

export type Box=
	NumberBox|
	StringBox|
	// function result
	CSSStyleSheetInitBox|
	// array
	EmptyArrayBox|
	ArrayBox|
	InstructionTypeArrayBox|
	// constructor function
	CSSStyleSheetConstructorBox|
	// function
	FunctionBox|
	NewableFunctionBox|
	AsyncFunctionBox|
	FunctionConstructorBox|
	// return type
	CSSStyleSheetPromiseBox|
	// global
	GlobalThisBox|
	WindowBox|
	DocumentBox|
	// object instances
	StackVMBox|
	NodeBox|
	CSSStyleSheetBox|
	MediaListBox|
	// StackVM
	InstructionTypeBox|
	// object
	// hard to box returns from normal js (can't find the index sig easily as any object would match)
	IndexBox|
	ObjectBox|
	// promise types
	VoidPromiseBox|
	PromiseBox|
	// No value (Void)
	VoidBox|
	RealVoidBox|
	// Box with stuff
	BoxWithPropertiesIsBox|
	// Generic boxes
	NewableInstancePackObjectBox
