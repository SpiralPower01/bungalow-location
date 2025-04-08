const calendar = document.querySelector(".calendar");
const monthYearElement = document.getElementById("monthYear");
const datesElement = document.getElementById("dates");
const monthYearElement2 = document.getElementById("monthYear2");
const datesElement2 = document.getElementById("dates2");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const firstDay = document.getElementById("firstDay");
const lastDay = document.getElementById("lastDay");

const occupants = document.getElementById("occupants");
let occupantsOption = occupants.options.selectedIndex;
const personesOrPersone = document.querySelector(".personesOrPersone");

const price = document.querySelector(".price");
const nightCost = 80;
const nightsNb = document.querySelector(".nightsNb");

let dateArray;
let dateArrayIndex;
let reservationArray;
let reservationArrayIndex = 0;

let firstCalendarTotalDays;
let secondCalendarTotalDays;

/**********************************/

let periodStart = null;
let periodStartId = null;
let testEffectElement = 0;
let testEffectElementDouble = 0;
let firstCalendarFirstInactiveDateElement;
let secondCalendarFirstActiveDateElement;
let secondCalendarFirstDateInactiveElement;
let firstCalendarFIrstInactiveDateEffectElement;
let secondCalendarFIrstInactiveDateEffectElement;
let firstDateElementCheck;

let currentPeriodStartOffsetLeft;
let currentPeriodStartOffsetRight;
let currentPeriodStartOffsetWidth;

let periodStartNotInScreen = false;
let effectEndNotInScreen = false;

let diferent = "!=";
let equal = "==";

let periodSelected = false;

let effectStartId;
let effectEndId;
let effectStart;
let effectEnd;

let effectStartPageY;
let effectStartPageX;
let effectEndPageY;
let effectEndPageX;
const gridGape = 5;

/***********************************/

const todayDate = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);
let currentDate = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);
let updateCalendarIndex;

const personesOrPersoneSet = () => {
  if (occupants[occupantsOption].value == 1) {
    personesOrPersone.innerText = " personne.";
  } else {
    personesOrPersone.innerText = " personnes.";
  }
};

const priceCalculator = () => {
  if (selectedDaysIds.length > 0) {
    price.innerHTML = showEstimatedPrice(
      nightCost,
      selectedDaysIds.length,
      occupants[occupantsOption].value
    );
  }
};

const updateCalendar = () => {
  dateArray = new Array();

  for (let i = 0; i < 2; i++) {
    if (i == 0) {
      updateCalendarIndex = currentDate;
    } else {
      updateCalendarIndex = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + i
      );
    }

    const currentYear = updateCalendarIndex.getFullYear();
    const currentMonth = updateCalendarIndex.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = updateCalendarIndex.toLocaleDateString("default", {
      month: "long",
      year: "numeric",
    });

    let datesHTML = "";

    // let gridIndex = 0;

    for (let i = firstDayIndex; i > 0; i--) {
      const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
      let day = ("0" + prevDate.getDate()).slice(-2);
      let month = ("0" + (prevDate.getMonth() + 1)).slice(-2);
      // gridIndex++;
      datesHTML += `<div class='date inactive' id="${prevDate.getFullYear()}-${month}-${day}">${prevDate.getDate()}</div>`;
      // let datePush = prevDate;
      // dateArray.push(datePush);
    }

    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentYear, currentMonth, i);
      let day = ("0" + date.getDate()).slice(-2);
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      const activeClass =
        date.toDateString() === new Date().toDateString() ? "active" : "";
      // gridIndex++;
      datesHTML += `<div class='date ${activeClass}' id="${date.getFullYear()}-${month}-${day}">${i}</div>`;
      // let datePush = date;
      // dateArray.push(datePush);
    }

    for (let i = 1; i <= 7 - lastDayIndex; i++) {
      const nextDate = new Date(currentYear, currentMonth + 1, i);
      let day = ("0" + nextDate.getDate()).slice(-2);
      let month = ("0" + (nextDate.getMonth() + 1)).slice(-2);
      // gridIndex++;
      datesHTML += `<div class ="date inactive" id="${nextDate.getFullYear()}-${month}-${day}">${nextDate.getDate()}</div>`;
      // let datePush = nextDate;
      // dateArray.push(datePush);
    }

    if (i == 0) {
      monthYearElement.textContent = monthYearString;
      datesElement.innerHTML = datesHTML;
      setDatasetGridElementsPosition(datesElement);
      firstCalendarTotalDays = totalDays;
    } else {
      monthYearElement2.textContent = monthYearString;
      datesElement2.innerHTML = datesHTML;
      setDatasetGridElementsPosition(datesElement2);
      secondCalendarTotalDays = totalDays;
    }
  }

  /**/

  // let gridItems = document.getElementsByClassName("date");

  // for (let i = 0; i < gridItems.length; i++) {
  //   let position = getGridElementsPosition(getNodeIndex(gridItems[i]));
  //   console.log(
  //     `Node position is row ${position.row}, column ${position.column}`
  //   );
  // }
};

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  effectsInitialisationOnUpdateCalendar();
  updateCalendar();

  // if (selectedDaysIds.length > 0) {
  //   reservationPeriodClassAdd();
  // }

  effectsUpdateCalendar2();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  effectsInitialisationOnUpdateCalendar();
  updateCalendar();

  // if (selectedDaysIds.length > 0) {
  //   reservationPeriodClassAdd();
  // }

  effectsUpdateCalendar2();
});

