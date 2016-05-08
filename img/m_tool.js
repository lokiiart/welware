/**
 * Created by Limbo on 2015/4/24.
 */
 
/*(function($){
	setInterval(function(){
		$('div[id^="cproIframe"]').attr('id', 'unti-' + +new Date());
	}, 10);
})(jQuery);*/

$(function () {
    // ------------------------------------------------------ header_logo & footer_gotop
    $("body").append('<div id="body_gotop" class="body-gotop"></div>');
    function m_header_tool_open () {
        $("#m_header_tool").show();
        $("#m_header_tool .shadow").animate({opacity:".4"} , 200 , function() {
            $("#m_header_tool .t-box").animate({right:"0"} , 200);
        });
    }
    function m_header_tool_close () {
        $("#m_header_tool .t-box").animate({right:"-270px"} , 200 , function() {
            $("#m_header_tool .shadow").animate({opacity:".4"} , 200 , function() {
                $("#m_header_tool").hide();
            });
        });
    }
    $("#m_header_tool_key").click(function() { m_header_tool_open(); });
    $("#m_header_tool .shadow").click(function() { m_header_tool_close(); });
    $("#m_header_tool .t-box div").find("i").click(function() { m_header_tool_close(); });
    var $goTop=$("#body_gotop");
    $(window).scroll(function(){
        var Top=$(window).scrollTop();
        Top>100?$goTop.show():$goTop.hide()
    });
    $goTop.click(function() {
        $("html,body").stop(false,false).animate({scrollTop:0}, 300);
    });

    // ------------------------------------------------------ m_adfixbox
    if($("#m_adfixbox").length > 0) {
        var m_adfixbox_height = $("#m_adfixbox").height();
        $(".footer").css("margin-bottom",m_adfixbox_height);
        $(".body-gotop").css("bottom",m_adfixbox_height + 30);
        $("#m_adfixbox").find(".close").click(function () {
            $("#m_adfixbox").hide();
            $(".footer").css("margin-bottom","0");
            $(".body-gotop").css("bottom","16px");
        });
    }

    // ------------------------------------------------------ m-tabs [ swiper ]
    if ($("#swiper_focus").length > 0) {
        var focus_li_len = $("#swiper_focus .swiper-slide").length;
        $("#swiper_focus_position").find("cite").text(focus_li_len);
        var swiper_focus = new Swiper('#swiper_focus', {
            autoplay : 4000,
            autoplayDisableOnInteraction : false,
            loop: true,
            onSlideChangeStart: function(swiper) {
                var focus_now = $("#swiper_focus .swiper-slide-active").index();
                if(focus_now > focus_li_len) { focus_now = 1; }else if(focus_now == 0){ focus_now = focus_li_len; }
                $("#swiper_focus_position").find("i").text(focus_now);
            }
        });
    }
    if ($("#swiper_tabs1").length > 0) {
        var swiper_tabs1 = new Swiper('#swiper_tabs1', {
            loop: true,
            pagination : '#swiper_tabs1_pagination',
            paginationClickable :true,
            paginationBulletRender: function (index, className) {
                var name0 = $("#swiper_tabs1_pagination li:eq(0)").text();
                var name1 = $("#swiper_tabs1_pagination li:eq(1)").text();
                switch (index) {
                    case 0: name= name0 ;break;
                    case 1: name= name1 ;break;
                    default: name='';
                }
                return '<li class="' + className + '">' + name + '</li>';
            }
        });
    }
    if ($("#swiper_tabs2").length > 0) {
        var swiper_tabs2 = new Swiper('#swiper_tabs2', {
            loop: true,
            pagination : '#swiper_tabs2_pagination',
            paginationClickable :true,
            paginationBulletRender: function (index, className) {
                var name0 = $("#swiper_tabs2_pagination li:eq(0)").text();
                var name1 = $("#swiper_tabs2_pagination li:eq(1)").text();
                switch (index) {
                    case 0: name= name0 ;break;
                    case 1: name= name1 ;break;
                    default: name='';
                }
                return '<li class="' + className + '">' + name + '</li>';
            }
        });
    }
    if ($("#swiper_tabs3").length > 0) {
        var swiper_tabs3 = new Swiper('#swiper_tabs3', {
            loop: true,
            pagination : '#swiper_tabs3_pagination',
            paginationClickable :true,
            paginationBulletRender: function (index, className) {
                var name0 = $("#swiper_tabs3_pagination li:eq(0)").text();
                var name1 = $("#swiper_tabs3_pagination li:eq(1)").text();
                switch (index) {
                    case 0: name= name0 ;break;
                    case 1: name= name1 ;break;
                    default: name='';
                }
                return '<li class="' + className + '">' + name + '</li>';
            }
        });
    }
    if ($("#swiper_tabs4").length > 0) {
        var swiper_tabs4 = new Swiper('#swiper_tabs4', {
            loop: true,
            pagination : '#swiper_tabs4_pagination',
            paginationClickable :true,
            paginationBulletRender: function (index, className) {
                var name0 = $("#swiper_tabs4_pagination li:eq(0)").text();
                var name1 = $("#swiper_tabs4_pagination li:eq(1)").text();
                switch (index) {
                    case 0: name= name0 ;break;
                    case 1: name= name1 ;break;
                    default: name='';
                }
                return '<li class="' + className + '">' + name + '</li>';
            }
        });
    }
    if ($("#swiper_tabs5").length > 0) {
        var swiper_tabs5 = new Swiper('#swiper_tabs5', {
            loop: true,
            pagination : '#swiper_tabs5_pagination',
            paginationClickable :true,
            paginationBulletRender: function (index, className) {
                var name0 = $("#swiper_tabs5_pagination li:eq(0)").text();
                var name1 = $("#swiper_tabs5_pagination li:eq(1)").text();
                switch (index) {
                    case 0: name= name0 ;break;
                    case 1: name= name1 ;break;
                    default: name='';
                }
                return '<li class="' + className + '">' + name + '</li>';
            }
        });
    }
    if ($("#swiper_tabs6").length > 0) {
        var swiper_tabs6 = new Swiper('#swiper_tabs6', {
            loop: true,
            pagination : '#swiper_tabs6_pagination',
            paginationClickable :true,
            paginationBulletRender: function (index, className) {
                var name0 = $("#swiper_tabs6_pagination li:eq(0)").text();
                var name1 = $("#swiper_tabs6_pagination li:eq(1)").text();
                switch (index) {
                    case 0: name= name0 ;break;
                    case 1: name= name1 ;break;
                    default: name='';
                }
                return '<li class="' + className + '">' + name + '</li>';
            }
        });
    }
    if ($("#swiper_tabs7").length > 0) {
        var swiper_tabs7 = new Swiper('#swiper_tabs7', {
            loop : true,
            pagination : '#swiper_tabs7_pagination',
            paginationClickable :true
        });
    }
    if ($("#swiper_tabs8").length > 0) {
        var swiper_tabs8 = new Swiper('#swiper_tabs8', {
            loop: true,
            pagination : '#swiper_tabs8_pagination',
            paginationClickable :true,
            paginationBulletRender: function (index, className) {
                var name0 = $("#swiper_tabs8_pagination li:eq(0)").text();
                var name1 = $("#swiper_tabs8_pagination li:eq(1)").text();
                var name2 = $("#swiper_tabs8_pagination li:eq(2)").text();
                var name3 = $("#swiper_tabs8_pagination li:eq(3)").text();
                switch (index) {
                    case 0: name= name0 ;break;
                    case 1: name= name1 ;break;
                    case 2: name= name2 ;break;
                    case 3: name= name3 ;break;
                    default: name='';
                }
                return '<li class="' + className + '">' + name + '</li>';
            }
        });
    }
    if ($("#swiper_tabs_ask").length > 0) {
        var swiper_tabs_ask = new Swiper('#swiper_tabs_ask', {
            autoplay : 4000,
            autoplayDisableOnInteraction : true,
            loop : true,
            pagination : '#swiper_tabs_ask_pagination',
            paginationClickable :true,
            paginationBulletRender: function (index, className) {
                var name0 = $("#swiper_tabs_ask_pagination li:eq(0)").text();
                var name1 = $("#swiper_tabs_ask_pagination li:eq(1)").text();
                var name2 = $("#swiper_tabs_ask_pagination li:eq(2)").text();
                var name3 = $("#swiper_tabs_ask_pagination li:eq(3)").text();
                switch (index) {
                    case 0: name= name0 ;break;
                    case 1: name= name1 ;break;
                    case 2: name= name2 ;break;
                    case 3: name= name3 ;break;
                    default: name='';
                }
                return '<li class="' + className + '">' + name + '</li>';
            }
        });
    }
    if ($("#swiper_tabs_ypk").length > 0) {
        var swiper_tabs_ypk = new Swiper('#swiper_tabs_ypk', {
            autoplay : 4000,
            autoplayDisableOnInteraction : true,
            loop : true,
            pagination : '#swiper_tabs_ypk_pagination',
            paginationClickable :true,
            paginationBulletRender: function (index, className) {
                var name0 = $("#swiper_tabs_ypk_pagination li:eq(0)").text();
                var name1 = $("#swiper_tabs_ypk_pagination li:eq(1)").text();
                var name2 = $("#swiper_tabs_ypk_pagination li:eq(2)").text();
                var name3 = $("#swiper_tabs_ypk_pagination li:eq(3)").text();
                switch (index) {
                    case 0: name= name0 ;break;
                    case 1: name= name1 ;break;
                    case 2: name= name2 ;break;
                    case 3: name= name3 ;break;
                    default: name='';
                }
                return '<li class="' + className + '">' + name + '</li>';
            }
        });
    }
    if ($("#swiper_tabs_ps").length > 0) {
        var swiper_tabs_ps = new Swiper('#swiper_tabs_ps', {
            autoplay : 4000,
            autoplayDisableOnInteraction : true,
            loop : true,
            pagination : '#swiper_tabs_ps_pagination',
            paginationClickable :true,
            paginationBulletRender: function (index, className) {
                var name0 = $("#swiper_tabs_ps_pagination li:eq(0)").text();
                var name1 = $("#swiper_tabs_ps_pagination li:eq(1)").text();
                var name2 = $("#swiper_tabs_ps_pagination li:eq(2)").text();
                var name3 = $("#swiper_tabs_ps_pagination li:eq(3)").text();
                switch (index) {
                    case 0: name= name0 ;break;
                    case 1: name= name1 ;break;
                    case 2: name= name2 ;break;
                    case 3: name= name3 ;break;
                    default: name='';
                }
                return '<li class="' + className + '">' + name + '</li>';
            }
        });
    }
    if ($("#swiper_somes").length > 0) {
        var swiper_somes = new Swiper('#swiper_somes', {
            loop: true,
            nextButton: '#swiper_somes_change'
        });
    }

    // ------------------------------------------------------ m_disease
    if ($("#m_disease").length > 0) {
        var i_jbk = 0;
        $("#m_disease").find(".jbk-btn").click(function () {
            if(i_jbk == 0) {
                $(this).addClass("jbk-btn-show");
                $("#m_disease").find(".jbk-box").show();
                i_jbk++;
            }else{
                $(this).removeClass("jbk-btn-show");
                $("#m_disease").find(".jbk-box").hide();
                i_jbk--;
            }
        });
    }

    // ------------------------------------------------------ m-photo
    if ($("#swiper_photo_nav").length > 0) {
        var swiper_photo_nav = new Swiper('#swiper_photo_nav', {
            slidesPerView: 'auto',
            freeMode: true,
            preventLinksPropagation : false
        });
        $("#swiper_photo_nav .swiper-slide").on('click',function(e){
            e.preventDefault();
            $("#swiper_photo_nav .active").removeClass('active');
            $(this).addClass('active');
            swiper_photo_box.slideTo( $(this).index() );
        })
        var swiper_photo_box = new Swiper('#swiper_photo_box', {
            lazyLoading : true,
            onSlideChangeStart: function(){
                $("#swiper_photo_nav .active").removeClass('active');
                $("#swiper_photo_nav .swiper-slide").eq(swiper_photo_box.activeIndex).addClass('active');
            }
        });
        swiper_photo_box.params.control = swiper_photo_nav;
    }
    if ($("#m_photo_single_img").length > 0) {
        $("#m_photo_single_img").click(function () {
            var next_links = $("#m_photo_single_next").prop("href");
            window.location.assign(next_links);
        });
    }
    if ($("#swiper_photo_hot").length > 0) {
        var swiper_photo_hot = new Swiper('#swiper_photo_hot', {
            autoplay : 4000,
            autoplayDisableOnInteraction : true,
            loop: true,
            prevButton:'#swiper_photo_hot_prev',
            nextButton:'#swiper_photo_hot_next',
            pagination : '#swiper_photo_hot_pagination'
        });
    }

    // ------------------------------------------------------ m_arts
    if ($("#m_arts").length > 0) {
        var i_text = 1;
        $("#m_arts_text .t1").click(function() {
            if(i_text == 2) {
                $("#m_arts_text i").animate({left:"0px"},200, function () {
                    $("#m_arts .arts").css("font-size","18px");
                });
                i_text--;
            }
        });
        $("#m_arts_text .t2").click(function() {
            if(i_text == 1) {
                $("#m_arts_text i").animate({left:"31px"},200, function () {
                    $("#m_arts .arts").css("font-size","20px");
                });
                i_text++;
            }
        });
        if($("#m_arts .art_page a.next").length > 0) {
            $(".atPic-img").append("<i>点击图片翻页</i>");
            $(".atPic-img").click(function () {
                var next_links = $(".art_page a.next").prop("href");
                window.location.assign(next_links);
            });
        }else{
            $(".atPic-img").append("<i>已是最后一页</i>");
        }
    }
    if($(".art_page a").size()) {
        $(".art_page").show();
    }

    // ------------------------------------------------------ lists-pic-tag
    if ($(".lists-pic-tag").length > 0) {
        $(".lists-pic-tag li").find("img[src='#ThumbImageURL#']").parents("li").addClass("no-img");
        $(".lists-pic-tag li").find("img[src='']").parents("li").addClass("no-img");
    }
    if ($("#m_uls_single").length > 0) {
        var uls_single = 40, uls_single_len = $("#m_uls_single ul li").length, uls_single_count = Math.ceil(uls_single_len / 20), uls_single_i = 1;
        $("#m_uls_single").find(".m-more").click(function () {
            if(uls_single_i < uls_single_count) {
                $("#m_uls_single ul li").each(function () {
                    var li_in = $(this).index();
                    if(li_in >= uls_single) {
                        $(this).hide();
                    }else{
                        $(this).show();
                    }
                });
                uls_single+=20;
                uls_single_i++;
                if(uls_single_i == uls_single_count) {
                    $(this).hide();
                }
            }
        });
    }
    if ($("#swiper_tabs_uls").length > 0) {
        // change swiper_tabs_uls's height
        var uls1_height = $("#swiper_tabs_uls1 ul").height() + 84;
        $("#swiper_tabs_uls .swiper-wrapper").height(uls1_height);
        // swiper_tabs_uls1's m-more
        var uls1 = 40, uls1_len = $("#swiper_tabs_uls1 ul li").length, uls1_count = Math.ceil(uls1_len / 20), uls1_i = 1;
        $("#swiper_tabs_uls1").find(".m-more").click(function () {
            if(uls1_i < uls1_count) {
                $("#swiper_tabs_uls1 ul li").each(function () {
                    var li_in = $(this).index();
                    if(li_in >= uls1) {
                        $(this).hide();
                    }else{
                        $(this).show();
                    }
                });
                uls1+=20;
                uls1_i++;
                if(uls1_i == uls1_count) {
                    $(this).hide();
                }
            }
            // change swiper_tabs_uls's height
            var uls1_height = $("#swiper_tabs_uls1 ul").height() + 84;
            if($("#swiper_tabs_uls1 .m-more").is(":hidden")) {
                uls1_height = $("#swiper_tabs_uls1 ul").height();
            }
            $("#swiper_tabs_uls .swiper-wrapper").height(uls1_height);
        });
        // swiper_tabs_uls2's m-more
        var uls2 = 40, uls2_len = $("#swiper_tabs_uls2 ul li").length, uls2_count = Math.ceil(uls2_len / 20), uls2_i = 1;
        $("#swiper_tabs_uls2").find(".m-more").click(function () {
            $("#swiper_tabs_uls .swiper-wrapper").css("height","auto");
            if(uls2_i < uls2_count) {
                $("#swiper_tabs_uls2 ul li").each(function () {
                    var li_in = $(this).index();
                    if(li_in >= uls2) {
                        $(this).hide();
                    }else{
                        $(this).show();
                    }
                });
                uls2+=20;
                uls2_i++;
                if(uls2_i == uls2_count) {
                    $(this).hide();
                }
            }
            // change swiper_tabs_uls's height
            var uls2_height = $("#swiper_tabs_uls2 ul").height() + 84;
            if($("#swiper_tabs_uls2 .m-more").is(":hidden")) {
                uls2_height = $("#swiper_tabs_uls2 ul").height();
            }
            $("#swiper_tabs_uls .swiper-wrapper").height(uls2_height);
        });
        // swiper_tabs_uls
        var swiper_tabs_uls = new Swiper('#swiper_tabs_uls', {
            pagination : '#swiper_tabs_uls_pagination',
            paginationClickable :true,
            paginationBulletRender: function (index, className) {
                var name0 = $("#swiper_tabs_uls_pagination li:eq(0)").text();
                var name1 = $("#swiper_tabs_uls_pagination li:eq(1)").text();
                switch (index) {
                    case 0: name= name0 ;break;
                    case 1: name= name1 ;break;
                    default: name='';
                }
                return '<li class="' + className + '">' + name + '</li>';
            },
            onSlideChangeEnd: function(swiper){
                // change swiper_tabs_uls's height
                var uls1_height = $("#swiper_tabs_uls1 ul").height() + 84;
                if($("#swiper_tabs_uls1 .m-more").is(":hidden")) {
                    uls1_height = $("#swiper_tabs_uls1 ul").height();
                }
                var uls2_height = $("#swiper_tabs_uls2 ul").height() + 84;
                if($("#swiper_tabs_uls2 .m-more").is(":hidden")) {
                    uls2_height = $("#swiper_tabs_uls2 ul").height();
                }
                var i_active = $("#swiper_tabs_uls .swiper-pagination-bullet-active").index();
                if(i_active == 1) {
                    $("#swiper_tabs_uls .swiper-wrapper").height(uls2_height);
                }else{
                    $("#swiper_tabs_uls .swiper-wrapper").height(uls1_height);
                }
            }

        });
    }

    // ------------------------------------------------------ original
    if($("#m_orginal_list").size()) {
        $("#m_orginal_list li").find("img[src='#ThumbImageURL#']").parents("li").addClass("no-img");
        $("#m_orginal_list li").find("img[src='']").parents("li").addClass("no-img");
    }

    // ------------------------------------------------------ fixed_ad
    if($("#fixed_ad").size()) {
        var fixed_ad_height = $("#fixed_ad").height();
        $(".footer").css("padding-bottom",fixed_ad_height);
        $("#body_gotop").css("bottom",16 + fixed_ad_height);
        $("#fixed_ad").find(".fixed-ad-close").click(function () {
            $(".footer").css("padding-bottom",0);
            $("#body_gotop").css("bottom",16);
            $("#fixed_ad").remove();
        });
    }

	// ------------------------------------------------------show and hide

	function yc(){
		for(i=0;i<10;i++){
		$(".m_stwy li").eq(i).show();
		$("#ge").show();
		}
		}
	yc();
	$("#ge").click(function(){
	if($(".m_stwy li").eq(10).is(":hidden")){
		$(".m_stwy li").show();
		$("#ge").html('收起');
		$("#ge").addClass("sq")
	}else{
		$(".m_stwy li").hide();
		yc();
		$("#ge").html('更多');
		}
	})




});