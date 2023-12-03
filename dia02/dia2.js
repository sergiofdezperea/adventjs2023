function manufacture(gifts, materials) {
  const constructedGifts = gifts.filter((gift) =>
    [...gift].every((character) => materials.includes(character))
  )

  console.log(constructedGifts)
  return constructedGifts
}

const gifts = ["tren", "oso", "pelota"]
const materials = "tronesa"

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ["juego", "puzzle"]
const materials2 = "jlepuz"

manufacture(gifts2, materials2) // ["puzzle"]

const gifts3 = ["libro", "ps5"]
const materials3 = "psli"

manufacture(gifts3, materials3) // []
