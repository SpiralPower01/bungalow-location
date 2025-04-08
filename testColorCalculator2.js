let testEffectElementIndex = 0;
let colorCalculatorResult2;
let widthCalculatorResult2;
let dateWidth2;

let transisitionDuration2 = "0.5s";

let transparentBackgroundStyleList2 = new Array();
let transparentToColoredBackgroundList2 = new Array();
let revertTransparentToColoredBackgroundList2 = new Array();
let coloredBackgroundList2 = new Array();
let inactiveColoredBackgroundList2 = new Array();

let elementOuterHtmlList2 = new Array();
let elementSartOuterHtmlList2 = new Array();
let elementEndOuterHtmlList2 = new Array();
let elementDoubleOuterHtmlList2 = new Array();
let elementDoubleSartOuterHtmlList2 = new Array();
let elementDoubleEndOuterHtmlList2 = new Array();

let elementWithTransparentBackgroundList2 = new Array();
let elementWithTransparentToColoredBackgroundList2 = new Array();
let elementWithRevertTransparentToColoredBackgroundList2 = new Array();
let elementWithColoredBackgroundList2 = new Array();
let searchSart2 = 0;
let searchEnd2 = 0;

const testEffectElementsWidthCalculator = () => {
  widthCalculatorResult2 = 0;
  testEffectElementIndex = 0;
  for (let i = 0; i < testEffectElement.length; i++) {
    if (testEffectElement[i].clientWidth == 0) {
      break;
    }

    // console.log(testEffectElement[i].clientWidth);
    if (testEffectElement[i].clientWidth > 0) {
      widthCalculatorResult2 += testEffectElement[i].clientWidth;
    }

    testEffectElementIndex = i + 1;
  }

  // console.log(widthCalculatorResult2);
};

const testEffectElementsColorCalculator = () => {
  testEffectElementsWidthCalculator();

  let linearGradientAqua = new Array();
  let linearGradientYellow = new Array();
  let aquaVariant;
  let yellowVariant;
  let aquaVariant2;
  let yellowVariant2;
  let transparentBackgroundStyle;
  let transparentToColoredBackground;
  let revertTransparentToColoredBackground;
  let coloredBackground;
  let inactiveColoredBackground;

  // console.log("Test effect " + testEffectElementIndex);

  if (testEffectElementIndex == 1) {
    aquaVariant = 0;
    yellowVariant = fullColor;
    aquaVariant2 = fullColor;
    yellowVariant2 = 0;
    linearGradientAqua.push(aquaVariant);
    linearGradientYellow.push(yellowVariant);
    linearGradientAqua.push(aquaVariant2);
    linearGradientYellow.push(yellowVariant2);
  } else if (testEffectElementIndex > 1) {
    aquaVariant = 0;
    yellowVariant = fullColor;
    linearGradientAqua.push(aquaVariant);
    linearGradientYellow.push(yellowVariant);
    for (i = 1; i < testEffectElementIndex; i++) {
      aquaVariant =
        (testEffectElement[i - 1].clientWidth * fullColor) /
          widthCalculatorResult2 +
        linearGradientAqua[i - 1];

      yellowVariant =
        linearGradientYellow[i - 1] -
        (testEffectElement[i - 1].clientWidth * fullColor) /
          widthCalculatorResult2;

      linearGradientAqua.push(aquaVariant);
      linearGradientYellow.push(yellowVariant);
    }
    aquaVariant = fullColor;
    yellowVariant = 0;
    linearGradientAqua.push(aquaVariant);
    linearGradientYellow.push(yellowVariant);
  }

  //   for (i = 0; i < testEffectElementIndex; i++) {
  //     if (i == 0) {
  //       aquaVariant = 0;
  //       yellowVariant = fullColor;
  //       linearGradientAqua.push(aquaVariant);
  //       linearGradientYellow.push(yellowVariant);
  //     } else if ((i > 0) & (i < testEffectElementIndex)) {
  //       /****Ajouté le calcule du gap****/
  //       aquaVariant =
  //         (testEffectElement[i].clientWidth * fullColor) /
  //           widthCalculatorResult2 +
  //         linearGradientAqua[i - 1];
  //       yellowVariant =
  //         linearGradientYellow[i - 1] -
  //         (testEffectElement[i].clientWidth * fullColor) / widthCalculatorResult2;

  //       linearGradientAqua.push(aquaVariant);
  //       linearGradientYellow.push(yellowVariant);
  //     } else if (i == testEffectElementIndex) {
  //       aquaVariant = fullColor;
  //       yellowVariant = 0;

  //       linearGradientAqua.push(aquaVariant);
  //       linearGradientYellow.push(yellowVariant);
  //     }
  //   }

  //   for (i = 0; i < testEffectElementIndex; i++) {
  //     transparentBackgroundStyle = ` style="background: red; transition: ${transisitionDuration};"`;
  //     transparentBackgroundStyleList.push(transparentBackgroundStyle);
  //   }

  //   for (i = 0; i < testEffectElementIndex; i++) {
  //     transparentToColoredBackground = ` style="background: linear-gradient(to right, rgb(${linearGradientAqua[i]}, 255, ${linearGradientYellow[i]}), transparent); transition: ${transisitionDuration};"`;
  //     transparentToColoredBackgroundList.push(transparentToColoredBackground);
  //   }

  //   for (i = 0; i < testEffectElementIndex; i++) {
  //     revertTransparentToColoredBackground = ` style="background: linear-gradient(to right, transparent, rgb(${
  //       linearGradientAqua[i + 1]
  //     }, 255, ${
  //       linearGradientYellow[i + 1]
  //     })); transition: ${transisitionDuration};"`;
  //     revertTransparentToColoredBackgroundList.push(
  //       revertTransparentToColoredBackground
  //     );
  //   }
  coloredBackgroundList2 = new Array();
  inactiveColoredBackgroundList2 = new Array();
  for (i = 0; i < testEffectElementIndex; i++) {
    coloredBackground = ` linear-gradient(to right, rgb(${
      linearGradientAqua[i]
    }, 255, ${linearGradientYellow[i]}), rgb(${
      linearGradientAqua[i + 1]
    }, 255, ${linearGradientYellow[i + 1]})) `;
    coloredBackgroundList2.push(coloredBackground);

    if (
      i == firstCalendarFIrstInactiveDateEffectElement ||
      i == firstDateElementCheck
    ) {
      inactiveColoredBackground = ` linear-gradient(to right, rgb(${
        fullColor - linearGradientAqua[i]
      }, 0, ${fullColor - linearGradientYellow[i]}), rgb(${
        fullColor - linearGradientAqua[i + 1]
      }, 0, ${fullColor - linearGradientYellow[i + 1]})) `;
      // console.log("Work " + i);

      inactiveColoredBackgroundList2.push(inactiveColoredBackground);
    }
  }

  //   findSlice();
  findSliceAndColorTransition2();
  findSliceAndColorTransition3();
  // test();
};

