 $(document).ready(function() {

  // MATERIAL DISIGN INK EFFECT 
          var ink, d, x, y;
          $(".ripplelink").on('click',function(e) {
            if ($(this).find(".ink").length === 0) {
              $(this).prepend("<span class='ink'></span>");
            }

            ink = $(this).find(".ink");
            ink.removeClass("animateRipple");

            if (!ink.height() && !ink.width()) {
              d = Math.max($(this).outerWidth(), $(this).outerHeight());
              ink.css({
                height: d,
                width: d
              });
            }

            x = e.pageX - $(this).offset().left - ink.width() / 2;
            y = e.pageY - $(this).offset().top - ink.height() / 2;  

            ink.css({
              top: y + 'px',
              left: x + 'px'
            }).addClass("animateRipple");
          });

    $('button').on('click',function(){
        $(this).toggleClass("close");
    });
    var images = "images/";
    var iconsKnow = ['HTML','CSS','JAVASCRIPT','JQUERY','RWD','BOOTSTRAP','SASS','MYSQL','PHP','PHOTOSHOP'];
    var logoExt = "_Logo.png";
    var winWidth = $(window).width();
    var n = 0;
    knowledge();
    $(window).resize(function(){
        infinite();
    });

    function knowledge() {
      var time = setTimeout(function(){
        winWidth = $(window).width();
      },1000);
        if(winWidth > 1000)n = 5;
        else if(winWidth <= 1000 && winWidth > 800)n=4;
        else if(winWidth <=800 && winWidth > 500) n=3;
        else n=2;
        var s=0;
        var interval = 5000;
        $('section#know .icons').html('');
          for(var i=0;i<n;i++){
            $('section#know .icons').append('<img src="'+images+iconsKnow[i]+logoExt+'">').stop('true','true').animate({opacity:1}, 1000);
            }
          s=s + n;
        var infinite = setInterval(function(){
          winWidth = $(window).width();
           if(winWidth > 1000)n = 5;
        else if(winWidth <= 1000 && winWidth > 800)n=4;
        else if(winWidth <=800 && winWidth > 500) n=3;
        else n=2;
          console.log(n);
           $('section#know .icons').find('img').stop('true','true').animate({opacity:0}, 1000).parent().html('');
          for(var i=s;i<n+s;i++){
            if(i<iconsKnow.length)$('section#know .icons').append('<img src="'+images+iconsKnow[i]+logoExt+'">').find('img').stop('true','true').animate({opacity:1}, 1000);
            }
          s=s + n;
          if(s >= 10){
            s=0;
          }

        },interval);
       
    }


    $('.hamburger').on('click',function(){
      $("div.nav-column").fadeIn();
    });
    $('div.nav-column .close').on('click',function(){
      $("div.nav-column").fadeOut();
    });
     $('div.nav-column .nav-text a').on('click',function(){
      $("div.nav-column").fadeOut();
    });
});