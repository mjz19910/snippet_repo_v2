export function has_types_data(_v) {
    return true;
}
export function down_cast_func(v) {
    return v !== null;
}
export function has_types_arr_with(v, _cx) {
    if (v !== null) {
        if (!is_fn(v))
            return false;
        let s = {
            t: 'x',
            v,
        };
        if (0) {
            s = {
                t: 'y', v: {
                    types: [],
                }
            };
        }
        if (!cast_to_object_and_fn(s))
            return false;
        if (!s.v.hasOwnProperty('types')) {
            s.v.types = [];
        }
        return true;
    }
    return false;
}
function cast_to_object_and_fn(_v) {
    return true;
}
function is_fn(v) {
    return v !== null;
}
