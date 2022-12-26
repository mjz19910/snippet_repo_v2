import {UrlParseResImpl} from "./UrlParseResImpl";

export type UrlParseRes<
	T extends string,
	Host extends string,
	Protocol extends string,
	Search extends string,
	Pathname extends string>=UrlParseResImpl<T,Host,Protocol,Search,Pathname>;
