import {element_map,yt_playlist_manager} from "./youtube_plugin.user"

export function on_yt_playlist_manager(element: HTMLElement) {
	const element_id="yt-playlist-manager"
	console.log(`on ${element_id}`)
	element_map.set(element_id,element)
	yt_playlist_manager.value=element
	window.yt_playlist_manager=element
}
