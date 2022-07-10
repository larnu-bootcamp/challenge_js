// hidden and show searching

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})


// pictures event music click 


document.getElementById("graduate").onclick = function() {
  let audio = document.getElementById("audio");
  if (audio.paused) audio.play();
  else audio.pause();
};
document.getElementById("go").onclick = function() {
  let audio = document.getElementById("audio-go");
  if (audio.paused) audio.play();
  else audio.pause();
};

document.getElementById("study").onclick = function() {
  var audio = document.getElementById("audio-study");
  if (audio.paused) audio.play();
  else audio.pause();
};

/* loading  */
const loadText = document.querySelector(".loading-text");
const container = document.querySelector(".container");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  // console.log(load)
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  container.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};


