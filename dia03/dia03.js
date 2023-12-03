function findNaughtyStep(original, modified) {
  if (original.length === modified.length) return ""
  let longerString = original
  let sorterString = modified
  if (modified.length > original.length) {
    longerString = modified
    sorterString = original
  }

  let missing
  for (let character of longerString) {
    if (!sorterString.includes(character)) missing = character
  }

  return missing ? missing : longerString.charAt(longerString.length - 1)
}

const original = "abcd"
const modified = "abcde"
console.log(findNaughtyStep(original, modified)) // 'e'

const original2 = "stepfor"
const modified2 = "stepor"
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = "abcde"
const modified3 = "abcde"
console.log(findNaughtyStep(original3, modified3)) // ''

console.log(findNaughtyStep("xxxx", "xxxxx")) // 'x'
