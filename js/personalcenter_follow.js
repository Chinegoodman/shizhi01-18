/**
 * Created by 73142 on 2016/12/26.
 */
$(function () {

    $('.personalcenter_edit_more>li').each(personalcenter_more_tips);

    personalcenter_top_li_click();
    lis_sendmsg_btn();
})




//个人中心修改资料和疑问解答的交互 效果
function personalcenter_more_tips() {
    var timeshow1,timeshow2;
    var thisDom=$(this);
    $(this).hover(function () {
            clearTimeout(timeshow1);
            clearTimeout(timeshow2);
            $(".personalcenter_onoff_tips").hide();
            $(this).children(".personalcenter_onoff_tips").show();
        },function () {
            clearTimeout(timeshow1);
            clearTimeout(timeshow2);
            timeshow2=setTimeout(function () {
                thisDom.children(".personalcenter_onoff_tips").hide();
            },1000)
        }
    );
    $('.personalcenter_onoff_tips').hover(function () {
        clearTimeout(timeshow2);
        clearTimeout(timeshow1);
    },function () {
        clearTimeout(timeshow1);
        clearTimeout(timeshow2);
        timeshow1=setTimeout(function () {
            thisDom.children(".personalcenter_onoff_tips").hide();
        },50)
    })
}

//点击文章、评论、消息、关注、跳转 及个人中心编辑跳转
function personalcenter_top_li_click() {
    $('.personalcenter_top_lis_artical').click(function () {
        window.open('personalcenter_articalpage.html','_self');
    })
    $('.personalcenter_top_lis_comment').click(function () {
        window.open('personalcenter_comment.html','_self');
    })
    $('.personalcenter_top_lis_msg').click(function () {
        window.open('personalcenter_msg.html','_self');
    })
    $('.personalcenter_top_lis_follow').click(function () {
        window.open('personalcenter_follow.html','_self');
    })
    $('.personalcenter_top_lis_follow').click(function () {
        window.open('personalcenter_follow.html','_self');
    })


    $('.personalcenter_edit_tips>p').click(function () {
        window.open('../htmls/personalcenter_set.html','_self');
    })
}

//点击发私信。显示发送私信窗口
function lis_sendmsg_btn() {
    $('.personalcenter_contents_li_follow_sendmsg').click(function () {
        $('#send_msg_boxmask').show();
        $("body").height($(window).height()).css({
            // "overflow-y": "hidden"
        });
    })
    $('.send_msg_canclebtn').click(function () {
        $('#send_msg_boxmask').hide();
        $("body").height($(window).height()).css({
            "overflow-y": "auto"
        });
    })
}