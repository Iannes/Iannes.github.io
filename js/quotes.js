const xhrbtn = document.getElementById('xhr')
const fetchbtn = document.getElementById('fetch')
const jquerybtn = document.getElementById('jquery')
const axiosbtn = document.getElementById('axios')
const quote = document.getElementById('quote')

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'


xhrbtn.addEventListener('click', function () {
 var XHR = new XMLHttpRequest()

XHR.onreadystatechange = function() {
  if(XHR.readyState === 4 && XHR.status === 200) {
    var parsed = JSON.parse(XHR.responseText)
    quote.textContent = parsed
  }

}
  XHR.open("GET", url, true)
  XHR.send()
})
