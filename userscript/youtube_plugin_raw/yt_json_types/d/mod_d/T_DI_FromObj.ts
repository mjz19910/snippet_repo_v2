type T_DI_FromObj<T extends {}>=DI_T_KV_Z<keyof T,T_PrimitiveBox<T[keyof T]>>;
;