updateCalendar();

/**************/

let currentSelectedDate;
let testDate;
let selectedDay;

let reservationCount = 0;

let firstSelectedDay;
let lastSelectedDay;
let selectedDays;

let firstSelectedDayElement;
let firstSelectedDayId = "";
let firstSelectedDayClass;
let firstSelectedDayIndex;

let lastSelectedDayElement;
let lastSelectedDayId = "";
let lastSelectedDayClass;
let lastSelectedDayIndex;

let selectedDaysElement;
let selectedDaysIds = new Array();
let selectedDaysClass;

// let periodCorrection = false;

const iDToDate = (a, b) => {
  // let day = ("0" + currentDate.getDate()).slice(-2);
  // let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);

  // let today = currentDate.getFullYear()+"-"+(month)+"-"+(day) ;
  // console.log(today.slice(0,-6), 'year');
  // console.log(today.slice(5,-3), 'month');
  // console.log(today.slice(8), 'date');
  // firstDay.value = today;
  let year = a.slice(0, -6);
  let month = a.slice(5, -3) - 1; //-1 pour index du mois
  let date = a.slice(8);
  b = new Date(year, month, date);
  return b;
};

const dateToId = (a, b) => {
  let day = ("0" + a.getDate()).slice(-2);
  let month = ("0" + (a.getMonth() + 1)).slice(-2);
  b = a.getFullYear() + "-" + month + "-" + day;
  return b;
};

const dateStringToFrDateString = (a, b) => {
  let year = a.slice(0, -6);
  let month = a.slice(5, -3);
  let date = a.slice(8);
  b = date + "/" + month + "/" + year;
  // console.log(b);
  return b;
};

const showEstimatedPrice = (a, b, c, d) => {
  let estimation = a * (b - 1) * c;
  d = estimation.toString() + "€";
  return d;
};

// const reservationPeriodClassAdd = () => {
//   for (let i = 0; i < selectedDaysIds.length; i++) {
//     let selectedDaysElement = document.getElementById(selectedDaysIds[i]);
//     if (selectedDaysElement) {
//       if (i == 0) {
//         selectedDaysElement.classList.add("periodStart");
//         selectedDaysElement.classList.remove("periodEnd");
//         selectedDaysElement.classList.remove("period");
//       } else if (i == selectedDaysIds.length - 1) {
//         selectedDaysElement.classList.add("periodEnd");
//         selectedDaysElement.classList.remove("periodStart");
//         selectedDaysElement.classList.remove("period");
//       } else {
//         selectedDaysElement.classList.add("period");
//         selectedDaysElement.classList.remove("periodStart");
//         selectedDaysElement.classList.remove("periodEnd");
//       }
//     }
//   }
// };

const reservationPeriodArraySetting = () => {
  // if (selectedDaysIds.length > 0) {
  //   reservationPeriodClassAdd();
  //   selectedDaysIds = new Array();
  // }

  for (
    firstSelectedDayIndex;
    firstSelectedDayIndex <= lastSelectedDayIndex;
    firstSelectedDayIndex = new Date(
      firstSelectedDayIndex.getFullYear(),
      firstSelectedDayIndex.getMonth(),
      firstSelectedDayIndex.getDate() + 1
    )
  ) {
    selectedDaysIds.push(dateToId(firstSelectedDayIndex));
  }
  console.log(selectedDaysIds);
  if (selectedDaysIds.length - 1 == 1) {
    nightsNb.innerText = "pour une nuit.";
  } else {
    nightsNb.innerText =
      "pour " + (selectedDaysIds.length - 1).toString() + " nuits.";
  }
};

