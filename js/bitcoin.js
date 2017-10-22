var btn = document.getElementById('btn')
var price = document.getElementById('price')
var url = "https://api.coindesk.com/v1/bpi/currentprice.json"
var currency = document.getElementById('currency')
var value = ""

function init() {
  currencySelect()
  document.getElementById('btn').click();

}

btn.addEventListener('click', function () {
 var XHR = new XMLHttpRequest()

XHR.onload = function() {
  if(this.status === 200) {
    var data = JSON.parse(XHR.responseText).bpi
    price.textContent = data[value].rate + " " +value
  }
}
  XHR.open("GET", url)
  XHR.send()
})
function currencySelect() {
  value = currency.value;
}


var copy = document.getElementById('copy')
var date =new Date()
copy.textContent = date.getFullYear()
