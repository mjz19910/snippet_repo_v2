type J_ResolverType=J_ResolverType_Ready|J_ResolverType_Init;
type J_ResolverStateKey="ready"|"init";
type J_ResolverTypeHelpers={
	assume_changed_state<T extends J_ResolverStateKey>(cls: J_ResolverType,state: T): cls is Extract<J_ResolverType,{state: T;}>;
	change_state<T extends J_ResolverStateKey>(cls: J_ResolverType,state: T): asserts cls is Extract<J_ResolverType,{state: T;}>;
};
type J_ResolverType_Ready={
	state: "ready";
	promise: Promise<void>;
	resolve(value: void|PromiseLike<void>): void;
	reject(reason?: any): void;
};
type J_ResolverType_Init={
	state: "init";
	promise: Promise<void>|null;
	resolve: ((value: void|PromiseLike<void>) => void)|null;
	reject: ((reason?: any) => void)|null;
	get as_ready(): J_ResolverType_Ready;
};
