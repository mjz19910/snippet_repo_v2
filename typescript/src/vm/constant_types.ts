import {
	ReplyClearAny,
	ReplyClearRepeating,
	ReplyClearSingle,
	ReplyFromWorker,
	ReplyMessage1,
	ReplyMessage2,
	ReplyToWorker,
	TimeoutClearAny,
	TimeoutClearRepeating,
	TimeoutClearSingle,
	TimeoutFireRepeating,
	TimeoutFireSingle,
	WorkerAsyncMessage,
	WorkerDestroyType,
} from "../constants.js";
export type ReplyClearAnyTy=typeof ReplyClearAny;
import {ReplyClearMessages} from "./ReplyClearMessages.js";
export type ReplyClearRepeatingTy=typeof ReplyClearRepeating;
export type ReplyClearSingleTy=typeof ReplyClearSingle;
import {ReplySetMessages} from "./ReplySetMessages.js";
export type TimeoutClearATy=typeof TimeoutClearAny;
export type TimeoutClearRTy=typeof TimeoutClearRepeating;
export type TimeoutClearSTy=typeof TimeoutClearSingle;
export type TimeoutClearInfoTy={
	single: TimeoutClearSTy;
	repeating: TimeoutClearRTy;
	any: TimeoutClearATy;
};
import {TimeoutMessageReplyTy} from "./TimeoutMessageReplyTy.js";
import {TimeoutSetInfoTy} from "./TimeoutSetInfoTy.js";
import {TimeoutSetTypesTy} from "./TimeoutSetTypesTy.js";
import {WorkerReadyReplyTy} from "./WorkerReadyReplyTy.js";
import {WorkerReplyTypes} from "./WorkerReplyTypes.js";
import {WorkerUpdateMessageHandlerReplyTy} from "./WorkerUpdateMessageHandlerReplyTy.js";
import {WorkerUpdateMessageHandlerTy} from "./WorkerUpdateMessageHandlerTy.js";

export type TimeoutFireSingleT=typeof TimeoutFireSingle;
export type TimeoutFireRepeatingT=typeof TimeoutFireRepeating;
export type TimeoutFireInfoT={
	single: TimeoutFireSingleT;
	repeating: TimeoutFireRepeatingT;
};
export type ReplyMessage1Ty=typeof ReplyMessage1;
export type ReplyMessage2Ty=typeof ReplyMessage2;
export type ReplyFromWorkerTy=typeof ReplyFromWorker;
export type ReplyToWorkerTy=typeof ReplyToWorker;
export type WorkerDestroyTypeT=typeof WorkerDestroyType;
export type ReplyTypesT={
	msg1: ReplyMessage1Ty;
	msg2: ReplyMessage2Ty;
	from_worker: ReplyFromWorkerTy;
	to_worker: ReplyToWorkerTy;
	destroy_worker: WorkerDestroyTypeT;
	update_handler: WorkerUpdateMessageHandlerReplyTy;
	ready: WorkerReadyReplyTy;
	set: ReplySetMessages;
	clear: ReplyClearMessages;
};
export type TimeoutWorkerTypesT={
	reply: WorkerReplyTypes;
	update_message_handler: WorkerUpdateMessageHandlerTy;
	ready: TimeoutMessageReplyTy;
	set: TimeoutSetInfoTy;
	clear: TimeoutClearInfoTy;
	set_types: TimeoutSetTypesTy;
};
export type WorkerAsyncMessageT=typeof WorkerAsyncMessage;
export type TimerMessageTypesT={
	async: WorkerAsyncMessageT;
	reply: ReplyTypesT;
	fire: TimeoutFireInfoT;
	worker: TimeoutWorkerTypesT;
};
export type ReplyClearTypes={
	single: ReplyClearSingleTy;
	repeating: ReplyClearRepeatingTy;
	any: ReplyClearAnyTy;
};

