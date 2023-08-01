let darkMode = true
const toggleMode = document.getElementById('button-toggle-mode')

toggleMode.addEventListener('click', (e) => {
 document.documentElement.classList.toggle('light')

// Acessibilidade para o usuario
 const mode = darkMode ? 'light' : 'dark'
  e.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

  darkMode = !darkMode
})