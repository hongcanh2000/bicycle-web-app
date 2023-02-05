let heroSlide = document.querySelector('#hero-slide');

let heroSlideItems = heroSlide.querySelectorAll('.slide');

let heroSlideIndex = 0;

let heroSlidePlay = true;

let heroSildeControlItems = heroSlide.querySelectorAll('.slide-control-item')

let slideNext = heroSlide.querySelector('.slide-next')
let slidePrev = heroSlide.querySelector('.slide-prev')

showSlide = (index) => {
    heroSlide.querySelector('.slide.active').classList.remove('active');
    heroSlide.querySelector('.slide-control-item.active').classList.remove('active');
    heroSildeControlItems[index].classList.add('active');
    heroSlideItems[index].classList.add('active');
}

nextSlide = () => {
    heroSlideIndex = heroSlideIndex + 1 === heroSlideItems.length ? 0 : heroSlideIndex + 1;
    showSlide(heroSlideIndex)
}

prevSlide = () => {
    heroSlideIndex = heroSlideIndex - 1 < 0 ? heroSlideItems.length - 1 : heroSlideIndex - 1;
    showSlide(heroSlideIndex)
}

slideNext.addEventListener('click',() => nextSlide());
slidePrev.addEventListener('click',() => prevSlide());

heroSildeControlItems.forEach((item,index) => {
    item.addEventListener('click',() => showSlide(index))
})

heroSlide.addEventListener('mouseover',()=> heroSlidePlay = false);
heroSlide.addEventListener('mouseleave',()=> heroSlidePlay = true);

setTimeout(()=> heroSlideItems[0].classList.add('active'),200);

//auto slide

setInterval(() =>{
    if (!heroSlidePlay) return
    nextSlide()
},5000);

