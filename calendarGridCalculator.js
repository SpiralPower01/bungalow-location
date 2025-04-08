const getGridElementsPosition = (index, gridEl) => {
  // our indexes are zero-based but gridColumns are 1-based, so subtract 1
  let offset =
    Number(window.getComputedStyle(gridEl.children[0]).gridColumnStart) - 1;

  // if we haven't specified the first child's grid column, then there is no offset
  if (isNaN(offset)) {
    offset = 0;
  }
  const colCount = window
    .getComputedStyle(gridEl)
    .gridTemplateColumns.split(" ").length;

  const rowPosition = Math.floor((index + offset) / colCount);
  const colPosition = (index + offset) % colCount;

  //Return an object with properties row and column
  return { row: rowPosition, column: colPosition };
};

const getNodeIndex = (elm) => {
  var c = elm.parentNode.children,
    i = 0;
  for (; i < c.length; i++) {
    if (c[i] == elm) {
      // console.log(c, elm, elm.parentNode, elm.parentNode.children, i);
      return i;
    }
  }
};

const setDatasetGridElementsPosition = (gridEl) => {
  let gridItems = document.getElementsByClassName("date");

  for (let i = 0; i < gridItems.length; i++) {
    let position = getGridElementsPosition(getNodeIndex(gridItems[i]), gridEl);
    // console.log(
    //   `Node position is row ${position.row}, column ${position.column}`
    // );

    let gridPosition = new Array();
    // let gridPosition = `[{"name":"Row","value":"${position.row}"},{"name":"column","value":"${position.column}"}]`;
    let positionRow = `row: ${position.row}`;
    let positionColumn = ` column: ${position.column}`;

    gridPosition.push(positionRow);

    gridPosition.push(positionColumn);

    gridItems[i].dataset.row_position = position.row;
    gridItems[i].dataset.column_position = position.column;
    gridItems[i].dataset.grid_position = gridPosition;
    // console.log(gridItems[i].dataset.column_position);
    // console.log(gridItems[i].dataset.grid_position[5]);
    // console.log(gridItems[i].dataset.grid_position.slice(0, 6));
  }
};

// addClickEventsToGridItems();

window.setDatasetGridElementsPosition = setDatasetGridElementsPosition;
