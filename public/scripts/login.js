const loginBtns = document.querySelectorAll('[data-input-login]')
const loginBorder = document.querySelectorAll('[data-input-border]')



for (let x = 0; x < loginBtns.length; x++) {
    loginBtns[x].addEventListener('focusin', (event) => {
        event.currentTarget.parentNode.classList.remove('hover')
        event.currentTarget.parentNode.classList.remove('focusout')
        event.currentTarget.parentNode.classList.add('focusin')
    })
    
    loginBtns[x].addEventListener('blur', (event) => {
        event.currentTarget.parentNode.classList.remove('focusin')
        event.currentTarget.parentNode.classList.add('focusout')
    })

    loginBtns[x].addEventListener('mouseout', (event) => {
        event.currentTarget.parentNode.classList.remove('hover')
    })

    loginBtns[x].addEventListener('mouseover', (event) => {
        event.currentTarget.parentNode.classList.add('hover')
    })
}

