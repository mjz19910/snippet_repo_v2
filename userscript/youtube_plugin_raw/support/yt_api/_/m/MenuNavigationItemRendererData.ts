import {NavigationEndpoint} from "../NavigationEndpoint.js";
import {TrackingParams} from "../../_abc/t/TrackingParams.js";
import {makeText} from "./makeText";
import {MakeTextRuns} from "./MakeTextRuns";
import {InfoIcon} from "../../_abc/i/InfoIcon";


export interface MenuNavigationItemRendererData extends TrackingParams {
	text: MakeTextRuns<[makeText<"My Ad Centre">]>;
	icon: InfoIcon;
	navigationEndpoint: NavigationEndpoint;
}
