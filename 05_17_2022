function to_nato(words) {
	// Go code
  
  let punctuation = [',','.','!','?']
  let sentence = ''
  words = words.split('')
  words.map((letter) => {
    if(NATO[letter.toLowerCase()]) {
      sentence += `${NATO[letter.toLowerCase()]} `
    } else if (punctuation.includes(letter)) {
      sentence += `${letter} `
    }
  })
  return sentence.trim()
}
