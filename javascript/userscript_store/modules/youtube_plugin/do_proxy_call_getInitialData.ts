import {yt_handlers} from "./youtube_plugin.user"

export function do_proxy_call_getInitialData(args: any) {
	return yt_handlers.on_initial_data(args)
}
