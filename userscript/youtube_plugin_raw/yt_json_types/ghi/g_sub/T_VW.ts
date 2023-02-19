type T_VW<T>=[T];
type T_VW_2<T>=["child",Uint8Array,T];
type T_VW_3<Type,T>=[Type,T];
type T_VW_R<Type,T>=["raw",[Type,T]];
type T_VW_Bigint<T>=["data64",number[],T];
type T_FD32<T>=T_PArr<["data_fixed32",T]>;
type T_FD64<T extends bigint>=T_PArr<["data_fixed64",T]>;
type T_D32<T extends number>=T_PArr<["data32",T]>;
