const list = document.querySelector('.js-accordion')

const dts = list.querySelectorAll('dt')


dts.forEach((dt) => {
    dt.addEventListener('click', () => {
        const arrow = dt.querySelector('span')
        arrow.classList.toggle('rotate')
        const dd = dt.nextElementSibling
        dt.classList.toggle('bold')
        dd.classList.toggle('active')
    })
})