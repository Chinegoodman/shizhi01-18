/**
 * Created by 73142 on 2017/1/1.
 */

var artical_details_index;
window.onready=function () {
    if ($('.contents_li_leavemessage_readers>li').index()>=10){
        $('.contents_li_leavemessage_readers>li').eq(9).nextAll().hide().parent().append("...");
    }
    /*if ($('.index_artical_details_comment_li>.index_artical_details_comment_li_div').index()>=1){
     if ($('.index_artical_details_comment_li>.index_artical_details_comment_li_div').index()>=2){
     $('.index_artical_details_comment_li>.index_artical_details_comment_li_div').eq(1).nextAll().hide().parent().append("、、、");
     }
     }else {
     $('.index_artical_details_comment_li_div').show();
     }*/
}
$(function () {
    // cebian_xiala_click();
    // contents_lis_click();
    comment_focus();
    pinglun_click();
    huifu_click();
    xiaoluangzhankai_click();
    $('.right_audio_connectcontents_sendmsg_follow>li').each(authorandfollow_showhide);
    // header_clickto();


    $('.notindex_contents_lis').addClass('contents_lis_show');
    $('.notindex_contents_lis>li').click(function () {
        window.open('artical_page.html','_self')
    })
})

function cebian_xiala_click() {
    $('.infor_lis_tec>li').not('.infor_lis_title_tec ').click(function (e) {
        e.stopPropagation();
        // console.log($(this).index());
        $('.index_show').hide();
        // $('.notindex_contents_lis').eq($(this).index()-1).addClass('contents_lis_show').show().siblings().find('.contents_lis').removeClass('contents_lis_show').hide();
        $('.notindex_contents_lis').eq($(this).index()-1).addClass('contents_lis_show').show().siblings('.contents_lis').removeClass('contents_lis_show').hide();

        $('.notindex_artical_details_page').hide();
        $('.notindex_contents_lis>li').show();

        $('.slidenavsinfor_lis_box>ul>li').css('background-color','transparent');
        $('.slidenavsinfor_lis_tec>li').eq($(this).index()).css('background-color','#62CAFF');
    })
    $('.infor_lis_med>li').not('.infor_lis_title_med ').click(function (e) {
        e.stopPropagation();
        // console.log($(this).index());
        $('.index_show').hide();
        // $('.notindex_contents_lis').eq($(this).index()-1).addClass('contents_lis_show').show().siblings().find('.contents_lis').removeClass('contents_lis_show').hide();
        $('.notindex_contents_lis').eq($(this).index()-1+3).addClass('contents_lis_show').show().siblings('.contents_lis').removeClass('contents_lis_show').hide();

        $('.notindex_artical_details_page').hide();
        $('.notindex_contents_lis>li').show();

        $('.slidenavsinfor_lis_box>ul>li').css('background-color','transparent');
        $('.slidenavsinfor_lis_med>li').eq($(this).index()).css('background-color','#fd8989');
    })
    $('.infor_lis_eco>li').not('.infor_lis_title_eco ').click(function (e) {
        e.stopPropagation();
        // console.log($(this).index());
        $('.index_show').hide();
        // $('.notindex_contents_lis').eq($(this).index()-1).addClass('contents_lis_show').show().siblings().find('.contents_lis').removeClass('contents_lis_show').hide();
        $('.notindex_contents_lis').eq($(this).index()-1+6).addClass('contents_lis_show').show().siblings('.contents_lis').removeClass('contents_lis_show').hide();

        $('.notindex_artical_details_page').hide();
        $('.notindex_contents_lis>li').show();

        $('.slidenavsinfor_lis_box>ul>li').css('background-color','transparent');
        $('.slidenavsinfor_lis_eco>li').eq($(this).index()).css('background-color','#94d816');
    })
    $('.infor_lis_fut>li').not('.infor_lis_title_fut ').click(function (e) {
        e.stopPropagation();
        // console.log($(this).index());
        $('.index_show').hide();
        // $('.notindex_contents_lis').eq($(this).index()-1).addClass('contents_lis_show').show().siblings().find('.contents_lis').removeClass('contents_lis_show').hide();
        $('.notindex_contents_lis').eq($(this).index()-1+8).addClass('contents_lis_show').show().siblings('.contents_lis').removeClass('contents_lis_show').hide();

        $('.notindex_artical_details_page').hide();
        $('.notindex_contents_lis>li').show();

        $('.slidenavsinfor_lis_box>ul>li').css('background-color','transparent');
        $('.slidenavsinfor_lis_fut>li').eq($(this).index()).css('background-color','#ffce0a');
    })
}