const periodSelection = (e) => {
  console.log(e.srcElement.id.toString());
  currentSelectedDate = e.srcElement.id.toString();

  // let dateElement = e.target.attributes[0].nodeValue;
  // if (dateElement == 'date active' || dateElement == 'date '){
  //     console.log(e.target.attributes[0].nodeValue);
  // }

  testDate = iDToDate(currentSelectedDate);

  if (todayDate <= testDate) {
    console.log("reservation");
    if (reservationCount == 0) {
      //Reset Style
      // if (firstSelectedDayId != "") {
      //   if (currentSelectedDate != firstSelectedDayId) {
      //     firstSelectedDayElement.classList.remove("periodStart");
      //   }
      // }

      firstSelectedDay = testDate;
      selectedDay = dateStringToFrDateString(currentSelectedDate);
      firstDay.innerText = selectedDay;

      firstSelectedDayId = currentSelectedDate;
      firstSelectedDayElement = document.getElementById(firstSelectedDayId);

      // if (firstSelectedDayElement.classList[1] == "period") {
      //   firstSelectedDayElement.classList.toggle("period");
      //   periodCorrection = true;
      // }

      firstSelectedDayElement.classList.add("periodStart");

      firstSelectedDayIndex = iDToDate(firstSelectedDayId);
      reservationCount++;

      selectedDaysIds = new Array();

      effectsInitialisationOnUpdateCalendar();
      periodSelected = false;
      getPositionStart(currentSelectedDate);
    } else {
      //Reset Style
      // if (lastSelectedDayId != "") {
      //   if (currentSelectedDate != lastSelectedDayId) {
      //     lastSelectedDayElement.classList.remove("periodEnd");
      //   }
      // }

      lastSelectedDay = testDate;
      console.log(
        "Séjour réservé du " + firstSelectedDay + " au " + lastSelectedDay
      );
      selectedDay = dateStringToFrDateString(currentSelectedDate);
      lastDay.innerText = selectedDay;
      reservationCount = 0;

      lastSelectedDayId = currentSelectedDate;
      lastSelectedDayElement = document.getElementById(lastSelectedDayId);

      // lastSelectedDayElement.classList.add("periodEnd");
      // if (periodCorrection == true) {
      //   firstSelectedDayElement.classList.toggle("period");
      // }
      firstSelectedDayElement.classList.remove("periodStart");

      lastSelectedDayIndex = iDToDate(lastSelectedDayId);

      reservationPeriodArraySetting();

      // reservationPeriodClassAdd();

      priceCalculator();

      // datesColorCalculator();
      periodSelected = true;

      getPositionStart();
    }
  }
};

personesOrPersoneSet();

const effectsInitialisationOnUpdateCalendar = () => {
  testEffectElement = document.getElementsByClassName("testEffect");
  testEffectElementDouble = document.getElementsByClassName("testEffectDouble");
  for (let i = 0; i < testEffectElement.length; i++) {
    testEffectElement[i].style.width = 0 + "px";
    testEffectElement[i].style.top = 90 + "vh";
    testEffectElement[i].style.left = 100 + "vw";
  }
  for (let i = 0; i < testEffectElementDouble.length; i++) {
    testEffectElementDouble[i].style.width = 0 + "px";
    testEffectElementDouble[i].style.top = 90 + "vh";
    testEffectElementDouble[i].style.left = 100 + "vw";
  }
  firstCalendarFirstInactiveDateElement = null;
  secondCalendarFirstActiveDateElement = null;
  secondCalendarFirstDateInactiveElement = null;
  periodStart = null;
};

const querySelectorEqualInactiveOrNotEqualInactiveDate = (
  indexStart,
  dateParent,
  stringOfCondition,
  dateElement
) => {
  if (stringOfCondition == diferent) {
    for (
      let i = indexStart;
      i < dateParent.querySelectorAll(".date").length;
      i++
    ) {
      if (dateParent.querySelectorAll(".date")[i].classList[1] != "inactive") {
        dateElement = dateParent.querySelectorAll(".date")[i];
        console.log(dateElement);
        break;
      }
    }
  } else if (stringOfCondition == equal) {
    for (
      let i = indexStart;
      i < dateParent.querySelectorAll(".date").length;
      i++
    ) {
      if (dateParent.querySelectorAll(".date")[i].classList[1] == "inactive") {
        dateElement = dateParent.querySelectorAll(".date")[i];
        console.log(dateElement);
        break;
      }
    }
  }

  return dateElement;
};

