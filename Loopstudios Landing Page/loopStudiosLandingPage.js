const dropDown = document.querySelector("#top-nav-container#dropdown");
const dropDownBtn = document.getElementById("dropdown-btn");
const topNavContainer = document.getElementById("top-nav-container");
const closeBtn = document.getElementById("close-btn");
const header = document.querySelector("header");
const headerText = document.getElementById("header-text");
const headerInnerContainer = document.querySelector("header #header-inner-container");
const topHeader = document.getElementById("top-header");
const gridImgOneId = document.getElementById("grid-img-1");
const gridImgTwoId = document.getElementById("grid-img-2");
const gridImgThreeId = document.getElementById("grid-img-3");
const gridImgFourId = document.getElementById("grid-img-4");
const gridImgFiveId = document.getElementById("grid-img-5");
const gridImgSixId = document.getElementById("grid-img-6");
const gridImgSevenId = document.getElementById("grid-img-7");
const gridImgEightId = document.getElementById("grid-img-8");

dropDownBtn.addEventListener("click", () => {
  dropDownBtn.style.display = "none";
  dropDown.style.display = "block";
  header.classList.add("header");
  headerInnerContainer.classList.add("change");
  headerText.style.display = "none";
  topHeader.classList.add("direction");
  closeBtn.removeAttribute("hidden");
});

closeBtn.addEventListener("click", () => {
  closeBtn.setAttribute("hidden", "");
  topHeader.classList.remove("direction");
  headerText.style.display = "block";
  headerInnerContainer.classList.remove("change")
  header.classList.remove("header");
  dropDown.style.display = "none";
  dropDownBtn.style.display = "block";
});


let isSmallScreen = false;
function updateImageSrc() {
  if (window.innerWidth <= 768 && !isSmallScreen) {
  gridImgOneId.src = "loopstudios-landing-page-main/images/mobile/image-deep-earth.jpg";
  gridImgTwoId.src = "loopstudios-landing-page-main/images/mobile/image-night-arcade.jpg";
  gridImgThreeId.src = "loopstudios-landing-page-main/images/mobile/image-soccer-team.jpg";
  gridImgFourId.src = "loopstudios-landing-page-main/images/mobile/image-grid.jpg";
  gridImgFiveId.src = "loopstudios-landing-page-main/images/mobile/image-from-above.jpg";
  gridImgSixId.src = "loopstudios-landing-page-main/images/mobile/image-pocket-borealis.jpg";
  gridImgSevenId.src = "loopstudios-landing-page-main/images/mobile/image-curiosity.jpg";
  gridImgEightId.src = "loopstudios-landing-page-main/images/mobile/image-fisheye.jpg";
  } else {
    gridImgOneId.src = "loopstudios-landing-page-main (1)/loopstudios-landing-page-main/images/desktop/image-deep-earth.jpg";
    gridImgTwoId.src = "loopstudios-landing-page-main (1)/loopstudios-landing-page-main/images/desktop/image-night-arcade.jpg";
    gridImgThreeId.src = "loopstudios-landing-page-main (1)/loopstudios-landing-page-main/images/desktop/image-soccer-team.jpg";
    gridImgFourId.src = "loopstudios-landing-page-main (1)/loopstudios-landing-page-main/images/desktop/image-grid.jpg";
    gridImgFiveId.src = "loopstudios-landing-page-main (1)/loopstudios-landing-page-main/images/desktop/image-from-above.jpg";
    gridImgSixId.src = "loopstudios-landing-page-main (1)/loopstudios-landing-page-main/images/desktop/image-pocket-borealis.jpg";
    gridImgSevenId.src = "loopstudios-landing-page-main (1)/loopstudios-landing-page-main/images/desktop/image-curiosity.jpg";
    gridImgEightId.src = "loopstudios-landing-page-main (1)/loopstudios-landing-page-main/images/desktop/image-fisheye.jpg";
  }
}  


document.addEventListener("DOMContentLoaded", () => {
  updateImageSrc()
});

window.addEventListener("resize", () => {
  updateImageSrc()
});
