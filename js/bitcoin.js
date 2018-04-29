//TODO
// Convert AJAX to ES6 promises

const body = document.querySelector('body')
const dataContainer = document.querySelector('.data-container')
const btn = document.querySelector('#btn')
const price = document.querySelector('#price')
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const currency = document.querySelector('#currency')
let value = ""

const loaded = () => {
  body.classList.add('fade-in')
  dataContainer.classList.add('loaded')
}

 const init = () => {
  loaded()
  currencySelect()
  document.querySelector('#btn').click();
}

btn.addEventListener('click',  () => {
 let XHR = new XMLHttpRequest()

XHR.onload = function() {
  if(this.status === 200) {
    let data = JSON.parse(XHR.responseText).bpi
    // trim last two digits
    let currency = data[value].rate
    let trimmedCurrency = currency.substring(0, currency.length - 2);
    price.textContent = `${trimmedCurrency} ${value}`
  }

}
  XHR.open("GET", url)
  XHR.send()
})
const currencySelect = () => {
  value = currency.value;
}
const copy = document.querySelector('#copy')
const date = new Date()
copy.textContent = date.getFullYear()
