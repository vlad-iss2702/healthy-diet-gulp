//Слайдеры
$('.main-carousel').owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 7000,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    animateOut: 'fadeOut',
    smartSpeed: 900,
    navText : ["<i class=\"icon-angle-left\"></i> ", "<i class=\"icon-angle-right\"></i>"],
    items: 1,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      768:{
          items:1,
          nav:false,
          margin: 20,
      },
      992:{
          items:1,
          nav:true,
          loop:false
      },
      1200:{
          items:1,
      },
      1300:{
        items:1,
    }
  }
})
$('.review-carousel').owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 7000,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    animateOut: 'fadeOut',
    smartSpeed: 900,
    navText : ["<i class=\"icon-angle-left\"></i> ", "<i class=\"icon-angle-right\"></i>"],
    items: 1,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      768:{
          items:1,
          nav:false,
          margin: 20,
      },
      992:{
          items:1,
          nav:true,
          loop:false
      },
      1200:{
          items:1,
      },
      1300:{
        items:1,
    }
  }
})

//Скрипты связанные со скроллом страницы
const headerFixed = document.querySelector('.header-fixed'),
      documentBody = document.querySelector('body'), 
      currentScroll = document.querySelector('.current-scroll'),
      scrollProgresTop = document.querySelector('.scroll-progress__top'),
      allHeight = documentBody.scrollHeight,
      clientScroll = documentBody.clientHeight; 

window.addEventListener('scroll', () => {
    let actualScroll = Math.round(pageYOffset), //Текущий скролл страницы
        heighDifference = allHeight - clientScroll, //Разность высоты всей страницы и открытого окна
        percentHeight = actualScroll / heighDifference*100, //Переводим высоту пикселей в проценты
        percentRounding = Math.round(percentHeight); //Округляем отображение процентов
        
    if (actualScroll >= 600) {
        headerFixed.classList.add('sticky-open');
    }
    else {
        headerFixed.classList.remove('sticky-open');
    }

    if (percentRounding >= 80 ) {
        scrollProgresTop.style.opacity = 1;
        scrollProgresTop.style.left = "30px";        
        
    }
    else {
        scrollProgresTop.style.opacity = 0;
        scrollProgresTop.style.left = "-130px";
    }
    

    if (percentRounding >= 10 ) {
        currentScroll.classList.remove('current-scroll__none');
    }
    else {
        currentScroll.classList.add('current-scroll__none');
    }

    currentScroll.innerHTML = `
        <svg viewBox="0 0 64 64" class="scroll-progress">
            <circle class="scroll-progress__background" r="25%" cx="50%" cy="50%"></circle>
            <circle class="scroll-progress__chart" r="25%" cx="50%" cy="50%" stroke-dasharray="${percentRounding} 100">
                    
            </circle>
            <p class="scroll-progress__percent">
                <span>${percentRounding}</span>
            </p>
        </svg>
    `;
})




//Модальные окна
const showModalBtn = document.querySelectorAll('[data-modal]'),
      showVideoModal = document.querySelectorAll('[data-modal-video]'),
      closeModalBtn = document.querySelector('[data-close]'),
      closeModalVideo = document.querySelector('.modal-video__close'),
      dataVideoId = document.querySelectorAll('[data-video-id]'),
      modal = document.querySelector('.modal'),
      modalVideo = document.querySelector('.modal-video'),
      modalVideoContent = document.querySelector('.modal-video__content');



//Модальное окно для формы
function modalShow () {
    documentBody.style.overflow = 'hidden';
    modal.classList.add('modal-show');
}

function modalClose () {
    documentBody.style.overflow = 'inherit';
    modal.classList.remove('modal-show');
}

showModalBtn.forEach(btn =>{
    btn.addEventListener('click', modalShow);
});

modal.addEventListener('click', (e)=>{
    if (e.target === modal) {
        modalClose();
    }
});
closeModalBtn.addEventListener('click', ()=>{
    modalClose();
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('modal-show')) {
        modalClose();
    }
});

//Модальное окно для видео
let dataValueAttribute = 0;


dataVideoId.forEach(item => {
    item.onclick = function () {
        modalVideoContent.innerHTML = `
        <iframe width="800" height="404" autoplay src="https://www.youtube.com/embed/${item.dataset.videoId}" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
    `;
    };
})


function modalVideoShow() {
    documentBody.style.overflow = 'hidden';
    modalVideo.classList.add('modal-video-show');
}

function modalVideoClose () {
    documentBody.style.overflow = 'inherit';
    modalVideo.classList.remove('modal-video-show');
}

showVideoModal.forEach(btn =>{
    btn.addEventListener('click', modalVideoShow);
});

modalVideo.addEventListener('click', (e)=>{
    if (e.target === modalVideo) {
        modalVideoClose();
    }
});
closeModalVideo.addEventListener('click', ()=>{
    modalVideoClose();
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modalVideo.classList.contains('modal-video-show')) {
        modalVideoClose();
    }
});


//Jquery прокрутка вверх
$(function() {
  $(scrollProgresTop).click(function() {
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
//Jquery blueimp gallery

// Lightbox
$(document).on('click', '#galleryBlock, .gallery-init, *[rel=zoom]', function (event) {
    app.blueimp(this, event);
});

app = {
blueimp: function(e, event){
    event = event || window.event;
    if (
        event.target.nodeName == 'IMG' ||
        event.target.nodeName == 'SPAN' ||
        event.target.nodeName == 'A'){
        var target = event.target || event.srcElement;
        var index = (event.target.nodeName == 'A') ? target : target.parentNode;
        var	options = {
            index: index,
            event: event
        };
        links = e.getElementsByTagName('a');
        if ($(e).attr('rel') == 'zoom'){
            links = $(e);
        }
        blueimp.Gallery(links, options);
    }
    return false;
}
};