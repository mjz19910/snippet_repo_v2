//cspell:word IWGH

import {Do} from "./Helpers.ts";
import {H} from "./Helpers.ts";

type larTorch={
	id: "larTorch",
	news_str: "Lonely torch page",
};
type roof={
	id: "roof",
	news: "Roof.",
};
type floorFive={
	id: "floorFive",
	links: [
		roof,
		elevator,
	],
};
type keepKitchen={
	id: "keepKitchen";
	news: "Kitchen.";
};
type keep={
	id: "keep",
	links: [
		floorOne,
		floorTwo,
		floorThree,
		floorFive,
		keepKitchen,
	],
};
type screwdriver={
	type: "item";
	id: "screwdriver",
};
type armour={
	id: "armour",
	news: "Knight's armour",
	actions: [
		{
			id: "unscrew_armor",
			fn: "use",
			usingItem: screwdriver,
		},
		{
			required: "unscrew_armor",
			fn: "take",
			item: piece_of_paper,
		}
	],
};
type larStairs={
	id: "larStairs",
	links: [
		keep,
		armour,
	],
};
type egg={
	type: "item";
	id: "egg";
};
type larFm={
	id: "larFm";
	action: H.TakeActionR2<{
		requirements: [
			hand_press,
			fui,
		];
		item: egg;
	}>;
};
type larLake={
	id: "larLake",
	links: [larFm],
};
type larDark={
	id: "larDark",
	links: [
		larLake,
		deathDome,
	];
};
type deathDome={
	id: "deathDome";
	links: [grave];
};
type larBoat={
	id: "larBoat",
	links: [larDark],
};
type larRiver={
	id: "larRiver",
	links: [larBoat];
};
type larder={
	id: "larder",
	links: [
		larTorch,
		larStairs,
		larRiver,
	],
};
type burrow={
	id: "burrow",
	links: [larder],
};
type picRef={
	id: "picRef";
	links: [
		{
			bold: true;
			href: burrow;
		}
	];
};
type picCup={
	id: "picCup",
	links: [picRef],
};
type picTable={
	id: "picTable",
	links: [picCup],
};
type dead_klingon={
	type: "item";
	id: "dead Klingon";
};
type picQ={
	id: "picQ";
	links: [picTable],
	action: H.TakeActionR<{
		required: keycard;
		item: dead_klingon;
	}>;
	quest_chain_part: readyRoom["story"]["dead_klingon"];
	story: {
		burrow: {
			quest_chain: [
				picQ,picTable,picCup,picRef,burrow,larder,larStairs,keep,floorFive,elevator,elev_boiler,boiler,
				mechanic,
				Do.UseAction<mechanic,hypospray>,
				piping,
				pipe1,
			];
		};
	};
};
type good={
	id: "good",
	news: "Good page.",
};
type read={
	id: "read",
	links: [good],
};
type red={
	id: "red",
	links: [
		read,
		picQ,
	],
};
type green={
	id: "green",
	links: [red],
};
type members={
	id: "members",
	links: [green],
};
type redbridge={
	uses: "sword",
};
type underworld={
	links: [redbridge],
};
type hSmell={
	news: "Weird smell in the hall gallery.",
};
type hGallery={
	links: [hSmell],
};
type hStairs={
	links: [hGallery],
};
type sDoor={
	news: "Small door...",
	state: "closed",
};
type lHall={
	links: [
		hStairs,
		sDoor,
	],
};
type lGallery={
	links: [lHall],
};
type narrowHole={
	links: [lGallery],
	// 404 pages
	missing: ["uQwe"],
};
type uLeafage={
	id: "uLeafage",
	links: [narrowHole],
};
type uForest={
	id: "uForest",
	links: [uLeafage],
	action: {
		fn: "use",
		usingItem: "QweQwe",
	},
};
type uForestEdge={
	id: "uForestEdge",
	links: [uForest],
};
type boiler={
	news: "Boiler room",
	links: [
		piping,
		mechanic,
	],
};
type someone={
	id: "someone";
	uses: something_item;
};
type eternalMaze={
	id: "eternalMaze";
	links: [someone],
};
type floorOne={
	id: "floorOne";
	links: [eternalMaze],
};
type giant={
	type: "item";
	id: "giant";
};
type floorTwo={
	id: "floorTwo";
	news: "Floor Two";
	action: H.UseAction2<{
		v: giant;
		caption: "Move furniture";
	}>,
};
type genie={
	type: "item";
	id: "genie";
};
type floorThree={
	id: "floorThree";
	news: "Floor Three",
	action: H.TakeAction<genie>;
};
type elev_floorFive={
	floor_number: 9;
	destination: floorFive;
};
type elev_underworld={
	floor_number: 3;
	destination: underworld;
};
type elev_uForest={
	floor_number: 4;
	destination: uForestEdge;
};
type elev_boiler={
	floor_number: 5;
	destination: boiler;
};
type elev_floorOne={
	floor_number: 6;
	destination: floorOne;
};
type elev_floorTwo={
	floor_number: 7;
	destination: floorTwo;
};
type elev_floorThree={
	floor_number: 8;
	destination: floorThree;
};
type elevator={
	destinations: {
		"elev_underworld": elev_underworld,
		"elev_uForest": elev_uForest,
		"elev_boiler": elev_boiler,
		"elev_floorOne": elev_floorOne,
		"elev_floorTwo": elev_floorTwo,
		"elev_floorThree": elev_floorThree,
		"elev_floorFive": elev_floorFive,
	},
};
const elevator: elevator={} as elevator;
// cspell:word rozenbom
type rozenbom={
	id: "rozenbom",
	action: H.TakeActionStr<"small green lamp">,
};
type dwarfName={
	id: "dwarfName",
	links: [rozenbom],
};
type piece_of_paper={
	id: "piece of paper",
	links: [dwarfName],
};
type keycard={
	type: "item",
	id: "keycard",
};
type off={
	id: "off",
	action: H.TakeAction<keycard>;
	quest_chain: [
		Do.TakeAction<keycard>,
		Do.UseMenu<members>,
		members,green,red,picQ,
	];
};
type on={
	id: "on",
	links: [off],
};
type v_25_of_shares={
	type: "item",
	id: "25% of shares",
	links: [on],
};
// cspell:ignore zbrogjdnfhvyensocuiehw
type u_page={
	id: "zbrogjdnfhvyensocuiehw",
	rid: "u",
	news_str: "This is the U page.",
	hints: [
		"A maze is less confusing if you try to conquer it with a friend who lives in a lamp",
		"An absense of a fourth floor does not mean there is no fifth",
		// cosmology -> pattern -> pcnt
		"An hourglass is more than it seems",
		// dwarfName
		"Be sure to find small green lamp - otherwise lots of locations would be too dark for you to explore!",
		"Bee yourself",
		"Beware!",
		// library
		"Books are typically kept in the library",
		"Cross the road only when you see green light",
		"If something is mentioned twice, chances are it hints to a room",
		"Keyword: <b>74stars</b>",
		"Keyword: <b>bridge</b>",
		// secret communication room
		"Keyword: <b>caramel</b>",
		"Keyword: <b>cosmology</b>",
		"Keyword: <b>flatJoke</b>",
		"Keyword: <b>jrrtgandalf</b>",
		"Selldome page: <b>selldome</b>",
		"Stay alert!",
		"The Poirot page: <b>herculepoirot</b>",
		"The best way to get rid of an angry mosquito is to hide from it!",
		"The underground river from the castle larder leads to the Silent Lake... that is, if you do not drown!",
		"Whenever in doubt - consult a wise book",
	],
	hint_refs: [
		v_74stars,
		bridge,
		"caramel",
		cosmology,
		flatJoke,
		"herculepoirot",
		jrrtgandalf,
		library,
		"selldome",
	],
};
type zbrogjdnfhvyensocuiehw=u_page;
type something_item={
	type: "item";
	id: "something";
};
type something={
	id: "something",
	action: H.TakeAction<something_item>;
};
type rhino={
	links: [something],
};
type solutions={
	news: "Education: solutions.",
};
type missions={
	links: [solutions],
	solutions: {
		beginner: [u_page,"zbrogjdnfhvyensocuiehw"],
	},
};
type faq={
	links: [
		missions,
		y,
	],
	action: H.TakeAction<gandalf_magic_book>;
};
type wall={
	id: "wall";
	news: "Great Wall of IWGH";
	action: {
		dst: "wall_post.php",
		message: string,
	},
};
type d_essay={
	news: "An essay explaining why IWGH has no D page",
};
type hypospray={
	type: "item",
	id: "hypospray",
};
type sickbay={
	actions: [
		H.StoryEvent<{
			required: dead_klingon;
		}>,
		H.StoryEvent<{
			required: dead_romulan;
		}>,
		H.TakeActionR<{
			required: dead_romulan;
			item: hypospray,
		}>,
	];
};
type enterprise={
	links: [
		deck8,
		v_10forward,
		engineering,
		sickbay,
		bridge,
	];
	quarters: [
		"riker",
		"worf",
		uQuarters,
	];
};
type deck8={
	id: "deck8",
};
type dead_romulan={
	type: "item";
	id: "dead Romulan";
};

