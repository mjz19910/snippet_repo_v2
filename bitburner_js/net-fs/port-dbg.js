/** @param {NS} ns */
export async function main(ns) {
	ns.tail();
	ns.clearLog();
	let delayed_messages=[];
	let handle=ns.getPortHandle(3);
	await handle.nextWrite();
	if(handle.empty()) {
		ns.print("empty port");
		return;
	}
	while(!handle.empty()) {
		delayed_messages.push(handle.read());
	}
	ns.print(delayed_messages);
	for(let msg of delayed_messages) {
		let removed_msg=handle.write(msg);
		if(removed_msg!==null) ns.print("dropped: ",removed_msg);
	}
}
