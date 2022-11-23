import {EnvSettingsType} from "../EnvSettingsType.js";
import {DispatcherIndexType} from "./DispatcherIndexType.js";
import {LexGrammarSyntax} from "./LexGrammarSyntax.js";
import {Lexer} from "./Lexer";
import {JSWhiteSpace} from "./JSWhiteSpace.js";
import {JSLineTerminators} from "./JSLineTerminators.js";
import {LexJSComments} from "./LexJSComments.js";
import {Tokens} from "./Tokens.js";
import {NamesAndKeywords} from "./NamesAndKeywords.js";
import {JSPunctuators} from "./JSPunctuators.js";
import {Literals as Literals} from "./Literals.js";
import {NumericLiterals} from "./NumericLiterals.js";
import {StringLiterals} from "./StringLiterals.js";
import {RegularExpressionLiterals} from "./RegularExpressionLiterals.js";
import {TemplateLiteralComp} from "./TemplateLiteralComp.js";
import {HashbangComments} from "./HashbangComments.js";

export class Dispatcher {
	[x: string]: DispatcherIndexType;
	lexer: Lexer;
	lex_grammar_syntax: LexGrammarSyntax=new LexGrammarSyntax(this);
	white_space: JSWhiteSpace=new JSWhiteSpace(this);
	line_terminators: JSLineTerminators=new JSLineTerminators(this);
	comments: LexJSComments=new LexJSComments(this);
	tokens: Tokens=new Tokens(this);
	names_and_keywords: NamesAndKeywords=new NamesAndKeywords(this);
	punctuators: JSPunctuators=new JSPunctuators(this);
	numeric_literals: NumericLiterals=new NumericLiterals(this);
	string_literals: StringLiterals=new StringLiterals(this);
	regular_expression_literals: RegularExpressionLiterals=new RegularExpressionLiterals(this);
	template_literal: TemplateLiteralComp=new TemplateLiteralComp(this);
	literals: Literals=new Literals(this);
	hashbang_comments: HashbangComments=new HashbangComments(this);
	environment_settings: EnvSettingsType={
		type: 'environment_settings',
		is_strict: false,
	};
	constructor(str: string) {
		this.lexer=new Lexer(this,str);
	}
	DivPunctuator(str: string,index: number) {
		return this.punctuators.DivPunctuator(str,index);
	}
	CommonToken(str: string,index: number) {
		return this.tokens.CommonToken(str,index);
	}
	RightBracePunctuator(str: string,index: number) {
		return this.punctuators.RightBracePunctuator(str,index);
	}
	Comment(str: string,index: number) {
		return this.comments.Comment(str,index);
	}
	HexDigits(str: string,index: number) {
		return this.numeric_literals.HexDigits(str,index);
	}
	IdentifierName(str: string,index: number) {
		return this.names_and_keywords.IdentifierName(str,index);
	}
	PrivateIdentifier(str: string,index: number) {
		return this.names_and_keywords.PrivateIdentifier(str,index);
	}
	Punctuator(str: string,index: number) {
		return this.punctuators.Punctuator(str,index);
	}
	DecimalDigit(str: string,index: number) {
		return this.numeric_literals.DecimalDigit(str,index);
	}
	NumericLiteral(str: string,index: number) {
		return this.numeric_literals.NumericLiteral(str,index);
	}
	StringLiteral(str: string,index: number) {
		return this.string_literals.StringLiteral(str,index);
	}
	Template(str: string,index: number) {
		return this.template_literal.Template(str,index);
	}
	LineTerminator(str: string,index: number) {
		return this.line_terminators.LineTerminator(str,index);
	}
	CharacterEscapeSequence(str: string,index: number) {
		return this.string_literals.CharacterEscapeSequence(str,index);
	}
	LineTerminatorSequence(str: string,index: number) {
		return this.line_terminators.LineTerminatorSequence(str,index);
	}
	HexDigit(str: string,index: number) {
		return this.numeric_literals.HexDigit(str,index);
	}
	CodePoint(str: string,index: number) {
		return this.template_literal.CodePoint(str,index);
	}
	LineContinuation(str: string,index: number) {
		return this.string_literals.LineContinuation(str,index);
	}
	OctalDigit(str: string,index: number) {
		return this.numeric_literals.OctalDigit(str,index);
	}
	HexEscapeSequence(str: string,index: number) {
		return this.string_literals.HexEscapeSequence(str,index);
	}
	UnicodeEscapeSequence(str: string,index: number) {
		// TODO: UnicodeEscapeSequence
		return this.string_literals.HexEscapeSequence(str,index);
	}
	RegularExpressionLiteral(str: string,index: number) {
		return this.regular_expression_literals.RegularExpressionLiteral(str,index);
	}
	TemplateSubstitutionTail(str: string,index: number) {
		return this.template_literal.TemplateSubstitutionTail(str,index);
	}
	WhiteSpace(str: string,index: number) {
		return this.white_space.WhiteSpace(str,index);
	}
	IdentifierPartChar(str: string,index: number) {
		return this.names_and_keywords.IdentifierPartChar(str,index);
	}
	InputElementDiv(str: string,index: number) {
		return this.lex_grammar_syntax.InputElementDiv(str,index);
	}
	InputElementRegExpOrTemplateTail(str: string,index: number) {
		return this.lex_grammar_syntax.InputElementRegExpOrTemplateTail(str,index);
	}
}
