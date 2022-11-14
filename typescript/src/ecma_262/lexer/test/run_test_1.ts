import {Test} from "../../Test.js";
import {Dispatcher} from "../Dispatcher.js";
import {test_1_critical} from "./test_1_critical.js";

export function run_test_1() {
	let input=`(function(){let the_var=12;})`;
	let dispatcher=new Dispatcher(input);
	let test_1=new Test(input,`${input}[eof]`);
	let test_result=eval(test_1.input);
	test_1.state={
		cur_index:0,
	};
	console.log('test_result', test_result);
	test_1_critical(dispatcher,test_1);
}
