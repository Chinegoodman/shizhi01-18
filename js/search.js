/**
 * Created by pang on 2016/12/28.
 */
$(function () {
    search_box_state();
})

// 悬浮及输入 搜索时 搜索框的状态 点击搜索跳转到索索接过页
function search_box_state() {
    $('.search_btn').hover(
        function () {
            $('.search_btn').addClass('search_boxHover');
        },function () {
            $('.search_btn').removeClass('search_boxHover');
        }
    )
    $('.search_btn').click(function () {
        window.open('../htmls/search_result.html','_self');
    })
}