const copy = document.getElementById('copy'),
      date = new Date(),
      win = window.innerWidth,
      shell = document.querySelector("#shell")

const smallScreens = () => win < 1200 ? shell.textContent = "Welcome" : shell.textContent = "I like creating stuff"
copy.textContent = date.getFullYear()

smallScreens()

console.info('If you are interested in my portfolio or CV, get in touch!')
