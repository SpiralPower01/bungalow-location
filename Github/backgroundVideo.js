const backgroundVideo1 = document.getElementById("backgroundVideo1");
const backgroundVideo2 = document.getElementById("backgroundVideo2");
const backgroundImg = document.getElementById("backgroundImg");

const BackgroundVideoIntervalDuration = 7500;
const cuisineTime = 5;
const sdbTime = 43;
const chambre1Time = 75;
const chambre2Time = 126;

let backgroundVideo = backgroundVideo1;

let currentBackgroundVideo1 = "OpeningVideo";
let currentBackgroundVideo2 = "OpeningVideo";

let randomIndex;
let prevRamdomIndex = 3;

let backgroundVideoDiapo;

/****Lancer Deux video qui se chevauches pour ajouter un effet de fluidité****/

// backgroundOpeningVideoCurentTimeArray = new Array();

// backgroundOpeningVideoCurentTimeArray.push(0, 5);

const backgroundPresentationVideoCurentTimeArray = new Array();
backgroundPresentationVideoCurentTimeArray.push(
  cuisineTime,
  sdbTime,
  chambre1Time,
  chambre2Time
);

const plusoumoinsArray = new Array();
plusoumoinsArray.push(-1, 1);

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const findOverRandomIndex = (a) => {
  // length - 1 i'mportant
  if (a > backgroundPresentationVideoCurentTimeArray.length - 1) {
    a = 0;
  } else if (a < 0) {
    a = backgroundPresentationVideoCurentTimeArray.length - 1;
  }
  return a;
};

const backgroundSmouthTransition = () => {
  if (backgroundVideo == backgroundVideo1) {
    backgroundVideo = backgroundVideo2;
    backgroundVideo2.classList.remove("opacity0");
  } else {
    backgroundVideo = backgroundVideo1;
    backgroundVideo2.classList.add("opacity0");
  }
};

const randomPartOfVideo = () => {
  randomIndex = getRandomInt(backgroundPresentationVideoCurentTimeArray.length);
  console.log(randomIndex);
  console.log(prevRamdomIndex);
  if (currentBackgroundVideo1 == "PresentationVideo")
    if (randomIndex == prevRamdomIndex) {
      randomIndex += plusoumoinsArray[getRandomInt(plusoumoinsArray.length)];
      randomIndex = findOverRandomIndex(randomIndex);
      prevRamdomIndex = randomIndex;
      backgroundVideo.currentTime =
        backgroundPresentationVideoCurentTimeArray[randomIndex];
    } else {
      prevRamdomIndex = randomIndex;
      backgroundVideo.currentTime =
        backgroundPresentationVideoCurentTimeArray[randomIndex];
    }
};

// const randomPartOfVideo = () => {
//   // if (currentBackgroundVideo1 == "PresentationVideo") {
//   randomIndex = getRandomInt(
//     backgroundPresentationVideoCurentTimeArray.length
//   );
//   backgroundVideo1.currentTime =
//     backgroundPresentationVideoCurentTimeArray[randomIndex];
//   // } else {
//   //   randomIndex = getRandomInt(backgroundOpeningVideoCurentTimeArray.length);
//   //   backgroundVideo1.currentTime =
//   //     backgroundOpeningVideoCurentTimeArray[randomIndex];
//   //   console.log(randomIndex);
//   //   console.log(backgroundOpeningVideoCurentTimeArray[randomIndex]);
//   // }
// };

backgroundVideo1.addEventListener("timeupdate", () => {
  if (backgroundVideo1.ended) {
    // video.src = "OpeningVideo.mp4";
    if (currentBackgroundVideo1 == "OpeningVideo") {
      currentBackgroundVideo1 = "PresentationVideo";
      backgroundVideo1.src = "PresentationVideo.mp4";
      backgroundVideo1.currentTime = cuisineTime;
      backgroundVideo1.play();
      backgroundVideo2.play();
      backgroundVideoDiapo = setInterval(() => {
        randomPartOfVideo();
        backgroundSmouthTransition();
        console.log(
          backgroundVideo1.currentTime + " et " + backgroundVideo2.currentTime
        );
      }, BackgroundVideoIntervalDuration);
      // backgroundVideo1.playbackRate = 0.75;
    } else {
      currentBackgroundVideo1 = "OpeningVideo";
      backgroundVideo1.src = "OpeningVideo.mp4";
      backgroundVideo1.play();
      // backgroundVideo1.playbackRate = 0.75;
    }
  }
});

// cursorPlayPause.addEventListener("change", () =>{
//   if (cursorPlayPause.classList == "play"){
//     backgroundVideo1.pause()
//     backgroundVideo2.pause()
//   }
// });

backgroundVideo1.play();
window.backgroundVideo1 = backgroundVideo1;
window.backgroundVideo2 = backgroundVideo2;
window.backgroundImg = backgroundImg;
window.backgroundVideoDiapo = backgroundVideoDiapo;

// backgroundVideo1.playbackRate = 0.75;
