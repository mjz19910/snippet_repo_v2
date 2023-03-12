type ToFunctionImpl<T extends {
	type: "function";
	length: number;
	name: string;
},Acc extends any[]=[]>=
	T extends {length: Acc["length"];}? (...args: Acc) => any:
	T extends {length: [...Acc,any]["length"];}? (...args: [any,...Acc]) => any:
	ToFunctionImpl<T,[...Acc,any]>
	;
;
type ToFunction<T extends {
	type: "function";
	length: number;
	name: string;
}>=
	T extends {length: 0;}? () => any:
	ToFunctionImpl<T>
	;
;

type JobManager={
	cancelDebouncedJobMap: {};
	cancelThrottledJobMap: {};
};

type NetworkManager={
	[x: `JSC$${number}_disposed_`]: false;
	eventTargetListeners_: {};
	actualEventTarget_: {};
	parentEventTarget_: null;
	schedulerJob: 0;
	lastJobTime: 0;
	nsmInstance: {};
};;

type D_LogsStore={
	cleanLogsStore(x: any): any;
	deleteRequest(x: any,y: any): any;
	getMostRecentByStatus(x: any,y: any): any;
	markAsQueued(x: any,y: any): any;
	resetRequest(a1: any,a2: any,a3: any,a4: any): any;
	set(x: any,y: any): any;
};

type YT_NetworklessRequestController_TestFns={
	setDbToken(y: any): void;
	triggerThrottle(): void;
	cancelThrottle(): void;
	immediateSend(y: any): any;
	requestWithinAgeLimit(y: any,E: any): any;
	retryQueuedRequests(): void;
};
class JSC_Context {
	[x: `JSC$${number}_next_`]: (x: any) => any;
	yieldAllIterator_: {
		next: {};
	}|null=null;
}
const qa=JSC_Context;
class qaa<T> {
	[x: `JSC$${number}_context_`]: JSC_Context;
	constructor(public program_: T) {
		this.JSC$1000_context_=new qa;
	}
}
abstract class taa_base {
	abstract next(v: any): any;
}
function maa(x: any) {
	x;
}
function raa(x: any,y: any,a: any,b: any): any {
	x; y; a; b;
};
function naa(x: any,b: any) {
	x; b;
}
function ya(a: any): {value: any,done: false;}|{value: undefined,done: true;} {
	for(;
		a.JSC$5676_context_.nextAddress;
	)try {
		var b=a.program_(a.JSC$5676_context_);
		if(b) return a.JSC$5676_context_.isRunning_=!1,{
			value: b.value,done: !1
		};
	} catch(c) {
		a.JSC$5676_context_.yieldResult=void 0,naa(a.JSC$5676_context_,c);
	} a.JSC$5676_context_.isRunning_=!1;
	if(a.JSC$5676_context_.abruptCompletion_) {
		b=a.JSC$5676_context_.abruptCompletion_;
		a.JSC$5676_context_.abruptCompletion_=null;
		if(b.isException) throw b.exception;
		return {
			value: b.return,done: !0
		};
	} return {
		value: void 0,done: !0
	};
}
class taa<T> extends taa_base {
	next: (x: qaa<T>) => {value: any,done: false;}|{value: undefined,done: true;};
	constructor(public a: qaa<T>) {
		super();
		this.next=function(b) {
			maa(a.JSC$5676_context_);
			if(a.JSC$5676_context_.yieldAllIterator_) {
				return raa(a,a.JSC$5676_context_.yieldAllIterator_.next,b,a.JSC$5676_context_.JSC$5671_next_);
			}
			a.JSC$5676_context_.JSC$1000_next_(b);
			return ya(a);
		};
	}
}
function uaa<T>(x: T) {return x;}
type R_State={
	nextAddress: number;
};
function r(a: (x2: R_State) => any) {
	return uaa(new taa(new qaa(a)));
}
function q<T>(a: R_State,b: T,c: number): {value: T;} {
	a.nextAddress=c;
	return {value: b};
}
function ub(this: YT_NetworklessRequestController) {
	let b=this;
	let tv: YT_NetworklessRequestController_TestFns={
		setDbToken(y) {
			b.databaseToken=y;
		},
		triggerThrottle() {
			b.throttledSend();
		},
		cancelThrottle() {
			b.cancelThrottledSend();
		},
		immediateSend(y) {
			return r(function(E) {
				return q(E,b.immediateSend(y),0);
			});
		},
		requestWithinAgeLimit(y,E) {
			return b.requestWithinAgeLimit(y,E);
		},
		retryQueuedRequests() {
			b.retryQueuedRequests();
		}
	};
	return tv;
}
abstract class YT_NetworklessRequestController_Base {
	abstract writeThenSend(a: any,b: any): void;
	abstract sendThenWrite(a: any,b: any,c: any): void;
	abstract sendAndWrite(a: any,b: any): void;
	abstract throttledSend(): void;
	abstract cancelThrottledSend(): void;
	abstract immediateSend(a: any): void;
	abstract requestWithinAgeLimit(a: any,b: any): void;
	abstract retryQueuedRequests(): void;
}

type EmptyObj=Record<string,never>;
var Ey: EmptyObj=new (function() {} as any as new () => EmptyObj);
abstract class YT_NetworklessRequestController extends YT_NetworklessRequestController_Base {
	abstract override writeThenSend(a: any,b: any): void;
	abstract override sendThenWrite(a: any,b: any,c: any): void;
	abstract override sendAndWrite(a: any,b: any): void;
	awaitInitialization() {
		return this.initializationPromise.promise;
	}
	abstract initialized: false;
	abstract bypassDbTokenDependency: false;
	abstract intervalJob: 0;
	abstract potentialEsfErrorCounter: 0;
	abstract handleError(e1: any,e2: any,e3: any): void;
	abstract handleWarning(a1: any,a2: any,a3: any,a4: any,a5: any): void;
	abstract now(): any;
	abstract disableYtIdbTransactions: false;
	abstract TEST_ONLY: YT_NetworklessRequestController_TestFns;
	abstract throttleTimeout: 100;
	abstract retryMaxAttempts: 1;
	abstract requestAgeLimitMs: 2592000000;
	abstract queuedRequestAgeLimitMs: 120000;
	abstract retryDelayMs: 5000;
	abstract databaseToken: EmptyObj;
	abstract enableCleaning: true;
	abstract cleaningRate: 0.1;
	abstract potentialEsfErrorLimit: 10;
	abstract getBooleanFlag(x: any): boolean;
	abstract jobManager: JobManager;
	abstract logsStore: D_LogsStore;
	abstract networkManager: NetworkManager;
	abstract sendFn(x: any,y: any,z: any): any;
	abstract onlineEvent: Lowercase<"publicYtNetworkStatus-online">;
	abstract offlineEvent: Lowercase<"publicYtNetworkStatus-offline">;
	abstract initializationPromise: PromiseHolder<{}>;
};
type PromiseHolder<T>={
	promise: Promise<T>;
};

let a: YT_NetworklessRequestController;
