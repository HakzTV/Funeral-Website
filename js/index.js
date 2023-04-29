

$(function() {
  AOS.init({
    duration: 1200
  });

  onElementHeightChange(document.body, function(){
    AOS.refresh();
  });
});

function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;
    
    (function run() {
        newHeight = elm.clientHeight;      
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
          clearTimeout(elm.onElementHeightChangeTimer); 
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
  }


// Hero section
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
      $(".zoom img").css({
          transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
          //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
          //"-webkit-filter": "blur(" + (scroll/200) + "px)",
          //filter: "blur(" + (scroll/200) + "px)"
      });
  });

const mainSection = document.querySelector('main')

  $(window).scroll(function () {
    if ($(document).scrollTop() >= mainSection.offsetTop) {
      $(".nav").addClass("affix");
    } else {
      $(".nav").removeClass("affix");
    }
  });


  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// Family wish parallax
var image = document.getElementsByClassName('pic');
new simpleParallax(image, {
	orientation: 'right',
	transition: 'cubic-bezier(0,0,0,1)'
});

// Parallax for autobiography
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


// Carousel code
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");

  if (currentSlide === 0) {
    slider.scroll({ left: 0, behavior: "smooth" });
  } else {
    const slideWidth = slides[0].getBoundingClientRect().width;
    slider.scroll({ left: slideWidth * currentSlide, behavior: "smooth" });
  }
}

slider.addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

slider.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 5000);
});

let tl = gsap.timeline({
  defaults:{ease: "power2.out"}
});
const content = document.querySelectorAll('section')

const imgLoad = imagesLoaded(content)

imgLoad.on('done', instance =>{
  tl.to('.blinder', {
    scaleY: 0,
    stagger:.3,
    ease:'power3.out' 
  })
})
