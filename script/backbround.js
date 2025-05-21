let style = document.styleSheets[0].cssRules[0].style;

let dark = 0.208;
let bright = 0.554;
let movingBright = true;

//style.setProperty( "background-image", "linear-gradient(135deg, oklch(0.208 0.042 265.755), oklch(0.554 0.042 265.755) 100%, oklch(0.554 0.042 265.755))");

function updateGradiant() {
  let gradiant = style["background-image"];
  let parts = gradiant.split(" ");
  let left = parseFloat(parts[1].split("(")[1]);
  let middle = parseFloat(parts[4].split("(")[1]);
  let right = parseFloat(parts[8].split("(")[1]);
  let middlePos = parseFloat(parts[7].split("%")[0]);

  let middlePosNew, middleNew, rightNew, leftNew;

  if (middlePos == 0) {
    middlePosNew = 100;
    middleNew = middle == bright ? dark : bright;
    rightNew = movingBright ? dark : bright;
    leftNew = movingBright ? bright : dark;
    movingBright = !movingBright;
  } else {
    middlePosNew = middlePos - 1;
    middleNew = middle;

    let diff = (dark - bright) / 100;

    rightNew = movingBright ? right + diff : right - diff;
    leftNew = movingBright ? left - diff : left + diff;
  }

  style.setProperty(
    "background-image",
    `linear-gradient(135deg, oklch(${leftNew} 0.042 265.755), oklch(${middleNew} 0.042 265.755) ${middlePosNew}%, oklch(${rightNew} 0.042 265.755))`
  );
  //console.log(middlePosNew, rightNew, leftNew, middleNew)
}

// Kör varje millisekund om du vill:
setInterval(updateGradiant, 50);