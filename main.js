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
  callBigImg,
  ham,
  cancel,
  body,
  slideshow,
  stopSlideShow,
  next,
  prev,
  filter,
  bigImgDiv,
  filterCheck,
} from "./script.js";

let userTheme = localStorage.getItem("userTheme") || "light";
if (bodyElement) {
  setTimeout(() => {
    window.location.href = "main.html";
  }, 9000);
}
if (!bodyElement) {
  let startX = 0;
  let startY = 0;
  let bigImg = callBigImg();
  let tempStr;
  let filterValue = "";
  let currentlyDisplayed;
  let picEnd;
  let imageName;
  let slideShowTimeout;
  let slideShowInterval;
  let imageArray = [];
  let styleChange;
  let defaultPicClone = Array.from(defaultPicturesSec.cloneNode(true).children);
  let filterDisplay;
  toArray(images, imageArray, "displayedImage");
  imageArray.forEach((element, index) => {
    element.addEventListener("click", () => {
      stopSlideShow(slideShowInterval, slideShowTimeout);
      imageMax(defaultPicturesSec, imageLand, element);
    });
  });

  cancelBtnOnLand.addEventListener("click", () => {
    imageLand.style.display = "none";
    defaultPicturesSec.style.display = "block";

    stopSlideShow(slideShowInterval, slideShowTimeout);
    // bigImgDiv.innerHTML = "";
  });
  ham.addEventListener("click", () => {
    asideTag.style.display = "flex";
    ham.style.display = "none";
    cancel.style.display = "inline";
    defaultPicturesSec.style.display = "none";
  });
  slideshow.addEventListener("click", () => {
    stopSlideShow(slideShowInterval, slideShowTimeout);
    let count = 0;
    if (imageLand.style.display == "flex") {
      imageLand.style.display = "none";
    }
    asideTag.style.display = "none";
    imageMax(defaultPicturesSec, imageLand, imageArray[count]);
    cancel.style.display = "none";
    ham.style.display = "inline";
    setTimeout(() => {
      bigImg.style.opacity = "1";
    }, 200);
    slideShowInterval = setInterval(() => {
      count++;
      bigImg.style.opacity = "0";

      slideShowTimeout = setTimeout(() => {
        if (count >= imageArray.length) {
          count = 0;
        }
        imageMax(defaultPicturesSec, imageLand, imageArray[count]);

        bigImg.style.opacity = "1";
      }, 500);
    }, 3000);
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

  next.addEventListener("click", () => {
    imageName = filterCheck(imageArray, filterValue);
    if (!imageName) {
      bigImg = callBigImg();
      currentlyDisplayed = imageArray.filter((filterImg, index) => {
        return filterImg.src === bigImg.src;
      });
      let filtered = imageArray.indexOf(currentlyDisplayed[0]);
      filtered++;
      if (filtered >= imageArray.length) {
        tempStr = bigImgDiv.innerHTML;
        picEnd = "No more content!";
        bigImgDiv.innerHTML = picEnd;
        bigImg.style.color = "inherit";
        setTimeout(() => {
          bigImgDiv.innerHTML = tempStr;
          bigImg = callBigImg();
        }, 1500);
      } else {
        bigImg.style.opacity = "0";
        setTimeout(() => {
          bigImg.src = imageArray[filtered].src;
          bigImg.style.opacity = "1";
        }, 500);
      }
    } else {
      bigImg = callBigImg();
      currentlyDisplayed = imageName.filter((filterImg, index) => {
        return filterImg.src === bigImg.src;
      });

      let filtered = imageName.indexOf(currentlyDisplayed[0]);
      filtered++;

      if (filtered >= imageName.length) {
        tempStr = bigImgDiv.innerHTML;
        picEnd = "No more content!";
        bigImgDiv.innerHTML = picEnd;
        bigImg.style.color = "inherit";

        setTimeout(() => {
          bigImgDiv.innerHTML = tempStr;
          bigImg = callBigImg();
        }, 1500);
      } else {
        bigImg.style.opacity = "0";

        setTimeout(() => {
          bigImg.src = imageName[filtered].src;
          bigImg.style.opacity = "1";
        }, 500);
      }
    }
  });

  prev.addEventListener("click", () => {
    if (!imageName) {
      bigImg = callBigImg();
      currentlyDisplayed = imageArray.filter((filterImg, index) => {
        return filterImg.src === bigImg.src;
      });
      let filtered = imageArray.indexOf(currentlyDisplayed[0]);
      filtered--;
      if (filtered <= -1) {
        tempStr = bigImgDiv.innerHTML;
        picEnd = "No more content!";
        bigImgDiv.innerHTML = picEnd;
        bigImg.style.color = "inherit";
        setTimeout(() => {
          bigImgDiv.innerHTML = tempStr;
          bigImg = callBigImg();
        }, 1500);
      } else {
        bigImg.style.opacity = "0";
        setTimeout(() => {
          bigImg.src = imageArray[filtered].src;
          bigImg.style.opacity = "1";
        }, 500);
      }
    } else {
      bigImg = callBigImg();
      currentlyDisplayed = imageName.filter((filterImg, index) => {
        return filterImg.src === bigImg.src;
      });

      let filtered = imageName.indexOf(currentlyDisplayed[0]);
      filtered--;

      if (filtered <= -1) {
        tempStr = bigImgDiv.innerHTML;
        picEnd = "No more content!";
        bigImgDiv.innerHTML = picEnd;
        bigImg.style.color = "inherit";

        setTimeout(() => {
          bigImgDiv.innerHTML = tempStr;
          bigImg = callBigImg();
        }, 1500);
      } else {
        bigImg.style.opacity = "0";
        setTimeout(() => {
          bigImg.src = imageName[filtered].src;
          bigImg.style.opacity = "1";
        }, 500);
      }
    }
  });

  filter.addEventListener("click", () => {
    filterValue = filter.value.toLowerCase();
    imageName = filterCheck(imageArray, filterValue);
    defaultPicturesSec.replaceChildren(...imageName);
  });

  imageLand.addEventListener(
    "touchstart",
    (e) => {
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    },
    { passive: true },
  );

  imageLand.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      // ignore short swipes and mostly-vertical ones
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;

      if (dx < 0)
        next.click(); // swipe left  -> next image
      else prev.click(); // swipe right -> previous image
    },
    { passive: true },
  );
}
