import {ecma_base} from "ecma_base.js";
import {DebugAPI} from "./DebugAPI";
import {Dumper} from "./Dumper";
import {ecma_12_2} from "./ecma_12_2";
import {ecma_12_3} from "./ecma_12_3";
import {ecma_12_4} from "./ecma_12_4";
import {ecma_12_5} from "./ecma_12_5";
import {ecma_12_6} from "./ecma_12_6";
import {ecma_12_7} from "./ecma_12_7";
import {ecma_12_8} from "./ecma_12_8";
import {ecma_12_8_3} from "./ecma_12_8_3";
import {ecma_12_8_4} from "./ecma_12_8_4";
import {ecma_12_8_6} from "./ecma_12_8_6";
import {ecma_terminal} from "./ecma_terminal";
import {GenericDataEvent} from "./GenericDataEvent";
import {GenericEventTarget} from "./GenericEventTarget";
import {HexRandomDataGenerator} from "./HexRandomDataGenerator";
/**@type {ecma_base[]} */
export let ecma_sections = [];
export let random_data_generator = new HexRandomDataGenerator;
window.GenericDataEvent = GenericDataEvent;
export const static_event_target = new GenericEventTarget;
export const local_dumper = new Dumper;
ecma_sections.push(ecma_12_2);
ecma_sections.push(ecma_12_3);
ecma_sections.push(ecma_12_4);
ecma_sections.push(ecma_12_5);
ecma_sections.push(ecma_12_6);
ecma_sections.push(ecma_12_7);
ecma_sections.push(ecma_12_8);
ecma_sections.push(ecma_12_8_3);
ecma_sections.push(ecma_12_8_4);
ecma_sections.push(ecma_12_8_6);
ecma_sections.push(ecma_terminal);
export const debug_api_instance = DebugAPI.the();
window.DebugAPI = DebugAPI;
