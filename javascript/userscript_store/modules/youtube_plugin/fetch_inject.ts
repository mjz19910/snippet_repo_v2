import {fetch_promise_handler} from "./fetch_promise_handler"
import {original_fetch} from "./youtube_plugin.user"

export function fetch_inject(request_info: RequestInfo|URL,init?: RequestInit|undefined) {
	if(!original_fetch)
		throw new Error("No original fetch")
	let ret=original_fetch(request_info)
	return ret.then(fetch_promise_handler.bind(null,request_info))
}
