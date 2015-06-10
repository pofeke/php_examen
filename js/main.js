

// Calcul header width & height

$('.indexHeader').width($(window).width());
$('.indexHeader').height($(window).height());


var drap = 0;

windowHeight = $(window).height();
windowWidth = $(window).width();

$(window).resize(function(){

    windowHeight = $(window).height();
    windowWidth = $(window).width();

    $('.indexHeader').width($(window).width());
    $('.indexHeader').height($(window).height());
    $('aside').width(windowWidth -307);

    nav();

    $('.video').width(windowWidth - $('.videoContent').width());

    videoHeight = $('.video ul li img').height();
    $('.video ul li img').css('margin-top', ($(window).height() - videoHeight)/parseInt(2)+33);
    

});

function nav(){
if ($('nav').hasClass('activeProfil')) {
    $('nav').css('right', windowWidth - 307 );
  }else{
    $('aside').css('right', -windowWidth);
  }
}




// menu animation

$('.menu').click(function(){
  $('nav').css('right', 0);
  $('nav').removeClass('activeProfil');
  $('header').css('opacity', '.5');
  $('.navFixed').css('opacity', '.5');
  $('main').css('opacity', '.5');
  $('body').addClass('stop-scrolling');

  drap ++;
});

$('.close').click(function(){
  $('nav').css('right', -307);
  $('nav').removeClass('activeProfil');
  $('aside').css('right', -(windowWidth -307));
  $('header').css('opacity', '1');
  $('.navFixed').css('opacity', '1');
  $('main').css('opacity', '1');
  $('body').removeClass('stop-scrolling');

  drap --;
});

$('header').click(function(){
  if (drap == 1) {
    $('nav').css('right', -307);
    $('nav').removeClass('activeProfil');
    $('aside').css('right', -(windowWidth -307));
    $('header').css('opacity', '1');
    $('main').css('opacity', '1');
    $('.navFixed').css('opacity', '1');
    $('body').removeClass('stop-scrolling');
    drap --;
  };
});

$('main').click(function(){
  if (drap == 1) {
    $('nav').css('right', -307);
    $('nav').removeClass('activeProfil');
    $('aside').css('right', -(windowWidth -307));
    $('header').css('opacity', '1');
    $('main').css('opacity', '1');
    $('.navFixed').css('opacity', '1');
    $('body').removeClass('stop-scrolling');
    drap --;
  };
});

$('.profil').click(function(){

  if ($('nav').hasClass('activeProfil')){
    $('nav').removeClass('activeProfil');
    $('nav').css('right', 0);
    $(this).text('<');
    $('aside').css('right', -(windowWidth -307));
    $('body').removeClass('stop-scrolling');
  }else{
    $('nav').css('right', (windowWidth -307));
    $(this).text('>');
    $('nav').addClass('activeProfil');
    $('aside').css('right', 0);
    $('body').addClass('stop-scrolling');
  };

});

// $(window).resize(function(){location.reload();});

// calcul width aside

$('aside').width(windowWidth -307);
$('aside').css('right', -(windowWidth -307));

// smooth scroll 

var scrolling = function(){
      var speed     = 600;
      jQuery('a[href^="#"]').bind('click',function(){
          var id = jQuery(this).attr('href');
          if(id == '#')
              goTo('body');
          else
              goTo(id);
          return(false);
         void(0);
      });
      function goTo(ancre){jQuery('html,body').animate({scrollTop:jQuery(ancre).offset().top},speed,'swing',function(){
            if(ancre != 'body')
                  window.location.hash = ancre;
            else
                window.location.hash = '#';
            jQuery(ancre).attr('tabindex','-1');
            jQuery(ancre).focus();
            jQuery(ancre).removeAttr('tabindex');
        });
      }
  };

jQuery(function(){
  scrolling();
});

// anim popup info

$('.close').mouseover(function(){
  $('.closeHover').css('opacity', 1);
});