const effectsUpdateCalendar2 = () => {
  // console.log(firstSelectedDayId);
  // console.log(selectedDaysIds[selectedDaysIds.length - 1]);
  // console.log(periodStart);

  let startIndex = 0;
  let dateListLength = calendar.querySelectorAll(".date").length;

  if (firstSelectedDayId) {
    for (let i = 0; i < dateListLength; i++) {
      if (
        calendar.querySelectorAll(".date")[i].id == firstSelectedDayId &&
        calendar.querySelectorAll(".date")[i].classList[1] != "inactive"
      ) {
        // console.log(
        //   calendar.querySelectorAll(".date")[i].id +
        //     " find " +
        //     firstSelectedDayId
        // );
        periodStart = calendar.querySelectorAll(".date")[i];
        periodStartNotInScreen = false;
        startIndex = i;
        break;
      } else {
        periodStartNotInScreen = true;

        if (
          iDToDate(calendar.querySelectorAll(".date")[dateListLength - 1].id) <
          iDToDate(firstSelectedDayId)
        ) {
          let curent = calendar.querySelectorAll(".date")[dateListLength - 1];
          // console.log(curent.id + " Ulterieur " + firstSelectedDayId);
          break;
        }

        periodStart = querySelectorEqualInactiveOrNotEqualInactiveDate(
          0,
          datesElement,
          diferent
        );
        // console.log("dernière étape, set l'éffet de la période séléctionné");
      }
    }
    console.log(periodStart);
  }

  if (effectEndId) {
    for (let i = startIndex; i < dateListLength; i++) {
      if (
        calendar.querySelectorAll(".date")[i].id == effectEndId &&
        calendar.querySelectorAll(".date")[i].classList[1] != "inactive"
      ) {
        console.log(
          calendar.querySelectorAll(".date")[i].id + " find " + effectEndId
        );
        effectEnd = calendar.querySelectorAll(".date")[i];
        effectEndNotInScreen = false;
        break;
      } else {
        effectEndNotInScreen = true;
        // console.log(effectEndId);
        if (
          iDToDate(calendar.querySelectorAll(".date")[0].id) >
          iDToDate(effectEndId)
        ) {
          let curent = calendar.querySelectorAll(".date")[0];
          // console.log(curent.id + " Superieur " + effectEndId);
          break;
        }

        effectEnd = querySelectorEqualInactiveOrNotEqualInactiveDate(
          21,
          datesElement2,
          equal
        );
        // console.log("dernière étape, set l'éffet de la période séléctionné");
      }
    }
    console.log(effectEnd);
  }
};

