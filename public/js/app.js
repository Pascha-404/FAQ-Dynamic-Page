const buttons = document.querySelectorAll('.faq-toggle');
const addBtn = document.querySelector('#add');
const faqFormAdd = document.querySelector('.faq-form');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active')
    })
})

addBtn.addEventListener('click', () => {
    faqFormAdd.classList.toggle('active');
    addBtn.classList.toggle('active');
})