import state from "./state.js";
import * as Timer from './timer.js'
import * as el from './elements.js'


export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  Timer.countDown()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')
  Timer.updateDisplay()
}

export function set(){
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}



