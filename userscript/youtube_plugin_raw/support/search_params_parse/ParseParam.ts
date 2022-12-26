
export type ParseParam<T extends string>=T extends `${infer U}=${infer C}`? {
	[V in U]: C;
}:T;
