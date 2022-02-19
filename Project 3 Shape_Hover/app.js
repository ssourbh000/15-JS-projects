const shape = document.querySelector('.shape');

shape.addEventListener('mouseenter', ()=> {
    if(!shape.classList.contains('hover')){
        shape.classList.add('hover');
    }
})


shape.addEventListener('mouseleave', ()=> {
    if(shape.classList.contains('hover')){
        shape.classList.remove('hover');
    }
})