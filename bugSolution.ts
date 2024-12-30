function printCoord(pt: { x?: number; y?: number }) {
  let xCoord = pt.x === undefined ? 0 : pt.x; // Handle missing 'x'
  let yCoord = pt.y === undefined ? 0 : pt.y; // Handle missing 'y'

  console.log("The coordinate's x value is " + xCoord);
  console.log("The coordinate's y value is " + yCoord);
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3 });
printCoord({});