
    function setTime() {
       $("#progress-bar").progressbar({ 
        value: $('#video')[0].currentTime*100/$('#video')[0].duration 
      });
    }
    
    function findPos(el) {
      var x = y = 0;    
      if(el.offsetParent) {    
        x = el.offsetLeft;    
        y = el.offsetTop;    
        while(el = el.offsetParent) {    
          x += el.offsetLeft;    
          y += el.offsetTop;    
        }    
      }    
      return {'x':x, 'y':y};    
    }
    
    $(document).ready(function(){
      
      var timer;

      $("#progress-bar").progressbar();

      $('#video')[0].play(setInterval("setTime()", 1));
      
      $("#play").click(function(){
        $('#video')[0].play();
        $(this).addClass('active');
        $('#pause').removeClass('active');
        timer = setInterval("setTime()", 10);
      });
      
      $("#pause").click(function(){
        $('#video')[0].pause();
        $(this).addClass('active');
        $('#play').removeClass('active');
        clearInterval(timer);
      });
      
      $('#progress-bar').click(function(e) {
        var ev = e || window.event;
        var pos = findPos(this);      
        var diffx = ev.clientX - pos.x;      
        $("#progress-bar").progressbar({ value: diffx*100/$(this).width() });
        var duration = $('#video')[0].duration;
        $('#video')[0].currentTime = diffx*duration/$(this).width();      
      });  

      $('.Button1').click(function(){
        $('#video').get(0).currentTime ='37';
        $('.trap li button').removeClass('activeButton');
        $(this).addClass('activeButton');
      });  

      $('.Button2').click(function(){
        $('#video').get(0).currentTime ='85';
        $('.trap li button').removeClass('activeButton');
        $(this).addClass('activeButton');
      });  

      $('.Button3').click(function(){
        $('#video').get(0).currentTime ='122';
        $('.trap li button').removeClass('activeButton');
        $(this).addClass('activeButton');
      });  

      $('.Button4').click(function(){
        $('#video').get(0).currentTime ='160';
        $('.trap li button').removeClass('activeButton');
        $(this).addClass('activeButton');
      });  

      $('.Button5').click(function(){
        $('#video').get(0).currentTime ='172';
        $('.trap li button').removeClass('activeButton');
        $(this).addClass('activeButton');
      });        
      
  });




