/**
 * Created by pang on 2016/12/27.
 */
$(function () {

    $('.personalcenter_edit_more>li').each(personalcenter_more_tips);

    personalcenter_top_li_click();
    personalcenter_contents_li_contentselect_type_change();

    personalcenter_contents_li_content_lis_action();

    check_reply_msg_maskshow();
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

//发布与审核中交互及切换效果
//私信与回复交互及切换效果  .less 411行去除css代码
function personalcenter_contents_li_contentselect_type_change() {
    var timeshow1,timeshow2;
    $('.personalcenter_contents_li_contentselect_more').hover(
        function () {
            clearTimeout(timeshow1);
            clearTimeout(timeshow2);
            $(".personalcenter_contents_li_contentselect_type").show();
        },function () {
            clearTimeout(timeshow1);
            clearTimeout(timeshow2);
            timeshow2=setTimeout(function () {
                $(".personalcenter_contents_li_contentselect_type").hide();
            },1000)
        }
    )
    $(".personalcenter_contents_li_contentselect_type").hover(function () {
        clearTimeout(timeshow2);
        clearTimeout(timeshow1);
    },function () {
        clearTimeout(timeshow1);
        clearTimeout(timeshow2);
        timeshow1=setTimeout(function () {
            $(".personalcenter_contents_li_contentselect_type").hide();
        },50)
    })
    $('.personalcenter_contents_li_contentselect_type_out').click(function () {
        $(".personalcenter_contents_li_contentselect_type").hide();
        $('.personalcenter_contents_li_artical_review').addClass('personalcenter_contents_li_show').siblings().removeClass('personalcenter_contents_li_show');
    })
    $('.personalcenter_contents_li_contentselect_type_noout').click(function () {
        $(".personalcenter_contents_li_contentselect_type").hide();
        $('.personalcenter_contents_li_artical').addClass('personalcenter_contents_li_show').siblings().removeClass('personalcenter_contents_li_show');
    })




}

//鼠标悬浮在消息列表上及点击删除按钮的样式
function personalcenter_contents_li_content_lis_action() {
    $('.personalcenter_contents_li_content_li_receive').hover(
        function () {
            $(this).addClass('personalcenter_contents_li_content_li_receiveHover');
        },function () {
            $(this).removeClass('personalcenter_contents_li_content_li_receiveHover');
        }
    );
    $('.personalcenter_contents_li_content_li_deletebtn').click(function () {
        /*$.ajax({
            url:"",
            success:function () {
                $(this).parent().remove();
            },
        })*/
        $(this).parent().remove();
        
    })



}

//点击评论条打开评论框及后续动作
function check_reply_msg_maskshow() {
    $('.personalcenter_contents_li_content_li_receive').click(function () {
        $('#check_reply_msg_mask').addClass('active');
        $('.check_reply_msg_content').removeClass('hide');
    })
    $('.check_reply_msg_closebtn').click(function () {
        $('#check_reply_msg_mask').removeClass('active');
        $('.reply_msg_box').removeClass('active');
    })
    $('.check_reply_msg_btn').click(function () {
        $('.reply_msg_box').addClass('active');
        $('.check_reply_msg_content').addClass('hide');
    })
    $('.reply_msg_concel_submit').click(function () {
        $('.reply_msg_box').removeClass('active');
        $('.check_reply_msg_content').removeClass('hide');
    })
}





