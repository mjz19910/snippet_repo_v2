import {
	deno_default_open,
	read_json_array_file,
	write_entire_file,
} from "./deno_support.js";

const word3_dict = [
	"art",
	"boat",
	"book",
	"building",
	"clothing",
	"club",
	"coin",
	"company",
	"dance",
	"drink",
	"emblem",
	"establishment",
	"food",
	"game",
	"garden",
	"god",
	"hairstyle",
	"holiday",
	"landscape",
	"martial",
	"melody",
	"music",
	"painting",
	"palace",
	"pastime",
	"performance",
	"person",
	"philosophy",
	"plant",
	"poem",
	"political",
	"profanity",
	"profession",
	"religion",
	"ritual",
	"sculpture",
	"smoking",
	"song",
	"sport",
	"symbol",
	"toy",
	"transport",
	"treehouse",
	"village",
	"weapon",
	"pipe",
];
/**
 * @param {string[]} arr
 */
function next_word(arr) {
	let v = arr.shift();
	if (v === void 0) return null;
	if (v === "") {
		v = arr.shift();
		if (v === void 0) return null;
	}
	if (v === " ") {
		v = arr.shift();
		if (v === void 0) return null;
	}
	return v;
}
/**
 * @typedef {{type: "section";value: string;}} SentenceSectionWord
 */

/**
 * @typedef {{type: "a" | "this_is" | "usually" | "generally" | "of";}} GeneralSentenceWord
 */

/**
 * @typedef {GeneralSentenceWord|SentenceSectionWord|{type:"dictionary_word"|"sentence_structure"; value: string;} } ParsedArrItem
 */

/**
 * @param {(ParsedArrItem)[]} parsed
 * @param {string[]} parsed_src
 */
function parse_next_word(parsed, parsed_src) {
	if (parsed_src.length == 0) return;
	const cur_word = next_word(parsed_src);
	if (cur_word === null) return;
	if (word3_dict.includes(cur_word)) {
		parsed.push({ type: "dictionary_word", value: cur_word });
		return parse_next_word(parsed, parsed_src);
	}
	switch (cur_word) {
		case "thing":
		case "else":
		case "polite":
		case "p.m.":
		case "mean":
		case "might":
		case "lied":
		case "cases":
		case "16":
		case "sound":
		case "most":
		case "different":
		case "being":
		case "after":
		case "texts":
		case "suspect":
		case "priest":
		case "outdated":
		case "otherwise":
		case "older":
		case "least":
		case "central":
		case "wants":
		case "slightly":
		case "among":
		case "mostly":
		case "politician":
		case "lost":
		case "lips":
		case "which":
		case "was":
		case "from":
		case "letters":
		case "holidays":
		case "heard":
		case "generation":
		case "speech":
		case "figure":
		case "ancient":
		case "sure":
		case "you":
		case "younger":
		case "morning":
		case "less":
		case "explained":
		case "exact":
		case "especially":
		case "more":
		case "entirely":
		case "during":
		case "a.m.":
		case "day":
		case "if":
		case "11":
		case "before":
		case "change":
		case "time":
		case "not":
		case "often":
		case "bakers":
		case "barber":
		case "children":
		case "country":
		case "interests":
		case "means":
		case "at":
		case "peasant":
		case "someone":
		case "course":
		case "usage":
		case "common":
		case "modern":
		case "vary":
		case "eastern":
		case "elderly":
		case "circumstances":
		case "citizens":
		case "museum":
		case "rarely":
		case "party":
		case "may":
		case "on":
		case "spotted":
		case "foreigner":
		case "like":
		case "that":
		case "are":
		case "to":
		case "uttered":
		case "sometimes":
		case "something":
		case "told":
		case "by":
		case "official":
		case "it":
		case "debate":
		case "used":
		case "part":
		case "northern":
		case "southern":
		case "or":
		case "scientists":
		case "depending":
		case "as":
		case "its":
		case "it's":
		case "the":
		case "meaning":
		case "linguists":
		case "...":
		case "generally":
		case "when":
		case "this":
		case ",":
		case "though":
		case "but":
		case "instrument":
		case "of":
		case "in":
		case "rare":
		case "local":
		case "traditional":
		case "national":
		case "popular":
		case "category":
		case "sort":
		case "kind":
		case "type":
		case "usually":
		case "This":
		case "is":
		case "a": {
			parsed.push({ type: "sentence_structure", value: cur_word });
			return parse_next_word(parsed, parsed_src);
		}
		default: {
			console.log(["parsed_default", cur_word]);
		}
	}
}
/**
 * @param {string} str
 */
function parse_sentence(str) {
	// remove period
	if (str.endsWith(".")) {
		str = str.slice(0, -1);
	}
	/** @type {ParsedArrItem[]} */
	const parsed = [];
	let parsed_src = str.split(/([ ,]|\.\.\.)/);
	{
		const tmp_arr = [];
		for (; parsed_src.length > 0;) {
			const word = next_word(parsed_src);
			if (word === null) throw new Error("Bad iter");
			tmp_arr.push(word);
		}
		parsed_src = tmp_arr;
	}
	parse_next_word(parsed, parsed_src);
	return str;
}
/**
 * @param {string} word
 * @returns {["consonant",1|2]|["vowel",1]}
 */
