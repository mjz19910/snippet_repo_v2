type D__MenuServiceItem<T extends string,EndpointItems>={
	text: G_Text;
	icon?: T$Icon<T>;
	serviceEndpoint: G_MenuServiceEndpointItems<EndpointItems>;
	trackingParams: string;
	hasSeparator?: true;
	loggingDirectives?: A_LoggingDirectives;
};