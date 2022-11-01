import {ListWithArray} from "./ListWithArray.js";
import {ListWithOneItem} from "./ListWithOneItem.js";
export class List<T> {
	contents: ListWithOneItem<T[]>|ListWithArray<T>;
	constructor(...e: T[]) {
		if(e[0] instanceof Array&&e.length==1) {
			this.contents={
				is_single: true,
				data: e[0],
			};
		} else {
			this.contents={
				is_single: false,
				data: e,
			};
		}
	}
}
