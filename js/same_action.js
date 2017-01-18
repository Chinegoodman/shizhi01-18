/**
 * Created by 73142 on 2016/12/12.
 */
$(function () {
    // header_clickto();
    register();
    bottomclick();
    var timeshow1,timeshow2;
    $('.header_information').hover(function () {
        clearTimeout(timeshow1);
        clearTimeout(timeshow2);
        $('.information_box').show();
    },function () {
        clearTimeout(timeshow1);
        clearTimeout(timeshow2);
       timeshow2=setTimeout(function () {
           $('.information_box').hide();
       },500)
    });
    $('.information_box').hover(function () {
        clearTimeout(timeshow2);
        clearTimeout(timeshow1);
        $('.information_box').show();
    },function () {
        clearTimeout(timeshow1);
        clearTimeout(timeshow2);
        timeshow1=setTimeout(function () {
            $('.information_box').hide();
        },50)
    })

    $('.person_abouts>div').each(bottomshow);
    $('.connect>div').each(bottomshow);
    $('.back_top').each(bottomshow);

    windowscroll();
});

// 底部提示按钮弹出样式
function bottomshow() {
    var timeshow1,timeshow2;
    var thisDom=$(this);
    $(this).hover(function () {
        clearTimeout(timeshow1);
        clearTimeout(timeshow2);
        // $(this).siblings().children(".img_tips").hide();
        $(".img_tips").hide();
        // $(this).children(".img_tips").show();
        $(this).children(".img_tips").show();
        // $('.information_box').show();
    },function () {
        clearTimeout(timeshow1);
        clearTimeout(timeshow2);
        timeshow2=setTimeout(function () {
            // $('.information_box').hide();
            // $(this).children(".img_tips").hide();
            thisDom.children(".img_tips").hide();
        },1000)
    });
    /*var thatDom=$('.img_tips').eq($(this).index());
    thatDom.hover(function () {
        clearTimeout(timeshow2);
        thisDom.children(".img_tips").show();
    },function () {
        timeshow1=setTimeout(function () {
            thisDom.children(".img_tips").hide();
        },50)
    })*/
    $('.img_tips').hover(function () {
        clearTimeout(timeshow2);
        clearTimeout(timeshow1);
    },function () {
        clearTimeout(timeshow1);
        clearTimeout(timeshow2);
        timeshow1=setTimeout(function () {
            thisDom.children(".img_tips").hide();
        },50)
    })
};
//底部点击跳转等动作
function bottomclick() {
    $('.back_top').click(function () {
        $('body').animate({'scroll-top':0},'fast');
    })
}

// 点击注册 登陆 关闭 等操作
function register() {
    $('.login_register_btn').click(function () {
        $('.login_box_loginbox').addClass('login_box_loginbox_leftmove');
    })
    $('.login_box_register_tologin').click(function () {
        $('.login_box_loginbox').removeClass('login_box_loginbox_leftmove');
    })

    $('.register_getnumber').click(function () {
        register_getnumberclick()
    })
    function register_getnumberclick() {
        $('.register_getnumber').off('click');
        var time1;
        var lasttime=40;
        $('.register_getnumber').addClass('register_getnumberclick');
        time1=setInterval(function () {
            lasttime--;
            $('.register_getnumber').html(lasttime+'s');
        },1000);
        time2=setTimeout(function () {
            clearTimeout(time1);
            $('.register_getnumber').html('获取验证码');
            $('.register_getnumber').removeClass('register_getnumberclick');
            $('.register_getnumber').click(register_getnumberclick);
        },41000);
    }

    $('.login_box_close').click(function () {
        $('#login_box_mask').hide();
    })
//注册功能公用样式。。。。。暂时由最新来触发
    
    $('.header_hot').click(function () {
        $('#login_box_mask').show();
    })
};

//顶部跳转
function header_clickto() {
    $('.header_contribute').click(function () {
        window.open('../htmls/submission_page.html','_self');
    })
    $('.header_search').click(function () {
        window.open('../htmls/search.html','_self');
    })
    $('.header_personal').click(function () {
        window.open('../htmls/personalcenter_articalpage.html','_self');
    })
    /*$('.header_logo').click(function () {
        window.open('../index.html','_self');
    })*/
    
    //智囊团
    $('.header_konwledgeteam').click(function () {
        window.open('../htmls/expert_page.html','_self');
    })



    //下拉部分跳转
    $('.infor_lis_box>ul>li').not('.infor_lis_title').click(function (e) {
        e.stopPropagation();
        window.open('../htmls/index_lis_show.html','_self');
    })
}


//鼠标滚动距离
function windowscroll() {
    $(window).scroll(function () {
        if ($(window).scrollTop()>=10){
            $('#bottom').show();
        }else{
            $('#bottom').hide();
        }
    })
}

