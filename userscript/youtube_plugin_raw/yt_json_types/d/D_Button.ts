type D_Button={
	accessibilityData?: D_Accessibility;
	command?: GC_Button;
	icon?: D$ButtonIcon;
	isDisabled?: boolean;
	serviceEndpoint?: D_Button_SE;
	navigationEndpoint?: GE_Button_navigation;
	tooltip?: string;
	size?: D$ButtonSizeType;
	text?: G_Text;
	trackingParams?: string;
	hint?: R_Hint;
	targetId?: D_Button_TargetId;
}|{
	accessibility: D_Label;
	accessibilityData?: D_Accessibility;
	command?: GC_Button;
	icon?: D$ButtonIcon;
	isDisabled?: boolean;
	serviceEndpoint?: D_Button_SE;
	navigationEndpoint?: GE_Button_navigation;
	tooltip?: string;
	size?: D$ButtonSizeType;
	text?: G_Text;
	trackingParams?: string;
	hint?: R_Hint;
	targetId?: D_Button_TargetId;
}|{
	accessibilityData?: D_Accessibility;
	command?: GC_Button;
	icon?: D$ButtonIcon;
	isDisabled?: boolean;
	serviceEndpoint?: D_Button_SE;
	navigationEndpoint?: GE_Button_navigation;
	tooltip?: string;
	size?: D$ButtonSizeType;
	style: D$ButtonStyleType;
	text?: G_Text;
	trackingParams?: string;
	hint?: R_Hint;
	targetId?: D_Button_TargetId;
}|{
	accessibility: D_Label;
	accessibilityData?: D_Accessibility;
	command?: GC_Button;
	icon?: D$ButtonIcon;
	isDisabled?: boolean;
	serviceEndpoint?: D_Button_SE;
	navigationEndpoint?: GE_Button_navigation;
	tooltip?: string;
	size?: D$ButtonSizeType;
	style: D$ButtonStyleType;
	text?: G_Text;
	trackingParams?: string;
	hint?: R_Hint;
	targetId?: D_Button_TargetId;
};
type D_Button_SE=T_SE_Signal<M_SendPost,G_ClientSignal>|E_YpcGetOffers;