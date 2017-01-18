/**
 * Created by 73142 on 2016/12/30.
 */
$(function () {
    personal_base_content_one_confirm_select();
    account_change();
    personal_base_set_click();
})


function personal_base_content_one_confirm_select() {
    /*var personal_base_content_one_confirm_selectval=1;
     $('.personal_base_content_one_confirm_select').click(function () {
     if (personal_base_content_one_confirm_selectval){
     personal_base_content_one_confirm_selectval=0;
     $(this).removeClass('personal_base_content_one_confirm_select_on').addClass('personal_base_content_one_confirm_select_off');
     }else {
     personal_base_content_one_confirm_selectval=1;
     $(this).removeClass('personal_base_content_one_confirm_select_off').addClass('personal_base_content_one_confirm_select_on');
     }
     })*/
    $('.personal_base_content_one_confirm_select').toggle(function () {
        $(this).removeClass('personal_base_content_one_confirm_select_on').addClass('personal_base_content_one_confirm_select_off');
    },function () {
        $(this).removeClass('personal_base_content_one_confirm_select_off').addClass('personal_base_content_one_confirm_select_on');
    });
}
// 帐号更换手机号或者密码
function account_change() {
    $('.personal_account_content_phonenumber_changebtn').click(function () {
        $('#personalcenter_account_phonenumber_mask').show();
        $("body").height($(window).height()).css({
            "overflow-y": "hidden"
        });
    })
    $('.personalcenter_account_phonenumber_canclebtn').click(function () {
        $('#personalcenter_account_phonenumber_mask').hide();
        $("body").height($(window).height()).css({
            "overflow-y": "auto"
        });
    })

    $('.personal_account_content_password_changebtn').click(function () {
        $('#personalcenter_account_phonenumber_mask2').show();
        $("body").height($(window).height()).css({
            "overflow-y": "hidden"
        });
    })
    $('.personalcenter_account_phonenumber_canclebtn2').click(function () {
        $('#personalcenter_account_phonenumber_mask2').hide();
        $("body").height($(window).height()).css({
            "overflow-y": "auto"
        });
    })

}
//切换账户区跳转
function personal_base_set_click() {
    $('.personal_base_set').click(function () {
        window.open('../htmls/personalcenter_set.html','_self');
    })
}