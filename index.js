const el = document.querySelector('.text')
const defaultText = el.textContent;
const chars = defaultText.split('')
const maxChangedLetters = defaultText.length / 2;

function randomInt(min, max) {
  return Math.round(Math.random() * max + min)
}
function randomAscii() {
  return String.fromCharCode(randomInt(60, 126))
}

function getRandomLetters(t) {
  const letters = {};
  for (let i = 0; i < randomInt(0, maxChangedLetters); i++) {
    letters[randomInt(0, t.length - 1)] = randomAscii()
  }
  return letters;
}

function animate() {
  const generatedLetters = getRandomLetters(defaultText)
  el.innerHTML = chars.map((char, pos) => generatedLetters[pos] ? generatedLetters[pos] : char).join('')
  setTimeout(animate, randomInt(20, 300))
}
animate();