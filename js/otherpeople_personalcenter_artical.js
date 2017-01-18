/**
 * Created by pang on 2016/12/23.
 */
$(function () {

    $('.personalcenter_edit_more>li').each(personalcenter_more_tips);

    personalcenter_top_li_click();
    personalcenter_contents_li_contentselect_type_change();

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
        window.open('otherpeople_personalcenter_articalpage.html','_self');
    })
    $('.personalcenter_top_lis_comment').click(function () {
        window.open('otherpeople_personalcenter_comment.html','_self');
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

//发布与审核中交互及切换效果  .less 411行去除css代码
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
        $('.personalcenter_contents_li_artical').addClass('personalcenter_contents_li_show').siblings().removeClass('personalcenter_contents_li_show');
    })
    $('.personalcenter_contents_li_contentselect_type_noout').click(function () {
        $(".personalcenter_contents_li_contentselect_type").hide();
        $('.personalcenter_contents_li_artical_review').addClass('personalcenter_contents_li_show').siblings().removeClass('personalcenter_contents_li_show');
    })




}








