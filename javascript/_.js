function _filter(list, predi) {
    var new_list = [];
    _each(list, function (val) {
        if(predi(val)) new_list.push(val);
    });
    // for(var i = 0; i < list.length; i++){
    //     if(predi(list[i])) {
    //         new_list.push(list[i]);
    //     }
    // }
    return new_list;
}

function _map(list, mapper) {
    var new_list= [];
    _each(list, function (val) {
        new_list.push(mapper(val));
    })
    // for(var i = 0; i < list.length; i++){
    //     new_list.push(mapper(list[i]));
    // }
    return new_list;
}

function _each(list, iter) {
    for(var i = 0; i < list.length; i++){
       iter(list[i]);
    }
    return list;
}

function _curry(fn) {
    return function (a, b) {
        return arguments.length == 2 ? fn(a, b) : function (b) { return fn(a, b); };
    }
}

function _curryr(fn){
    return function (a, b) {
        return arguments.length == 2 ? fn(a, b) : function (b) {return fn(b, a); };
    }
}

var _get = _curryr(function (obj, key) {
    return obj == null ? undefined : obj[key];
});