import * as el from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";
import * as sounds from "./sounds.js";

export function registerControls() {
  el.controls.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });

  el.upPlus.addEventListener("click", () => {

    if(!state.isRunning){
      return;
    }

    let minutes = Number(el.minutes.textContent);
       minutes += 5 

    el.minutes.textContent = minutes.toString().padStart(2 , '0')
  })

  el.downPlus.addEventListener("click", () => {
    if(!state.isRunning){
      return;
    }

    let minutes = Number(el.minutes.textContent);
    minutes -= 5 

    el.minutes.textContent = minutes.toString().padStart(2, '0')
  })
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });

  el.minutes.onkeypress = (e) => /\d/.test(e.key);

  el.minutes.addEventListener("blur", (e) => {
    let time = e.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
}

let playingButton = null;
let playingAudio = null;

function playAudio(audio) {
  audio.play();
}

function pauseAudio(audio) {
  audio.pause();
}

function stopPlayingAudio() {
  if (playingButton && playingButton) {
    pauseAudio(playingAudio);
    playingButton.classList.remove("selection");
    playingButton = null;
    playingAudio = null;
  }
}

export function toggleMusic() {
  el.tree.addEventListener("click", () => {
    if (playingButton !== el.tree) {
      stopPlayingAudio();
      playingButton = el.tree;
      playingAudio = sounds.audioFloresta;
      el.tree.classList.add("selection");
      playAudio(sounds.audioFloresta);
    } else {
      stopPlayingAudio();
    }
  });

  el.cloudSnow.addEventListener("click", () => {
    if (playingButton !== el.cloudSnow) {
      stopPlayingAudio();
      playingButton = el.cloudSnow;
      playingAudio = sounds.audioChuva;
      el.cloudSnow.classList.add("selection");
      playAudio(sounds.audioChuva);
    } else {
      stopPlayingAudio();
    }
  });

  el.storeFront.addEventListener("click", () => {
    if (playingButton !== el.storeFront) {
      stopPlayingAudio();
      playingButton = el.storeFront;
      playingAudio = sounds.audioCafeteira;
      el.storeFront.classList.add("selection");
      playAudio(sounds.audioCafeteira);
    } else {
      stopPlayingAudio();
    }
  });

  el.fire.addEventListener("click", () => {
    if (playingButton !== el.fire) {
      stopPlayingAudio();
      playingButton = el.fire;
      playingAudio = sounds.audioLareira;
      el.fire.classList.add("selection");
      playAudio(sounds.audioLareira);
    } else {
      stopPlayingAudio();
    }
  });
}
