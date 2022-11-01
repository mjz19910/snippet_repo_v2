import {BoxTemplate} from "./template/BoxTemplate.js"
import {BoxVerify} from "./BoxVerify.js"

export class MediaListBox
	extends BoxTemplate<"instance_box",MediaList>
	implements BoxVerify<MediaListBox,"MediaListBox">
{
	readonly type="instance_box"
	readonly instance_type="MediaList"
	readonly m_verify_name="MediaListBox"
	verify_name(name: "MediaListBox") {
		return this.m_verify_name==='MediaListBox'&&name==='MediaListBox'
	}
}
