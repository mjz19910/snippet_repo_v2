import {E_VE3611} from "../../../e/GR_E_VE.js";
import {RS_ChannelPage} from "../../group_R.js";

export type NavFinishDetail_Channel={
	pageType: "channel";
	endpoint: E_VE3611;
	response: RS_ChannelPage;
	fromHistory: boolean;
	navigationDoneMs: number;
};
