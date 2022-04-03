const buttonNext = document.querySelector('[data-btn-next]')
const buttonBack = document.querySelector('[data-btn-back]')
const buttonSubmit = document.querySelector('[data-btn-submit]')
const editButtons = document.getElementsByClassName('edit')
const stepCounterLi = document.querySelectorAll('[data-step-counter-li]')
const titleAndP = document.getElementsByClassName('title-and-p')
const fieldsGroup = document.getElementsByClassName('fields-group')
const fields = document.getElementsByClassName('btn-main-card')
const fieldsResume = document.getElementsByClassName('fields-resume-card')


var counter = 0

counterCheck()
editBtnClickCheck()

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

function editBtnClickCheck() {
    for(let x = 0; x < editButtons.length; x++) {
        editButtons[x].addEventListener('click', () => {
            counter = x
            counterCheck()
        })
    }
}

function counterCheck() {
    
    switch (counter) {
        case 0:
            titleAndP[3].style.display = 'none'
            fieldsGroup[3].style.display = 'none'
            buttonSubmit.style.display = 'none'
            buttonBack.style.display= 'none'
            
            titleAndP[counter].style.display = 'block'
            fieldsGroup[counter].style.display = 'grid'
            buttonNext.style.display = 'block'

            stepCounterLi[0].classList.add('active')
            stepCounterLi[1].classList.remove('active')
            stepCounterLi[2].classList.remove('active')
            stepCounterLi[3].classList.remove('active')

            break

        case 1:
            titleAndP[3].style.display = 'none'
            fieldsGroup[3].style.display = 'none'
            buttonSubmit.style.display = 'none'

            titleAndP[counter].style.display = 'block'
            buttonBack.style.display= 'inline-block'
            fieldsGroup[counter].style.display = 'grid'
            buttonNext.style.display = 'block'

            stepCounterLi[0].classList.add('active')
            stepCounterLi[1].classList.add('active')
            stepCounterLi[2].classList.remove('active')
            stepCounterLi[3].classList.remove('active')


            break

        case 2:
            titleAndP[3].style.display = 'none'
            fieldsGroup[3].style.display = 'none'
            buttonSubmit.style.display = 'none'

            titleAndP[counter].style.display = 'block'
            fieldsGroup[counter].style.display = 'grid'
            buttonNext.style.display = 'block'

            stepCounterLi[0].classList.add('active')
            stepCounterLi[1].classList.add('active')
            stepCounterLi[2].classList.add('active')
            stepCounterLi[3].classList.remove('active')

            break
            
            case 3:
                buttonNext.style.display = 'none'

                titleAndP[counter].style.display = 'block'
                fieldsGroup[counter].style.display = 'grid'
                buttonSubmit.style.display = 'block'

                stepCounterLi[0].classList.add('active')
                stepCounterLi[1].classList.add('active')
                stepCounterLi[2].classList.add('active')
                stepCounterLi[3].classList.add('active')


            for (let x = 0; x < fields.length; x++) {
                
                if (x == 1) {

                    const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
                    
                    const dataErrada = fields[1].value
                    const dataCerta = new Date(dataErrada).toLocaleDateString('pt-BR', { timeZone: 'UTC'})

                    const validacaoDiaSemana = new Date(dataErrada).getDay()

                    const diaSemana = diasSemana[validacaoDiaSemana]

                    fieldsResume[0].textContent = diaSemana // dia da semana
                    fieldsResume[1].textContent = dataCerta // data

                } else {
                    fieldsResume[x].textContent = fields[x].value
                }
            }

            break
        default:
            break;
    }


}