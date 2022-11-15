import {html_parsing_div_element} from "./mod";

/**
 * @param {string} html
 */
export function parse_html_to_binary_arr(html) {
	html_parsing_div_element.innerHTML=html;
	return Array.prototype.map.call(html_parsing_div_element.textContent,e => e.charCodeAt(0));
}
