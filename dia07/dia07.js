function drawGift(size, symbol) {
  const BREAK_LINE = "\n"
  const BOX_SYMBOL = "#"

  let bottomDraw = []

  for (let row = 0; row < size; row++) {
    bottomDraw[row] = ""
    for (let column = 0; column < size; column++) {
      let characterToDraw = row === 0 || row === size - 1 ? BOX_SYMBOL : symbol
      if (column === 0 || column === size - 1) {
        characterToDraw = BOX_SYMBOL
      }

      bottomDraw[row] += characterToDraw
    }

    for (let index = row - 1; index > -1; index--) {
      let characterToDraw = index === 0 ? BOX_SYMBOL : symbol
      bottomDraw[row] += characterToDraw
    }
  }

  let resultDraw = ""
  for (let index = 1; index < bottomDraw.length; index++) {
    let whiteSpaces = " ".repeat(bottomDraw.length - index)
    resultDraw += whiteSpaces + [bottomDraw[index - 1]] + BREAK_LINE
  }

  while (bottomDraw.length > 0) {
    resultDraw += bottomDraw.pop()
    resultDraw += BREAK_LINE
  }
  console.log(resultDraw)
  return resultDraw
}

drawGift(1, "^")
console.log("---")
drawGift(2, "^")
console.log("---")
drawGift(4, "+")
console.log("---")
drawGift(5, "*")
