import {MatchType_Import_Sys} from "./MatchType_Import_Sys.1.js";
import {ProcessGlobalImport} from "./ProcessGlobalImport.js";

export type ProcessImportSys<T extends MatchType_Import_Sys>=ProcessGlobalImport<T[1]>;