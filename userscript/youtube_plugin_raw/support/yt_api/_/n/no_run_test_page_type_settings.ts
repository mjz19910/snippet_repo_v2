import {assert_equal_type} from "../a/assert_equal_type";
import {assert_is_equal_t} from "../a/assert_is_equal_t.js";
import {make_never} from "../m/make_never";


export function no_run_test_page_type_settings(break_it: false) {
	if(break_it===false)
		return;
		type nv=assert_is_equal_t<YtEndpoint,PageTypeSettings["response"]["endpoint"]>;
		type nv_2=assert_is_equal_t<YtPageResponseType,PageTypeSettings["response"]>;
		
	const nn: never=make_never();
	const xy: nv|nv_2=nn;
	assert_equal_type<never>(nn,xy);
	xy;
}
