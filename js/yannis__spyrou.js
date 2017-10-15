function small() {

document.getElementById("shell").textContent="Digital Web Design";
}

if ( $(window).width() < 1200) {
  small();
}

console.log('If you are interested in my portfolio, please have a look at my online CV at http://yannisspyrou.co.uk/cv.html/')


var copy = document.getElementById('copy')
var date =new Date()
copy.textContent = date.getFullYear()
