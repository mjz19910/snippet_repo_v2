import {ytd_player} from "../elements/ytd_player"
import {plugin_overlay_element} from "./plugin_overlay_element"
import {sumOffset} from "./sumOffset"

export function fix_offset() {
	if(!ytd_player.value)
		return
	if(!plugin_overlay_element.value)
		return
	let player_offset=sumOffset(ytd_player.value)
	plugin_overlay_element.value.style.top=player_offset.top_offset+"px"
	plugin_overlay_element.value.style.left=player_offset.left_offset+"px"
}
