import './style.css'

const app = document.getElementById('app')

const name = '🥷'
const nameHolder = document.createElement('div')
nameHolder.style.position = 'absolute'
nameHolder.innerHTML = name

app.appendChild(nameHolder)

let left = 500
let top = 500
const playerSpeed = 25

const keys = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false
}
let lastFrameTime = null

window.addEventListener('keydown', function (event) {
  if (event.key in keys) {
    keys[event.key] = true
  }
})

window.addEventListener('keyup', function (event) {
  if (event.key in keys) {
    keys[event.key] = false
  }
})

function paintScreen () {
  nameHolder.style.left = `${left}px`
  nameHolder.style.top = `${top}px`
}

function gameLoop () {
  const time = performance.now()
  const deltaTime = (time - lastFrameTime) / 100
  lastFrameTime = time
  const posDelta = playerSpeed * deltaTime
  if (keys.ArrowLeft) {
    left = left - posDelta
  }
  if (keys.ArrowRight) {
    left = left + posDelta
  }
  if (keys.ArrowUp) {
    top = top - posDelta
  }
  if (keys.ArrowDown) {
    top = top + posDelta
  }
  paintScreen()

  window.requestAnimationFrame(gameLoop)
}

lastFrameTime = performance.now()
gameLoop()