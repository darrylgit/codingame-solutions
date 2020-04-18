/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(" ");
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let diffX = initialTx - lightX;
let diffY = initialTy - lightY;
// game loop
while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

  // Write an action using console.log()
  // To debug: console.error('Debug messages...');

  // A single line providing the move to be made: N NE E SE S SW W or NW
  // TEST CASE 1
  if (initialTy === lightY) {
    if (initialTx < lightX) {
      console.log("E");
    } else {
      console.log("W");
    }
  }

  // TEST CASE 2
  if (initialTx === lightX) {
    if (initialTy > lightY) {
      console.log("N");
    } else {
      console.log("S");
    }
  }

  // TEST CASES 3 & 4
  if (initialTx !== lightX && initialTy !== lightY) {
    while (diffX || diffY) {
      if (diffX === 0) {
        if (diffY > 0) {
          diffY--;
          console.log("N");
        } else {
          diffY++;
          console.log("S");
        }
      } else if (diffY === 0) {
        if (diffX > 0) {
          diffX--;
          console.log("W");
        } else {
          diffX++;
          console.log("E");
        }
      } else if (diffX > 0) {
        diffX--;

        if (diffY > 0) {
          diffY--;
          console.log("NW");
        } else {
          diffY++;
          console.log("SW");
        }
      } else if (diffX < 0) {
        diffX++;

        if (diffY > 0) {
          diffY--;
          console.log("NE");
        } else {
          diffY++;
          console.log("SE");
        }
      }
    }
  }
}
