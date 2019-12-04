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

function setLetters(generatedLetters = {}) {
  el.innerHTML = chars.map((char, pos) => {
    if (generatedLetters[pos]) {
      const opacity = (randomInt(20, 60) / 100).toPrecision(1);
      return `<span style="opacity:${opacity};">${generatedLetters[pos]}</span>`
    }
    return `<span>${char}</span>`
  }).join('')
}

let stopped = false;

function animate() {
  if (stopped) {
    return
  }
  setLetters(getRandomLetters(defaultText))
  setTimeout(animate, 40)
}

function launch() {
  stopped = false;
  animate();
  setTimeout(() => {
    stopped = true;
    setLetters()
    setTimeout(launch, 1000)
  }, 400)
}
launch();