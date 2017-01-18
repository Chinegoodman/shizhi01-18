/**
 * Created by pang on 2016/12/28.
 */

// 内容超出省略号代替
window.onready=function () {
    if ($('.contents_li_leavemessage_readers>li').index()>=10){
        $('.contents_li_leavemessage_readers>li').eq(9).nextAll().hide().parent().append("...");
    }
}

$(function () {
    search_box_state();
})

// 悬浮及输入 搜索时 搜索框的状态
function search_box_state() {
    $('.search_btn').hover(
        function () {
            $('.search_btn').addClass('search_boxHover');
        },function () {
            $('.search_btn').removeClass('search_boxHover');
        }
    )
}