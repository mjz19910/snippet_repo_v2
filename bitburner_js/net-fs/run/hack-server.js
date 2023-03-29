import {log_port_id,max_port_id,read_call_msg,read_reply_msg,reply_port_id,reply_retry_port_id,request_port_id,send_reply_msg} from "/run/hack-support.js";
/**
 * @param {number} min
 * @param {number} max
 */
function rand_num(min,max) {
	return Math.floor(Math.random()*(max-min+1))+min;
}
/** @param {NS} ns */
export async function main(ns) {
	ns.tail();
	ns.clearLog();
	ns.disableLog("disableLog");
	ns.disableLog("getServerMinSecurityLevel");
	ns.disableLog("getServerMoneyAvailable");
	ns.disableLog("getServerSecurityLevel");
	ns.disableLog("getServerMaxMoney");
	ns.disableLog("sleep");
	ns.disableLog("scan");

	const window_width=globalThis["document"].body.getClientRects()[0].width;

	await ns.sleep(33);

	const width=250+120;
	ns.resizeTail(width,120);
	ns.moveTail(window_width-width-4,1);

	const trace=false;
	const randomize_hack=true;
	/** @type {{[x:string]:Server}} */
	const server_map={};
	const scanned_server_map=new Set;
	/** @type {string[]} */
	const hostname_list=[];
	/** @arg {string} hostname */
	function get_server(hostname) {
		let server=server_map[hostname];
		if(server) return server;
		hostname_list.push(hostname);
		server=ns.getServer(hostname);
		server_map[hostname]=server;
		return server;
	}

	for(let item of ns.scan("home")) get_server(item);

	/** @type {import("/run/hack-support.js").ReplyMsg[]} */
	const pending_reply_list=[];
	/** @type {import("/run/hack-support.js").ReplyMsg[]} */
	const retry_arr=[];
	const this_={ns};
	const request_port=ns.getPortHandle(request_port_id);
	const reply_port=ns.getPortHandle(reply_port_id);
	const log_port=ns.getPortHandle(log_port_id);
	const retry_reply_handle=ns.getPortHandle(reply_retry_port_id);
	const notify_port1=ns.getPortHandle(max_port_id+1);
	const notify_request_has_space_port=ns.getPortHandle(max_port_id+2);
	const notify_port3=this_.ns.getPortHandle(max_port_id+3);
	notify_request_has_space_port.clear();
	notify_request_has_space_port.write(1);
	retry_reply_handle.clear();

	request_port.clear();
	reply_port.clear();
	/** @param {import("/run/hack-support.js").ReplyMsg} msg */
	async function send_reply_msg_2(msg) {
		if(reply_port.full()) {
			pending_reply_list.push(msg);
			return;
		}
		await send_reply_msg(reply_port,msg);
	}
	async function process_messages() {
		for(let i=0;;i++) {
			await ns.sleep(1);
			while(!retry_reply_handle.empty()) {
				retry_arr.push(await read_reply_msg(retry_reply_handle));
			}
			// retry_reply_handle is empty
			notify_port3.write(1);
			while(pending_reply_list.length>0&&!reply_port.full()) {
				let first=pending_reply_list.pop();
				if(first===void 0) break;
				await send_reply_msg_2(first);
			}
			while(retry_arr.length>0&&!reply_port.full()) {
				let first=retry_arr.pop();
				if(first===void 0) break;
				await send_reply_msg_2(first);
			}
			while(!request_port.empty()) {
				let msg=await read_call_msg(request_port);
				const {call,args}=msg;
				switch(call) {
					case "getServerMaxMoney": {
						let reply=ns.getServerMaxMoney(...args);
						await send_reply_msg_2({call,id: args[0],reply});
					} break;
					case "getServerMinSecurityLevel": {
						let reply=ns.getServerMinSecurityLevel(...args);
						await send_reply_msg_2({call,id: args[0],reply});
					} break;
					case "getServerMoneyAvailable": {
						let reply=ns.getServerMoneyAvailable(...args);
						await send_reply_msg_2({call,id: args[0],reply});
					} break;
					case "getServerSecurityLevel": {
						let reply=ns.getServerSecurityLevel(...args);
						await send_reply_msg_2({call,id: args[0],reply});
					} break;
					case "get_server": {
						let reply=get_server(args[0]);
						await send_reply_msg_2({call,id: args[0],reply});
					} break;
					case "get_hack_target": {
						if(randomize_hack) {
							let reply=null;
							for(let i=0;;i++) {
								if(i>64) {await ns.sleep(1); i=0;}
								let hostname=hostname_list[rand_num(0,(hostname_list.length-1))];
								if(hostname==="home") continue;
								if(hostname.startsWith("big-")) continue;
								if(!scanned_server_map.has(hostname)) {
									scanned_server_map.add(hostname);
									const scan_results=ns.scan(hostname).filter(v => !hostname_list.includes(v));
									if(scan_results.length>0) ns.printf("scan: %s %s",hostname,JSON.stringify(scan_results));
									for(let item of scan_results) get_server(item);
								}
								let srv=get_server(hostname);
								if(srv.purchasedByPlayer) continue;
								if(srv.moneyMax===0) continue;
								if(srv.maxRam===0) continue;
								if(srv.hasAdminRights) {
									reply=srv;
									break;
								}
							}
							await send_reply_msg_2({call,id: args[0],reply});
						} else {
							let srv;
							for(let name of ["ecorp","foodnstuff","n00dles"]) {
								srv=get_server(name);
								if(srv.hasAdminRights) break;
								if(srv.openPortCount<srv.numOpenPortsRequired) continue;
								ns.nuke(name);
							}
							if(!srv) srv=get_server("n00dles");
							await send_reply_msg_2({call,id: args[0],reply: srv});
						}
					} break;
				}
				if(trace) ns.print(msg);
				notify_request_has_space_port.write(1);
				notify_port1.write(1);
			}
			while(!log_port.empty()) {
				let res=log_port.read();
				ns.printf("%s",res);
			}
		}
	}
	await process_messages();
}
