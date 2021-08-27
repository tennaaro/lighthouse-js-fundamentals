const finalPosition = function (moves) {
  // Your code in here ...
  let pos = [0,0];
  for (let i = 0; i <= moves.length; i++) {
    if (moves[i] === 'north') {
      pos[1] = pos[1] + 1;
    }
    else if (moves[i] === 'south') {
      pos[1] = pos[1] - 1;
    }
    else if (moves[i] === 'east') {
      pos[0] = pos[0] - 1;
    }
    else if (moves[i] === 'west') {
      pos[0] = pos[0] + 1;
    }
  }
  return pos;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));