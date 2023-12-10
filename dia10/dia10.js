function createChristmasTree(ornaments, height) {
  const BREAK_LINE = "\n"
  if (height === 0) return "|" + BREAK_LINE

  let ornamentsIndex = 0
  const treeRows = []
  const increaseIndexOrReset = (array, index) => {
    return index + 1 > array.length - 1 ? 0 : ++index
  }

  for (let index = 0; index < height; index++) {
    let treeRow = ""

    for (let innerIndex = 0; innerIndex < index + 1; innerIndex++) {
      treeRow += ornaments[ornamentsIndex]
      treeRow += innerIndex + 1 === index + 1 ? BREAK_LINE : " "
      ornamentsIndex = increaseIndexOrReset(ornaments, ornamentsIndex)
    }

    treeRows.push(treeRow)
  }

  let whiteSpaces = Math.floor(treeRows[treeRows.length - 1].length / 2) - 1
  for (let index = 0; index < treeRows.length - 1; index++) {
    treeRows[index] = " ".repeat(whiteSpaces - index) + treeRows[index]
  }

  treeRows.push(" ".repeat(whiteSpaces) + "|" + BREAK_LINE)

  return treeRows.join("")
}

console.log(createChristmasTree("123", 4))

console.log(createChristmasTree("*@o", 3))

console.log(createChristmasTree("*@o", 2))
