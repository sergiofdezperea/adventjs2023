function cyberReindeer(road, time) {
  let result = []
  let currentTime = 1
  let barrierOpensInTime = 5

  let carretera = "." // Carretera
  let santa = "S" // Trineo de Santa
  let openDoor = "*" // Barrera abierta
  let closeDoor = "|" // Barrera cerrada

  let santaPosition = road.indexOf(santa)
  let lastPosition = carretera

  const replaceCharAt = (texto, character, index) => {
    return texto.substring(0, index) + character + texto.substring(index + 1)
  }

  result.push(road)
  for (currentTime; currentTime < time; currentTime++) {
    if (currentTime > barrierOpensInTime - 1) {
      road = road.replaceAll(closeDoor, openDoor)
    }

    if (
      road.charAt(santaPosition + 1) !== "" &&
      road.charAt(santaPosition + 1) !== closeDoor
    ) {
      let nextposition = road.charAt(santaPosition + 1)
      road = replaceCharAt(road, santa, santaPosition + 1)
      road = replaceCharAt(road, lastPosition, santaPosition)
      lastPosition = nextposition
      santaPosition++
    }

    result.push(road)
  }

  for (let res of result) {
    console.log(res)
  }

  return result
}

const road = "S..|...|.."
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

const road2 = ".S."
cyberReindeer(road2, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
