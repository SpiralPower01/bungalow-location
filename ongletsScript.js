const onglets = document.getElementById("onglets");
const ongletsMouseOver = document.getElementById("ongletsMouseOver");
const container = document.querySelector(".container");
const background = document.getElementById("background");
const contenu = document.querySelector(".contenu");
const li1 = document.querySelector("li1");
const li2 = document.querySelector("li2");
const li3 = document.querySelector("li3");
const li4 = document.querySelector("li4");
const li5 = document.querySelector("li5");

const containerOpeningDelai = 400;
let containerOpen = false;
let lunchIndex = 0;
let currentOnglet = 0;
let prevOnglet = 0;
let delai = 0;

const contenuOffset = (a) => {
  let contenuOpen = document.querySelector(".contenuOpen");
  a.style.transition = 0.5 + "s";
  a.style.position = "absolute";
  a.style.height = contenuOpen.offsetHeight + "px";
  a.style.width = contenuOpen.offsetWidth + "px";
  a.style.top = 0 + "px";
  a.style.left = 0 + "px";
  console.log(contenuOpen.offsetY);
};

const toggleContainer = () => {
  // if ((lunchIndex == 1) | (prevOnglet == 1)) {
  switch (descriptionOpened) {
    case false:
      delai = 0;
      break;
    case true:
      delai = descriptionClosingdelai;
  }
  // } else {
  // delai = 0;
  // }
  // if (currentOnglet != childIndex)
  if ((containerOpen == false) & (descriptionOpened == true)) {
    container.classList.toggle("openedContainer");
    container.classList.toggle("closedContainer");
    background.classList.toggle("openedContainerBackground");
    background.classList.toggle("closedContainerBackground");
    setTimeout(() => {
      showAndDescribe();
    }, 300);
    console.log(" ok not");
  } else if (
    (containerOpen == true) &
    (descriptionOpened == true) &
    (lunchIndex == 1) &
    (prevOnglet != 1)
  ) {
    container.classList.toggle("openedContainer");
    container.classList.toggle("closedContainer");
    background.classList.toggle("openedContainerBackground");
    background.classList.toggle("closedContainerBackground");
    setTimeout(() => {
      showAndDescribe();
    }, 700);
    console.log(" ok " + currentOnglet);
  } else {
    setTimeout(() => {
      container.classList.toggle("openedContainer");
      container.classList.toggle("closedContainer");
      background.classList.toggle("openedContainerBackground");
      background.classList.toggle("closedContainerBackground");
    }, delai);
  }
};

const pauseBackgroundVideo = () => {
  backgroundVideo1.pause();
  backgroundVideo2.pause();
  backgroundImg.classList.remove("opacity0");
  clearInterval(backgroundVideoDiapo);
};

const playBackgroundVideo = () => {
  backgroundVideo1.play();
  backgroundVideo2.play();
  backgroundImg.classList.add("opacity0");
  backgroundVideoDiapo;
};

const containerAnimation = (childIndex) => {
  lunchIndex = childIndex;
  if (currentOnglet != childIndex) {
    if (containerOpen == false) {
      toggleContainer();
      showRightOnglet(childIndex);
      prevOnglet = childIndex;
      setTimeout(() => {
        offsetSetting();
      }, 300);
      containerOpen = true;
      currentOnglet = childIndex;
    } else {
      toggleContainer();
      setTimeout(() => {
        toggleContainer();
        showRightOnglet(childIndex);
        prevOnglet = childIndex;
        setTimeout(() => {
          offsetSetting();
        }, 300);
      }, containerOpeningDelai);
      containerOpen = true;
      currentOnglet = childIndex;
    }
    pauseBackgroundVideo();
  } else {
    toggleContainer();
    currentOnglet = 0;
    containerOpen = false;
    playBackgroundVideo();
  }
  // swtich(prevOnglet);
  toggleStatutApercuOnglet();
};