const findSliceAndColorTransition3 = () => {
  elementDoubleOuterHtmlList2 = new Array();
  elementDoubleSartOuterHtmlList2 = new Array();
  elementDoubleEndOuterHtmlList2 = new Array();
  for (i = 0; i < testEffectElementDouble.length; i++) {
    testEffectElementDouble[i].style.background = "blue";
    let element = testEffectElementDouble[i].outerHTML;
    // console.log(element);
    elementDoubleOuterHtmlList2.push(element);
  }

  for (let index = 0; index < 2; index++) {
    let element = elementDoubleOuterHtmlList2[index];
    // console.log(element);

    for (i = 10; i < Infinity; i++) {
      searchSart = 0 + i;
      searchEnd = 4 + i;
      if (element.slice(0 + i, 4 + i) == "blue") {
        // console.log(element.slice(0 + i, 4 + i));
        let elementDoubleSartOuterHtml = element.slice(0, searchSart);
        let elementDoubleEndOuterHtml = element.slice(searchEnd, -1) + ">";
        // console.log(elementSartOuterHtml, elementEndOuterHtml);
        //   // console.log("Find");
        //   console.log("Sart = " + element.slice(0, searchSart + 1));
        //   console.log("End = " + element.slice(searchSart + 1, -1) + ">");
        elementDoubleSartOuterHtmlList2.push(elementDoubleSartOuterHtml);
        elementDoubleEndOuterHtmlList2.push(elementDoubleEndOuterHtml);
        break;
      }
    }

    testEffectElementDouble[index].outerHTML =
      elementDoubleSartOuterHtmlList2[index] +
      inactiveColoredBackgroundList2[index] +
      elementDoubleEndOuterHtmlList2[index];
    // console.log(testEffectElement[index]);
  }
};

const findSliceAndColorTransition2 = () => {
  elementOuterHtmlList2 = new Array();
  elementSartOuterHtmlList2 = new Array();
  elementEndOuterHtmlList2 = new Array();
  for (i = 0; i < testEffectElementIndex; i++) {
    testEffectElement[i].style.background = "blue";
    let element = testEffectElement[i].outerHTML;
    // console.log(element);
    elementOuterHtmlList2.push(element);
  }

  for (let index = 0; index < testEffectElementIndex; index++) {
    let element = elementOuterHtmlList2[index];
    // console.log(element);

    for (i = 10; i < Infinity; i++) {
      searchSart = 0 + i;
      searchEnd = 4 + i;
      if (element.slice(0 + i, 4 + i) == "blue") {
        // console.log(element.slice(0 + i, 4 + i));
        let elementSartOuterHtml = element.slice(0, searchSart);
        let elementEndOuterHtml = element.slice(searchEnd, -1) + ">";
        // console.log(elementSartOuterHtml, elementEndOuterHtml);
        //   // console.log("Find");
        //   console.log("Sart = " + element.slice(0, searchSart + 1));
        //   console.log("End = " + element.slice(searchSart + 1, -1) + ">");
        elementSartOuterHtmlList2.push(elementSartOuterHtml);
        elementEndOuterHtmlList2.push(elementEndOuterHtml);
        break;
      }
    }

    testEffectElement[index].outerHTML =
      elementSartOuterHtmlList2[index] +
      coloredBackgroundList2[index] +
      elementEndOuterHtmlList2[index];
    // console.log(testEffectElement[index]);
  }

  //   setTimeout(() => {
  //     let transparentToColoredIndex = 0;
  //     let tempo;
  //     let gradualReservationPeriode = setInterval(() => {
  //       document.getElementById(
  //         selectedDaysIds[transparentToColoredIndex]
  //       ).outerHTML =
  //         elementSartOuterHtmlList[transparentToColoredIndex] +
  //         transparentToColoredBackgroundList[transparentToColoredIndex] +
  //         elementEndOuterHtmlList[transparentToColoredIndex];
  //       transparentToColoredIndex++;
  //       console.log(elementOuterHtmlList.length);
  //       console.log(transparentToColoredIndex);
  //       if (transparentToColoredIndex >= elementOuterHtmlList.length - 1) {
  //         clearInterval(gradualReservationPeriode);
  //         //   clearTimeout(tempo);
  //       }
  //     }, 500 / selectedDaysIds.length);
  //   }, 500);

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

window.testEffectElementsColorCalculator = testEffectElementsColorCalculator;
