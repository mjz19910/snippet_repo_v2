import {overlay_content_div,title_on,title_text_overlay_enabled} from "./youtube_plugin.user"

export function title_display_update() {
	if(!overlay_content_div)
		return
	if(title_on&&title_text_overlay_enabled) {
		overlay_content_div.style.display=""
	} else {
		overlay_content_div.style.display="none"
	}
}
