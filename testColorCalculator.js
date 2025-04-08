const fullColor = 255;
let colorCalculatorResult;
let widthCalculatorResult;
let dateWidth;

let transisitionDuration = "0.5s";

let transparentBackgroundStyleList = new Array();
let transparentToColoredBackgroundList = new Array();
let revertTransparentToColoredBackgroundList = new Array();
let coloredBackgroundList = new Array();

let elementOuterHtmlList = new Array();
let elementSartOuterHtmlList = new Array();
let elementEndOuterHtmlList = new Array();

let elementWithTransparentBackgroundList = new Array();
let elementWithTransparentToColoredBackgroundList = new Array();
let elementWithRevertTransparentToColoredBackgroundList = new Array();
let elementWithColoredBackgroundList = new Array();
let searchSart = 0;
let searchEnd = 0;

const widthCalculator = () => {
  // console.log(dateWidth);
  colorCalculatorResult = (dateWidth + 5) * selectedDaysIds.length - 5;
};

const datesColorCalculator = () => {
  dateWidth = document.getElementById(selectedDaysIds[0]).clientWidth;
  widthCalculator();

  let linearGradientAqua = new Array();
  let linearGradientYellow = new Array();
  let aquaVariant;
  let yellowVariant;
  let transparentBackgroundStyle;
  let transparentToColoredBackground;
  let revertTransparentToColoredBackground;
  let coloredBackground;

  for (i = 0; i < selectedDaysIds.length + 1; i++) {
    if (i == 0) {
      aquaVariant = 0;
      yellowVariant = fullColor;

      linearGradientAqua.push(aquaVariant);
      linearGradientYellow.push(yellowVariant);
    } else if ((i > 0) & (i < selectedDaysIds.length)) {
      /****Ajouté le calcule du gap****/
      aquaVariant =
        (dateWidth * fullColor) / colorCalculatorResult +
        linearGradientAqua[i - 1];
      yellowVariant =
        linearGradientYellow[i - 1] -
        (dateWidth * fullColor) / colorCalculatorResult;

      linearGradientAqua.push(aquaVariant);
      linearGradientYellow.push(yellowVariant);
    } else if (i == selectedDaysIds.length) {
      aquaVariant = fullColor;
      yellowVariant = 0;

      linearGradientAqua.push(aquaVariant);
      linearGradientYellow.push(yellowVariant);
    }
  }

  for (i = 0; i < selectedDaysIds.length; i++) {
    transparentBackgroundStyle = ` style="background: red; transition: ${transisitionDuration};"`;
    transparentBackgroundStyleList.push(transparentBackgroundStyle);
  }

  for (i = 0; i < selectedDaysIds.length; i++) {
    transparentToColoredBackground = ` style="background: linear-gradient(to right, rgb(${linearGradientAqua[i]}, 255, ${linearGradientYellow[i]}), transparent); transition: ${transisitionDuration};"`;
    transparentToColoredBackgroundList.push(transparentToColoredBackground);
  }

  for (i = 0; i < selectedDaysIds.length; i++) {
    revertTransparentToColoredBackground = ` style="background: linear-gradient(to right, transparent, rgb(${
      linearGradientAqua[i + 1]
    }, 255, ${
      linearGradientYellow[i + 1]
    })); transition: ${transisitionDuration};"`;
    revertTransparentToColoredBackgroundList.push(
      revertTransparentToColoredBackground
    );
  }

  for (i = 0; i < selectedDaysIds.length; i++) {
    coloredBackground = ` style="background: aqua; transition: ${transisitionDuration};"`;
    // backgroundStyle = `linear-gradient(to right, rgb(${
    //   linearGradientAqua[i]
    // }, 255, ${linearGradientYellow[i]}), rgb(${
    //   linearGradientAqua[i + 1]
    // }, 255, ${linearGradientYellow[i + 1]}));`;
    coloredBackgroundList.push(coloredBackground);
  }

  //   findSlice();
  // findSliceAndColorTransition();
  // test();
};

