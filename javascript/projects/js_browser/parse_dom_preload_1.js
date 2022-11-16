import process from "process";
import {DOMBadge} from "../browser_fake_dom/src/implementation/DOMBadge.js";
import {PageLoaderFetchRequestState} from "../page_loader/PageLoaderFetchRequestState.js";
import {fetch_url} from "../page_loader/fetch_url.js"
import {init_wget} from "./mod.js"
export function main() {
	process.on('unhandledRejection',error => {
		if(error instanceof Error) {
			console.log('unhandledRejection',error.message)
		} else {
			console.log('unhandledRejection',error)
		}
	})
	const req_url="https://www.youtube.com/watch?v=8h-fqAnIn0A"
	let ok=init_wget({
		url:req_url,
		dom_impl_badge: new DOMBadge,
		no_repl: false,
	},req_url)
	if(!ok) {
		console.log('init failed')
		process.exit(1);
	}
	let state=new PageLoaderFetchRequestState(req_url)
	fetch_url(state)
}
main()