type uQuarters={
	news: "Uninhabited quarters";
	extra: "the Romulan just entered their quarters, there is no one *visible* inside";
	action: H.TakeActionR<{
		required: after_lockdown;
		item: dead_romulan;
	}>;
	quest_chain_part: readyRoom["story"]["dead_klingon"];
};
type v_10forward={
	id: "10forward",
	news: "Enterprise NCC-1701-D: Ten Forward",
};
type engineering={
	links: [cDisruptor];
	//cspell:ignore wqwrqr
	action: H.UseActionStr<"wqwrqr">;
};
type cDisruptor={
	news: "Cloak disruptor",
};
type fat_worm={
	type: "item";
	id: "fat worm";
};
type worms={
	id: "worms";
	news: "Worms";
	action: H.TakeAction<fat_worm>;
};
type hole={
	links: [worms];
};
type ut1={
	news: "Underground tunnel, section 1.";
	action: H.TakeAction<screwdriver>;
	links: [hole];
};
type ut231={
	news_fmt: "Underground tunnel, section 231.";
};
type ut232={
	news_fmt: "Underground tunnel, section 232.";
	links: [uFridge];
};
type ut2={
	news: "Underground tunnel, section 2.";
	links: [
		ut231,
		ut232,
	];
};
type ut3={
	links: [deadEnd];
};
type grave={
	links: [
		ut1,
		ut2,
		ut3,
	],
	action: H.TakeAction<fui>;
};
type mechanic={
	id: "mechanic";
	news: "Mechanic in the boiler room";
	action: H.UseAction<hypospray>;
};
type piping={
	news: "Piping",
	links: [
		pipe1,
		pipe3,
		pipe5,
		pipe6,
		pipe7,
		pipe9,
		pipe11,
		pipe13,
	],
};
type pipe1={
	news: "Pipe passage 1",
};
type philosophical_principles={
	type: "item";
	id: "philosophical principles",
};
type pipe3={
	news: "Pipe passage 3",
	action: H.TakeAction<philosophical_principles>,
};
type pipe5={
	news: "Pipe passage 5",
};
type broken_water_filter={
	type: "item";
	id: "broken water filter";
};
type pipe6={
	news: "Pipe passage 6",
	action: H.TakeAction<broken_water_filter>;
};
type fake_orb={
	type: "item";
	id: "Fake Orb",
};
type pipe7={
	news: "Pipe passage 7",
	action: H.TakeAction<fake_orb>,
};
type pipe9={
	news: "Pipe passage 9";
	required: H.Not<philosophical_principles>;
};
type pipe11={
	news: "Pipe passage 11",
};
type pipe13={
	news: "Pipe passage 13";
	required: philosophical_principles;
	links: [
		ut17,
		ut18,
		ut19,
	],
};
type ut17={
	news: "Underground tunnel, section 17.",
};
type annoying_fly={
	type: "companion";
	id: "annoying fly";
};
type ut18={
	news: "Underground tunnel, section 18.";
	events: {
		room_enter: {
			_tag: "event";
			type: "add_companion";
			value: annoying_fly;
		};
	};
};
type ut19={
	news: "Underground tunnel, section 19.",
};
type gandalf_magic_book={
	type: "item";
	id: "Gandalf Magic Book",
	links: [jrrtgandalf];
};
type inventory={
	items: {
		"Glass Orb": null,
		"hand press": hand_press,
		"fat worm": fat_worm,
		"Gandalf Magic Book": gandalf_magic_book,
		"25% of shares": v_25_of_shares,
		"screwdriver": screwdriver,
		"fui": fui,
		"piece of paper": piece_of_paper,
		"small green lamp": null,
		"egg": null,
		"mosquito disinterest": null,
		"hypospray": hypospray,
		"broken water filter": null,
		"Fake Orb": fake_orb,
		"Orb Book": orb_book,
		"dead Klingon": dead_klingon,
		"dead Romulan": dead_romulan,
		"mosquitoZ": mosquitoZ,
	};
};
type after_lockdown={
	type: "story_pos";
	pos: "after lockdown";
};
type readyRoom={
	story: {
		dead_klingon: {
			uses: dead_klingon;
			quest_chain: [
				Do.TakeAction<dead_klingon>,
				readyRoom,
				sickbay,
				readyRoom,
				v_10forward,
				after_lockdown,
				uQuarters,
				Do.TakeAction<dead_romulan>,
				oLounge,
				sickbay,
				H.TakeActionR<{
					required: dead_romulan;
					item: hypospray,
				}>,
			];
		};
		null: {
			uses: null,
		};
	};
};
type oLounge={
	id: "oLounge",
	news: "Enterprise NCC-1701-D: Observation lounge",
};
type bridge={
	id: "bridge",
	links: [
		readyRoom,
		oLounge,
	];
};
//cspell:ignore usuddend
type uFridge={
	id: "uFridge",
	links: [
		deadEnd,
		usuddend,
	];
};
type deadEnd={
	id: "deadEnd",
	news: "Dead end.";
};
type usuddend={
	id: "usuddend",
	links: [uFridgeOpen];
};
type hand_press={
	type: "item";
	id: "hand press";
};
type fui={
	type: "item";
	id: "fui";
};
type uFridgeOpen={
	id: "uFridgeOpen",
	action: H.TakeAction<hand_press>;
	quest_chain: [
		Do.TakeAction<hand_press>,
		burrow,
		larder,larRiver,larBoat,larDark,
		larDark,
		deathDome,
		grave,
		Do.TakeAction<fui>,
		o,
		zbrogjdnfhvyensocuiehw,cosmology,
		Do.FollowChain<pattern>["follow_chain"]["quest_chain"],
		Do.AssertPageIs<pcnt>,Do.FollowChain<pcnt>["follow_chain"]["quest_chain"],
		Do.AssertPageIs<off>,Do.FollowChain<off>["follow_chain"]["quest_chain"],
		Do.AssertPageIs<picQ>,picTable,picCup,picRef,
		burrow,larder,larRiver,larBoat,larDark,
		deathDome,
		grave,
		Do.TakeAction<fui>,
		larDark,larLake,larFm,
		Do.UseInventory2<[hand_press,fui]>,
	];
};
type v_74stars={
	news: "74 StArS";
};
type library={
	links: [
		lib1,
		lib2,
	];
};
type lib1={
	news: "Or-Os";
	action: H.TakeAction<orb_book>;
};
type lib2={
	news: "Gt-Gz";
};
type cosmology={
	links: [
		opinion,
		characteristics,
		generation,
		flatDisc,
		{type: "chain",arr: [flatDisc,glimpse,a,dot];},
		// chain from pattern
		pattern,
		difference,
		deadEnd,
	];
};
type opinion={
	news: "Opinion page.";
};
type characteristics={
	news: "Random super hero";
	action: {
		type: "reload_link",
		button: {
			caption: "Generate superhero",
		},
	},
};
type generation={
	news: "Generation page.";
};
type difference={
	news: "Difference page.";
};
type pattern={
	id: "pattern";
	links: [pcnt];
	quest_chain: [
		pattern,pcnt,
	];
};
type pcnt={
	id: "pcnt";
	action: H.TakeAction<v_25_of_shares>;
	quest_chain: [
		Do.TakeAction<v_25_of_shares>,
		Do.UseInventory<v_25_of_shares>,
		on,off,
	];
};
type flatDisc={
	links: [glimpse];
};
type glimpse={
	links: [a];
};
type dot={
	news: "Dot page.";
};
type jrrtgandalf={
	id: "jrrtgandalf",
	news: "Gandalf Magic Book extracts.";
};
type flatJoke={
	news: "Flat joke.";
};
//cspell:word kuki mudi naada
type kukiOrbs={
	links: [
		"clearlake",
		"mudiCat",
		//cspell:ignore simon navil
		"simonNavil",
		"naada"
	];
};
type orb_book={
	type: "item";
	id: "Orb Book",
	links: [
		kukiOrbs
	];
};
type main={
	links: [wall],
};
type all_pages={
	generic: {
		links: [
			inventory,
			o,
			u_page,
		],
	},
	menu: {
		items: [
			main,
			"dictionary",
			"communication",
			members,
			faq,
		],
	};
	hidden: [
		open_dir,
		a,
		b,c,d,z,
	];
};
type generator={
	id: "generator";
	news: "This is the famous short story generator.";
};
type selldome={
	id: "selldome";
};
type ghbs={
	id: "ghbs";
};
type tohru={
	id: "tohru";
};
type communications={
	id: "communications";
};
type dictionary={
	id: "dictionary";
};
type open_dir={
	links: [
		main,
		generator,
		communications,
		dictionary,
		wall,
		o,
		faq,
		inventory,
		members,
		selldome,
		ghbs,
		tohru,
	],
};
export {type all_pages};
const work_queue: {
	floor_number: 4;
	destination: uForestEdge;
}[]=[];
work_queue.push(elevator.destinations.elev_uForest);

type a={
	news: "This is the A page.";
	links: [dot];
};
type b={
	news: "This is the B page.";
};
type c={
	news: "This is the See page";
	links: [rhino],
};
type o={
	id: "o",
	news: "This is the O page.";
};
type d={
	id: "d",
	news: "As confusing as it may seem, this is the M page";
	links: [m];
};
type m={
	id: "m";
	news: "This is the M page";
	links: [d_essay];
};
type y={
	news: "Why page.";
	clues: {
		y: [missions];
	};
};
type mosquitoZ={
	type: "item";
	id: "mosquitoZ";
};
type z={
	news: "This is Z space";
	action: {
		fn: "take",
		item: mosquitoZ,
	};
};
