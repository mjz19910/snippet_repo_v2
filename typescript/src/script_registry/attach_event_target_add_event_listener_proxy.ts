import {attached_proxy_arr} from "./attached_proxy_arr.js";
import {is_in_userscript} from "./is_in_userscript.js";
import {replace_cb_with_safe_proxy} from "./replace_cb_with_safe_proxy.js";

export function attach_event_target_add_event_listener_proxy() {
	EventTarget.prototype.addEventListener=new Proxy(EventTarget.prototype.addEventListener,{
		apply(...a): any {
			let target_obj=a[1];
			let call_args=a[2];
			replace_cb_with_safe_proxy(call_args,1);
			if(!is_in_userscript.flag) {
				debugger;
				console.log(target_obj,call_args);
			}
			let ret=Reflect.apply(...a);
			return ret;
		}
	});
	attached_proxy_arr.push(EventTarget.prototype.addEventListener);
}
