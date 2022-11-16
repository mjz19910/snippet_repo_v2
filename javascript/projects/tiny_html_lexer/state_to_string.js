import {State} from "State.js";

/**
 * @param {State} s_val
 */
export function state_to_string(s_val) {
	switch(s_val) {
		case State.InvalidState: return "InvalidState";
		case State.Data: return "Data";
		case State.RCDATA: return "RCDATA";
		case State.RAWTEXT: return "RAWTEXT";
		case State.ScriptData: return "ScriptData";
		case State.PLAINTEXT: return "PLAINTEXT";
		case State.TagOpen: return "TagOpen";
		case State.EndTagOpen: return "EndTagOpen";
		case State.TagName: return "TagName";
		case State.RCDATALessThanSign: return "RCDATALessThanSign";
		case State.RCDATAEndTagOpen: return "RCDATAEndTagOpen";
		case State.RCDATAEndTagName: return "RCDATAEndTagName";
		case State.RAWTEXTLessThanSign: return "RAWTEXTLessThanSign";
		case State.RAWTEXTEndTagOpen: return "RAWTEXTEndTagOpen";
		case State.RAWTEXTEndTagName: return "RAWTEXTEndTagName";
		case State.ScriptDataLessThanSign: return "ScriptDataLessThanSign";
		case State.ScriptDataEndTagOpen: return "ScriptDataEndTagOpen";
		case State.ScriptDataEndTagName: return "ScriptDataEndTagName";
		case State.ScriptDataEscapeStart: return "ScriptDataEscapeStart";
		case State.ScriptDataEscapeStartDash: return "ScriptDataEscapeStartDash";
		case State.ScriptDataEscaped: return "ScriptDataEscaped";
		case State.ScriptDataEscapedDash: return "ScriptDataEscapedDash";
		case State.ScriptDataEscapedDashDash: return "ScriptDataEscapedDashDash";
		case State.ScriptDataEscapedLessThanSign: return "ScriptDataEscapedLessThanSign";
		case State.ScriptDataEscapedEndTagOpen: return "ScriptDataEscapedEndTagOpen";
		case State.ScriptDataEscapedEndTagName: return "ScriptDataEscapedEndTagName";
		case State.ScriptDataDoubleEscapeStart: return "ScriptDataDoubleEscapeStart";
		case State.ScriptDataDoubleEscaped: return "ScriptDataDoubleEscaped";
		case State.ScriptDataDoubleEscapedDash: return "ScriptDataDoubleEscapedDash";
		case State.ScriptDataDoubleEscapedDashDash: return "ScriptDataDoubleEscapedDashDash";
		case State.ScriptDataDoubleEscapedLessThanSign: return "ScriptDataDoubleEscapedLessThanSign";
		case State.ScriptDataDoubleEscapeEnd: return "ScriptDataDoubleEscapeEnd";
		case State.BeforeAttributeName: return "BeforeAttributeName";
		case State.AttributeName: return "AttributeName";
		case State.AfterAttributeName: return "AfterAttributeName";
		case State.BeforeAttributeValue: return "BeforeAttributeValue";
		case State.AttributeValueDoubleQuoted: return "AttributeValueDoubleQuoted";
		case State.AttributeValueSingleQuoted: return "AttributeValueSingleQuoted";
		case State.AttributeValueUnquoted: return "AttributeValueUnquoted";
		case State.AfterAttributeValueQuoted: return "AfterAttributeValueQuoted";
		case State.SelfClosingStartTag: return "SelfClosingStartTag";
		case State.BogusComment: return "BogusComment";
		case State.MarkupDeclarationOpen: return "MarkupDeclarationOpen";
		case State.CommentStart: return "CommentStart";
		case State.CommentStartDash: return "CommentStartDash";
		case State.Comment: return "Comment";
		case State.CommentLessThanSign: return "CommentLessThanSign";
		case State.CommentLessThanSignBang: return "CommentLessThanSignBang";
		case State.CommentLessThanSignBangDash: return "CommentLessThanSignBangDash";
		case State.CommentLessThanSignBangDashDash: return "CommentLessThanSignBangDashDash";
		case State.CommentEndDash: return "CommentEndDash";
		case State.CommentEnd: return "CommentEnd";
		case State.CommentEndBang: return "CommentEndBang";
		case State.DOCTYPE: return "DOCTYPE";
		case State.BeforeDOCTYPEName: return "BeforeDOCTYPEName";
		case State.DOCTYPEName: return "DOCTYPEName";
		case State.AfterDOCTYPEName: return "AfterDOCTYPEName";
		case State.AfterDOCTYPEPublicKeyword: return "AfterDOCTYPEPublicKeyword";
		case State.BeforeDOCTYPEPublicIdentifier: return "BeforeDOCTYPEPublicIdentifier";
		case State.DOCTYPEPublicIdentifierDoubleQuoted: return "DOCTYPEPublicIdentifierDoubleQuoted";
		case State.DOCTYPEPublicIdentifierSingleQuoted: return "DOCTYPEPublicIdentifierSingleQuoted";
		case State.AfterDOCTYPEPublicIdentifier: return "AfterDOCTYPEPublicIdentifier";
		case State.BetweenDOCTYPEPublicAndSystemIdentifiers: return "BetweenDOCTYPEPublicAndSystemIdentifiers";
		case State.AfterDOCTYPESystemKeyword: return "AfterDOCTYPESystemKeyword";
		case State.BeforeDOCTYPESystemIdentifier: return "BeforeDOCTYPESystemIdentifier";
		case State.DOCTYPESystemIdentifierDoubleQuoted: return "DOCTYPESystemIdentifierDoubleQuoted";
		case State.DOCTYPESystemIdentifierSingleQuoted: return "DOCTYPESystemIdentifierSingleQuoted";
		case State.AfterDOCTYPESystemIdentifier: return "AfterDOCTYPESystemIdentifier";
		case State.BogusDOCTYPE: return "BogusDOCTYPE";
		case State.CDATASection: return "CDATASection";
		case State.CDATASectionBracket: return "CDATASectionBracket";
		case State.CDATASectionEnd: return "CDATASectionEnd";
		case State.CharacterReference: return "CharacterReference";
		case State.NamedCharacterReference: return "NamedCharacterReference";
		case State.AmbiguousAmpersand: return "AmbiguousAmpersand";
		case State.NumericCharacterReference: return "NumericCharacterReference";
		case State.HexadecimalCharacterReferenceStart: return "HexadecimalCharacterReferenceStart";
		case State.DecimalCharacterReferenceStart: return "DecimalCharacterReferenceStart";
		case State.HexadecimalCharacterReference: return "HexadecimalCharacterReference";
		case State.DecimalCharacterReference: return "DecimalCharacterReference";
		case State.NumericCharacterReferenceEnd: return "NumericCharacterReferenceEnd";
	}
}
