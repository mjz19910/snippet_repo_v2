type IR_TextRun_Endpoint=E_Url|GE_Browse|E_Watch;

type IR_TextRun={
	text: string;
	navigationEndpoint?: IR_TextRun_Endpoint;
	loggingDirectives?: D_LoggingDirectives;
	bold?: boolean;
};