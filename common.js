jQuery.fn.reverse = function () {
    return this.pushStack(this.get().reverse(), arguments);
};

function createPoint(initial) {

    var _isSet = false;
    var _left = undefined;
    var _top = undefined;

    function _change(left, top) {
        _isSet = true;
        _left = left;
        _top = top;
    }

    if (initial) {
        if (initial.getLeft && initial.getTop) {
            _change(initial.getLeft(), initial.getTop());
        }
        if (initial.x && initial.y) {
            _change(initial.x, initial.y);
        }
        if (initial.left && initial.top) {
            _change(initial.left, initial.top);
        }
    }
    return {
        isSet: function () { return _isSet; },
        getLeft: function () { return _left; },
        getTop: function () { return _top; },
        change: _change
    };
}
Array.prototype.take = function (number) {
    return this.splice(this.length - number);
};
Array.prototype.each = function (fn) {
    var next = true;
    for (var i = 0; next && i < this.length; i++) {
        var result = fn(i, this[i]);

        next = result === undefined || result;
    }
    return this;
};

//$(function () {
//    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//    alert(a.take(6));
//    a.each(function (i, v) {
//        alert(v);
//        return v < 3
//    });
//});
