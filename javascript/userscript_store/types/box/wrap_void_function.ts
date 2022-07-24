import {BoxExtractType} from "./extract/create_box/BoxExtractType";
import {do_wrap_void_function} from "./do_wrap_void_function";
export function wrap_void_function(value_to_wrap: (this: BoxExtractType, ...args: BoxExtractType[]) => void) {
	return do_wrap_void_function.bind(null, value_to_wrap);
}