const findSlice = () => {
  for (i = 0; i < selectedDaysIds.length; i++) {
    let element = document.getElementById(selectedDaysIds[i]).outerHTML;
    console.log(element);
    elementOuterHtmlList.push(element);
  }
  //   let finaleIndex = 0;
  //   gradualReservationPeriode = setInterval(() => {
  //     let element = elementOuterHtmlList[finaleIndex];
  //     console.log(element);
  //     for (i = 0; i < 100; i++) {
  //       //   console.log(
  //       //     document
  //       //       .getElementById(`${selectedDaysIds[0]}`)
  //       //       .outerHTML.slice(0 + i, 2 + i)
  //       //   );
  //       searchSart = 0 + i;
  //       searchEnd = 2 + i;
  //       if (element.slice(0 + i, 2 + i) == '">') {
  //         console.log("Find");
  //         console.log("Sart = " + element.slice(0, searchSart + 1));
  //         console.log("End = " + element.slice(searchSart + 1, -1) + ">");
  //         break;
  //       }
  //     }
  //     document.getElementById(selectedDaysIds[finaleIndex]).outerHTML =
  //       element.slice(0, searchSart + 1) +
  //       coloredBackgroundList[finaleIndex] +
  //       element.slice(searchSart + 1, -1) +
  //       ">";
  //     if (finaleIndex >= elementOuterHtmlList.length - 1) {
  //       clearInterval(gradualReservationPeriode);
  //     }
  //     finaleIndex++;
  //   }, 500 / selectedDaysIds.length);

  //   for (index = 0; index < elementOuterHtmlList.length; index++) {
  //     let element = elementOuterHtmlList[index];
  //     console.log(element);
  //     for (i = 0; i < 100; i++) {
  //       //   console.log(
  //       //     document
  //       //       .getElementById(`${selectedDaysIds[0]}`)
  //       //       .outerHTML.slice(0 + i, 2 + i)
  //       //   );
  //       searchSart = 0 + i;
  //       searchEnd = 2 + i;
  //       if (element.slice(0 + i, 2 + i) == '">') {
  //         console.log("Find");
  //         console.log("Sart = " + element.slice(0, searchSart + 1));
  //         console.log("End = " + element.slice(searchSart + 1, -1) + ">");
  //         break;
  //       }
  //     }
  //     document.getElementById(selectedDaysIds[index]).outerHTML =
  //       element.slice(0, searchSart + 1) +
  //       coloredBackgroundList[index] +
  //       element.slice(searchSart + 1, -1) +
  //       ">";
  //   }

  //   for (y = 0; y < selectedDaysIds.length + 1; y++) {
  //     for (i = 0; i < 100; i++) {
  //       //   console.log(
  //       //     document
  //       //       .getElementById(`${selectedDaysIds[0]}`)
  //       //       .outerHTML.slice(0 + i, 2 + i)
  //       //   );
  //       searchSart = 0 + i;
  //       searchEnd = 2 + i;
  //       if (
  //         document
  //           .getElementById(`${selectedDaysIds[y]}`)
  //           .outerHTML.slice(0 + i, 2 + i) == '">'
  //       ) {
  //         console.log("Find");
  //         console.log(
  //           "Sart = " +
  //             document
  //               .getElementById(`${selectedDaysIds[y]}`)
  //               .outerHTML.slice(0, searchSart + 1)
  //         );
  //         console.log(
  //           "End = " +
  //             document
  //               .getElementById(`${selectedDaysIds[y]}`)
  //               .outerHTML.slice(searchSart + 1, -1) +
  //             ">"
  //         );
  //         searchSartList.push(searchSart);
  //         searchEndList.push(searchEnd);
  //         break;
  //       }
  //     }
  //   }
};

