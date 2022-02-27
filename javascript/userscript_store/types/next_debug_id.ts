import {debug_id_gen, debug_id_syms} from "../typed_mod_rebuild_auto";

export function next_debug_id() {
	const id = debug_id_gen.next();
	const sym = Symbol(id);
	debug_id_syms.push(new WeakRef({sym}));
	return sym;
}
