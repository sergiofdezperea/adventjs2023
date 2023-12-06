function maxDistance(movements) {
  const LEFT = "<"
  const RIGTH = ">"
  const ANY = "*"
  const reeinerOptions = {
    "<": 0,
    ">": 0,
    "*": 0,
  }

  movements.split("").forEach((character) => {
    reeinerOptions[character]++
  })

  let result = reeinerOptions[LEFT] - reeinerOptions[RIGTH]
  result = result < 0 ? result * -1 : result
  return result + reeinerOptions[ANY]
}

const movements = ">>*<"
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = "<<<>"
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = ">***>"
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
