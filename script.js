const sliderLine = document.querySelector('.slider-line'),
    img = [...sliderLine.children]
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dots = document.querySelectorAll('.dot')

    console.log(img.length * sliderLine.clientWidth);


    let position = 0,
        dotIndex = 0

const nextSlide = () => {
    if(position < ((img.length - 1) * sliderLine.clientWidth)) {
        position += sliderLine.clientWidth
        dotIndex++
    }else {
        position = 0
        dotIndex = 0
    }

    img.forEach(item => {
        item.style.transform = `translateX(-${position}px)`
        item.style.transition = '1s'
    })
    remove(dotIndex)
  
}   

const prevSlide = () => {
    if(position > 0) {
        position -= sliderLine.clientWidth
        dotIndex--
    }else {
        position += ((img.length - 1) * sliderLine.clientWidth)
        dotIndex = img.length - 1
    }

    img.forEach(item => {
        item.style.transform = `translateX(-${position}px)`
        item.style.transition = '1s'
    })
    remove(dotIndex)
}   


next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)


dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        position = sliderLine.clientWidth * i
        img.forEach(item => {
            item.style.transform = `translateX(-${position}px)`
        })
        dotIndex = i
        remove(dotIndex)
    })
})

function remove(index) { 
    dots.forEach(dot => {
        dot.classList.remove('active')
    })
    dots[index].classList.add('active')
 }