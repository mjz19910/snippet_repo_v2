import {BoxTemplate} from "./template/BoxTemplate.js"
import {BoxVerify} from "./BoxVerify.js"

export class CSSStyleSheetBox
	extends BoxTemplate<"instance_box",CSSStyleSheet>
	implements BoxVerify<CSSStyleSheetBox,"CSSStyleSheetBox">
{
	readonly type="instance_box"
	readonly instance_type="CSSStyleSheet"
	readonly m_verify_name="CSSStyleSheetBox"
	verify_name(name: "CSSStyleSheetBox") {
		return this.m_verify_name==='CSSStyleSheetBox'&&name==='CSSStyleSheetBox'
	}
}
