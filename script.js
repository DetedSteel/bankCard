const formBank = document.forms.cardForm
const card = document.querySelector('.card')
const logo = document.querySelector('.bank')
const system = document.querySelector('.system')
const number = document.querySelector('.number')
const monthRes = document.querySelector('.monthRes')
const yearRes = document.querySelector('.yearRes')
const nameRes = document.querySelector('.name')
const codeRes = document.querySelector('.cvv')
const resultsContainer = document.querySelector('.results')

const selectBank = formBank.children.bank
const selectSystem = formBank.children.type
const numberInput = formBank.children.number
const month = formBank.children.month
const year = formBank.children.year
const name1 = formBank.children.name
const code = formBank.children.cvv
const arrData = []

function swithBank(){
    switch (selectBank.value) {
        case 'СБЕР':
            card.style.backgroundColor = '#016C3E'
            logo.src = 'https://murmankukla.ru/images/images_for_site/img_friends/sber.png'
            return 'https://murmankukla.ru/images/images_for_site/img_friends/sber.png'
            break
        case 'Тинькофф':
            card.style.backgroundColor = '#ffdd2d'
            logo.src = 'https://acdn.tinkoff.ru/static/documents/172b982d-3762-4dcf-8b67-3bc266c5a1f5.png'
            return 'https://acdn.tinkoff.ru/static/documents/172b982d-3762-4dcf-8b67-3bc266c5a1f5.png'
            break
        default:
            break
    }
}

function switchSystem(){
    switch (selectSystem.value) {
        case 'VISA':
            system.src = 'https://www.svgrepo.com/show/473823/visa.svg'
            return 'https://www.svgrepo.com/show/473823/visa.svg'
            break
        case 'master card':
            system.src = 'https://www.pngplay.com/wp-content/uploads/13/Mastercard-Logo-Free-PNG.png'
            return 'https://www.pngplay.com/wp-content/uploads/13/Mastercard-Logo-Free-PNG.png'
            break
        case 'maestro':
            system.src = 'https://www.nicepng.com/png/full/951-9513657_mastercard-logo-vector-mastercard-maestro-logo-png-maestro.png'
            return 'https://www.nicepng.com/png/full/951-9513657_mastercard-logo-vector-mastercard-maestro-logo-png-maestro.png'
            break
        default:
            break
    }
}

swithBank()
switchSystem()
selectBank.addEventListener('change', () => {
    swithBank()
})

selectSystem.addEventListener('change', () => {
    switchSystem()
})

numberInput.addEventListener('input', function() {
    let num = this.value
    let newNum = ''
    if (this.value.length > 16){
        num = this.value.slice(0,16)
    }
    for (let i = 0; i < num.length; i++){
        newNum += num[i]
        if (i == 3 || i == 7 || i == 11){
            newNum += ' '
        }
    }
    number.innerText = newNum
})

month.addEventListener('input', function() {
    monthRes.innerText = this.value.slice(0, 2)
    this.value = this.value.slice(0, 2)
})

year.addEventListener('input', function() {
    yearRes.innerText = this.value.slice(0, 2)
    this.value = this.value.slice(0, 2)
})

name1.addEventListener('input', function() {
    nameRes.innerText = this.value
})

code.addEventListener('input', function() {
    codeRes.innerText = this.value.slice(0, 3)
    this.value = this.value.slice(0,3)
})

let num = 1
formBank.addEventListener('submit', function(e) {
    e.preventDefault()
    resultsContainer.innerHTML += `
    <div class='flex_res'>
        <div class='res_item'>${num++}</div>
        <div class='res_item'><img src='${swithBank()}' alt='bank' class='res_img'></div>
        <div class='res_item'><img src='${switchSystem()}' alt='bank' class='res_img'></div>
        <div class='res_item'>Номер карты<br>${this.number.value}</div>
        <div class='res_item'>Дата окончания действия<br>${this.month.value}/${this.year.value}</div>
        <div class='res_item'>CVV код<br>${this.cvv.value}</div>
        <div class='res_item'>Имя владельца<br>${this.name.value}</div>
    </div>
    `
    this.reset()
    swithBank()
    switchSystem()
})