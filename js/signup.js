const signUp        = document.querySelector('#signup')
const signIn        = document.querySelector('#sign-in')
const signInTrigger = document.querySelector('#sign-in--trigger')


const show = () => {
  setTimeout(() => {
    signIn.classList.add('visible')
  }, 300);

}
signInTrigger.addEventListener('click', () => {
  signUp.classList.add('fade-out')
  show()


})

