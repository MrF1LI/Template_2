/* By F1LI */

/* ---------- << mobHeader >> ---------- */

let mobHeader = document.getElementById("mobHeader");
let mobHeaderShow = document.getElementById("mobHeaderShow");
let mobHeaderHide = document.getElementById("mobHeaderHide");

mobHeaderHide.onclick =  function () {
    mobHeader.style.display = "none";
}

mobHeaderShow.onclick = function () {
    mobHeader.style.display = "block";
}

/* ---------- << topUp >> ---------- */

var btnUp = document.getElementById('topUp');

window.onscroll = function() {
    var offset = window.pageYOffset;
    if(offset > window.innerHeight) {
        btnUp.style.display = 'block';
    } else {
        btnUp.style.display = 'none';
    }
}

btnUp.onclick = function() {
    jQuery('html').animate({scrollTop:0},100)
}

/* ---------- << animateWhenScroll >> ---------- */

(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

/* By F1LI */