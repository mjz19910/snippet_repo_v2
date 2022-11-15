// DebugAPI
export interface GlobalApiObject {
	compress_main: VV;
	IterExtensions: typeof IterExtensions;
	getPlaybackRateMap: typeof getPlaybackRateMap;
	CreateObjURLCache: typeof CreateObjURLCache;
	Repeat: typeof Repeat;
	CompressRepeated: typeof CompressRepeated;
	to_tuple_arr: typeof to_tuple_arr;
	range_matches: typeof range_matches;
	s_func: string[];
	CompressionStatsCalculator: typeof CompressionStatsCalculator;
	HexRandomDataGenerator: typeof HexRandomDataGenerator;
	EventListenerValue: typeof EventListenerValue;
	GenericEvent: typeof GenericEvent;
	GenericDataEvent: typeof GenericDataEvent;
	GenericEventTarget: typeof GenericEventTarget;
	Dumper: typeof Dumper;
	RustSimpleTokenizer: typeof RustSimpleTokenizer;
	RustSimpleParser: typeof RustTokenTreeParser;
	WeakValueRef: typeof WeakValueRef;
	CSSCascade: typeof CSSCascade;
	OriginState: typeof OriginState;
	ConnectToRemoteOrigin: typeof RemoteOriginConnection;
	APIProxyManager: typeof APIProxyManager;
	LoggingEventTarget: typeof LoggingEventTarget;
	DebugAPI: any;
}
