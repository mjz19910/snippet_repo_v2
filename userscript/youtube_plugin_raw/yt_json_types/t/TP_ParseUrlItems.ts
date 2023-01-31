type TP_ParseUrlItems<T extends string>=T extends `${infer U}&${infer Z}`? TP_ParseUrlValue<U>&TP_ParseUrlItems<Z>:T extends `${infer U}`? TP_ParseUrlValue<U>:never;
type TP_KeyofSearchParams<T extends string>=T extends `${infer U}=${string}&${infer Z}`? [U,...TP_KeyofSearchParams<Z>]:T extends `${infer U}=${string}`? [U]:[];