function contents_lis_click() {
    // 首页部分点击事件
    $('.index_show>li').click(function () {
        /*$('.index_show>li').hide();
         $('.index_artical_details_page').show();
         $('.right_audio_connectcontents').show();*/
        window.open('htmls/artical_page.html','_self')
    })
    /*$('.index_show>li').hide();
     $('.index_artical_details_page').show();*/
    // 侧边点击后中间列出的li的点击事件
    $('.notindex_contents_lis>li').click(function () {
        // alert($(this).index());
        /*artical_details_index=$(this).index();
         $('.notindex_contents_lis>li').hide();
         $('.notindex_artical_details_page').show();
         $('.right_audio_connectcontents').show();*/
        window.open('htmls/artical_page.html','_self')
    })
}
//评论区的textarea获取焦点时触发
function comment_focus() {
    $('.index_artical_details_comment_textarea').focus(function () {
        $(this).addClass('comment_focus');
    })
    $('.index_artical_details_comment_textarea').blur(function () {
        $(this).removeClass('comment_focus');
    })
}

//评论区点击评论拉出评论部分
function pinglun_click() {
    $('.index_artical_details_comment_others_left>p').click(function () {
        $(this).parent().parent().siblings('.index_artical_details_notfirstcomment_box').slideDown('fast');
    })
    $('.index_artical_details_comment_cancelsubmit').click(function () {
        $(this).parent().parent().slideUp('fast');
        $(this).siblings('.index_artical_details_comment_textarea').val(null);
    })
}
//评论区点击回复拉出回复框
function huifu_click() {
    $('.index_artical_details_comment_othertomyself_content_btns>p').click(function () {
        $(this).parent().siblings('.index_artical_details_comment_backtoother_box').slideDown('fast');
    })
    $('.index_artical_details_comment_backtoother_cancelsubmit').click(function () {
        $(this).parent().parent().slideUp('fast');
        $(this).siblings('.index_artical_details_comment_backtoother_textarea').val(null);
    })
}
//评论区点击小框里的展开 显示评论内容 隐藏小框
function xiaoluangzhankai_click() {
    $('.index_artical_details_comment_li_over1_show_clickbtn').click(function () {
        $(this).parent().hide().siblings('.index_artical_details_comment_li_hide').show();
        $('.index_artical_details_comment_li_over1_shouqi_clickbtn').click(function () {
            $(this).hide().siblings('.index_artical_details_comment_li_hide').hide().siblings('.index_artical_details_comment_li_over1_showbox').show();
        })
    })
}
//中间打开文章内容在右侧显示作者消息---发送信息和关注 效果
function authorandfollow_showhide() {
    var timeshow1,timeshow2;
    var thisDom=$(this);
    $(this).hover(function () {
            clearTimeout(timeshow1);
            clearTimeout(timeshow2);
            $(".right_author_img_tips").hide();
            $(this).children(".right_author_img_tips").show();
        },function () {
            clearTimeout(timeshow1);
            clearTimeout(timeshow2);
            timeshow2=setTimeout(function () {
                thisDom.children(".right_author_img_tips").hide();
            },1000)
        }

    );
    $('.right_author_img_tips').hover(function () {
        clearTimeout(timeshow2);
        clearTimeout(timeshow1);
    },function () {
        clearTimeout(timeshow1);
        clearTimeout(timeshow2);
        timeshow1=setTimeout(function () {
            thisDom.children(".right_author_img_tips").hide();
        },50)
    })
}



//顶部跳转
function header_clickto() {
    $('.header_contribute').click(function () {
        window.open('htmls/submission_page.html','_self');
    })
    $('.header_search').click(function () {
        window.open('htmls/search.html','_self');
    })
    $('.header_personal').click(function () {
        window.open('htmls/personalcenter_articalpage.html','_self');
    })
    $('.header_logo').click(function () {
        window.open('../index.html','_self');
    })
}
