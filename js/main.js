


document.querySelector('.subscribe').addEventListener('click', function(event) {
  event.preventDefault()

  const emailInput = document.querySelector('input[name="email"]')
  const errorMessage = document.querySelector('.error-message')
  const email = emailInput.value
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')

  emailInput.classList.remove('invalid-email')
  checkboxes.forEach(function(checkbox) {
    checkbox.classList.remove('invalid-checkbox')
  })

  if (email === '') {
    errorMessage.textContent = 'Valid email required'
    emailInput.classList.add('invalid-email')
    markCheckboxesAsInvalid()
    return
  } else if (!isValidEmail(email)) {
    errorMessage.textContent = 'Valid email required'
    emailInput.classList.add('invalid-email')
    markCheckboxesAsInvalid()
    return
  } else if (!isCheckboxSelected()) {
    errorMessage.textContent = ''
    emailInput.classList.remove('invalid-email')
    markCheckboxesAsInvalid()
    return
  } else {
    window.location.href = 'thx.html?email=' + encodeURIComponent(email)
  }
})

const emailInput = document.querySelector('input[name="email"]')
const submitButton = document.querySelector('.subscribe')

emailInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    submitButton.click()
  }
})

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isCheckboxSelected() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      return true
    }
  }
  return false
}

function markCheckboxesAsInvalid() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach(function(checkbox) {
    checkbox.classList.add('invalid-checkbox')
  })
}

if (performance.navigation.type === 1) {
  window.location.href = "index.html"
} else if (performance.navigation.type === 2) {
  window.location.href = "index.html"
}
