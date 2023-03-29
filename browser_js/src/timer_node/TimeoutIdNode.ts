import {BaseNode} from "./BaseNode.js";

export class TimeoutIdNode extends BaseNode {
	m_id: number;
	constructor(id: number) {
		super();
		this.m_id=id;
	}
	override destroy() {
		super.destroy();
		if(this.m_id!==null) clearTimeout(this.m_id);
	}
}
