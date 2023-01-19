type Button_serviceEndpoint=SignalServiceEndpoint|YpcGetOffersEndpoint;
type YpcGetOffers={
	params: string;
};

type YpcGetOffersEndpoint={
	clickTrackingParams: string;
	commandMetadata: CommandMetadata;
	ypcGetOffersEndpoint: YpcGetOffers;
}
type Button_navigationEndpoint=ShareEntityServiceEndpoint;

type ButtonData={
	accessibility?: AccessibilityData;
	accessibilityData?: Accessibility;
	command?: ButtonCommand;
	icon?: ButtonIcon;
	isDisabled?: boolean;
	serviceEndpoint?: Button_serviceEndpoint;
	navigationEndpoint?: Button_navigationEndpoint;
	tooltip?: string;
	size?: ButtonSizeType;
	style?: ButtonStyleType;
	text?: TextT;
	trackingParams?: string;
	hint?: HintRenderer;
	targetId?: YtTargetIdType;
};