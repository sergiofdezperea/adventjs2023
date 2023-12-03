function findFirstRepeated(gifts) {
  let seen = new Set()
  for (let i = 0; i < gifts.length; i++) {
    if (seen.has(gifts[i])) {
      return gifts[i]
    }
    seen.add(gifts[i])
  }
  return -1
}
console.log("Dia 01")
let giftIds = [2, 1, 3, 5, 3, 2]
// let giftIds = [1, 2, 3, 4]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)