const findSliceAndColorTransition = () => {
  for (i = 0; i < selectedDaysIds.length; i++) {
    let element = document.getElementById(selectedDaysIds[i]).outerHTML;
    console.log(element);
    elementOuterHtmlList.push(element);
  }

  for (index = 0; index < elementOuterHtmlList.length; index++) {
    let element = elementOuterHtmlList[index];
    console.log(element);
    for (i = 0; i < 100; i++) {
      searchSart = 0 + i;
      searchEnd = 2 + i;
      if (element.slice(0 + i, 2 + i) == '">') {
        let elementSartOuterHtml = element.slice(0, searchSart + 1);
        let elementEndOuterHtml = element.slice(searchSart + 1, -1) + ">";
        // console.log("Find");
        // console.log("Sart = " + element.slice(0, searchSart + 1));
        // console.log("End = " + element.slice(searchSart + 1, -1) + ">");
        elementSartOuterHtmlList.push(elementSartOuterHtml);
        elementEndOuterHtmlList.push(elementEndOuterHtml);
        break;
      }
    }
    document.getElementById(selectedDaysIds[index]).outerHTML =
      elementSartOuterHtmlList[index] +
      transparentBackgroundStyleList[index] +
      elementEndOuterHtmlList[index];
  }

  setTimeout(() => {
    let transparentToColoredIndex = 0;
    let tempo;
    let gradualReservationPeriode = setInterval(() => {
      document.getElementById(
        selectedDaysIds[transparentToColoredIndex]
      ).outerHTML =
        elementSartOuterHtmlList[transparentToColoredIndex] +
        transparentToColoredBackgroundList[transparentToColoredIndex] +
        elementEndOuterHtmlList[transparentToColoredIndex];
      transparentToColoredIndex++;
      console.log(elementOuterHtmlList.length);
      console.log(transparentToColoredIndex);
      if (transparentToColoredIndex >= elementOuterHtmlList.length - 1) {
        clearInterval(gradualReservationPeriode);
        //   clearTimeout(tempo);
      }
    }, 500 / selectedDaysIds.length);
  }, 500);

  //   tempo = setTimeout(() => {
  //     let element = elementOuterHtmlList[transparentToColoredIndex];
  //     console.log(element);

  //     //   document.getElementById(
  //     //     selectedDaysIds[transparentToColoredIndex]
  //     //   ).outerHTML =
  //     //     elementSartOuterHtmlList[transparentToColoredIndex] +
  //     //     transparentToColoredBackgroundList[transparentToColoredIndex] +
  //     //     elementEndOuterHtmlList[transparentToColoredIndex];
  //   }, 500);
  //   if (transparentToColoredIndex >= elementOuterHtmlList.length - 1) {
  //     clearInterval(gradualReservationPeriode);
  //     clearTimeout(tempo);
  //   }

  //   for (y = 0; y < selectedDaysIds.length + 1; y++) {
  //     for (i = 0; i < 100; i++) {
  //       //   console.log(
  //       //     document
  //       //       .getElementById(`${selectedDaysIds[0]}`)
  //       //       .outerHTML.slice(0 + i, 2 + i)
  //       //   );
  //       searchSart = 0 + i;
  //       searchEnd = 2 + i;
  //       if (
  //         document
  //           .getElementById(`${selectedDaysIds[y]}`)
  //           .outerHTML.slice(0 + i, 2 + i) == '">'
  //       ) {
  //         console.log("Find");
  //         console.log(
  //           "Sart = " +
  //             document
  //               .getElementById(`${selectedDaysIds[y]}`)
  //               .outerHTML.slice(0, searchSart + 1)
  //         );
  //         console.log(
  //           "End = " +
  //             document
  //               .getElementById(`${selectedDaysIds[y]}`)
  //               .outerHTML.slice(searchSart + 1, -1) +
  //             ">"
  //         );
  //         searchSartList.push(searchSart);
  //         searchEndList.push(searchEnd);
  //         break;
  //       }
  //     }
  //   }

  //   let finaleIndex = 0;
  //   gradualReservationPeriode = setInterval(() => {
  //     let element = elementOuterHtmlList[finaleIndex];
  //     console.log(element);
  //     for (i = 0; i < 100; i++) {
  //       //   console.log(
  //       //     document
  //       //       .getElementById(`${selectedDaysIds[0]}`)
  //       //       .outerHTML.slice(0 + i, 2 + i)
  //       //   );
  //       searchSart = 0 + i;
  //       searchEnd = 2 + i;
  //       if (element.slice(0 + i, 2 + i) == '">') {
  //         console.log("Find");
  //         console.log("Sart = " + element.slice(0, searchSart + 1));
  //         console.log("End = " + element.slice(searchSart + 1, -1) + ">");
  //         break;
  //       }
  //     }
  //     document.getElementById(selectedDaysIds[finaleIndex]).outerHTML =
  //       element.slice(0, searchSart + 1) +
  //       coloredBackgroundList[finaleIndex] +
  //       element.slice(searchSart + 1, -1) +
  //       ">";
  //     if (finaleIndex >= elementOuterHtmlList.length - 1) {
  //       clearInterval(gradualReservationPeriode);
  //     }
  //     finaleIndex++;
  //   }, 500 / selectedDaysIds.length);
};

