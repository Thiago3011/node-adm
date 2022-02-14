const buttonNext = document.querySelector('[data-btn-next]')
const buttonBack = document.querySelector('[data-btn-back]')
const buttonSubmit = document.querySelector('[data-btn-submit]')
const stepCounterLi = document.querySelectorAll('[data-step-counter-li]')
const titleAndP = document.getElementsByClassName('title-and-p')
const fields = document.getElementsByClassName('fields-group')


var counter = 0

counterCheck()

buttonBack.addEventListener('click', (event) => {
    event.preventDefault()

    titleAndP[counter].style.display = 'none'
    fields[counter].style.display = 'none'
    stepCounterLi[counter].classList.remove('active')
    buttonNext.style.display = 'block'
    buttonSubmit.style.display = 'none'
    
    if (counter > -1) {
        counter--
    }
    
    
    counterCheck()
    
})

buttonNext.addEventListener('click', (event) => {

    event.preventDefault()
    
    titleAndP[counter].style.display = 'none'
    fields[counter].style.display = 'none'
    
    
    if (counter < 3) {
        counter++
    }
    
    counterCheck()
    
})

function counterCheck() {

    switch (counter) {
        case 0:
            titleAndP[counter].style.display = 'block'
            fields[counter].style.display = 'grid'
            buttonBack.style.display= 'none'
            break

        case 1:
            titleAndP[counter].style.display = 'block'
            buttonBack.style.display= 'inline-block'
            fields[counter].style.display = 'grid'
            stepCounterLi[counter].classList.add('active')
            break

        case 2:
            titleAndP[counter].style.display = 'block'
            fields[counter].style.display = 'grid'
            stepCounterLi[counter].classList.add('active')
            buttonNext.style.display = 'none'
            buttonSubmit.style.display = 'block'
            break

        case 3:
            titleAndP[counter].style.display = 'block'
            fields[counter].style.display = 'grid'
            stepCounterLi[counter].classList.add('active')

            break
        default:
            break;
    }

    console.log(counter)

}