const showcaseVideo = document.querySelector(".showcaseVideo");
const video = document.querySelector(".video");
const controls = document.querySelector(".controls");
const descriptionBackground = document.querySelector(".descriptionBackground");
const cursor = document.querySelector(".cursor");
const btnPlayPause = document.getElementById("btnPlayPause");
const cursorPlayPause = document.getElementById("cursorPlayPause");
const btnPlay = document.getElementById("btnPlay");

const descriptionClosingdelai = 300;

let showImg;

let mouseInactiveTimer = "NeverRun";
let firstplay = false;
let showcaseVideoOffsetTop;
let showcaseVideoOffsetLeft;

let resizeTimeout;

let descriptionList = new Array();
let descriptionOpened = false;

let currentVideo = "OpeningVideo";

let videoShowTime = 5;

// let descriptionViewTime = 1000000;

// .0${imageIndex ( + 1)}.jpg

// document.getscript("../Description/description.js", () => {
//   contenuOffset();
// });

// const toggleDescriptionBackground = () => {
//   descriptionBackground.classList.toggle("closedDescriptionBackground");
//   descriptionBackground.classList.toggle("openedDescriptionBackground");
// };

const toggleStatutApercuOnglet = () => {
  closingOnglet();
  // showAndDescribeWhileOpeningOnglet();
  // toggleDescriptionBackground();
};

const closingOnglet = () => {
  // if (currentOnglet != childIndex)
  if (
    (btnPlayPause.className == "pause") &
    (video.currentTime != video.duration)
  ) {
    videoPause();
    setTimeout(() => {
      showControls();
      cursorPlayPause.classList.remove("play");
    }, 300);
  } else if (
    ((descriptionOpened == true) & (containerOpen == false)) |
    ((descriptionOpened == true) & (containerOpen == true) & (lunchIndex != 1))
  ) {
    descriptionBackground.classList.add("opacity0");
    // descriptionBackground.classList.add("closedDescriptionBackground");
    // descriptionBackground.classList.remove("openedDescriptionBackground");
    setTimeout(() => {
      descriptionBackground.classList.add("visibilityHidden");
      console.log("je ferme1");
      videoPause();
    }, 500);

    console.log("Close description");

    // else if (
    //   (descriptionOpened == true) &
    //   (descriptionBackground.parentElement.classList.length == 2)
    // ) {
    //   descriptionBackground.classList.add("opacity0");
    //   // descriptionBackground.classList.add("closedDescriptionBackground");
    //   // descriptionBackground.classList.remove("openedDescriptionBackground");
    //   setTimeout(() => {
    //     descriptionBackground.classList.add("visibilityHidden");
    //     console.log("je ferme2");
    //     videoPause();
    //   }, 500);
    //   console.log("Close description");
  }
};

// const showAndDescribeWhileOpeningOnglet = () => {
//   if (
//     (descriptionOpened == true) &
//     (descriptionBackground.parentElement.parentElement.classList[1] ==
//       "openedContainer")
//   ) {
//     descriptionBackground.classList.remove("visibilityHidden");
//     descriptionBackground.classList.remove("opacity0");
//     // descriptionBackground.classList.remove("closedDescriptionBackground");
//     // descriptionBackground.classList.add("openedDescriptionBackground");
//     videoPause();

//     console.log("Description lancé");
//   }
// };

const videoProgression = () => {
  switch (showcaseVideoImgIndex) {
    case 0:
      videoShowTime = 22;
      break;
    case 1:
      videoShowTime = 67;
      video.currentTime = 43;
      break;
    case 2:
      videoShowTime = 98;
      video.currentTime = 75;
      break;
    case 3:
      videoShowTime = 155;
      video.currentTime = 126;
      // Coucher le btnPlay
      btnPlay.parentElement.style.visibility = "hidden";
      break;
  }
};

