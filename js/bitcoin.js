const btn = document.getElementById('btn')
const price = document.getElementById('price')
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const currency = document.getElementById('currency')
let value = ""

 const init = () => {
  currencySelect()
  document.getElementById('btn').click();

}

btn.addEventListener('click',  () => {
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
const currencySelect = () => {
  value = currency.value;
}


const copy = document.getElementById('copy')
const date =new Date()
copy.textContent = date.getFullYear()
