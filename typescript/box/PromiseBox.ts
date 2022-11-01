import {BoxTemplate} from "./template/BoxTemplate.js"
import {Box} from "./Box.js"
import {BoxVerify} from "./BoxVerify.js"

export class PromiseBox
	extends BoxTemplate<"promise_box",Promise<Box>>
	implements BoxVerify<PromiseBox,"PromiseBox">
{
	readonly type="promise_box"
	readonly inner_type='Promise<Box>'
	readonly await_type="Box"
	readonly m_verify_name="PromiseBox"
	verify_name(name: "PromiseBox") {
		return this.m_verify_name==="PromiseBox"&&name==="PromiseBox"
	}
}
