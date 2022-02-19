// let count = 0;
// let colo = document.getElementById('num');

// function increase(){
//     ++count;
//     document.getElementById('num').innerHTML = count;
// }

// function decrease(){
//     --count;
//     document.getElementById('num').innerHTML = count;
// }

// function reset(){
//     count = 0;
//     document.getElementById('num').innerHTML = 0;
// }

// if(count>0){
//     colo.style.color = 'green';
// }


let count = 0;

let num = document.getElementById('num');
let btns = document.querySelectorAll('button');

btns.forEach(function (button){
    button.addEventListener('click', function(event){
        const classs = event.currentTarget.classList;

        if(classs.contains('decrease')){
            count--;
        }
        else if(classs.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        if(count>0){
            num.style.color = 'green';
            body.style.backgroundColor = 'green';
        }
        else if(count<0){
            num.style.color = 'red';
        }
        else{
            num.style.color = 'black'
        }

        num.textContent = count;
    });
});
