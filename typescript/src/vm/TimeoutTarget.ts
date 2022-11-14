import {AbstractFire} from "./AbstractFire.js";

export class TimeoutTarget<T> implements AbstractFire {
	m_once: boolean;
	m_obj: T;
	m_callback: (this: T) => void;
	constructor(obj: T,callback: TimeoutTarget<T>['m_callback']) {
		this.m_once=true;
		this.m_obj=obj;
		this.m_callback=callback;
	}
	fire() {
		this.m_callback.call(this.m_obj);
	}
}
