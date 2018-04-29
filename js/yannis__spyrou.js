function small() {

document.getElementById("shell").textContent="Digital Web Design";
}

if ( $(window).width() < 1200) {
  small();
}

console.info('If you are interested in my portfolio, please contact me on js15js@gmail.com')


var copy = document.getElementById('copy')
var date =new Date()
copy.textContent = date.getFullYear()
