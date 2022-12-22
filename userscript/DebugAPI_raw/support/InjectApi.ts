import {
	CompressionStatsCalculator,
} from "../DebugAPI.user";
import {DebugApiType} from "./DebugApiType";
import {IAddEventListenerExtension} from "./IAddEventListenerExtension";
import {ICrossOriginConnection} from "./ICrossOriginConnection";
import {VoidCallback} from "./VoidCallback.js";
import {VoidCallbackWith} from "./VoidCallbackWith.js";

export const Holder=Symbol.for("InjectApi");

// saved_instances
declare global {
	interface InjectAPI {
		saved_instances?: SavedArrayOf<[{name: string;},{}]>;
	}
}

// saved_object_arrays
declare global {
	interface InjectAPI {
		saved_object_arrays?: {}[][];
	}
}

// saved_objects
declare global {
	interface InjectAPI {
		saved_objects?: [string,{name: string;}][];
	}
}

// saved_objects
declare global {
	interface InjectAPI {
		add_function?: (callable: {name: string;}) => void;
	}
}

// LoggingEventTarget
declare global {
	interface InjectAPI {
		LoggingEventTarget?: {};
	}
}

// APIProxyManager
declare global {
	interface InjectAPI {
		APIProxyManager?: {};
	}
}

// ReversePrototypeChain
declare global {
	interface InjectAPI {
		ReversePrototypeChain?: {};
		reversePrototypeChain?: {};
	}
}

// ProxyTargetMap
declare global {
	interface InjectAPI {
		ProxyTargetMap?: {};
		proxyTargetMap?: {};
	}
}

// elevate_event_handlers
declare global {
	interface InjectAPI {
		elevate_event_handlers?: {}[];
	}
}

// AddEventListenerExtension
declare global {
	interface InjectAPI {
		AddEventListenerExtension?: {};
		addEventListenerExtension?: IAddEventListenerExtension;
	}
}

// IterExtensions
declare global {
	interface InjectAPI {
		IterExtensions?: {};
	}
}

// getPlaybackRateMap
declare global {
	interface InjectAPI {
		getPlaybackRateMap?: {};
	}
}

// CreateObjURLCache
declare global {
	interface InjectAPI {
		CreateObjURLCache?: {};
	}
}

// Repeat
declare global {
	interface InjectAPI {
		Repeat?: {};
	}
}

// CompressRepeated
declare global {
	interface InjectAPI {
		CompressRepeated?: {};
	}
}

// to_tuple_arr
declare global {
	interface InjectAPI {
		to_tuple_arr?: {};
	}
}

// DisabledMulCompression
declare global {
	interface InjectAPI {
		DisabledMulCompression?: {};
	}
}

// run_wasm_plugin
declare global {
	interface InjectAPI {
		run_modules_plugin?: VoidCallbackWith<() => void>;
		run_wasm_plugin?: VoidCallbackWith<() => void>;
	}
}

// ModuleLoadDbg
declare global {
	interface InjectAPI {
		ModuleLoadDbg?: {};
	}
}

// function_as_string_vec
declare global {
	interface InjectAPI {
		function_as_string_vec?: string[];
	}
}

// CompressionStatsCalculator
declare global {
	interface InjectAPI {
		CompressionStatsCalculator?: {};
	}
}

// range_matches
declare global {
	interface InjectAPI {
		range_matches?: {};
	}
}

// DoCalc
declare global {
	interface InjectAPI {
		DoCalc?: {};
	}
}

// compress_main
declare global {
	interface InjectAPI {
		compress_main?: VoidCallback<[CompressionStatsCalculator],void>;
	}
}

// HexRandomDataGenerator
declare global {
	interface InjectAPI {
		HexRandomDataGenerator?: {};
	}
}

// EventListenerValue
declare global {
	interface InjectAPI {
		EventListenerValue?: {};
	}
}

// GenericEvent
declare global {
	interface InjectAPI {
		GenericEvent?: {};
	}
}

// GenericDataEvent
declare global {
	interface InjectAPI {
		GenericDataEvent?: {};
	}
}

// Socket
declare global {
	interface InjectAPI {
		Socket?: {};
	}
}

// OriginState
declare global {
	interface InjectAPI {
		OriginState?: {};
	}
}

// CrossOriginConnection
declare global {
	interface InjectAPI {
		CrossOriginConnection?: {};
		remote_origin?: ICrossOriginConnection;
	}
}

// parse_javascript_str
declare global {
	interface InjectAPI {
		parse_javascript_str?: ((str: string) => void);
	}
}

// parse_html_to_binary_arr
declare global {
	interface InjectAPI {
		parse_html_to_binary_arr?: (html: string) => unknown[];
	}
}

// DebugAPI
declare global {
	interface InjectAPI {
		DebugAPI?: DebugApiType;
	}
}

// // any_api_logger
// declare global {
// 	interface InjectAPI {
// 		any_api_logger?: {};
// 	}
// }

// // RustSimpleTokenizer
// declare global {
// 	interface InjectAPI {
// 		RustSimpleTokenizer?: {};
// 		RustSimpleParser?: {};
// 	}
// }