const testEffectElementwidthCalculator = () => {
  if (periodStart != null) {
    if (
      (effectEndPageX >=
        periodStart.parentElement.offsetLeft +
          calendar.parentElement.offsetLeft) &
      (effectEndPageX <=
        calendar.parentElement.offsetLeft +
          periodStart.parentElement.offsetWidth +
          periodStart.parentElement.offsetLeft) &
      (effectEndPageY <
        testEffectElement[0].offsetTop + calendar.parentElement.offsetTop)
    ) {
      for (let i = 0; i < testEffectElement.length; i++) {
        testEffectElement[i].style.width = 0 + "px";
      }
    }

    for (let elIndex = 0; elIndex < testEffectElement.length; elIndex++) {
      if (
        (elIndex < firstDateElementCheck ||
          periodStart.parentElement == datesElement2) &
        (effectEndPageX >=
          periodStart.parentElement.offsetLeft +
            calendar.parentElement.offsetLeft) &
        (effectEndPageX <=
          calendar.parentElement.offsetLeft +
            periodStart.parentElement.offsetWidth +
            periodStart.parentElement.offsetLeft) &
        (effectEndPageY >=
          testEffectElement[elIndex].offsetTop +
            calendar.parentElement.offsetTop) &
        (effectEndPageY <=
          testEffectElement[elIndex].offsetTop +
            calendar.parentElement.offsetTop +
            testEffectElement[elIndex].offsetHeight)
      ) {
        /*Befor*/

        for (let i = 0; i < testEffectElement.length; i++) {
          if (i == 0) {
            testEffectElement[i].style.width =
              currentPeriodStartOffsetWidth + "px";
            // console.log(currentPeriodStartOffsetWidth);
            testEffectElement[i].style.borderRadius = "22px 0 0 22px";
          } else if (i < elIndex) {
            testEffectElement[i].style.width =
              periodStart.parentElement.offsetWidth + "px";
          } else if ((i > elIndex) & (i < testEffectElement.length)) {
            testEffectElement[i].style.width = 0 + "px";
            testEffectElementDouble[0].style.width = "0px";
            testEffectElementDouble[1].style.width = "0px";
          }
        }

        // console.log(
        //   calendar.parentElement.offsetLeft +
        //     testEffectElement[elIndex].offsetLeft
        // );
        // console.log(
        //   calendar.parentElement.offsetLeft +
        //     secondCalendarFirstDateInactiveElement.parentElement.offsetLeft
        // );

        /*Current (Ne calcule que le width du dernier élément)*/

        // console.log("work " + firstCalendarFIrstInactiveDateEffectElement);
        // console.log(elIndex);
        // console.log(e.pageX);
        // console.log(
        //   calendar.parentElement.offsetLeft +
        //     testEffectElement[elIndex].offsetLeft
        // );

        if (elIndex == 0) {
          if (
            effectEndPageX <
            calendar.parentElement.offsetLeft +
              testEffectElement[elIndex].offsetLeft
          ) {
            testEffectElement[elIndex].style.width = 0 + "px";
          } else if (effectEndPageX < currentPeriodStartOffsetRight) {
            testEffectElement[elIndex].style.width =
              effectEndPageX -
              (periodStart.offsetLeft + calendar.parentElement.offsetLeft) +
              "px";
          }
        } else if (
          (elIndex > 0) &
          (elIndex < firstCalendarFIrstInactiveDateEffectElement)
        ) {
          testEffectElement[elIndex].style.width =
            effectEndPageX - currentPeriodStartOffsetLeft + "px";
        } else if (elIndex == firstCalendarFIrstInactiveDateEffectElement) {
          if (
            effectEndPageX <
            firstCalendarFirstInactiveDateElement.offsetLeft +
              calendar.parentElement.offsetLeft -
              gridGape
          ) {
            let elementWidth =
              effectEndPageX - currentPeriodStartOffsetLeft + "px";

            testEffectElement[elIndex].style.width = elementWidth;
            testEffectElementDouble[0].style.width = elementWidth;
          } else {
            testEffectElement[elIndex].style.width =
              firstCalendarFirstInactiveDateElement.offsetLeft -
              (firstCalendarFirstInactiveDateElement.parentElement.offsetLeft +
                gridGape) +
              "px";

            if (
              effectEndPageX >
              firstCalendarFirstInactiveDateElement.offsetLeft +
                calendar.parentElement.offsetLeft -
                gridGape
            ) {
              let elementWidth =
                effectEndPageX -
                (currentPeriodStartOffsetLeft +
                  firstCalendarFirstInactiveDateElement.offsetLeft -
                  firstCalendarFirstInactiveDateElement.parentElement
                    .offsetLeft) +
                "px";

              testEffectElementDouble[0].style.width =
                firstCalendarFirstInactiveDateElement.offsetLeft - 15 + "px";
              testEffectElementDouble[1].style.width = elementWidth;

              testEffectElement[firstDateElementCheck].style.width =
                elementWidth;
            }
          }
        }

        /* test */

        console.log("calendar 1 : " + elIndex);

        break;
      } else if (secondCalendarFirstDateInactiveElement != null) {
        if (
          (elIndex >= firstDateElementCheck) &
          (periodStart.parentElement != datesElement2) &
          (effectEndPageX >=
            secondCalendarFirstDateInactiveElement.parentElement.offsetLeft +
              calendar.parentElement.offsetLeft) &
          (effectEndPageX <=
            calendar.parentElement.offsetLeft +
              secondCalendarFirstActiveDateElement.parentElement.offsetWidth +
              secondCalendarFirstActiveDateElement.parentElement.offsetLeft) &
          (effectEndPageY >=
            testEffectElement[elIndex].offsetTop +
              calendar.parentElement.offsetTop) &
          (effectEndPageY <=
            testEffectElement[elIndex].offsetTop +
              calendar.parentElement.offsetTop +
              testEffectElement[elIndex].offsetHeight)
        ) {
          /*Befor*/

          for (let i = 0; i < testEffectElement.length; i++) {
            if (i < elIndex) {
              if (i == 0) {
                testEffectElement[i].style.width =
                  currentPeriodStartOffsetWidth + "px";
              } else if (i == firstCalendarFIrstInactiveDateEffectElement) {
                let elementWidth =
                  firstCalendarFirstInactiveDateElement.offsetLeft - 15 + "px";

                testEffectElement[i].style.width = elementWidth;
                testEffectElementDouble[0].style.width = elementWidth;
              } else if (i == firstDateElementCheck) {
                let elementWidth =
                  testEffectElement[i].parentElement.offsetWidth -
                  10 -
                  testEffectElement[i].offsetLeft +
                  "px";

                testEffectElement[i].style.width = elementWidth;
                testEffectElementDouble[1].style.width = elementWidth;
              } else if (i == secondCalendarFIrstInactiveDateEffectElement) {
                testEffectElement[i].style.width =
                  secondCalendarFirstDateInactiveElement.offsetLeft -
                  datesElement2.offsetLeft -
                  gridGape +
                  "px";
              } else {
                testEffectElement[i].style.width =
                  periodStart.parentElement.offsetWidth + "px";
              }
            } else if ((i > elIndex) & (i < testEffectElement.length)) {
              testEffectElement[i].style.width = 0 + "px";
            }
          }

          /* Current */

          if (elIndex == firstDateElementCheck) {
            if (
              effectEndPageX <
              calendar.parentElement.offsetLeft +
                testEffectElement[elIndex].offsetLeft
            ) {
              testEffectElement[elIndex].style.width = 0 + "px";
              testEffectElementDouble[1].style.width = 0 + "px";

              let elementWidth =
                effectEndPageX -
                (secondCalendarFirstActiveDateElement.parentElement.offsetLeft +
                  calendar.parentElement.offsetLeft) +
                "px";

              testEffectElementDouble[0].style.width = elementWidth;
              testEffectElement[
                firstCalendarFIrstInactiveDateEffectElement
              ].style.width = elementWidth;
            } else {
              let elementWidth =
                effectEndPageX -
                (secondCalendarFirstActiveDateElement.offsetLeft +
                  calendar.parentElement.offsetLeft) +
                "px";

              testEffectElement[elIndex].style.width = elementWidth;
              testEffectElementDouble[1].style.width = elementWidth;
            }
          } else if (
            (elIndex > firstDateElementCheck) &
            (elIndex < secondCalendarFIrstInactiveDateEffectElement)
          ) {
            testEffectElement[elIndex].style.width =
              effectEndPageX -
              (secondCalendarFirstActiveDateElement.parentElement.offsetLeft +
                calendar.parentElement.offsetLeft) +
              "px";
          } else if (elIndex == secondCalendarFIrstInactiveDateEffectElement) {
            if (
              effectEndPageX <
              secondCalendarFirstDateInactiveElement.offsetLeft +
                calendar.parentElement.offsetLeft
            ) {
              testEffectElement[elIndex].style.width =
                effectEndPageX -
                (calendar.parentElement.offsetLeft +
                  secondCalendarFirstDateInactiveElement.parentElement
                    .offsetLeft) +
                "px";
            } else {
              testEffectElement[elIndex].style.width =
                secondCalendarFirstDateInactiveElement.offsetLeft -
                secondCalendarFirstDateInactiveElement.parentElement
                  .offsetLeft -
                5 +
                "px";
            }
          }

          // console.log("calendar 2 : " + elIndex);

          break;
        }
      }
    }
  }
  testEffectElementsColorCalculator();
};

