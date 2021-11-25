$(".hidden").hide()

printName()

var numClick = 0;

$(document).click(function(){
    numClick++;
    //console.log(numClick);
    var order = ".show"+numClick;
    //console.log(order);
    $(order).fadeIn();
    window.scrollTo({top:document.body.scrollHeight, left:0, behavior:'smooth'});
    printName();
});

function printName()  {
	let name = localStorage.getItem('username');
    let nameslots = document.getElementsByClassName("username");
    for(var i=0; i<nameslots.length; i++){
        var slot = nameslots.item(i);
        slot.innerHTML = name;
    }
}


$(document).ready(function() {
$(window).scroll( function(){
$('.fadeinleft').each( function(i){
 
 var bottom_of_element = $(this).offset().top + $(this).outerHeight();
 var bottom_of_window = $(window).scrollTop() + $(window).height();
 
 if( bottom_of_window > bottom_of_element ){
     $(this).animate({'opacity':'1','margin-left':'300px'},1000);
 }
 
}); 
});
});

            

$(document).ready(function(){
      /*웹페이지 열었을 때*/
      $("#img1").show();
      $("#img2").hide();
      $("#img3").hide();

      /*img1을 클릭했을 때 img2를 보여줌*/
      $("#img1").click(function(){
          $("#img1").hide();
          $("#img2").show();
          $("img3").hide();
      });

      /*img2를 클릭했을 때 img1을 보여줌*/
      $("#img2").click(function(){
          $("#img3").show();
          $("#img2").hide();
      });
  });
