const buttonNext = document.querySelector('[data-btn-next]')
const buttonBack = document.querySelector('[data-btn-back]')
const buttonSubmit = document.querySelector('[data-btn-submit]')
const stepCounterLi = document.querySelectorAll('[data-step-counter-li]')
const titleAndP = document.getElementsByClassName('title-and-p')
const fieldsGroup = document.getElementsByClassName('fields-group')
const fields = document.getElementsByClassName('btn-main-card')
const fieldsResume = document.getElementsByClassName('fields-resume-card')

var counter = 0

counterCheck()

buttonBack.addEventListener('click', (event) => {
    event.preventDefault()

    titleAndP[counter].style.display = 'none'
    fieldsGroup[counter].style.display = 'none'
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
    fieldsGroup[counter].style.display = 'none'
    
    
    if (counter < 3) {
        counter++
    }
    
    counterCheck()
    
})

buttonSubmit.addEventListener('click', (event) => {

    event.preventDefault()
    
    titleAndP[counter].style.display = 'none'
    fieldsGroup[counter].style.display = 'none'
    
    counter = 3
    
    counterCheck()
    
})

function counterCheck() {

    switch (counter) {
        case 0:
            titleAndP[counter].style.display = 'block'
            fieldsGroup[counter].style.display = 'grid'
            buttonBack.style.display= 'none'
            break

        case 1:
            titleAndP[counter].style.display = 'block'
            buttonBack.style.display= 'inline-block'
            fieldsGroup[counter].style.display = 'grid'
            stepCounterLi[counter].classList.add('active')
            break

        case 2:
            titleAndP[counter].style.display = 'block'
            fieldsGroup[counter].style.display = 'grid'
            stepCounterLi[counter].classList.add('active')
            buttonNext.style.display = 'none'
            buttonSubmit.style.display = 'block'
            break

        case 3:
            titleAndP[counter].style.display = 'block'
            fieldsGroup[counter].style.display = 'grid'
            stepCounterLi[counter].classList.add('active')

            for (let x = 0; x < fields.length; x++) {
                fieldsResume[x].textContent = fields[x].value
            }

            break
        default:
            break;
    }

    console.log(counter)

}