$('.close').mouseout(function(){
  $('.closeHover').css('opacity', 0);
});

$('.closeConnect').mouseover(function(){
  $('.closeConnectHover').css('opacity', 1);
});

$('.closeConnect').mouseout(function(){
  $('.closeConnectHover').css('opacity', 0);
});

$('.closeAlert').mouseover(function(){
  $('.closeAlertHover').css('opacity', 1);
});

$('.closeAlert').mouseout(function(){
  $('.closeAlertHover').css('opacity', 0);
});

// Calcul center connect filed

var heightConnect = $('.connect').height();
var heightWindow = $(window).height();

$('.connect').css('top', (heightWindow - heightConnect)/parseInt(2));

//close Connect

$('.closeConnect').click(function(){
  $('.connect').css('display','none');
  $('header').css('opacity', '1');
  $('main').css('opacity', '1');
  $('footer').css('opacity', '1');
  $('body').removeClass('stop-scrolling');
});

// delete Alert

$('.closeAlert').click(function(){
  $('.alert').remove();
});

// slider

$('.align_pratique ul li.slide').css('opacity', 0);
$('.align_pratique ul li.slide:nth-child(1)').css('z-index', 500);

$('.align_pratique ul li.slide:nth-child(1)').css('opacity', 1);
var heightSlide = $('.align_pratique ul li.slide:nth-child(1)').height();
$('.align_pratique ul.slider').height(heightSlide);
$('.align_pratique').height(heightSlide);

$('.pratique ul li').click(function(){
    var count = ($(this).prevAll().length+1);
    $('.pratique ul li button').removeClass('activeButton');
    $('.pratique ul li:nth-child('+count+') button').addClass('activeButton');
    $('.align_pratique ul li.slide').css('opacity', 0);
    $('.align_pratique ul li.slide').css('z-inidex', 'inherit');
    $('.align_pratique ul li.slide:nth-child('+count+')').css('opacity', 1);
    $('.align_pratique ul li.slide').css('z-index', 0);
    $('.align_pratique ul li.slide:nth-child('+count+')').css('z-index', 500);
});

// sticky nav 

if ($(window).width() < 1250) {
  $(window).scroll(function(){
    if($(window).scrollTop() > $(window).height() - 400){
        $("#indexNav").css({"background-color":"#636363"}); 
        $("#indexNav").css({"padding-top":12}); 
        $("#indexNav").css({"padding-bottom":12}); 
    }else{
        $("#indexNav").css({"background-color":"transparent"}); 
        $("#indexNav").css({"padding-top":36}); 
        $("#indexNav").css({"padding-bottom":36}); 
    }
  })
}else{
  $(window).scroll(function(){
    if($(window).scrollTop() > $(window).height() - 400){
        $("#indexNav").css({"background-color":"#636363"}); 
        $("#indexNav").css({"padding-top":12}); 
        $("#indexNav").css({"padding-bottom":12}); 
    }else{
        $("#indexNav").css({"background-color":"transparent"}); 
        $("#indexNav").css({"padding-top":72}); 
        $("#indexNav").css({"padding-bottom":72}); 
    }
  })
}

// calcul average

var goodAnswer = $('.alignStat ul li:nth-child(3) span').text();
var countAnswer = $('.alignStat ul li:nth-child(2) span').text();
var average = (goodAnswer/parseInt(countAnswer))*100;

$('.alignStat ul li:nth-child(5) span').text(average + '%');

// height aside

var heightAlignStat = $('.alignStat').outerHeight();
$('aside').height($(window).height());


// chart

