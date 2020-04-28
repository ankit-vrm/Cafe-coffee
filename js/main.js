AOS.init();


$(".grid").magnificPopup({
    type:"image",
    delegate: "a",
    gallery:{ enabled: true}
});

$(".counter").counterUp({
    delay: 20,
    time: 2000
});

$(".navbar-toggler-icon").click(function(){
       $("body").toggleClass("disable-scroll") 
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