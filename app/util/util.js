module.exports = {
	empty : function (value) {
        if (typeof value == 'undefined') {
            return true;
        }
        if (value == null) {
            return true;
        }
        if (value instanceof String && value.length == 0) {
            return true;
        }
        if (value instanceof Array && Array.prototype.isPrototypeOf(a) && a.length == 0) {
            var count = 0;
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    count ++;
                    break;
                }
            }
            if (count == 0)
                return true;
        }
        return false;
    }
}