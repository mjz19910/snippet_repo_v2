import {ClickTrackingParams} from "../ClickTrackingParams.js";
import {PingingEndpoint} from "../PingingEndpoint.js";
import {UrlParseOpt} from "../../url_parse/UrlParseOpt";
import {ParseUrlSearchParams} from "../../search_params_parse/SearchParamsParse";

export interface LoggingUrl {
	baseUrl: "https://www.youtube.com/pagead/adview?ai=CR9DJiI6lY62vDMm7n88Pnre6kAngxfL9bfCOlrycEWQQASAAYP2Q9oDMA4IBF2NhLXB1Yi02MjE5ODExNzQ3MDQ5MzcxoAHLt6f4A6gDBMgDCqoEyAFP0EC2FSEYx70zuAUppUfEkYi_mOxY9ayL2TsEqmuwqQ2uR52X5F8mREDx148616YrlzJGcdfwasaotiQufJZQh_1P-F5EUxNcTrvVkGAoIHM-E6HcARQOzmMpiHURkEuWhENDfN2plBxHA5lui-nCj1tpA07TYASPOdBjxm-rT6PJyNg5mzjomgxxcY4JpG3rnZbC1TQ_an4StPQ5YOx-FCxGyY58dQA2TCk1vQwtBzqiGbOgOwWxy0tPKdPvQ51LcGX2i_nxJ8AEyNr865sEiAWjkqTnR5IFCQgTaAF47fX5BqAGboAHncjYB4gHAZAHAqgHgqqxAqgHhAioB6jSG6gHtgeoB-DPG6gH6dQbqAeMzRuoB7HcG6gHpJqxAqgHkZ-xAqgHsJuxAqgH36GxAqgHpqqxAqgHgcYbqAerxRuoB-PZG6gHt6mxAqgH6auxApIIC0FBQUFBQUFBQUFB0ggYCIDAgEAQAhgAMgSBgoAOOgeAgICAgIEEyAkAugs-CAIQBRgWIAgoATADQAFIAFABWCVgAGgAcAGIAQCYAQGiARIKAggBKAH4AQGQAgKoAgXAAgLYAQGAAgGIAgW4E____________wGwFALAFYGAgECKFwoIAxgBKAEwATgBoBcBqReJBEg1yjlletIXDhIK7E7vTqtctFyTaRhu&sigh=f6Ah-ilTPVs&cid=CAESD-D2saJYt_ikQ_sicNcKDQ";
}
export interface ImpressionEndpoint extends ClickTrackingParams {
	loggingUrls: [LoggingUrl];
	pingingEndpoint: PingingEndpoint;
}
type Decay<T>={
	[U in keyof T]: T[U];
};
type Pu=UrlParseOpt<LoggingUrl['baseUrl']>['search'];
export type LoggingUrlBaseUrlParseSearchParams=Decay<ParseUrlSearchParams<Pu>>;
