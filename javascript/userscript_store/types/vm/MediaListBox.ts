import {IBoxImpl} from "./box/mod";

export class MediaListBox extends IBoxImpl<MediaList> {
	type: "instance_box" = "instance_box";
	instance_type: "MediaList" = "MediaList";
}
