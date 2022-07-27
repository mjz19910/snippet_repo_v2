import {debug} from "../config/debug"
import {handle_port_message} from "./handle_port_message"
import {message_channel_loop_delay, slow_message_event} from "./options"
import {port_state} from "./port_state"
import {port_state_log} from "./port_state_log"

export function on_port_message(event: MessageEvent<number>) {
	if(debug.value)
		console.log('msg_port:message %o',event.data)
	port_state_log.push([performance.now()-port_state.time_offset,event.data])
	if(slow_message_event) {
		setTimeout(handle_port_message,message_channel_loop_delay)
		return
	}
	handle_port_message()
}
