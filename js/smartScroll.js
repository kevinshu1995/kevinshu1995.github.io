/*
    Creator: Mohamed Rabie Rabie Elmdary
    About:  Mean stack developer
    github: https://github.com/MohamedElmdary
    codepen: https://codepen.io/mohamed9714/
    License: MIT
*/
var smartScroll = (function ($, $w) {
    "use strict";
    var w       =   $($w),
        links   =   $("*[data-scroll]");
     // helper function to select element with jquery from dom
    // accepts [data-scroll] starts with # or without eg. #id || id
    function selectEelement(link) {
        return $("#" + link.data("scroll").replace(/^#+/, ""));
    }
     /* 
        main plugin function
        uses animation (jQuery function)
        provide error in case of couldn't find the specific [id] in dom
        id = [data-scroll] => value
    */
    function smartScroll(options, cb) {        
        if (links.length <= 0) throw new Error("data-scroll attr must be added");
        links.each(function () {
            var link = $(this);
            link.on("click", function (e) {
                e.preventDefault(); 
                var scrollTo = selectEelement(link);
                // try {
                //     $("body, html").animate({
                //         scrollTop: scrollTo.offset().top - options.offset
                //     }, options.speed);
                // } catch (err) {
                //     throw new Error("id:" +  link.data("scroll") + " cannot be found please make sure to add [data-scroll] attr value as id for an elemet");
                // }
            });
        });
        cb();
    }
     /*
        using window event api
        check which element should have active class
        byDefault it's enabled
    */
    function navItemsChooser(options) {
        links.each(function () {
            var link = selectEelement($(this));
            if (w.scrollTop() >= $(link).offset().top - options.offset) {
                $(this).addClass(options.activeClass);
                $(this).parent().siblings().children().removeClass(options.activeClass);
            }
        });
    }
       /* 
        main plugin function
        uses animation (jQuery function)
        provide error in case of couldn't find the specific [id] in dom
        id = [data-scroll] => value
        @param {object} options - smart scroll options
        @param {number} options.speed - smart scroll speed default is 500
        @param {number} options.offset - smart scroll elements offset
        @param {string} options.activeClass - active class name
    */
    function init(options, cb) {
        cb = typeof(cb) === "function"? cb : function () {return null;};
        if (typeof(options) === "function") {
            cb = options;
        }
        options = typeof(options) === "object"? options : {};
         var defaultOptions = {
            speed: options.speed|| 500,
            addActive: options.addActive|| true,
            activeClass: options.activeClass || "active",
            offset: options.offset || 100
        };
         smartScroll(defaultOptions, cb);
         if (defaultOptions.addActive) {
            navItemsChooser(defaultOptions);
            w.on("scroll", function () {
                navItemsChooser(defaultOptions);
            });
        }
    }
     return {init: init};
})(jQuery, window); 
