// loader
document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
          "body").style.visibility = "hidden";
        document.querySelector( 
          "body").style.overflow="hidden";
        document.querySelector( 
          "#loader").style.visibility = "visible";
    } else { 
        document.querySelector( 
          "#loader").style.display = "none"; 
        document.querySelector(
          "body").style.visibility = "visible";
        document.querySelector( 
          "body").style.overflow="auto";
    } 
};
var menuSelected = null;
$(document).ready(function(){
    $('.headerTxt h1,.headerTxt h2,.headerTxt h3').addClass('headerTxtAni');
    $('#pcNav').addClass('pcNavAni');
    $('.linkSocial').addClass('linkSocialAni');
    $('.link').addClass('linkAni');
    $("a.single_image").fancybox({
        'padding'               : '0',
        'overlayOpacity'		:  0.7,
        'overlayColor'		    : '#000',
        'overlay'               : {locked: false},
        'showCloseButton'       :  true,
        'autoScale'             :  true,
        'titleShow'             :  true,
        'titlePosition'         : 'outside',
        'onStart'               : function(){$('body').toggleClass('navScrollDisable');},
        'onClosed'              : function(){$('body').toggleClass('navScrollDisable');}
    });
    // fancybox madol
    $("a#inline").trigger('click');
    // nav手機禁止捲動
        $('#asidepage,.single_image').on('touchmove', function(event) {
            event.preventDefault();
        });
    //  整頁滑動
        $('#btnTop>a').click(function(){
            if ($(window).width() > 1024){
                $('#btnTop>a').attr("href","#sec2");
            }else{
                $('#btnTop>a').attr("href","#home");
            };
            targetTop = $($(this).attr('href')).position().top;
            //控制整頁滑動
            $('html,body').animate({scrollTop:targetTop},500,"easeOutSine");
        });
        $('.navLink>a,.navToHome,#pcNav a').click(function(){
            //偵測對應前往的section的top距離
            targetTop = $($(this).attr('href')).position().top;
            //控制整頁滑動
            $('html,body').animate({scrollTop:targetTop},500,"easeOutSine");
            if($('#btnBar').is(':visible')){ $('#btnBar').trigger('click'); }
        });
    //  手機、PC選單切換
        $('#btnBar').click(function(){
            $('#asidepage,#btnTop').slideToggle(300);
            $("#btnBar>i").toggleClass('fa-times','fa-bars');
            $("#btnBar").toggleClass('btnBarBg');
            $('body').toggleClass('navScrollDisable');
        });
        $(window).resize(function(){
            if( $('#btnBar').is(':hidden') ){
                $('#asidepage').hide();
            }else{
                if($('#btnBar').hasClass('btnBarBg')){
                    $('#btnBar').removeClass('btnBarBg');
                    $("#btnBar>i").addClass('fa-bars');
                    $("#btnBar>i").removeClass('fa-times');
                    $('#asidepage').hide();
                }
            }
        });
    //  滑到就加入動畫
        var windowHeight = window.innerHeight,
        gridTop = windowHeight * 0.2,
        gridBottom = windowHeight * 0.8;
        $(window).on('scroll',function(){
            $('.skillLvlEach').each(function(){
                var thisTop = $(this).offset().top - $(window).scrollTop();
                if(thisTop >= gridTop && (thisTop + $(this).height())<= gridBottom){
                    $(this).addClass('skillLvlAni');
                }
                // else{$(this).removeClass('skillLvlAni');}
            });
            $('.secTitle h2,.secTitle').not('#sec1 .secTitle h2,#sec1 .secTitle,#sec2 .secTitle h2,#sec2 .secTitle').each(function(){
                var thisTop = $(this).offset().top - $(window).scrollTop();
                if(thisTop >= gridTop && (thisTop + $(this).height())<= gridBottom){
                    $(this).addClass('secTxtAni');
                }
                // else{$(this).removeClass('secTxtAni');}
            });
            if ($(window).width() < 1024) {
                $('#sec1 .secTitle h2,#sec1 .secTitle,#sec2 .secTitle h2,#sec2 .secTitle').each(function(){
                    var thisTop = $(this).offset().top - $(window).scrollTop();
                    if(thisTop >= gridTop && (thisTop + $(this).height())<= gridBottom){
                        $(this).addClass('secTxtAni');
                    }// else{$(this).removeClass('secTxtAni');}
                });
            }else{$('#sec1 .secTitle h2,#sec1 .secTitle,#sec2 .secTitle h2,#sec2 .secTitle').addClass('secTxtAni')}
        });
        $(window).trigger('scroll');
    // tab
        $('.tabBtn').click(function(){
            if($(this).not('.tabBtnActive')){
                var btnIndex = $(this).index();
                var tabContent = $(this).parent('.tabBtnBox').next('.tabContentBox').children('.tabContentInsideBox').eq(btnIndex); 
                tabContent.addClass('tabContentActive');
                tabContent.siblings().removeClass('tabContentActive');
                $(this).addClass('tabBtnActive');
                $(this).siblings().removeClass('tabBtnActive');
            };
        });
    // hover 換圖
        $('.imgContainer img').hover(function(){
            var imgIndex = $(this).parents('.imgBox').index() +1
            $(this).attr("src","images/indexPhoto/indexPhoto500/indexPhoto500-"+ imgIndex +".jpg");
        },function(){
            var imgIndex = $(this).parents('.imgBox').index() +1
            $(this).attr("src","images/indexPhoto/indexPhoto500B/indexPhoto500B "+ imgIndex +".jpg")
        });
});
//scrollspy
(function ($) {
    "use strict";
    // all parameters are optional
    smartScroll.init({
        speed: 500, // default 500
        addActive: true, // default true
        activeClass: "navPcActive", // default active
        offset: 0 // default 100
    }, function () {
        console.log("callback");
    });
})(jQuery);
// img lazy
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout
    function lazyload () {
        if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }    
        lazyloadThrottleTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if(img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
            if(lazyloadImages.length == 0) { 
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});