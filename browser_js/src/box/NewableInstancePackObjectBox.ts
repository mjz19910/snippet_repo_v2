import {NewableInstancePack} from "./NewableInstancePack.js";
import {BoxTemplate} from "./template/BoxTemplate.js";

export class NewableInstancePackObjectBox extends BoxTemplate<"NewableInstancePack<{}>",NewableInstancePack<{}>> {
	readonly type="NewableInstancePack<{}>";
}
