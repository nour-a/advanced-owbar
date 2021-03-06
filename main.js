var _ = {};
// ///////////////indexOf////////////////

_.indexOf = function (arr, value, isSorted) {
    if (arguments.length === 3 && isSorted) {
        var start = 0;
        var end = arr.length - 1;
        var mid = Math.floor(start + end / 2);
        while (arr[mid] !== value && start < end) {
            if (value < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
            mid = Math.floor(start + end / 2);
        }
        if (arr[mid] != value) {
            return -1;
        }
        else {
            return mid;
        }
    } else {
        if (arguments.length === 2 && !isSorted) {
            var result = -1;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === value) {
                    result = i;
                }
            }
            return result;
        }
        else {
            return -1;
        }
    }
};
// ///////////////once////////////////

_.once = function (func) {
    var flag = false;
    return function () {
        var returnval;
        if (!flag) {
            flag = true;
            returnval = func.apply(null, arguments);
        }
        return returnval;
    };

};
// ///////////////memoize////////////////

_.memoize = function (func) {
    const cash = {};
    const sppedy = function () {
        var arg = JSON.stringify(arguments[0]);
        if (cash[arg]) {
            return cash[arg];
        }
        else {
            const res = func.apply(null, arguments);
            cash[arg] = res;
            return res;
        }
        // return func.apply(null,arguments);
    };
    sppedy.cash = cash;
    return sppedy;
};
// ///////////////delay////////////////
_.delay = function (func, wait) {
    const args = Array.from(arguments).slice(2);
    setTimeout(function () { return func.apply(null, args); }, wait);
};
// ///////////////shuffle////////////////
_.shuffel = function (arr) {
    if (!Array.isArray(arr) && typeof arr !== 'object') {
        return [];
    } else if (typeof arr === 'object') {
        arr = Object.values(arr);
    } else {
        var temp;
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
};

// ///////////////zip////////////////
_.zip = function () {
    var result = [];
    for (var i = 0; i < arguments[0].length; i++) {
        var temp = [];
        for (var j = 0; j < arguments.length; j++) {
            temp.push(arguments[j][i]);
        }
        result.push(temp);
    }
    return result;
};
_.sortedIndex = function (list, value) {
    if (arguments.length <= 1 || !Array.isArray(list)) {
        return 0;
    } else {
        var start = 0;
        var end = list.length;
        while (start < end) {
            var mid = Math.floor((start + end) / 2);
            if (list[mid] > value) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return end;
    }
};
_.flatten = function (arr) {
    if (typeof arr === 'string') {
        arr = arr.split('');
    }
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result.push(arr[i]);
        }
        if (Array.isArray(arr[i])) {
            result = result.concat(_.flatten(arr[i]));
        }
    }
    return result;
};
_.intersection = function () {
    var result = [];
    for (var i = 1; i < arguments.length; i++) {
        for (var j = 0; j < arguments[0].length; j++) {
            if (arguments[i].indexOf(arguments[0][j]) !== -1 && result.indexOf(arguments[0][j]) === -1) {
                    result.push(arguments[0][j]);
            }
        }
    }
    return result;
};
_.difference = function () {
    var result = [];
    for (var i = 1; i < arguments.length; i++) {
        for (var j = 0; j < arguments[0].length; j++) {
            if (arguments[i].indexOf(arguments[0][j]) === -1 && result.indexOf(arguments[0][j]) === -1) {
                    result.push(arguments[0][j]);
            }
        }
    }
    return result;

};
module.exports = _;
