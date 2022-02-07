const buttonNext = document.querySelector('[data-btn-next]')
const buttonBack = document.querySelector('[data-btn-back]')
const title = document.getElementsByClassName('main-card-text-title')
const p = document.getElementsByClassName('main-card-text-p')
const fields = document.getElementsByClassName('fields-group')


var counter = 0

counterCheck()

buttonBack.addEventListener('click', () => {

    title[counter].style.display = 'none'
    p[counter].style.display = 'none'
    fields[counter].style.display = 'none'
    
    if (counter > -1) {
        counter--
    }
    
    
    counterCheck()
    
})

buttonNext.addEventListener('click', () => {
    
    title[counter].style.display = 'none'
    p[counter].style.display = 'none'
    fields[counter].style.display = 'none'
    
    
    if (counter < 3) {
        counter++
    }
    
    counterCheck()
    
})

function counterCheck() {

    switch (counter) {
        case 0:
            title[counter].style.display = 'block'
            p[counter].style.display = 'block'
            fields[counter].style.display = 'grid'
            buttonBack.style.display= 'none'
            break

        case 1:
            title[counter].style.display = 'block'
            p[counter].style.display = 'block'
            buttonBack.style.display= 'inline-block'
            fields[counter].style.display = 'grid'

            break

        case 2:
            title[counter].style.display = 'block'
            p[counter].style.display = 'block'
            fields[counter].style.display = 'grid'

            break

        case 3:
            title[counter].style.display = 'block'
            fields[counter].style.display = 'grid'
            p[counter].style.display = 'block'
            break
        default:
            break;
    }

    console.log(counter)

}