var data = {
    labels: ["22/02","28/02","03/03","18/03","19/03"],
    datasets: [
        {
            label: "statisques profil",
            tooltipTitleFontStyle: 'bold',
            scaleFontStyle: "900",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(131,198,58,1)",
            pointColor: "rgba(154,36,24,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            datasetStrokeWidth : 5,
            data: [12, 26, 39, 42, 47]
        }
    ]
};
var options = {     
    scaleFontFamily : "'proxima nova'",
    scaleFontStyle: "700",
    pointLabelFontFamily : "'proxima nova'",
    tooltipTitleFontFamily: 'proxima nova',
    bezierCurveTension : 0.4,
    pointDotStrokeWidth : 3,
    tooltipYPadding: 12,
    tooltipXPadding: 12,
    tooltipTemplate: "<%= value %>",
    scaleBeginAtZero: true,
    scaleFontSize: 10
};

var ctx = document.getElementById("myChart").getContext("2d");
var myLineChart = new Chart(ctx).Line(data, options);

// active button question

$('.question ul li button').click(function(){
  $(this).toggleClass('active');
});

// calcul imgQuestion 

var questionWidth = $('.question').width();
var imgQuestion = ($(window).width()) - questionWidth;
 $('.imgQuestion').width(imgQuestion);
 $('.imgQuestion').height($(window).height() - 66);

 // calcul height Main 

$('.questionMain').height($(window).height());

$(document).on('click','button',function(){
    $(this).toggleClass('active');
  });



$(window).resize(function(){
  var questionWidth = $('.question').width();
  var imgQuestion = ($(window).width()) - questionWidth;
 $('.imgQuestion').width(imgQuestion);
 $('.imgQuestion').height($(window).height() - 66);
});

$('.videoMain').height($(window).height() - 66);
$('.video').width($(window).width() - 526);

var heightVideo = $('.showVideo').height();
var windowHeighNav = $(window).height();
var posVideo = (windowHeighNav - heightVideo);
var posVideoEnd = posVideo/parseInt(2);

$('.showVideo').css('top', posVideoEnd + 'px');

var myVideo = document.getElementById("video"); 


$("#creditNav").css({"background-color":"#636363"}); 
$("#creditNav").css({"padding-top":12}); 
$("#creditNav").css({"padding-bottom":12}); 
$("#creditNav").css({"padding-left":0}); 
$("#creditNav").css({"padding-right":0});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
  $('body').addClass('stop-scrolling');
  $('.mobileDetection').css('display', 'block');
  $('#load').remove();
} 

// VERIF FORMULAIRE

$(document).ready(function(){

  $('.submit').click(function(){

    if ($('.username').val()=="arnaud" && $('.password').val()=="test") {
      window.location.href = "indexconnected.html";
    }else if($('.username').val()=="jurydwm" && $('.password').val()=="jury"){
      window.location.href = "indexconnected.html";
    }else{
      $('.errors').css('display', 'block');
    }

  });
  
});

$('.notconnected').click(function(){
  $('.connect').css('display', 'block');
  $('header').css('opacity', '.3');
  $('main').css('opacity', '.3');
  $('footer').css('opacity', '.3');
  $('body').addClass('stop-scrolling');
  $('conncet').css('opacity', '1');
});

$('.connecthover').click(function(){
  $('.connect').css('display', 'block');
  $('header').css('opacity', '.3');
  $('main').css('opacity', '.3');
  $('footer').css('opacity', '.3');
  $('body').addClass('stop-scrolling');
  $('conncet').css('opacity', '1');
});



// ROADBOOK

$('.key1').click(function(){
  $('.video ul li img').css('opacity', 0);
  $('.trap li button').removeClass('activeButton');
  $(this).addClass('activeButton');
  $('.video ul li:nth-child(1) img').css('opacity', 1);
});

$('.key2').click(function(){
  $('.video ul li img').css('opacity', 0);
  $('.trap li button').removeClass('activeButton');
  $(this).addClass('activeButton');
  $('.video ul li:nth-child(2) img').css('opacity', 1);
});

$('.key3').click(function(){
  $('.video ul li img').css('opacity', 0);
  $('.trap li button').removeClass('activeButton');
  $(this).addClass('activeButton');
  $('.video ul li:nth-child(3) img').css('opacity', 1);
});


