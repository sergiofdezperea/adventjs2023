function decode(message) {
  let decodedMessage = ""
  let messageArray = [...message]

  let lefParenthesis = []
  let acumulatorParenthesis = []

  const checkLeftParenthesis = (character, acumulador) => {
    if (character === "(") {
      lefParenthesis.push(character)
      acumulatorParenthesis.push("")
      return acumulador
    }
    return acumulador + character
  }

  const checkRightParenthesis = (character, acumulador) => {
    if (character === ")") {
      lefParenthesis.pop()
      acumulatorParenthesis.pop()
      if (acumulatorParenthesis[lefParenthesis.length - 1] === undefined) {
        decodedMessage += [...acumulador].reverse().join("")
      } else {
        acumulatorParenthesis[lefParenthesis.length - 1] += [...acumulador]
          .reverse()
          .join("")
      }
      return ""
    }
    let returnedMessage = checkLeftParenthesis(character, acumulador)
    return returnedMessage
  }

  for (let index = 0; index < messageArray.length; index++) {
    let character = messageArray[index]
    if (lefParenthesis.length === 0) {
      decodedMessage = checkLeftParenthesis(character, decodedMessage)
    } else {
      acumulatorParenthesis[lefParenthesis.length - 1] = checkRightParenthesis(
        character,
        acumulatorParenthesis[lefParenthesis.length - 1]
      )
    }
  }

  return decodedMessage
}

const a = decode("hola (odnum)")

console.log(a) // hola mundo

const b = decode("(olleh) (dlrow)!")

console.log(b) // hello world!

const c = decode("sa(u(cla)atn)s")

console.log(c) // santaclaus
