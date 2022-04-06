function valores(){
    let preço = document.querySelector('#planos');
    let optionValue = preço.options[preço.selectedIndex];
    let value = optionValue.value;
    let valor = document.querySelector('#valor');
    valor.innerHTML = value;
}

const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

const navLink = document.querySelectorAll('.nav-link');
for (i = 0; i<navLink.length; i++ ){
    navLink[i].addEventListener('click', function(){
        menu.classList.remove('active');
        navMenu.classList.remove('active');
    })
}

const faq = document.getElementsByClassName('faq');
for (i = 0; i<faq.length; i++ ){
    faq[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}
