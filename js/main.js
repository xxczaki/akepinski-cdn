"use strict";
var isFirefox = "undefined" != typeof InstallTrigger
  , mobileVar = isMobile.any;
$(".bg-cover").imagesLoaded({
    background: !0
}, function(e) {
    TweenMax.fromTo($(".bg-cover"), .25, {
        autoAlpha: 0
    }, {
        autoAlpha: 1
    })
}),
$(window).on("load", function() {
    var e = "#EC008C";
    $("#minimos-4").length && (e = "#F8EB31"),
    $("#drifter").length ? initDrifter("drifter", e) : $("#particles-js").length && initStompParticles();
    var n = $(".st-countdown");
    n.countdown("2017/09/01", function(e) {
        $(this).html(e.strftime("%D Days %H:%M:%S"))
    }),
 function() {
        n.countdown("resume")
    });
    var o, a, t = $(".main-content p"), s = $(".main-content h3"), r = $(".main-content ul"), i = "20px", c = new TimelineMax({
        paused: !0,
        delay: .05,
        onComplete: function() {
            r.length && TweenMax.to(r, .75, {
                autoAlpha: 1,
                ease: Linear.easeNone
            })
        },
        onCompleteParams: []
    });
    isFirefox ? i = "0px" : mobileVar && (i = "2px"),
    n.countdown("pause"),
    s.length && (a = new SplitText(s,{
        type: "words,chars",
        wordsClass: "gpu-hack sven-word-++",
        charsClass: "sven-char-++"
    }),
    c.staggerFromTo(a.chars, .4, {
        y: "-50%",
        opacity: 0
    }, {
        y: "0%",
        opacity: 1,
        ease: Bounce.easeOut
    }, .08),
    c.addLabel("end"),
    c.call(function() {
        n.countdown("resume")
    }, [])),
    t.length && (o = new SplitText(t,{
        type: "words,chars",
        wordsClass: "gpu-hack s-word sven-word-++",
        charsClass: "s-char sven-char-++"
    }),
    TweenMax.set(o.chars, {
        force3D: !0,
        rotationZ: "0.01deg"
    }),
    $.each(o.chars, function(e, n) {
        var o = $(n).css("color")
          , a = "end+=" + .04 * e;
        c.fromTo($(n), .8, {
            opacity: 0,
            textShadow: "0 0 " + i + " " + o,
            scale: 1.2,
            color: "transparent"
        }, {
            opacity: 1,
            scale: 1,
            color: o,
            textShadow: "none",
            ease: Linear.easeNone
        }, a)
    })),
    TweenMax.set($(".main-content"), {
        visibility: "visible"
    }),
    TweenMax.set($(".preloader"), {
        display: "none"
    }),
    c.play()
});
