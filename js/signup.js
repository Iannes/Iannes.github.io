const signUp        = document.querySelector('#signup')
const signIn        = document.querySelector('#sign-in')
const signInTrigger = document.querySelector('#sign-in--trigger')
const signUpTrigger = document.querySelector('#sign-up--trigger')


const show = () => {
  setTimeout(() => {
    signIn.classList.add('visible')
  }, 300);
}

const hide = () => {
  setTimeout(() => {
    signUp.classList.add('fade-in')
  }, 100);
}
signInTrigger.addEventListener('click', () => {
  signUp.classList.add('fade-out')
  signUp.classList.remove('fade-in')
  show()
})

signUpTrigger.addEventListener('click', () => {
  signIn.classList.remove('visible')
  hide()
})