const correspondingDescription = () => {
  console.log(imageIndex);
  if (imageIndex == 0) {
    let descriptionTerrasse = `<div class="descriptionContainer"><div class="descriptionText"><p id="descriptionTitle">${"Terrasse ombragée"}</p><p id="descriptionContent">${"Idéale pour profiter de moments de détente à l'extérieur tout en étant protégé du soleil"}</p></div><div class="imgContainer"><div class="terrasse">
                <div class="presentationOfThePlaceImg" id="img00">
                  <img
                    class="imgSolo"
                    src="00.jpg"
                    alt=""
                  />
                </div>
              </div>
  </div></div>`;
    descriptionBackground.innerHTML = descriptionTerrasse;
    imageIndex = 1;
    console.log(imageIndex);
  } else if (imageIndex == 1 /* | (imageIndex == 2)*/) {
    let descriptionCuisine = `<div class="descriptionContainer"><div class="descriptionText"><p id="descriptionTitle">${"Cuisine ouverte fonctionnelle"}</p>
<p id="descriptionContent">${"Un petit espace moderne alliant esthétique et praticité, décoré dans des tons bois chaleureux avec une dominante de blanc et de marron. De nombreux rangements astucieux facilitent l'organisation, et cette cuisine s'intègre harmonieusement au reste des pièces, offrant une belle continuité visuelle."}</p></div><div class="imgContainer"><div class="cuisine">
                <div class="presentationOfThePlaceImg" id="img01">
                  <img
                    class="imgDouble"
                    src="01.jpg"
                    alt=""
                  />
                </div>
                <div class="presentationOfThePlaceImg" id="img02">
                  <img
                    class="imgDouble"
                    src="02.jpg"
                    alt=""
                  />
                </div>
              </div></div>`;
    descriptionBackground.innerHTML = descriptionCuisine;
    imageIndex = 3;
    console.log(imageIndex);
  } else if (imageIndex == 3 /* | (imageIndex == 4)*/) {
    let descriptionChambrePrincipale = `<div class="descriptionContainer"><div class="descriptionText"><p id="descriptionTitle">${"Chambre principale lumineuse"}</p><p id="descriptionContent">${"Entièrement blanche, elle est équipée d'une climatisation pour un confort optimal ainsi que d'une grande armoire de rangement."}</p></div><div class="imgContainer"><div class="chambre">
                <div class="presentationOfThePlaceImg" id="img03">
                  <img
                    class="imgDouble"
                    src="03.jpg"
                    alt=""
                  />
                </div>
                <div class="presentationOfThePlaceImg" id="img04">
                  <img
                    class="imgDouble"
                    src="04.jpg"
                    alt=""
                  />
                </div>
              </div></div>`;
    descriptionBackground.innerHTML = descriptionChambrePrincipale;
    imageIndex = 5;
    console.log(imageIndex);
  } else if (imageIndex == 5 /* | (imageIndex == 6)*/) {
    let descriptionChambrePolyvalente = `<div class="descriptionContainer"><div class="descriptionText"><p id="descriptionTitle">${"Seconde chambre polyvalente"}</p><p id="descriptionContent">${"Aménagée avec un lit simple et encore plus de rangements, parfaite pour un enfant, un invité ou pour une utilisation comme bureau."}</p></div><div class="imgContainer"><div class="chambreConvertible">
                <div class="presentationOfThePlaceImg" id="img05">
                  <img
                    class="imgDouble"
                    src="05.jpg"
                    alt=""
                  />
                </div>
                <div class="presentationOfThePlaceImg" id="img06">
                  <img
                    class="imgDouble"
                    src="06.jpg"
                    alt=""
                  />
                </div>
              </div></div>`;
    descriptionBackground.innerHTML = descriptionChambrePolyvalente;
    imageIndex = 7;
    console.log(imageIndex);
  } else if (imageIndex >= 7 /*& (imageIndex <= 9)*/) {
    let descriptionSDB = `<div class="descriptionContainer"><div class="descriptionText"><p id="descriptionTitle">${"Salle de bain élégante"}</p><p id="descriptionContent">${"Douche à l'italienne moderne, toilettes intégrées, et de multiples espaces dédiés au rangement, dont un placard et un porte-serviettes pratique."}</p></div>
    <div class="imgContainer"><div class="salleDeBain">
      <div class="presentationOfThePlaceImg" id="img07">
        <img class="imgTriple paysage" src="07.jpg" alt=""/>
                </div>
                <div class="presentationOfThePlaceImg" id="img08">
                  <img
                    class="imgTriple paysage"
                    src="08.jpg"
                    alt=""
                  />
                </div>
                <div class="presentationOfThePlaceImg" id="img09">
                  <img
                    class="imgTriple portrait"
                    src="09.jpg"
                    alt=""
                  />
                </div>
              </div></div>`;
    descriptionBackground.innerHTML = descriptionSDB;
  }
};

// const contenuOffset = (a) => {
//   // ".contenuOpen" est remplacé par ".contenu"
//   let contenuOpen = document.querySelector(".contenu");
//   a.style.transition = 0.5 + "s";
//   a.style.position = "absolute";
//   a.style.height = contenuOpen.offsetHeight + "px";
//   a.style.width = contenuOpen.offsetWidth + "px";
//   a.style.top = 0 + "px";
//   a.style.left = 0 + "px";
//   console.log(contenuOpen.offsetY);
// };

const showAndDescribe = () => {
  descriptionOpened = true;
  // if (video.currentTime >= 5) {
  descriptionBackground.classList.remove("visibilityHidden");
  descriptionBackground.classList.remove("opacity0");
  // descriptionBackground.classList.remove("closedDescriptionBackground");
  // descriptionBackground.classList.add("openedDescriptionBackground");
  // correspondingDescription();
  setDescriptionText();
  // console.log(document.querySelector(".presentationOfThePlaceImg"));
  // showImg = document.querySelector(".presentationOfThePlaceImg");
  // showImg.onclick = () => {
  //   console.log("je fonctionne");
  //   contenuOffset(showImg);
  // };
  console.log("Description lancé");
  // }
};

