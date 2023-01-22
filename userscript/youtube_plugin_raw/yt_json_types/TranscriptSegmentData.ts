type D__TranscriptSegment={
	startMs: `${number}`;
	endMs: `${number}`;
	snippet: R$TextWithRuns;
	startTimeText: G_Text;
	trackingParams: string;
	accessibility: D__Accessibility;
	targetId?: `${string}.${string}.${number}.${number}`;
};