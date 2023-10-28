import { fetch_one_dictionary_page } from "./fetch_one_dictionary_page.js";
import { parse_rng_word, reset_words_set } from "./parse_rng_word.js";

/** @param {string[]} dictionary_words_arr  */
export async function iwgh_dict_main(dictionary_words_arr) {
	for (const word of dictionary_words_arr) {
		parse_rng_word(word, { add_new_words: false, destructure_word: false });
	}
	const perf_start = performance.now();
	let total_request_count = 0;
	const request_log_interval = 15;
	const inc_request_total = () => {
		total_request_count++;
	};
	const arr = [];
	for (let j = 0;; j++) {
		const request_parallelism = 1;
		for (let i = 0; i < request_parallelism; i++) {
			arr.push(fetch_one_dictionary_page().then(inc_request_total));
		}
		await Promise.all(arr);
		console.log("request parallelism", request_parallelism);
		arr.length = 0;
		if (j % request_log_interval === (request_log_interval - 1)) {
			reset_words_set();
			if (j > 20) break;
		}
	}
	const perf_end = performance.now();
	const perf_diff = perf_end - perf_start;
	const total_seconds = Math.floor(perf_diff / 100) / 10;
	console.log("requests took %s seconds", total_seconds.toFixed(1));
	console.log("request_total:", total_request_count);
	console.log(
		"requests per second:",
		+(total_request_count / total_seconds).toFixed(3),
	);
}