const backToShowcaseVideoOnBtnClick = () => {
  descriptionOpened = false;
  descriptionBackground.classList.add("opacity0");
  // descriptionBackground.classList.add("closedDescriptionBackground");
  // descriptionBackground.classList.remove("openedDescriptionBackground");
  setTimeout(() => {
    descriptionBackground.classList.add("visibilityHidden");
    togglePlayPause();
  }, 500);
};

const offsetSetting = () => {
  showcaseVideoOffsetTop = controls.parentElement.offsetTop;
  showcaseVideoOffsetLeft = controls.parentElement.offsetLeft;
  console.log("offset");
};

const onResizeEnd = () => {
  console.log("Redimensionnement terminé !");
  offsetSetting();
};

const showControls = () => {
  controls.classList.add("visibilityVisible");
  controls.classList.remove("visibilityHidden");
};

const hideControls = () => {
  controls.classList.add("visibilityHidden");
  controls.classList.remove("visibilityVisible");
};

const hideCursor = () => {
  cursor.classList.add("visibilityHidden");
  cursor.classList.remove("visibilityVisible");
};

const showCursor = () => {
  cursor.classList.add("visibilityVisible");
  cursor.classList.remove("visibilityHidden");
  mouseInactive();
};

// const backgroundChange = () =>{
//   backgroundImg.remove("opacity0");
// };

const videoPause = () => {
  btnPlayPause.className = "play";
  cursorPlayPause.className = "play";
  video.pause();
  showCursor();
  // backgroundVideo1.play();
  // backgroundVideo2.play();
  // backgroundImg.classList.add("opacity0");
  // backgroundVideoDiapo;
  console.log("Current time = " + video.currentTime);
};

const videoPlay = () => {
  btnPlayPause.className = "pause";
  cursorPlayPause.className = "pause";
  video.play();
  video.playbackRate = 3.0;
  firstplay = true;
  // backgroundVideo1.pause();
  // backgroundVideo2.pause();
  // backgroundImg.classList.remove("opacity0");
  // clearInterval(backgroundVideoDiapo);
  if ((firstplay == true) & (video.currentTime != video.duration)) {
    hideControls();
  }
  showCursor();
};

const togglePlayPause = () => {
  if (video.paused) {
    videoPlay();
  } else {
    videoPause();
  }
};

const mouseInactive = () => {
  if (mouseInactiveTimer != "NeverRun") {
    clearTimeout(mouseInactiveTimer);
  }

  mouseInactiveTimer = setTimeout(() => {
    console.log("inactive !!" + video.currentTime);
    if (video.currentTime != video.duration) {
      hideCursor();
    }
  }, 750);
};

controls.onclick = () => {
  //   alert("play!!!!!");
  togglePlayPause();
  offsetSetting();
};

cursor.onclick = () => {
  //   alert("play!!!!!");
  togglePlayPause();
};

video.onclick = () => {
  //   alert("play!!!!!");
  togglePlayPause();
};

btnPlay.onclick = () => {
  backToShowcaseVideoOnBtnClick();
  videoProgression();
  showcaseVideoImgIndex++;
};

window.addEventListener("resize", () => {
  clearInterval(resizeTimeout);
  resizeTimeout = setTimeout(onResizeEnd, 300);
});

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX - showcaseVideoOffsetLeft + "px";
  cursor.style.top = e.pageY - showcaseVideoOffsetTop + "px";
  console.log();
});

showcaseVideo.addEventListener("mousemove", () => {
  console.log("!!!");
  showCursor();
});

video.addEventListener("timeupdate", () => {
  if (video.ended) {
    // btnPlayPause.className = "play";
    // cursorPlayPause.className = "play";
    showCursor();
  }
  if (video.ended) {
    // video.src = "OpeningVideo.mp4";
    if (currentVideo == "OpeningVideo") {
      currentVideo = "PresentationVideo";
      video.src = "PresentationVideo.mp4";
      video.currentTime = 5;
      video.play();
      video.playbackRate = 3.0;
    } else {
      currentVideo = "OpeningVideo";
      video.src = "OpeningVideo.mp4";
      video.play();
      video.playbackRate = 3.0;
    }
  }
  if (
    (btnPlayPause.className == "pause") &
    (video.currentTime >= videoShowTime)
  ) {
    console.log("Current time = " + video.currentTime);
    showAndDescribe();
    togglePlayPause();
    if (currentVideo == "OpeningVideo") {
      videoShowTime = 20;
    }
  }
});

cursorPlayPause.addEventListener("change", () => {
  // if (cursorPlayPause.classList == "play") {
  if (descriptionBackground.classList == "visibilityHidden") {
    console.log("Je fonctionne");
    backgroundVideo1.pause();
    // backgroundVideo2.pause();
  }
});

window.addEventListener("click", (e) => {
  console.log(e);
});

window.offsetSetting = offsetSetting;
window.videoShowTime = videoShowTime;
// window.cursorPlayPause = cursorPlayPause;
window.toggleStatutApercuOnglet = toggleStatutApercuOnglet;
window.descriptionOpened = descriptionOpened;
window.descriptionClosingdelai = descriptionClosingdelai;
window.showAndDescribe = showAndDescribe;
