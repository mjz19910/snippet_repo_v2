import {WorkerAsyncMessageTy} from "./WorkerAsyncMessageTy"
import {TimeoutFireInfoTy} from "./TimeoutFireInfoTy"
import {TimeoutWorkerTypesTy} from "./TimeoutWorkerTypesTy"
import {TimerMessageTypesTy} from "./TimerMessageTypesTy"
import {ReplyTypes} from "./ReplyTypes"
import {TimeoutWorkerTypes} from "./TimeoutWorkerTypes"
import {TimeoutFireInfo} from "./TimeoutFireInfo"
import {ReplyTypesTy} from "./ReplyTypesTy"
import {WorkerAsyncMessage} from "typescript/src/constants.js"

export class TimerMessageTypes implements TimerMessageTypesTy {
	async: WorkerAsyncMessageTy=WorkerAsyncMessage
	reply: ReplyTypesTy=new ReplyTypes
	fire: TimeoutFireInfoTy=new TimeoutFireInfo
	worker: TimeoutWorkerTypesTy=new TimeoutWorkerTypes
}