const setPeriodWidthEffect = (e) => {
  /*Test*/
  if (periodStart == null) {
    periodStart = document.querySelector(".periodStart");
    // console.log(periodStart);
  } else if (document.getElementsByClassName("periodStart").length > 1) {
    periodStart = document.getElementsByClassName("periodStart")[1];
  }

  if (periodStart != null) {
    // console.log(periodStart.offsetLeft);
    // console.log(periodStart.parentElement.offsetLeft);
    // console.log(calendar.parentElement.offsetLeft);
    // console.log(datesElement.offsetLeft + " " + datesElement.offsetWidth);
    // console.log(datesElement2.offsetLeft);
    // console.log(periodStart.offsetTop + " " + e.pageY);
    // console.log(periodStart.parentElement.offsetTop);
    // console.log(calendar.parentElement.offsetTop);
    // console.log(datesElement.offsetTop + " " + datesElement.offsetHeight);
    // console.log(datesElement2.offsetTop);

    testEffectElement = document.getElementsByClassName("testEffect");
    testEffectElement[0].style.left = periodStart.offsetLeft - 10 + "px";
    testEffectElement[0].style.top = periodStart.offsetTop + "px";

    testEffectElementDouble =
      document.getElementsByClassName("testEffectDouble");

    /** **/

    if (periodStart.parentElement == datesElement) {
      currentPeriodStartOffsetLeft =
        calendar.parentElement.offsetLeft + datesElement.offsetLeft;

      firstCalendarFirstInactiveDateElement =
        querySelectorEqualInactiveOrNotEqualInactiveDate(
          21,
          datesElement,
          equal
        );

      secondCalendarFirstActiveDateElement =
        querySelectorEqualInactiveOrNotEqualInactiveDate(
          0,
          datesElement2,
          diferent
        );

      secondCalendarFirstDateInactiveElement =
        querySelectorEqualInactiveOrNotEqualInactiveDate(
          21,
          datesElement2,
          equal
        );

      for (i = 0; i < 13; i++) {
        if (
          testEffectElement[i].offsetTop + periodStart.offsetHeight ==
          firstCalendarFirstInactiveDateElement.offsetTop +
            firstCalendarFirstInactiveDateElement.offsetHeight
        ) {
          testEffectElement[i + 1].style.left =
            secondCalendarFirstActiveDateElement.offsetLeft - 10 + "px";
          testEffectElement[i + 1].style.top =
            secondCalendarFirstActiveDateElement.offsetTop + "px";

          firstCalendarFIrstInactiveDateEffectElement = i;
          // );
          firstDateElementCheck = i + 1;
          // console.log(firstDateElementCheck);

          /**EffectDouble **/

          testEffectElementDouble[0].style.left =
            secondCalendarFirstActiveDateElement.parentElement.offsetLeft -
            10 +
            "px";
          testEffectElementDouble[0].style.top =
            secondCalendarFirstActiveDateElement.offsetTop + "px";

          testEffectElementDouble[1].style.left =
            firstCalendarFirstInactiveDateElement.offsetLeft - 10 + "px";
          testEffectElementDouble[1].style.top =
            firstCalendarFirstInactiveDateElement.offsetTop + "px";
          break;
        }

        if (i == 0) {
          testEffectElement[i + 1].style.left =
            periodStart.parentElement.offsetLeft - 10 + "px";
          testEffectElement[i + 1].style.top =
            periodStart.offsetTop + periodStart.offsetHeight + 5 + "px";
        } else {
          testEffectElement[i + 1].style.left =
            testEffectElement[i].parentElement.offsetLeft + "px";
          testEffectElement[i + 1].style.top =
            testEffectElement[i].offsetTop +
            periodStart.offsetHeight +
            5 +
            "px";
        }
      }

      for (i = firstDateElementCheck; i < 13 - 1; i++) {
        if (
          testEffectElement[i].offsetTop + periodStart.offsetHeight ==
          secondCalendarFirstDateInactiveElement.offsetTop +
            secondCalendarFirstDateInactiveElement.offsetHeight
        ) {
          secondCalendarFIrstInactiveDateEffectElement = i;
          break;
        }

        if (i == firstDateElementCheck) {
          testEffectElement[i + 1].style.left =
            secondCalendarFirstActiveDateElement.parentElement.offsetLeft -
            10 +
            "px";
          testEffectElement[i + 1].style.top =
            secondCalendarFirstActiveDateElement.offsetTop +
            secondCalendarFirstActiveDateElement.offsetHeight +
            5 +
            "px";
        } else {
          // console.log(testEffectElement[i]);
          testEffectElement[i + 1].style.left =
            secondCalendarFirstActiveDateElement.parentElement.offsetLeft -
            10 +
            "px";
          testEffectElement[i + 1].style.top =
            testEffectElement[i].offsetTop +
            testEffectElement[i].offsetHeight +
            5 +
            "px";
        }
      }
    } else if (periodStart.parentElement == datesElement2) {
      currentPeriodStartOffsetLeft =
        calendar.parentElement.offsetLeft + datesElement2.offsetLeft;

      firstCalendarFirstInactiveDateElement =
        querySelectorEqualInactiveOrNotEqualInactiveDate(
          21,
          datesElement2,
          equal
        );

      for (i = 0; i < 13; i++) {
        if (
          testEffectElement[i].offsetTop + periodStart.offsetHeight ==
          firstCalendarFirstInactiveDateElement.offsetTop +
            firstCalendarFirstInactiveDateElement.offsetHeight
        ) {
          firstCalendarFIrstInactiveDateEffectElement = i;
          break;
        }

        if (i == 0) {
          testEffectElement[i + 1].style.left =
            periodStart.parentElement.offsetLeft - 10 + "px";
          testEffectElement[i + 1].style.top =
            periodStart.offsetTop + periodStart.offsetHeight + 5 + "px";

          // console.log(testEffectElement[i + 1]);
        } else {
          testEffectElement[i + 1].style.left =
            firstCalendarFirstInactiveDateElement.parentElement.offsetLeft -
            10 +
            "px";
          testEffectElement[i + 1].style.top =
            testEffectElement[i].offsetTop +
            periodStart.offsetHeight +
            5 +
            "px";

          // console.log(testEffectElement[i + 1]);
        }
      }
    } else if (periodStartNotInScreen == true) {
    }

    if (firstCalendarFIrstInactiveDateEffectElement == 0) {
      currentPeriodStartOffsetRight =
        calendar.parentElement.offsetLeft +
        firstCalendarFirstInactiveDateElement.offsetLeft -
        5;

      currentPeriodStartOffsetWidth =
        periodStart.parentElement.offsetWidth -
        (periodStart.parentElement.offsetWidth -
          firstCalendarFirstInactiveDateElement.offsetLeft +
          periodStart.parentElement.offsetLeft) -
        5 -
        periodStart.offsetLeft +
        periodStart.parentElement.offsetLeft;
    } else {
      currentPeriodStartOffsetRight =
        calendar.parentElement.offsetLeft +
        periodStart.parentElement.offsetWidth +
        periodStart.parentElement.offsetLeft;

      currentPeriodStartOffsetWidth =
        periodStart.parentElement.offsetWidth +
        periodStart.parentElement.offsetLeft -
        periodStart.offsetLeft;
    }

    // Set Positions with clear names to make work more easy and to change parameters as i want !!!!!!!!!!!!!!!!!!!!!!

    //   // if (
    //   //   testEffectElement[i].offsetTop + periodStart.offsetHeight ==
    //   //   calendar.offsetHeight
    //   // ) {
    //   //   // testEffectElement[i + 1].style.top =
    //   //   //   secondCalendarFirstElement.offsetTop + "px";
    //   //   // testEffectElement[i + 1].style.left =
    //   //   //   secondCalendarFirstElement.offsetLeft + -10 + "px";
    //   //   // for (y = 0; y < testEffectElement.length - 2; y++) {
    //   //   //   testEffectElement[y].style.left =
    //   //   //     testEffectElement[y].parentElement.offsetLeft + "px";
    //   //   //   testEffectElement[y + 2].style.top =
    //   //   //     testEffectElement[y + 1].offsetTop +
    //   //   //     (testEffectElement[y + 1].offsetHeight + 5) +
    //   //   //     "px";
    //   //   //   break;
    //   //   // }
    //   // } else {

    //   // if (
    //   //   testEffectElement[i].offsetTop + periodStart.offsetHeight !=
    //   //   calendar.offsetHeight
    //   // ) {
    //   //   for (y = 0; y < testEffectElement.length - 2; y++) {
    //   //     testEffectElement[y + 2].style.left =
    //   //       testEffectElement[y + 1].parentElement.offsetLeft + "px";
    //   //     testEffectElement[y + 2].style.top =
    //   //       testEffectElement[y + 1].offsetTop +
    //   //       (testEffectElement[y + 1].offsetHeight + 5) +
    //   //       "px";
    //   //   }
    //   // }
    //   // break;

    //   // }

    //   /*Test*/
  }

  // if (firstCalendarFIrstInactiveDateEffectElement == 0) {
  //   console.log(
  //     "Bonjour , work on going" +
  //       " Set Positions with clear names to make work more easy and to change parameters as i want"
  //   );
  // }
};

