let rowPositionStart;
let columnPositionStart;
let dateStart;
let rowPositionEnd;
let columnPositionEnd;
let defaultWidth = 44;
let defaultGap = 5;

let widthList = new Array();
let calendarList;

class month {
  constructor() {}
}

class date {
  constructor() {}
}

class visuaEffect {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const getPositionStart = (a) => {
  rowPositionStart = Number(document.getElementById(a).dataset.row_position);
  columnPositionStart = Number(
    document.getElementById(a).dataset.column_position
  );
  dateStart = Number(document.getElementById(a).innerHTML);

  console.log(rowPositionStart);
  console.log(columnPositionStart);
  getWidthRanges();
};

const getWidthRanges = () => {
  let a = -1;
  let c = 0;
  let cTempo = 0;
  let width;
  for (let i = dateStart; i <= firstCalendarTotalDays; i++) {
    let b = columnPositionStart + (i - dateStart) - 7 * (a + 1);
    if (b == 7) {
      b = 0;
    }
    console.log("column = " + b + " de la date " + i);
    c++;
    if (b % 6 == 0 && b != 0) {
      a++;
      cTempo = i;
      console.log("%6 : " + a + " width * " + c);
      width = (defaultWidth + defaultGap) * c - defaultGap;
      widthList.push(width);
      c = 0;
    } else if (i == firstCalendarTotalDays) {
      a++;
      cTempo = firstCalendarTotalDays - cTempo;
      width = (defaultWidth + defaultGap) * cTempo - defaultGap;
      widthList.push(width);
      console.log("firstCalendarTotalDays : " + a + " width * " + cTempo);
    }
  }
  console.log(widthList);
};

window.getPositionStart = getPositionStart;