window.datesColorCalculator = datesColorCalculator;
// ongletsMouseOver.innerHTML = colorCalculatorResult;

let intIndex = 0;

const test = () => {
  setInterval(() => {
    if (intIndex == 0) {
      document.getElementById(selectedDaysIds[0]).outerHTML =
        elementSartOuterHtmlList[0] +
        transparentBackgroundStyleList[0] +
        elementEndOuterHtmlList[0];

      intIndex = 1;
    } else {
      document.getElementById(selectedDaysIds[0]).outerHTML =
        elementSartOuterHtmlList[0] +
        coloredBackgroundList[0] +
        elementEndOuterHtmlList[0];
      intIndex = 0;
    }
  }, 500);
};

/*****************************/

const getAllImgElement = () => {
  for (
    i = 0;
    i <=
    document.getElementsByClassName("presentationOfThePlaceImg").length - 1;
    i++
  ) {
    console.log(
      document.getElementsByClassName("presentationOfThePlaceImg")[i]
    );
    document
      .getElementsByClassName("presentationOfThePlaceImg")
      [i].addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target.parentNode.parentNode.classList[0]);
        imgParentNode = e.target.parentNode.parentNode;
        if (e.target.parentNode.classList == "presentationOfThePlaceImg") {
          e.target.parentNode.classList.add("presentationOfThePlaceImgClicked");
          e.target.parentNode.classList.remove("presentationOfThePlaceImg");
          if (e.target.classList[0] == "imgDouble") {
            console.log("oui");
            imgIndexRecuparation();
            console.log(imgClickedIndex);
            // +1 ou moins 1 avec image triple
            console.log(findOverImgIndex(imgClickedIndex + 1));
            console.log(imgParentNode.children.length);
            overImgsIndex1 = findOverImgIndex(imgClickedIndex + 1);
            imgParentNode.children[overImgsIndex1].classList.add(
              "presentationOfThePlaceImgClosed"
            );
            imgParentNode.children[overImgsIndex1].classList.remove(
              "presentationOfThePlaceImg"
            );
          } else if (e.target.classList[0] == "imgTriple") {
            imgIndexRecuparation();
            console.log(imgClickedIndex);
            // +1 ou moins 1 avec image triple
            console.log(findOverImgIndex(imgClickedIndex + 1));
            console.log(imgParentNode.children.length);
            overImgsIndex1 = findOverImgIndex(imgClickedIndex + 1);
            overImgsIndex2 = findOverImgIndex(imgClickedIndex - 1);
            imgParentNode.children[overImgsIndex1].classList.add(
              "presentationOfThePlaceImgClosed"
            );
            imgParentNode.children[overImgsIndex1].classList.remove(
              "presentationOfThePlaceImg"
            );
            imgParentNode.children[overImgsIndex2].classList.add(
              "presentationOfThePlaceImgClosed"
            );
            imgParentNode.children[overImgsIndex2].classList.remove(
              "presentationOfThePlaceImg"
            );
          }
        } else if (
          e.target.parentNode.classList == "presentationOfThePlaceImgClicked"
        ) {
          e.target.parentNode.classList.add("presentationOfThePlaceImg");
          e.target.parentNode.classList.remove(
            "presentationOfThePlaceImgClicked"
          );
          if (e.target.classList[0] == "imgDouble") {
            imgParentNode.children[overImgsIndex1].classList.add(
              "presentationOfThePlaceImg"
            );
            imgParentNode.children[overImgsIndex1].classList.remove(
              "presentationOfThePlaceImgClosed"
            );
          } else if (e.target.classList[0] == "imgTriple") {
            imgParentNode.children[overImgsIndex1].classList.add(
              "presentationOfThePlaceImg"
            );
            imgParentNode.children[overImgsIndex1].classList.remove(
              "presentationOfThePlaceImgClosed"
            );
            imgParentNode.children[overImgsIndex2].classList.add(
              "presentationOfThePlaceImg"
            );
            imgParentNode.children[overImgsIndex2].classList.remove(
              "presentationOfThePlaceImgClosed"
            );
          }
        }
      });
  }
};

// getAllImgElement();

/****************************/
