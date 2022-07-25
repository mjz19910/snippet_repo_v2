import {YTDPlayerElement} from "../elements/types/YTDPlayerElement"
import {ytd_player} from "../elements/ytd_player"
import {element_map} from "../element_map"

export function on_ytd_player(element: HTMLElement) {
	const element_id="ytd-player"
	console.log(`on ${element_id}`)
	element_map.set(element_id,element)
	let any_element: any=element
	let expected_element: YTDPlayerElement=any_element
	ytd_player.value=expected_element
	window.ytd_player=element
}
