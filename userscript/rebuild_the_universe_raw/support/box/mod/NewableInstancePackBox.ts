import {NewableInstancePack} from "../interface/NewableInstancePack.js";
import {BoxTemplate} from "../template/BoxTemplate.js";

export class NewableInstancePackBox extends BoxTemplate<"instance_box",NewableInstancePack<{}>> {
	readonly type="instance_box";
	readonly instance_type="NewableInstancePack<{}>";
}