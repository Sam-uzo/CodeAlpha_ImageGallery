export const hambuger = document.querySelector(".hambuger");
export const slideshow = document.getElementsByTagName("a")[1];
export const defaultPictures = document.getElementsByTagName("a")[0];
export const themeSelect = document.getElementById("theme");
export const asideTag = document.getElementsByTagName("aside")[0];
export const myPicturesSec = document.querySelector(".my-pictures");
export const defaultPicturesSec = document.querySelector(".default-pictures");
export const images = document.getElementsByTagName("img");
export const cancelBtnOnLand = document.getElementById(
  "cancel-btn-on-image-land",
);
export const filter = document.getElementById("filter");
export const next = document.getElementById("next-btn");
export const prev = document.getElementById("prev-btn");
export const bigImgDiv = document.querySelector(".big-img-span");

export const body = document.getElementsByTagName("body")[0];
export const imageLand = document.querySelector(".image-land");
export const imageLandDiv = document.querySelector(".image-land-div");
export const bodyElement = document.getElementsByClassName("welcome-body")[0];
export function callBigImg() {
  return document.getElementById("big-img");
}
let bigImg = callBigImg();
export const ham = document.getElementById("ham");
export const cancel = document.getElementById("cancel");
export function toArray(HTMLCollection, emptyArray, className) {
  let index = 0;
  while (index < HTMLCollection.length) {
    if (HTMLCollection[index].id == "big-img") {
      // console.log("has an id");
      index++;
    } else {
      emptyArray.push(HTMLCollection[index]);
      index++;
    }
  }
  emptyArray.forEach((element) => {
    if (className == null || className == undefined) {
      console.log("No class name");
    } else {
      element.classList.add(className);
    }
  });
  emptyArray = document.querySelectorAll(`.${className}`);
  return emptyArray;
}
export function imageMax(defaultLand, imageLand, currentImage) {
  bigImg = callBigImg();
  bigImg.src = currentImage.src;
  bigImg.alt = currentImage.alt;
  defaultLand.style.display = "none";
  imageLand.style.display = "flex";
}
export function stopSlideShow(slideShowInterval, slideShowTimeout) {
  bigImg = callBigImg();
  clearInterval(slideShowInterval);
  clearTimeout(slideShowTimeout);
  bigImg.style.opacity = "1";
}
export function filterCheck(imageArray, filterValue) {
  return imageArray.filter((imgElement) => {
    return imgElement.name.toLowerCase().includes(filterValue);
  });
}
