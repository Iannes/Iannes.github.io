let copy = document.getElementById('copy')
let date = new Date()
let win = window.innerWidth;
const shell = document.querySelector("#shell")

const smallScreens = () => {
  if (win < 1200) {
  shell.textContent="Welcome";
  }
}
copy.textContent = date.getFullYear()

smallScreens()

console.info('If you are interested in my portfolio, please contact me on js15js@gmail.com')