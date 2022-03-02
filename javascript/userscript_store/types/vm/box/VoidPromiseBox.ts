import BoxTemplate from "./BoxTemplate";

export default class VoidPromiseBox extends BoxTemplate<"promise_box", Promise<void>> {
	type: "promise_box" = "promise_box";
	inner_type: 'Promise<void>' = 'Promise<void>';
	await_type: void = void 0;
}
