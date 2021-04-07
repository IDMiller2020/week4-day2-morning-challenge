function mostFrequentLetter (string) {

  let count = 0
  let maxLetter = ''
  for (let i = 0; i < string.length; i++) {
    let newCount = 0
    let letter = string[i]
    for (let j = 0; j < string.length; j++) {
      if (string[j] === letter) {
        newCount++
      }
    }
    if ((newCount - 1) > count) {
      maxLetter = letter
    }
  }
  console.log(maxLetter)
}

console.log('hello')
mostFrequentLetter('hello')

console.log('welcome')
mostFrequentLetter('welcome')

console.log('outstanding')
mostFrequentLetter('outstanding')