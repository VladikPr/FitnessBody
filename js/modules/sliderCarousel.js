const sliderCarousel = () => {
    const sliders = document.querySelectorAll('.services-slider .slide');
    const arrows = document.querySelector('.services-slider');
    const allSlides = [];

    for(let i = 0; i < sliders.length; i++){
        allSlides.push(sliders[i]);
    }

    sliders.forEach(slide => arrows.removeChild(slide));
    
    allSlides.forEach((slide,index) => index<5?arrows.append(slide):"");

    const nextSlide = (slides) => {
        const sliders = document.querySelectorAll('.services-slider .slide');
        sliders.forEach(slide => arrows.removeChild(slide));
        slides.forEach( i => arrows.append(i));
    };
    

    let i = 0;
   const switchSlides = (n, showSlides) =>{
        i+=n;
        let newArr;
        if (i >=0 && i < showSlides){
            newArr = allSlides.slice(i, showSlides + i);
            nextSlide(newArr);
        } else if(i >= showSlides){
            let x = 0;
            const delta = allSlides.length - (i+showSlides);
            if(delta < 0){
                x = delta * -1;
            }
            newArr = allSlides.slice(i, i + showSlides).concat(allSlides.slice(0,x));
            nextSlide(newArr);
            if(i === allSlides.length){
                i = 0;
            }
        }
        
        if (i < 0 && i > -showSlides){
            newArr = allSlides.slice(allSlides.length + i).concat(allSlides.slice(0, showSlides + i));
            nextSlide(newArr);
        } else if (i <= -showSlides){
            newArr = allSlides.slice(allSlides.length + i, allSlides.length + i + showSlides);
            nextSlide(newArr);
            if((allSlides.length + i) === 0){
                i = 0;
            }
        }
   };

   arrows.addEventListener('click', (e) => {
    const {target} = e;
    let numSlides;
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth > 820 && windowWidth <= 1200){
        numSlides = 4;
    }else if (windowWidth > 560 && windowWidth <= 820){
        numSlides = 3;
    }else if (windowWidth > 400 && windowWidth <= 560){
        numSlides = 2;
    }else{
        numSlides = 5;
    }

    if(target.closest('.prev')){
        switchSlides(-1,numSlides);
    }else if (target.closest('.next')){
        switchSlides(+1,numSlides);
    }
    });

    
};

export default sliderCarousel;
