AOS.init();

$(window).load(function(){
      $("#preloader").delay(400).fadeOut ("slow");
      $(".loader").fadeOut();
});

$(".grid").magnificPopup({
    type:"image",
    delegate: "a",
    gallery:{ enabled: true}
});

$(".counter").counterUp({
    delay: 20,
    time: 2000
});



$(".navbar-nav>li>a").click(function(){
   $(".navbar-collapse").collapse("hide") 
});

$(".wrap-3 .card").mouseover(function(){
   $(this).find("h5").css({"transform":"translateX(50px)", "transition":".6s", "color":"#b68834"}) 
    $(this).find("h6").css({"transform":"rotate(30deg) scale(1.5)"})
});

$(".wrap-3 .card").mouseout(function(){
   $(this).find("h5").css({"transform":"translateX(0)", "transition":".6s", "color":"#000"}) 
    $(this).find("h6").css({"transform":"rotate(0)"})
});


$(window).scroll(function(){
        var x=$(this).scrollTop();
        if(x>20 && x<550){
            $(".navbar").hide()
            
        }
        else{
            $(".navbar").show()
        };
        
        var y=$(this).scrollTop();
        if(y>= 550){
            $(".navbar").css({"background-color":"#424242", "transition": ".5s", "padding":"10px 0"});
        }
        else{
            $(".navbar").css({"background-color":"transparent", "transition": ".5s", "padding":"20px 0"});
        };
    
       var z=$(this).scrollTop();
       if(z>=20){
           $(".wrap-1 .section-1 h1").fadeIn(2000)
           $(".wrap-1 .section-1 .buy-btn").delay(800).fadeIn(1000)
       }
        
    });




$("a[href*='#']").click(function(e){
      e.preventDefault();
      $("html,body").animate(
          {scrollTop: $($(this).attr("href")).offset().top,
          }, 
          500,
          "linear"
      )
  });

$(window).load(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
});