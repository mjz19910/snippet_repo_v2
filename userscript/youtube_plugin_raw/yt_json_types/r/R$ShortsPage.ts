type R_ShortsPage={
	page: "shorts";
	endpoint: E_ReelWatchEndpoint;
	response: R_Reel;
	playerResponse: R_Player;
	reelWatchSequenceResponse?: R_ReelWatchSequence;
	url: `/shorts/${string}`;
	cachedReelWatchSequenceResponse?: R_ReelWatchSequence;
}|{
	rootVe: 37414;
	url: `/shorts/${string}`;
	endpoint: E_ReelWatchEndpoint;
	page: "shorts";
	playerResponse: R_Player;
	reelWatchSequenceResponse: R_ReelWatchSequence|undefined;
	response: R_Reel;
	cachedReelWatchSequenceResponse: R_ReelWatchSequence;
};