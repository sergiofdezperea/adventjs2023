function adjustLights(lights) {
  // 🔴 y 🟢
  let unorderedLight = 1
  if (lights !== undefined) {
    const LIGHT_PATRON = ["🔴", "🟢"]
    let light_patron_index = 0
    const increaseIndexOrReset = (array, index) => {
      return index + 1 > array.length - 1 ? 0 : ++index
    }

    if (LIGHT_PATRON.includes(lights[lights.length - 1])) {
      unorderedLight--
      while (LIGHT_PATRON[light_patron_index] !== lights[lights.length - 1]) {
        light_patron_index = increaseIndexOrReset(
          LIGHT_PATRON,
          light_patron_index
        )
      }
    }

    for (let index = lights.length - 1; index > -1; index--) {
      if (LIGHT_PATRON[light_patron_index] !== lights[index]) unorderedLight++

      light_patron_index = increaseIndexOrReset(
        LIGHT_PATRON,
        light_patron_index
      )
    }
  }
  return unorderedLight
}
