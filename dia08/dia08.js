function organizeGifts(gifts) {
  let result = ""
  let matches = gifts.match(/\d+[a-zA-Z]/g)

  const makeContainer = (initial, final, contain, numOfContainer) => {
    let result = ""
    for (let index = 0; index < numOfContainer; index++) {
      result += initial + contain + final
    }
    return result
  }

  for (let match of matches) {
    let num = parseInt(match.match(/\d+/)[0])
    let type = match.match(/[a-zA-Z]/)[0]
    let pallets = Math.floor(num / 50)
    let boxes = Math.floor((num % 50) / 10)
    let bags = num % 10
    result += makeContainer("[", "]", type, pallets)
    result += makeContainer("{", "}", type, boxes)
    if (bags > 0) {
      result += "(" + type.repeat(bags) + ")"
    }
  }
  return result
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)
const result2 = organizeGifts("20a")
console.log(result2)
