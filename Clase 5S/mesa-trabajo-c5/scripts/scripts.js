let theme = confirm('Would you like to go into dark mode?')

theme ? '' : document.querySelector('body').classList.remove('dark')