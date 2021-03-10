// When the user scrolls down 50px from the top of the document, resize the banner

// window.onscroll = function() {bannerScrollFunction()};
window.addEventListener('scroll', bannerScrollFunction);

function bannerScrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
    document.getElementById("banner").style.fontSize = "30px";
    document.getElementById("banner-img").style.width = "30px";
  } else {
    document.getElementById("banner").style.fontSize = "70px";
    document.getElementById("banner-img").style.width = "75px";
  }
}

// Back-to-top button 

mybutton = document.getElementById("bck-to-top");

window.onscroll = function() {btnScrollFunction()};

function btnScrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
