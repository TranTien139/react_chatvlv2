function NiceTime(timestamp) {
    var foo = timestamp * 1000;
    var curr = new Date();
    let diff =  curr.getTime()-foo;
    if (diff <= 59 * 1000) {
        return Math.ceil(diff / 1000) + ' giây trước';
    } else if ((diff >= 60 * 1000) &&(diff < 3600 * 1000)) {
        return  Math.ceil(diff / (60 * 1000)) + ' phút trước';
    }else if ((diff >= 3600 * 1000) &&(diff < 3600 * 24 * 1000))
    {
        return  Math.ceil(diff / (3600 * 1000)) + ' giờ trước';
    } else {
        var stamp = new Date(foo);
        return stamp.getDate() + "/" + stamp.getMonth() + "/" + stamp.getFullYear();
    }
}

module.exports.NiceTime = NiceTime;