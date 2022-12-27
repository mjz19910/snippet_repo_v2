import {AttGetV} from "./AttGetV";
import {GeneralContext} from "./GeneralContext.js";
import {YtApiNext} from "./YtApiNext";
import {YtUrlBase} from "./YtUrlBase";

type U_0={
	url_type: "getDatasyncIdsEndpoint";
	json: {};
};
// import {Decay} from "./yt_api/_exact_data/Decay.js";

// type ExampleChallengeVars=Decay<ParseParamItem<"a=5&a2=10&c=1672168861&d=1&t=7200&c1a=1&hh=AGgPIr3tBg27zD1qUi5VCCBryM_8oaCCrxDEXUyB9Kg">>;
// const u: ExampleChallengeVars={
// 	"a": "5",
// 	"a2": "10",
// 	"c": "1672168861",
// 	"c1a": "1",
// 	"d": "1",
// 	"hh": "AGgPIr3tBg27zD1qUi5VCCBryM_8oaCCrxDEXUyB9Kg",
// 	"t": "7200",
// }; u;

type yt_response_att_get={
	url_type: "att.get";
	// ['responseContext', 'challenge', 'bgChallenge']
	json: AttGetV;
};

export type yt_response__next={
	url_type: "next";
	json: YtApiNext;
};

export type notification_get_notification_menu={
	url_type: "notification.get_notification_menu";
	json: {};
};

export type notification_get_unseen_count={
	url_type: "notification.get_unseen_count";
	json: {
		responseContext: GeneralContext;
	};
};

type yt_response_guide={
	url_type: "guide";
	json: {
		responseContext: GeneralContext;
	};
};

type yt_response_browse={
	url_type: "browse";
	json: {
		responseContext: GeneralContext;
	};
}

export type json_req=(U_0|yt_response_att_get|yt_response__next|notification_get_notification_menu|notification_get_unseen_count|yt_response_guide|yt_response_browse)&YtUrlBase;
