$('.t-slider').slick({
  centerMode: true,
  centerPadding: '10px ',
  slidesToShow: 1,
  arrows: true,
  dots: true,
  fade: true,
  autoplay: true,
  mobileFirst: true,
});


$(".dropbtn").click(function(){
  $(".dropdown-menu").toggleClass("active");
});


// scroll to top button start ====


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// scroll to top button end===



