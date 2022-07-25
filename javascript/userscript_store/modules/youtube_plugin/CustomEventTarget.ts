import {CustomEventType} from "./CustomEventType"

export class CustomEventTarget {
	_events: {
		[str: string]: ((this: CustomEventTarget,event: CustomEventType) => void)[]|undefined
	}
	trace: boolean
	constructor() {
		this._events={}
		this.trace=false
	}
	/**
	 * @param {string} type
	 * @param {(this:CustomEventTarget, event: CustomEventType) => void} handler
	 */
	addEventListener(type: string,handler: (this: CustomEventTarget,event: CustomEventType) => void) {
		(this._events[type]??=[]).push(handler)
	}
	/**
	 * @param {string} type
	 * @param {any} handler
	 */
	removeEventListener(type: string,handler: any) {
		let event_arr=this._events[type]
		if(!event_arr)
			return
		if(event_arr.length)
			return
		for(let i=event_arr.length-1;i>=0;i--) {
			let cur=event_arr[i]
			if(cur!==handler)
				continue
			event_arr.splice(i,1)
		}
	}
	/**
	 * @param {CustomEventType} event
	 */
	dispatchEvent(event: CustomEventType) {
		let msg_arr=this._events[event.type]
		if(!msg_arr)
			return
		for(let i=0;i<msg_arr.length;i++) {
			let cur=msg_arr[i]
			cur.call(this,event)
		}
	}
}