calendar.addEventListener("click", (e) => {
  console.log(e);
  // console.log("Ajouter une sécurité");
  periodSelection(e);
  setPeriodWidthEffect(e);
  setVisualOfPeriod(e);
});

occupants.addEventListener("change", () => {
  occupantsOption = occupants.options.selectedIndex;
  personesOrPersoneSet();
  priceCalculator();
});

const setVisualOfPeriod = (e) => {
  if (periodSelected == true) {
    if (periodStartNotInScreen == false) {
      effectStartId = selectedDaysIds[0].toString();
      effectStart = document.getElementById(effectStartId);

      effectStartPageY =
        effectStart.offsetTop +
        effectStart.offsetHeight / 2 +
        calendar.parentElement.offsetTop;

      effectStartPageX =
        effectStart.offsetLeft +
        effectStart.offsetWidth / 2 +
        calendar.parentElement.offsetLeft;

      // console.log(effectStart);
    }

    if (effectEndNotInScreen == false) {
      effectEndId = selectedDaysIds[selectedDaysIds.length - 1].toString();
      effectEnd = document.getElementById(effectEndId);

      effectEndPageY =
        effectEnd.offsetTop +
        effectEnd.offsetHeight / 2 +
        calendar.parentElement.offsetTop;

      effectEndPageX =
        effectEnd.offsetLeft +
        effectEnd.offsetWidth +
        calendar.parentElement.offsetLeft;

      console.log(effectEnd);

      // console.log(e.pageX, e.pageY);
      // console.log(effectEndPageX, effectEndPageY);
    } else if (effectEndNotInScreen == true) {
      effectEndPageY =
        effectEnd.offsetTop +
        effectEnd.offsetHeight / 2 +
        calendar.parentElement.offsetTop;

      effectEndPageX =
        effectEnd.offsetLeft +
        effectEnd.offsetWidth +
        calendar.parentElement.offsetLeft;

      console.log(effectEnd);
    }

    // console.log(
    //   "Coder le comportement si effectStart est visible ou non et vese versa pour effectEnd"
    // );
    // console.log("S'inspirer de effectsUpdateCalendar2()");

    testEffectElementwidthCalculator();
  }
};

// test en cours
calendar.addEventListener("mousemove", (e) => {
  if (periodSelected == false) {
    effectEndPageY = e.pageY;
    effectEndPageX = e.pageX;
  }
  testEffectElementwidthCalculator();

  // if (e.pageY % 44 == 0) {
  //   console.log(e.pageY);
  // }
});

// setTimeout(() => {}, 0);

/*******************************************/

window.datesElement = datesElement;
window.datesElement2 = datesElement2;
window.selectedDaysIds = selectedDaysIds;

window.testEffectElement = testEffectElement;
window.testEffectElementDouble = testEffectElementDouble;

window.firstCalendarFIrstInactiveDateEffectElement =
  firstCalendarFIrstInactiveDateEffectElement;
window.firstDateElementCheck = firstDateElementCheck;

window.firstCalendarTotalDays = firstCalendarTotalDays;
window.secondCalendarTotalDays = secondCalendarTotalDays;
