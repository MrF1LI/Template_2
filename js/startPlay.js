/* By F1LI */

/* ---------- << copy >> ---------- */

function copyText(htmlElement) {
    if (!htmlElement) {
        return;
    }
    
    let elementText = htmlElement.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}

document.getElementById('cbutton').onclick =
function () {
    let ip = 15;
    copyText(document.getElementById('serverIP'));
}

/* ---------- << rotate >> ---------- */

let posX = null, posY = null;
let distanceX = 0, distanceY = 0;
const screenshot = document.getElementsByClassName('grp-launcher')[0];
// const screenshot = document.getElementById('grp-launcher')
const rotateX = 5, rotateY = -7, rotate = 7;
let degX = 0, degY = 0;
document.addEventListener('mousemove', (event) => {
	// first event, start pos
	if(posX === null && posY === null) {
		posX = event.clientX;
		posY = event.clientY;
	}

	distanceX = event.clientX - posX;
	distanceY = event.clientY - posY;

	degX = rotateX + (distanceY * 0.034);
	degY = rotateY + (distanceX * 0.034);

	screenshot.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg) rotate(${rotate}deg)`

});

/* ---------- << imageBeforeAfter >> ---------- */

function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      /*once for each "overlay" element:
      pass the "overlay" element as a parameter when executing the compareImages function:*/
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      /*get the width and height of the img element*/
      w = img.offsetWidth;
      h = img.offsetHeight;
      /*set the width of the img element to 50%:*/
      img.style.width = (w / 2) + "px";
      /*create slider:*/
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      /*insert slider*/
      img.parentElement.insertBefore(slider, img);
      /*position the slider in the middle:*/
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /*execute a function when the mouse button is pressed:*/
      slider.addEventListener("mousedown", slideReady);
      /*and another function when the mouse button is released:*/
      window.addEventListener("mouseup", slideFinish);
      /*or touched (for touch screens:*/
      slider.addEventListener("touchstart", slideReady);
      /*and released (for touch screens:*/
      window.addEventListener("touchend", slideFinish);
      function slideReady(e) {
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*the slider is now clicked and ready to move:*/
        clicked = 1;
        /*execute a function when the slider is moved:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /*the slider is no longer clicked:*/
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        /*if the slider is no longer clicked, exit this function:*/
        if (clicked == 0) return false;
        /*get the cursor's x position:*/
        pos = getCursorPos(e)
        /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /*execute a function that will resize the overlay image according to the cursor:*/
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = e || window.event;
        /*get the x positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        x = e.pageX - a.left;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /*resize the image:*/
        img.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
}
  
initComparisons();

// 

let gtaTut = document.getElementById("gtaTut");
let voiceTut = document.getElementById("voiceTut");
let servTut = document.getElementById("servTut");

let gtaTutModal = document.getElementById("gtaTutModal");
let voiceTutModal = document.getElementById("voiceTutModal");
let servTutModal = document.getElementById("servTutModal");

gtaTut.onclick =  function () {
  gtaTutModal.style.display = "block";
}

voiceTut.onclick =  function () {
  voiceTutModal.style.display = "block";
}

servTut.onclick =  function () {
  servTutModal.style.display = "block";
}

gtaTutModal.onclick = function() {
  gtaTutModal.style.display = "none";
}

voiceTutModal.onclick = function() {
  voiceTutModal.style.display = "none";
}

servTutModal.onclick = function() {
  servTutModal.style.display = "none";
}

/* By F1LI */