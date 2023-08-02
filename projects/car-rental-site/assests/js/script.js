// Variables
let toggle = document.querySelector('.header__toggle');
let headerMenus = document.querySelector('.header__menus');
let headerLink = document.querySelectorAll('.header__links li');

// Toggle Menus
toggle.addEventListener('click', () => {
    headerMenus.classList.toggle('navMenu')
    if(headerMenus.classList.contains('navMenu')){
        toggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }
    else{
        toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`
    } 
})

// Toggle NavBar For Click Event
headerLink.forEach((value)=>{
    value.addEventListener('click',() => {
        headerMenus.classList.remove('navMenu')
        toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`
    })
})