// const swtich = (a) => {
//   switch (a) {
//     case 1:
//       toggleStatutApercuOnglet();
//       console.log("Je fonction1");
//       break;
//     case 2:
//       console.log("Je fonction2");
//       break;
//     case 3:
//       break;
//     case 4:
//       break;
//     case 5:
//       break;
//   }
// };

const showRightOnglet = (childIndex) => {
  for (i = 1; i < container.children.length; i++) {
    container.children[i].style.visibility = "hidden";
    container.children[i].classList.remove("contenuOpen");
  }
  container.children[childIndex].style.visibility = "visible";
  container.children[childIndex].classList.add("contenuOpen");
};

const launchOL1 = () => {
  console.log("Aperçu");
  containerAnimation(1);
};

const launchOL2 = () => {
  console.log("Information Utiles");
  containerAnimation(2);
};

const launchOL3 = () => {
  console.log("Fonctionnement de la location");
  containerAnimation(3);
};

const launchOL4 = () => {
  console.log("Le guide des bonnes adresses");
  containerAnimation(4);
};

const launchOL5 = () => {
  console.log("Nous Contacter");
  containerAnimation(5);
};

/*******************/

const fullColor = 255;
let colorCalculatorResult;

const colorCalculator = () => {
  let backgroundStyleList = new Array();
  let linearGradientAqua = new Array();
  let linearGradientYellow = new Array();
  let aquaVariant;
  let yellowVariant;
  let backgroundStyle;
  for (i = 0; i < onglets.children.length + 1; i++) {
    if (i == 0) {
      aquaVariant = 0;
      yellowVariant = fullColor;
      linearGradientAqua.push(aquaVariant);
      linearGradientYellow.push(yellowVariant);
    } else if ((i > 0) & (i < onglets.children.length)) {
      aquaVariant =
        (onglets.children[i].clientWidth * fullColor) / onglets.clientWidth +
        linearGradientAqua[i - 1];
      yellowVariant =
        linearGradientYellow[i - 1] -
        (onglets.children[i].clientWidth * fullColor) / onglets.clientWidth;
      linearGradientAqua.push(aquaVariant);
      linearGradientYellow.push(yellowVariant);
    } else if (i == onglets.children.length) {
      aquaVariant = fullColor;
      yellowVariant = 0;
      linearGradientAqua.push(aquaVariant);
      linearGradientYellow.push(yellowVariant);
    }
  }
  for (i = 0; i < onglets.children.length; i++) {
    backgroundStyle = `background: linear-gradient(to right, rgb(${
      linearGradientAqua[i]
    }, 255, ${linearGradientYellow[i]}), rgb(${
      linearGradientAqua[i + 1]
    }, 255, ${linearGradientYellow[i + 1]})); transition: 0.4s;`;
    backgroundStyleList.push(backgroundStyle);
  }
  colorCalculatorResult = `
  <li style="${backgroundStyleList[0]}">Aperçu</div></li>
  <li style="${backgroundStyleList[1]}">Informations Utiles</div></li>
  <li style="${backgroundStyleList[2]}">Fonctionnement de la location</div></li>
  <li style="${backgroundStyleList[3]}">Le guide des bonnes adresses</div></li>
  <li style="${backgroundStyleList[4]}">Nous contacter</div></li>
  `;
};

colorCalculator();
ongletsMouseOver.innerHTML = colorCalculatorResult;

/*******************/

onglets.addEventListener("click", (e) => {
  switch (e.target.textContent) {
    case "Aperçu":
      launchOL1();
      break;
    case "Informations Utiles":
      launchOL2();
      break;
    case "Fonctionnement de la location":
      launchOL3();
      break;
    case "Le guide des bonnes adresses":
      launchOL4();
      break;
    case "Nous contacter":
      launchOL5();
      break;
  }
  console.log(e);
});

window.containerOpen = containerOpen;
window.lunchIndex = lunchIndex;
window.currentOnglet = currentOnglet;
