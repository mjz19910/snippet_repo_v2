import {g_repl_plugin_value} from "./g_repl_plugin_value.js";
import {ReplLocalState} from "./ReplLocalState.js";
import {ReplPluginManager} from "./ReplPluginManager";

/**
 * @returns {ReplPluginManager | null}
 * @param {ReplLocalState} state
 */
export function repl_plugin_get_global_repl_activator(state) {
	if(!g_repl_plugin_value.value) {
		g_repl_plugin_value.value=new ReplPluginManager(state);
		return g_repl_plugin_value.value;
	} else {
		g_repl_plugin_value.value.update(state);
		return g_repl_plugin_value.value;
	}
}

export function use_types() {
	return [
		ReplLocalState,
	];
}
