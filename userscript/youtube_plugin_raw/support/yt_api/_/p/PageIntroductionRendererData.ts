import {YtTextType} from "../../json/YtTextType.js";
import {Icon} from "../../../../yt_json_types/Icon.js";

export type PageIntroductionRendererData={
	headerText: YtTextType;
	headerIcon: Icon<"ACCOUNT_SHARING">;
}|{
	headerText: YtTextType;
	bodyText: YtTextType;
	pageTitle: YtTextType;
}|{
	headerText: YtTextType;
	pageTitle: YtTextType;
	headerIcon: Icon<"ACCOUNT_ADVANCED">;
};
