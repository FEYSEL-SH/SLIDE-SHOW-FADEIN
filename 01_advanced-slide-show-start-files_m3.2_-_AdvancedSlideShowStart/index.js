(function(){
    "use strict"
    const myImage = [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      "image4.jpg",
      "image5.jpg",
    ];
    var currentImage = 0;
    var container = document.getElementById("content");
    var nextBtn = document.getElementById("next");
    var previousBtn = document.getElementById("previous");
    nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      currentImage++;
      console.log(currentImage);
      if (currentImage > myImage.length - 1) {
        currentImage = 0;
      }
      swapImage();
    });

    previousBtn.addEventListener("click", function (e) {
      e.preventDefault();
      currentImage--;
      console.log(currentImage);
      if (currentImage < 0) {
        currentImage = myImage.length - 1;
      }
      swapImage();
    });

    function swapImage() {
      var newSlide = document.createElement("img");
      newSlide.src = `slides/${myImage[currentImage]}`;
      newSlide.className = "fadeinimg";
      container.appendChild(newSlide);
    }
}())