$('.key4').click(function(){
  $('.video ul li img').css('opacity', 0);
  $('.trap li button').removeClass('activeButton');
  $(this).addClass('activeButton');
  $('.video ul li:nth-child(4) img').css('opacity', 1);
});

$('.divInfo p').hide();

$('.divInfo h1').click(function(){
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).siblings('p').hide();
    $(this).siblings('button').text('en savoir plus');
  }else{
    $(this).addClass('active');
    $(this).siblings('p').show();
    $(this).siblings('button').text('fermer');
  }
});

$('.moreInfoButton').click(function(){
  if ($(this).siblings('h1').hasClass('active')) {
    $(this).siblings('h1').removeClass('active');
    $(this).siblings('p').hide();
    $(this).text('en savoir plus');
  }else{
    $(this).siblings('h1').addClass('active');
    $(this).siblings('p').show();
    $(this).text('fermer');
  }
});

$('.divInfo h1').mouseover(function(){
  $(this).siblings('button').addClass('active');
});

$('.divInfo h1').mouseout(function(){
  $(this).siblings('button').removeClass('active');
});

$('.moreInfoButton').mouseover(function(){
  $(this).siblings('h1').addClass('activeTitle');
});

$('.moreInfoButton').mouseout(function(){
  $(this).siblings('h1').removeClass('activeTitle');
});

// PDF 

$('.parcoursPdf').mouseover(function(){
  $('.dlImg').addClass('active');
  $('.afterdl').addClass('active');
});

$('.parcoursPdf').mouseout(function(){
  $('.dlImg').removeClass('active');
  $('.afterdl').removeClass('active');
});


// checkout 

// $('.checkout').mouseover(function(){
//    function textAfter(){
//       $(".checkout").text('Vérifiez mes réponses en vidéo');
//    };
//    window.setTimeout( textAfter, 100 );
// })

// $('.checkout').mouseout(function(){
//    function textBefore(){
//       $(".checkout").text('vidéo');
//    };
//    window.setTimeout( textBefore, 10 );
// })

var formCodeHeight = $('.formCode').height();
var fomrCodePos = (windowHeight - formCodeHeight)/parseInt(2);
$('.formCode').css('top', fomrCodePos - 100);


$('.checkout').click(function(){
  $('.formCode').show();
  $('header').css('opacity', '.5');
  $('.navFixed').css('opacity', '.5');
  $('main').css('opacity', '.5');
  $('body').addClass('stop-scrolling');
});

$('.closeCode').click(function(){
  $('.formCode').hide();
  $('header').css('opacity', '1');
  $('.navFixed').css('opacity', '1');
  $('main').css('opacity', '1');
  $('body').removeClass('stop-scrolling');
});



$(document).ready(function(){

  $('.continuer').click(function(){

    if ($('.code').val()=="test"){
      window.location.href = "video.html";
    }else{
      $('.errors').css('display', 'block');
    }

  })
    
});



$('.dl_L').mouseover(function(){
  $(this).children('.lanim').addClass('activeAnim');
  $(this).children('.dlanim').addClass('activeAnim');
});

$('.dl_L').mouseout(function(){
  $(this).children('.lanim').removeClass('activeAnim');
  $(this).children('.dlanim').removeClass('activeAnim');
});



$('.menu').mouseover(function(){
  $(this).children('.menuImg').addClass('activeAnim');
  $(this).children('.menuImgHover').addClass('activeAnim');
});

$('.menu').mouseout(function(){
  $(this).children('.menuImg').removeClass('activeAnim');
  $(this).children('.menuImgHover').removeClass('activeAnim');
});



// Konami CODE

//Haut, haut, bas, bas, gauche, droite, gauche, droite, B, A
var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
n = 0;
$(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {
        
          $('.konami').show();
          n = 0;
          return false;
        }
    }
    else {
        n = 0;
    }
});

$('.closeKonami').click(function(){
  $('.konami').hide();
});

