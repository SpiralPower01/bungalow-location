const btnSelectDateStart = document.querySelector(".selectDateStart");
const btnselectDateEnd = document.querySelector(".selectDateEnd");
const doubleCalendar = document.getElementById("doubleCalendar");
// var promise = document.querySelector("#openingVideo").play();

let calendarOpen = false;

const openingReservationTool = () => {
  if (calendarOpen) {
    doubleCalendar.classList.toggle("openingDoubleCalendar");
    doubleCalendar.classList.toggle("openedDoubleCalendar");
    setTimeout(() => {
      doubleCalendar.classList.toggle("closedDoubleCalendar");
      doubleCalendar.classList.toggle("openingDoubleCalendar");
    }, 500);
    calendarOpen = false;
  } else if (!calendarOpen) {
    doubleCalendar.classList.toggle("closedDoubleCalendar");
    doubleCalendar.classList.toggle("openingDoubleCalendar");
    setTimeout(() => {
      doubleCalendar.classList.toggle("openingDoubleCalendar");
      doubleCalendar.classList.toggle("openedDoubleCalendar");
    }, 500);
    calendarOpen = true;
  }
};

btnSelectDateStart.addEventListener("click", () => {
  openingReservationTool();
});

/**************************************/

// openingVideo.classList.toggle("openVideo");
// openingVideo.classList.toggle("closeVideo");
// setTimeout(() => {
//   if (promise !== undefined) {
//     promise
//       .then((_) => {
//         // Autoplay started!
//       })
//       .catch((error) => {
//         // Autoplay was prevented.
//         // Show a "Play" button so that user can start playback.
//       });
//   }
//   setTimeout(() => {
//     openingVideo.classList.toggle("openVideo");
//     openingVideo.classList.toggle("closeVideo");
//   }, 10000);
// }, 500);
