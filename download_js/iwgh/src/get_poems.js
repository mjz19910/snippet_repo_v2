import { deno_fs_init } from "./deno_fs_init.js";
import { fetch_one_page } from "./fetch_one_page.js";
import { random_dictionary_path } from "./file_paths.js";
import {
	load_dictionary_sync,
	reset_words_set,
	save_dictionary,
} from "./parse_rng_word.js";

const global_abort = new AbortController();

function delay(ms) {
	return new Promise(function (accept, reject) {
		const signal = global_abort.signal;
		const abort = () => {
			clearTimeout(interval);
			reject(signal.reason);
		};
		signal.addEventListener("abort", abort, { once: true });
		const done = () => {
			signal.removeEventListener("abort", abort);
		};
		const complete = () => {
			done();
			accept();
		};
		const interval = setTimeout(complete, ms);
	});
}

class GetPoemsState {
	dictionary_file;
	dictionary_size;
	constructor() {
		this.dictionary_file = Deno.openSync(random_dictionary_path, {
			read: true,
			write: true,
			create: true,
		});
		this.dictionary_size = load_dictionary_sync(this.dictionary_file);
	}
	save() {
		return save_dictionary(
			this.dictionary_file,
			this.dictionary_size,
			false,
		);
	}
	async dispose() {
		await save_dictionary(this.dictionary_file, this.dictionary_size);
		this.dictionary_file.close();
	}
	async run() {
		for (let i = 0; i < (4 * 8); i++) {
			await this.step(i);
		}
	}
	async step(i) {
		const lim = 4;
		if (i % lim == 0) {
			console.log("enter", Math.floor(i / lim));
		}
		const arr = [];
		const par_base = 10;
		const par = 20;
		const length_limit = 3;
		for (let j = 0; j < par; j++) {
			arr.push(fetch_one_page("poems", length_limit));
		}
		await Promise.all(arr);
		arr.length = 0;
		if (i % lim == lim - 1) {
			reset_words_set(par);
			await this.save();
			const resume_delay = 1 * 1000 + 200 * par;
			console.log(
				"leave",
				Math.floor(i / lim),
				"resume in",
				resume_delay / 1000,
				"seconds",
			);
			// pause so we don't overload the ddos protection
			await delay(resume_delay);
		} else {
			await delay(200 * par_base);
		}
	}
}
/[ct]h|[bcdfkmnptvw]/;
/[ct]h|[aeiouy]|[bcdfkmnptvw]/;
async function main() {
	await deno_fs_init();
	const state = new GetPoemsState();
	await state.run();
	await state.dispose();
}
await main();
