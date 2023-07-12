


const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const email = urlParams.get('email')

const emailElement = document.querySelector('#email')
emailElement.textContent = email

const dismissButton = document.querySelector('.dismiss')

dismissButton.addEventListener('click', function() {
  resetForm()
  redirectToIndex()
});

window.addEventListener('beforeunload', function() {
  resetForm()
  redirectToIndex()
});

function resetForm() {
  const emailInput = document.querySelector('input[name="email"]')
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  const errorMessage = document.querySelector('.error-message')
}
function redirectToIndex() {
  history.replaceState(null, '', 'index.html')
  location.reload()
}

