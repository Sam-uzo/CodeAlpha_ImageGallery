import {
  hambuger,
  defaultPictures,
  bodyElement,
  myPicturesSec,
  defaultPicturesSec,
  images,
  asideTag,
  themeSelect,
  toArray,
  imageMax,
  imageLand,
  imageLandDiv,
  cancelBtnOnLand,
  bigImg,
  ham,
  cancel,
  body,
} from "./script.js";

let userTheme = localStorage.getItem("userTheme") || "light";
if (bodyElement) {
  // setTimeout(() => {
  //   window.location.href = "index.html";
  // }, 9000);
}
if (!bodyElement) {
  let imageArray = [];
  toArray(images, imageArray, "displayedImage");
  imageArray.forEach((element, index) => {
    element.addEventListener("click", () => {
      // console.log(element.src, index);
      imageMax(defaultPicturesSec, imageLand, imageLandDiv, element);
    });
  });

  cancelBtnOnLand.addEventListener("click", () => {
    imageLand.style.display = "none";
    defaultPicturesSec.style.display = "block";
  });
  const innerHTMLForDefaultPic = defaultPicturesSec.innerHTML;
  ham.addEventListener("click", () => {
    asideTag.style.display = "flex";
    ham.style.display = "none";
    cancel.style.display = "inline";
    defaultPicturesSec.style.display = "none";
  });

  cancel.addEventListener("click", () => {
    if (imageLand.style.display == "flex") {
      ham.style.display = "inline";
      cancel.style.display = "none";
      asideTag.style.display = "none";
    } else {
      ham.style.display = "inline";
      cancel.style.display = "none";
      asideTag.style.display = "none";
      if (window.location.href.includes("#m-p")) {
        myPicturesSec.style.display = "flex";
        defaultPicturesSec.style.display = "none";
      } else {
        myPicturesSec.style.display = "none";
        defaultPicturesSec.style.display = "block";
      }
    }
  });
  // myPictures.addEventListener("click", () => {
  //   myPicturesSec.style.display = "flex";
  //   defaultPicturesSec.style.display = "none";
  //   asideTag.style.display = "none";
  //   ham.style.display = "inline";
  //   cancel.style.display = "none";
  // });
  defaultPictures.addEventListener("click", () => {
    myPicturesSec.style.display = "none";
    defaultPicturesSec.style.display = "block";
    asideTag.style.display = "none";
    ham.style.display = "inline";
    cancel.style.display = "none";
  });
  if (userTheme == "dark") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    asideTag.style.color = "white";
    localStorage.setItem("userTheme", "dark");
    themeSelect.value = "black";
    themeSelect.style.backgroundColor = "black";
  } else {
    themeSelect.value = "White";
    body.style.color = " black";
    localStorage.setItem("userTheme", "light");
    body.style.backgroundColor = "white";
    asideTag.style.color = "black";
    themeSelect.style.backgroundColor = "white";
  }
  themeSelect.addEventListener("click", () => {
    const themevalue = themeSelect.value;
    if (themevalue == "black") {
      body.style.color = "white";
      asideTag.style.color = "white";
      body.style.backgroundColor = "black";
      themeSelect.style.backgroundColor = "black";
      localStorage.setItem("userTheme", "dark");
    } else {
      themeSelect.style.backgroundColor = "white";
      asideTag.style.color = "black";
      body.style.color = " black";
      body.style.backgroundColor = "white";
      localStorage.setItem("userTheme", "light");
    }
  });
}

// An SVG X:
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//   <line x1="18" y1="6" x2="6" y2="18"></line>
//   <line x1="6" y1="6" x2="18" y2="18"></line>
// </svg>
