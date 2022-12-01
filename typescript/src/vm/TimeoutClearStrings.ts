import {TimeoutClearStringRepeating,TimeoutClearStringSingle} from "./constants.js"
import {TimeoutClearStringsT} from "./constant_types.js";

export class TimeoutClearStrings_OLD implements TimeoutClearStringsT {
	single: typeof TimeoutClearStringSingle=TimeoutClearStringSingle
	repeating: typeof TimeoutClearStringRepeating=TimeoutClearStringRepeating
}
