function NiceTime(timestamp) {
    var foo = timestamp * 1000;
    var curr = new Date();
    var diff =  curr.getTime()-foo;
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

function ChangeToSlug(title) {
    var slug;
    slug = title.toLowerCase();
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    slug = slug.replace(/ /g,'-');
    return slug;
}

module.exports.NiceTime = NiceTime;
module.exports.ChangeToSlug = ChangeToSlug;