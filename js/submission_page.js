/**
 * Created by 73142 on 2016/12/29.
 */
// 内容超出省略号代替
window.onready=function () {
    if ($('.contents_li_leavemessage_readers>li').index()>=10){
        $('.contents_li_leavemessage_readers>li').eq(9).nextAll().hide().parent().append("...");
    }
}

$(function () {
    submission_tip_mask();
    fabubtn();
})

//初始载入页面是显示投稿须知  及  点击投稿提示时显示 须知 时间
function submission_tip_mask() {
    tougaotishi();
    $('.submission_tip_mask_closebtn').click(function () {
        $('#submission_tip_mask').hide();
        $("body").height($(window).height()).css({
            "overflow-y": "auto"
        });
    });
    $('.submission_tip').click(function () {
        tougaotishi();
    });
}
function tougaotishi() {
    $('#submission_tip_mask').show();
    $("body").height($(window).height()).css({
        // "overflow-y": "hidden"
    });
}

//点击发布按钮 显示发布提示操作
function fabubtn() {
    $('.submission_submit_btn').click(function () {
        $('#submission_fabu_tips_mask').show();
        $("body").height($(window).height()).css({
            // "overflow-y": "hidden"
        });
    })
    $('.submission_fabu_tips_content_btn').click(function () {
        $('#submission_fabu_tips_mask').hide();
        $("body").height($(window).height()).css({
            "overflow-y": "auto"
        });
    })

}