/**
 * Created by 73142 on 2016/12/25.
 */
$(function () {
    personal_base_content_one_confirm_select();
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

    $('.personal_account_set').click(function () {
        window.open('../htmls/personalcenter_accountset.html','_self');
    })

}