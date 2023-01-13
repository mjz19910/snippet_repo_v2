type MicroformatData={
	urlCanonical: string;
	title: string;
	description: string;
	thumbnail: Thumbnail<{}>;
	siteName: string;
	appName: string;
	androidPackage: string;
	iosAppStoreId: `${number}`;
	iosAppArguments: string;
	ogType: string;
	urlApplinksWeb: string;
	urlApplinksIos: string;
	urlApplinksAndroid: string;
	urlTwitterIos: string;
	urlTwitterAndroid: string;
	twitterCardType: string;
	twitterSiteHandle: string;
	schemaDotOrgType: string;
	noindex: false;
	unlisted: false;
	familySafe: true;
	availableCountries: string[];
	linkAlternates: HrefUrl[];
};

type MicroformatDataRenderer={
	microformatDataRenderer: MicroformatData;
};
