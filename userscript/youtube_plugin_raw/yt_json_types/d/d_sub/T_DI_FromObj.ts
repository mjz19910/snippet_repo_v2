type T_DI_FromObj<T extends {}>=DIT_Item_AB<keyof T,T_PrimitiveBox<T[keyof T]>>;
