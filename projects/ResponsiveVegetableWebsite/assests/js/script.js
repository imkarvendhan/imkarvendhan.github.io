// Category Section Swiper 
var swiper = new Swiper(".mySwiperCategory", {
  slidesPerView: 5,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".cat-swipe-next",
    prevEl: ".cat-swipe-prev",
  },
  breakpoints: {
    1106: {
      slidesPerView: 5,
      spaceBetween: 40
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 50
    },
    780: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 60
    }
  }
  });

// Latest Products Section Swiper 
var swiper = new Swiper(".mySwiperProducts", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".lp-swipe-next",
      prevEl: ".lp-swipe-prev",
    },
  });

// Mixitup
let featureCards = document.querySelector('.feature__card-container');
let mixer = mixitup(featureCards);

// Feature-menus
let featureMenu = document.querySelectorAll('.feature__menus .control');

function removeActive(menus) {
    menus.forEach((menu)=>{
      menu.classList.remove('active')
    })
}

featureMenu.forEach((menu)=>{
    menu.addEventListener('click', ()=>{
      removeActive(featureMenu)  
      menu.classList.add('active')
  })
})

// dropdown menus

let dropdownMenuHeader = document.querySelector('.home__dropdown-header');
let dropdownMenus = document.querySelector('.home__dropdown-menus');

dropdownMenuHeader.addEventListener('click',()=>{
  dropdownMenus.classList.toggle('home-dropdown')
})


// Mobile Menu Bar mobile

let headerToggle = document.querySelector('.header__toggle');
let mobileMenuBar = document.querySelector('.mobile__menubar');

headerToggle.addEventListener('click',()=>{
  mobileMenuBar.classList.toggle('mobile-menu')
  if (mobileMenuBar.classList.contains('mobile-menu')) {
    headerToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`
  }
  else{
    headerToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`
  }
})
