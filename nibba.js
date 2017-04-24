var word = prompt('What do you want to ni🅱🅱ify?')
var newChar = ''
var newWord = ''



for (i = 0; i < word.length; i++) {
  var newChar = word.charAt(i)
  var random = Math.random()
  var random = random * 8
  var random = Math.floor(random)
  if (random == 1) {
    var newChar = '🅱'
  }
  
  var newWord = newWord + newChar
}

confirm(newWord)
