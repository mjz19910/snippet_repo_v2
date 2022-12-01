import {WorkerDestroyTypeT} from "./WorkerDestroyTypeT.js";
import {WorkerUpdateMessageHandlerReplyTy} from "./WorkerUpdateMessageHandlerReplyTy.js";
import {WorkerReadyReplyTy} from "./WorkerReadyReplyTy.js";
import {ReplyMessage1Ty} from "./ReplyMessage1Ty.js";
import {ReplyMessage2Ty} from "./ReplyMessage2Ty.js";
import {ReplyToWorkerTy} from "./ReplyToWorkerTy.js";
import {ReplySetTypes} from "./ReplySetTypes.js";
import {ReplyClearMessages} from "./ReplyClearMessages.js";
import {ReplyMessage1,ReplyMessage2,ReplyFromWorker,ReplyToWorker,WorkerDestroyType,WorkerUpdateMessageHandlerReply,WorkerReadyReply} from "../constants.js";
import {
	ReplyFromWorkerT,
	ReplyTypesT
} from "./constant_types.js";

export class ReplyTypes implements ReplyTypesT {
	reply_to_local: ReplyMessage1Ty=ReplyMessage1;
	reply_to_main_timer: ReplyMessage2Ty=ReplyMessage2;
	from_worker: ReplyFromWorkerT=ReplyFromWorker;
	to_worker: ReplyToWorkerTy=ReplyToWorker;
	destroy_worker: WorkerDestroyTypeT=WorkerDestroyType;
	update_handler: WorkerUpdateMessageHandlerReplyTy=WorkerUpdateMessageHandlerReply;
	ready: WorkerReadyReplyTy=WorkerReadyReply;
	set=new ReplySetTypes;
	clear=new ReplyClearMessages;
}
