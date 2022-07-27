import {ytd_player} from "../elements/ytd_player"
import {element_map} from "../event/element_map"
import {YTDPlayerElement} from "../types/YTDPlayerElement"

export function on_ytd_player(element: HTMLElement) {
	const element_id="ytd-player"
	console.log(`on ${element_id}`)
	element_map.set(element_id,element)
	let any_element: any=element
	let expected_element: YTDPlayerElement=any_element
	ytd_player.value=expected_element
	window.ytd_player=element
}
