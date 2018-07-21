
$(document).ready(function(){
  svg4everybody();

  var controller = new ScrollMagic.Controller();

  // All scenes
  var bottleScene,
      bottleOffsetScene,
      botanicalsScene,
      opacityScene,
      refadeScene,
      img1Scene,
      img1HandleScene,
      img2Scene,
      img2HandleScene,
      img3Scene,
      img3HandleScene,
      img4Scene,
      img4HandleScene,
      text1Scene,
      text1HandleScene,
      text2Scene,
      text2HandleScene,
      img5Scene,
      img5HandleScene,
      text3Scene,
      text3HandleScene,
      text4Scene,
      text4HandleScene;


  // Navigation
  // ========================================

  $(".nav__toggle").click(function() {
    $(".nav").addClass("is-active");
  });

  $(".nav__close").click(function() {
    $(".nav").removeClass("is-active");
  });

  $(".overlay").click(function() {
    $(".nav").removeClass("is-active");
  });

  // Bottle
  // ========================================

  var bottleTarget = $("#bottleTarget");
  var bottle = $("#bottle");
  var bottleDuration = bottleTarget.offset().top 
                       + bottleTarget.height()/2 
                       - (bottle.offset().top + bottle.height()/2)
                       - 160

  botanicalsScene = new ScrollMagic.Scene({
    triggerElement: "#bottle",
    duration: 330,
  })
  .setTween("#botanicals", { opacity: 0 })
  .addTo(controller);

  bottleScene = new ScrollMagic.Scene({
    triggerElement: "#bottle",
    duration: bottleDuration,
  })
  .setPin("#bottle")
  .addTo(controller);

  opacityScene = new ScrollMagic.Scene({
    triggerElement: "#bottle",
    duration: 660,
  })
  .setTween("#bottle", { opacity: .25, margin: "160px 0 0" })
  .addTo(controller);

  refadeScene = new ScrollMagic.Scene({
    triggerElement: "#bottleRefade",
    duration: 220,
    offset: 220
  })
  .setTween("#bottle", { opacity: 1 })
  .addTo(controller);

  if ( $(document).width() <= 1024 ) {

    bottleScene.offset( $(".hero").height()*.15 );
    botanicalsScene.offset( $(".hero").height()*.15 );
    opacityScene.offset( $(".hero").height()*.15 );
    opacityScene.setTween("#bottle", { opacity: 0 });
    refadeScene.destroy();
  }

  if ( $(document).width() > 1024 ) {

  // Image No.1
  // ========================================

  img1Scene = new ScrollMagic.Scene({
    triggerElement: "#img1",
    duration: $(window).height()/2,
    offset: $(window).height()/-2
  })
  .setTween("#img1mask", { transform: "translate(0, -"+$("#img1mask").height()/4+"px)" })
  .addTo(controller);

  img1HandleScene = new ScrollMagic.Scene({
    triggerElement: "#img1",
    duration: $(window).height()/2,
    offset: $(window).height()/-2
  })
  .setTween("#img1handle", { rotation: 270 })
  .addTo(controller);

  // Text No.1
  // ========================================

  text1Scene = new ScrollMagic.Scene({
    triggerElement: "#text1",
    duration: $(window).height()/2,
    offset: $(window).height()/-2
  })
  .setTween("#text1mask", { transform: "translate("+ $("#text1mask").width()/8 +"px, 0)" })
  .addTo(controller);

  text1HandleScene = new ScrollMagic.Scene({
    triggerElement: "#text1",
    duration: $(window).height()/2,
    offset: $(window).height()/-2
  })
  .setTween("#text1handle", { width: 30 })
  .addTo(controller);

  // Image No.2
  // ========================================

  img2Scene = new ScrollMagic.Scene({
    triggerElement: "#img2",
    duration: $(window).height()/2,
    offset: $(window).height()/-2
  })
  .setTween("#img2mask", { transform: "translate(-"+ $("#img2mask").width()/4 +"px, 0)" })
  .addTo(controller);

  img2HandleScene = new ScrollMagic.Scene({
    triggerElement: "#img2",
    duration: $(window).height()/2,
    offset: $(window).height()/-2
  })
  .setTween("#img2handle", { width: 30 })
  .addTo(controller);

  // Image No.3
  // ========================================

  img3Scene = new ScrollMagic.Scene({
    triggerElement: "#img3",
    duration: $(window).height()/2,
    offset: $(window).height()/-2
  })
  .setTween("#img3mask", { transform: "translate("+ $("#img3mask").width()/8 +"px, 0)" })
  .addTo(controller);

  img3HandleScene = new ScrollMagic.Scene({
    triggerElement: "#img3",
    duration: $(window).height()/2,
    offset: $(window).height()/-2
  })
  .setTween("#img3handle", { rotation: 270 })
  .addTo(controller);

  // Text No.2
  // ========================================

  text2Scene = new ScrollMagic.Scene({
    triggerElement: "#text2",
    duration: $(window).height()/2 + 110,
    offset: $(window).height()/-2 + 110
  })
  .setTween("#text2mask", { transform: "translate(-"+ $("#text2mask").width()/8 +"px, 0)" })
  .addTo(controller);

  text2HandleScene = new ScrollMagic.Scene({
    triggerElement: "#text2",
    duration: $(window).height()/2 + 110,
    offset: $(window).height()/-2 + 110
  })
  .setTween("#text2handle", { rotation: 270 })
  .addTo(controller);

  // Image No.4
  // ========================================

  img4Scene = new ScrollMagic.Scene({
    triggerElement: "#img4",
    duration: $(window).height()/2 + 110,
    offset: $(window).height()/-2 + 110
  })
  .setTween("#img4mask", { transform: "translate(0, "+ $("#img4mask").height()/8 +"px)" })
  .addTo(controller);

  img4HandleScene = new ScrollMagic.Scene({
    triggerElement: "#img4",
    duration: $(window).height()/2 + 110,
    offset: $(window).height()/-2 + 110
  })
  .setTween("#img4handle", { height: 30 })
  .addTo(controller);

  // Image No.5
  // ========================================

  img5Scene = new ScrollMagic.Scene({
    triggerElement: "#img5",
    duration: $(window).height()/2 + 110,
    offset: $(window).height()/-2 + 110
  })
  .setTween("#img5mask", { transform: "translate(0, -"+ $("#img5mask").height()/8 +"px)" })
  .addTo(controller);

  img5HandleScene = new ScrollMagic.Scene({
    triggerElement: "#img5",
    duration: $(window).height()/2 + 110,
    offset: $(window).height()/-2 + 110
  })
  .setTween("#img5handle", { rotation: 270 })
  .addTo(controller);
  }

  // Notes
  // ========================================

  // new ScrollMagic.Scene({
  //   triggerElement: "#note1",
  //   offset: -150
  // })
  // .setClassToggle("#note1, #note2, #note3, #note4", "is-visible")
  // .addTo(controller);

  // Scroll to
  // ========================================

  var scrollTo = function(target) {
    $("html,body").animate({
      scrollTop: target.offset().top - $(".header").height()
    });
  };

  $("[data-scroll-to]").each(function(){
    $(this).click(function(event){
      event.preventDefault();
      $(".nav").removeClass("is-active");
      scrollTo( $( $(this).attr("data-scroll-to") ) );
    });
  });

  // Expand

  $("[data-toggle-expand]").each(function(){
    $(this).click(function(){
      $("#expand").toggleClass("is-active");

      if ( $("#expand").hasClass("is-active") ) {
        $("#expand .expand__wrap").animate({
          height: $("#expand .expand__inner").height() + 60,
          opacity: 1
        }, 200);
      } else {
        $("#expand .expand__wrap").animate({
          height: 0,
          opacity: 0
        }, 200);
      }
    });
  });

  // Navigation on scroll

  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    var sections = $("[data-section]");
    sections.each( function() {
      var from = $(this).offset().top - $(".header").height() - $(window).height()/4,
          to = $(this).offset().top + $(this).height() + $(".header").height();

      if ( from <= scroll && scroll < to) {
        if ( !$("[data-scroll-to='#"+ $(this).attr("id") +"']").hasClass("is-active") ) {
          $(".nav__item.is-active").removeClass("is-active");
          $("[data-scroll-to='#"+ $(this).attr("id") +"']").addClass("is-active");
        }
      }
    });

  });
});