function word_starts_with_consonant_seq(word) {
	switch (word.slice(0, 2)) {
		case "ch":
		case "th":
			return ["consonant", 2];
	}
	switch (word[0]) {
		case "b":
		case "c":
		case "d":
		case "f":
		case "k":
		case "m":
		case "n":
		case "p":
		case "t":
		case "v":
		case "w":
			return ["consonant", 1];
		case "a":
		case "e":
		case "i":
		case "o":
		case "u":
		case "y":
			return ["vowel", 1];
	}
	throw new Error("Invalid word start '" + word.slice(0, 3) + "'");
}
/**
 * @param {string} word
 * @returns {{type:"consonant"|"vowel",part:string,rest:string}}
 */
function word_starts_with_consonant_seq2(word) {
	const [type, seq_len] = word_starts_with_consonant_seq(word);
	const part = word.slice(0, seq_len), rest = word.slice(seq_len);
	return { type, part, rest };
}
/** @type {Map<string,number>} */
const rng_word_num_map = new Map();
const new_words_set = new Set();
/**
 * @param {string} word
 */
function parse_rng_word(word, add_new_words = true, destructure_word = false) {
	if (dict.has(word)) return;
	if (destructure_word) {
		const word_arr = [],
			/** @type {("c" | "v")[]} */
			type_arr = [];
		let w2 = word;
		do {
			const r2 = word_starts_with_consonant_seq2(w2);
			word_arr.push(r2.part);
			type_arr.push(r2.type == "vowel" ? "v" : "c");
			w2 = r2.rest;
		} while (w2 !== "");
		if (word_arr.length <= 3) {
			console.log("W:", word_arr.join(""), "T:", type_arr.join(""));
		}
	}
	dict.add(word);
	if (add_new_words) {
		new_words_set.add(word);
	}
	const word_chars = word.split("");
	for (let char_idx = 0; char_idx < word_chars.length - 1; char_idx++) {
		const pair1 = word_chars[char_idx];
		const pair2 = word_chars[char_idx + 1];
		const pair_key = pair1 + pair2;
		const seq_val = rng_word_num_map.get(pair_key);
		if (seq_val !== void 0) {
			rng_word_num_map.set(pair_key, seq_val + 1);
		} else {
			rng_word_num_map.set(pair_key, 1);
		}
		break;
	}
}
/**
 * @param {string} str
 * @param {string} needle
 */
function split_at(str, needle) {
	let idx = str.indexOf(needle);
	if (idx === -1) return [str];
	const n_len = needle.length;
	const arr = [];
	let start = 0;
	do {
		const sp = str.slice(start, idx + n_len);
		arr.push(sp);
		start = idx + n_len;
		idx = str.indexOf(needle, start);
	} while (idx !== -1);
	return arr;
}
/** @type {Set<string>} */
const dict = new Set();
/** @type {Set<string>} */
const description_set = new Set();
const description_set_state = {
	modified: false,
};
async function fetch_one_dictionary_page() {
	const res = await fetch("https://louigiverona.com/iwgh/?page=dictionary");
	let rt = await res.text();
	const start_pos = rt.indexOf("table ", rt.indexOf("table ") + 43) + 57;
	const end_pos = rt.indexOf("</table>");
	rt = rt.slice(start_pos + 26, end_pos - 10);
	let page_arr = split_at(rt, "</p>");
	page_arr = page_arr.map((v) => v.slice(3, -4));
	page_arr.forEach((v) => {
		let [word, description] = v.split(" - ");
		word = word.slice(3, -4);
		word = word.toLowerCase();
		parse_rng_word(word, true, true);
		description = parse_sentence(description);
		if (!description_set.has(description)) {
			description_set.add(description);
			console.log(["new_description", description]);
			description_set_state.modified = true;
		}
	});
}
async function run() {
	const description_file = await deno_default_open("./description_cache.json");
	/** @type {string[]} */
	const description_load_arr = await read_json_array_file(description_file);
	for (const description_item of description_load_arr) {
		description_set.add(description_item);
	}
	const dictionary_file = await deno_default_open("./random_dictionary.json");
	/** @type {string[]} */
	const load_arr2 = await read_json_array_file(dictionary_file);
	for (const word of load_arr2) {
		parse_rng_word(word, false, false);
	}
	const perf_start = performance.now();
	const at_loop_end = () => {
		console.log("dict word num", new_words_set.size);
		new_words_set.clear();
	};
	let request_total = 0;
	const request_log_interval = 11;
	const inc_request_total = () => {
		request_total++;
	};
	const arr = [];
	for (let j = 0;; j++) {
		const request_count = 8;
		for (let i = 0; i < request_count; i++) {
			arr.push(fetch_one_dictionary_page().then(inc_request_total));
		}
		await Promise.all(arr);
		arr.length = 0;
		if (j % request_log_interval === (request_log_interval - 1)) {
			at_loop_end();
			if (j > 16) break;
		}
	}
	const perf_end = performance.now();
	const perf_diff = perf_end - perf_start;
	const total_seconds = Math.floor(perf_diff / 100) / 10;
	console.log("requests took %s seconds", total_seconds.toFixed(1));
	console.log("request_total:", request_total);
	console.log(
		"requests per second:",
		+(request_total / total_seconds).toFixed(3),
	);
	if (description_set_state.modified) {
		const description_arr = [...description_set.values()].sort();
		console.log("description_arr.length", description_arr.length);
		await write_entire_file(description_file, description_arr);
	}
	description_file.close();
	{
		const dictionary_arr = [...dict.values()].sort();
		console.log("dictionary.length", dictionary_arr.length);
		await write_entire_file(dictionary_file, dictionary_arr);
	}
	dictionary_file.close();
}
await run();

export {};