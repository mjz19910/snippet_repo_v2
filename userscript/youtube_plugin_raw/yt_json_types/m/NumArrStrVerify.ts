type T_NumArrStrVerify<T extends string,C extends string="">=
	C extends ''?
	T extends `${number},${number},${infer X}`?
	T_NumArrStrVerify<T,X>:
	C extends ''
	? `${T}`:`${T},${C}`:
	C extends `${number},${number},${infer X}`?
	T_NumArrStrVerify<T,X>:T;