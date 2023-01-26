type D_ChipCloudChip_Style=[
	"STYLE_DEFAULT",
	"STYLE_HOME_FILTER",
	"STYLE_REFRESH_TO_NOVEL_CHIP",
][number];
type D_ChipCloudChip=
|{
	style: T_StyleType<"STYLE_DEFAULT">;
	text: R_SimpleText;
	navigationEndpoint: C_Continuation;
	trackingParams: string;
	isSelected: false;
}
|{
	style: T_StyleType<"STYLE_DEFAULT">;
	text: R_SimpleText;
	navigationEndpoint: C_RelatedChip;
	trackingParams: string;
	isSelected: true;
}|{
	style: T_StyleType<"STYLE_REFRESH_TO_NOVEL_CHIP">;
	text: R_TextRuns;
	navigationEndpoint: C_Continuation;
	trackingParams: string;
	uniqueId: "ATTRIBUTE_FILTER_TYPE_EXPLORE";
}
|{
	style: T_StyleType<D_ChipCloudChip_Style>;
	text: R_TextRuns;
	navigationEndpoint: C_Continuation;
	trackingParams: string;
}|{
	style: T_StyleType<D_ChipCloudChip_Style>;
	text: R_TextRuns;
	trackingParams: string;
	isSelected: true;
}|{
	style: T_StyleType<D_ChipCloudChip_Style>;
	text: R_TextRuns;
	navigationEndpoint: C_Continuation;
	trackingParams: string;
	targetId: "feed_filter_chip_bar_second_chip";
};