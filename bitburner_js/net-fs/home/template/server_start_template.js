import {hack_template_v2} from "/vars/server_start.js";
/** @arg {{ns:NS;template_changed:boolean;script_file:string;player_hacking_skill:number}} s @param {Server} srv @arg {number} t */
export async function start_server_template(s,srv,t) {
	const {ns}=s;
	const processes=ns.ps(srv.hostname);
	if(processes.length>0) {
		if(!s.template_changed&&processes.find(ps => ps.filename===hack_template_v2)) return false;
		processes.forEach(ps => {
			if(ps.filename===hack_template_v2) ns.kill(ps.pid);
		});
	}
	if(ns.fileExists("debug.txt",srv.hostname)) {
		ns.exec(s.script_file,srv.hostname,t,s.player_hacking_skill,"debug.txt");
		return true;
	}
	let mode=get_mode(ns);
	ns.exec(s.script_file,srv.hostname,t,s.player_hacking_skill,mode);
	return true;
}

/** @param {NS} ns */
export function get_mode(ns) {
	const f_=gen_crack_flags(ns);
	if(f_.has_sql) return "with-sql";
	if(f_.has_smtp) return "with-smtp";
	if(f_.has_http) return "with-http";
	if(f_.has_ftp) return "with-ftp";
	if(f_.has_ssh) return "with-ssh";
	return "none";
}

/** @param {NS} ns */
export function gen_crack_flags(ns) {
	const has_ssh=ns.fileExists("BruteSSH.exe","home");
	const has_ftp=ns.fileExists("FTPCrack.exe","home");
	const has_smtp=ns.fileExists("relaySMTP.exe","home");
	const has_http=ns.fileExists("HTTPWorm.exe","home");
	const has_sql=ns.fileExists("SQLInject.exe","home");
	return {has_ssh,has_ftp,has_smtp,has_http,has_sql};
}
