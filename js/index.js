// js--loader
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("#js--loader").style.visibility = "visible";
  } else {
    document.querySelector("#js--loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
    document.querySelector("body").style.overflow = "auto";
  }
};
var menuSelected = null;
$(document).ready(function() {
  $(
    "#js--header__nameZh,#js--header__nameEn,#js--header__Title,#js--header__secondTitle"
  ).addClass("headerTxt--Ani");
  $("#js--header__navBarOnPc").addClass("header__navBarOnPc--Ani");
  $(".header__linkWrap__linkOnPc").addClass("header__linkWrap__linkOnPc--Ani");
  $(".header__wrapper__linkWrap").addClass("header__wrapper__linkWrap--Ani");
  $(".js--secimg--fancybox").fancybox({
    padding: "0",
    overlayOpacity: 0.7,
    overlayColor: "#000",
    overlay: { locked: false },
    showCloseButton: true,
    autoScale: true,
    titleShow: true,
    titlePosition: "outside",
    onStart: function() {
      $("body").toggleClass("js--navScrollDisable");
    },
    onClosed: function() {
      $("body").toggleClass("js--navScrollDisable");
    }
  });
  // nav手機禁止捲動
  $("#js--header__mobileNav,.js--secimg--fancybox").on("touchmove", function(
    event
  ) {
    event.preventDefault();
  });
  //  整頁滑動
  $("#js--header__goTopBtn>a").click(function() {
    if ($(window).width() > 1024) {
      $("#js--header__goTopBtn>a").attr("href", "#js--secBrandManul");
    } else {
      $("#js--header__goTopBtn>a").attr("href", "#js--home");
    }
    targetTop = $($(this).attr("href")).position().top;
    //控制整頁滑動
    $("html,body").animate({ scrollTop: targetTop }, 500, "easeOutSine");
  });
  $(
    "#js--header__mobileNav__linkWrap a,#js--header__mobileNav__goTopBtn,#js--header__navBarOnPc a"
  ).click(function() {
    //偵測對應前往的section的top距離
    targetTop = $($(this).attr("href")).position().top;
    //控制整頁滑動
    $("html,body").animate({ scrollTop: targetTop }, 500, "easeOutSine");
    if ($("#js--header__navbarToggleBtn").is(":visible")) {
      $("#js--header__navbarToggleBtn").trigger("click");
    }
  });
  //  手機、PC選單切換
  $("#js--header__navbarToggleBtn").click(function() {
    $("#js--header__mobileNav,#js--header__goTopBtn").slideToggle(300);
    $("#js--header__navbarToggleBtn>i").toggleClass("fa-times", "fa-bars");
    $("#js--header__navbarToggleBtn").toggleClass(
      "js--header__navbarToggleBtn--toggle"
    );
    $("body").toggleClass("js--navScrollDisable");
  });
  $(window).resize(function() {
    if ($("#js--header__navbarToggleBtn").is(":hidden")) {
      $("#js--header__mobileNav").hide();
    } else {
      if (
        $("#js--header__navbarToggleBtn").hasClass(
          "js--header__navbarToggleBtn--toggle"
        )
      ) {
        $("#js--header__navbarToggleBtn").removeClass(
          "js--header__navbarToggleBtn--toggle"
        );
        $("#js--header__navbarToggleBtn>i").addClass("fa-bars");
        $("#js--header__navbarToggleBtn>i").removeClass("fa-times");
        $("#js--header__mobileNav").hide();
      }
    }
  });
  //  滑到就加入動畫
  var windowHeight = window.innerHeight,
    gridTop = windowHeight * 0.2,
    gridBottom = windowHeight * 0.8;
  $(window).on("scroll", function() {
    $(".skillProgress__wrap__skillwrap__progress").each(function() {
      var thisTop = $(this).offset().top - $(window).scrollTop();
      if (thisTop >= gridTop && thisTop + $(this).height() <= gridBottom) {
        $(this).addClass("skillLvl--Ani");
      }
    });
    $(".js--section__titleWrap h2,.js--section__titleWrap")
      .not(
        "#js--secID .js--section__titleWrap h2,#js--secID .js--section__titleWrap,#js--secBrandManul .js--section__titleWrap h2,#js--secBrandManul .js--section__titleWrap"
      )
      .each(function() {
        var thisTop = $(this).offset().top - $(window).scrollTop();
        if (thisTop >= gridTop && thisTop + $(this).height() <= gridBottom) {
          $(this).addClass("section__title--Ani");
        }
      });
    if ($(window).width() < 1024) {
      $(
        "#js--secID .js--section__titleWrap h2,#js--secID .js--section__titleWrap,#js--secBrandManul .js--section__titleWrap h2,#js--secBrandManul .js--section__titleWrap"
      ).each(function() {
        var thisTop = $(this).offset().top - $(window).scrollTop();
        if (thisTop >= gridTop && thisTop + $(this).height() <= gridBottom) {
          $(this).addClass("section__title--Ani");
        }
      });
    } else {
      $(
        "#js--secID .js--section__titleWrap h2,#js--secID .js--section__titleWrap,#js--secBrandManul .js--section__titleWrap h2,#js--secBrandManul .js--section__titleWrap"
      ).addClass("section__title--Ani");
    }
  });
  $(window).trigger("scroll");
  // tab
  $(".js--tab__btnWrap__btn").click(function() {
    if ($(this).not(".js--tab__btnActive")) {
      var btnIndex = $(this).index();
      var tabContent = $(this)
        .parent(".js--tab__btnWrap")
        .next(".tab__contentWrap")
        .children(".tab__contentWrap__content")
        .eq(btnIndex);
      tabContent.addClass("js--tab__contentWrap__content--active");
      tabContent
        .siblings()
        .removeClass("js--tab__contentWrap__content--active");
      $(this).addClass("js--tab__btnActive");
      $(this)
        .siblings()
        .removeClass("js--tab__btnActive");
    }
  });
  // hover 換圖
  $(".js--wrapper__imgwrap__wrap img").hover(
    function() {
      var imgIndex =
        $(this)
          .parents(".js--wrapper__imgwrap__wrap")
          .index() + 1;
      $(this).attr(
        "src",
        "images/indexPhoto/indexPhoto500/indexPhoto500-" + imgIndex + ".jpg"
      );
    },
    function() {
      var imgIndex =
        $(this)
          .parents(".js--wrapper__imgwrap__wrap")
          .index() + 1;
      $(this).attr(
        "src",
        "images/indexPhoto/indexPhoto500B/indexPhoto500B " + imgIndex + ".jpg"
      );
    }
  );
});
//scrollspy
(function($) {
  "use strict";
  // all parameters are optional
  smartScroll.init({
    speed: 500, // default 500
    addActive: true, // default true
    activeClass: "js--header__navBarOnPc--active", // default active
    offset: 0 // default 100
  });
})(jQuery);
// img lazy
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;
  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(function() {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function(img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src;
          img.classList.remove("lazy");
        }
      });
      if (lazyloadImages.length == 0) {
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
