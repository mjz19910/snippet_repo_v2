import {CompressDual} from "./CompressDual.js";
import {CompressStateBase} from "./CompressStateBase.js";

export class BaseCompression {
	compress_result_state_dual(arg0: CompressDual): DualR_m {
		return this.compress_result_dual(arg0.arr,arg0.ret);
	}
	compress_result_dual(src: AltPair<string,number>[],dst: AnyOrRepeat2_1<string,number>[]): DualR {
		if(BaseCompression.did_compress(src,dst)) return [true,dst];
		return [false,src];
	}
	static did_compress<T,U>(src: T[],dst: U[]) {
		return dst.length<src.length;
	}
	did_decompress<T>(src: T[],dst: T[]) {
		return dst.length>src.length;
	}
	static compress_result_state<T,U>(state: CompressStateBase<T,U>) {
		return this.compress_result(state.arr,state.ret);
	}
	static compress_result<T,U>(src: T[],dst: U[]): [true,U[]]|[false,T[]] {
		if(this.did_compress(src,dst))
			return [true,dst];
		return [false,src];
	}
	decompress_result(src: string[],dst: string[]): [res: boolean,dst: string[]] {
		// maybe this is not a decompression, just a modification to make
		// later decompression work
		if(this.did_decompress(src,dst))
			return [true,dst];
		return [false,dst];
	}
}
