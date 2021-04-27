var a = 0;
var att = document.querySelector('.attack');
var updateattack =0;



document.querySelector('.pause').onclick = function(){
        att.style.animationPlayState = 'paused';
        setTimeout(function() { 
            var c = document.querySelector('.range').getBoundingClientRect().x
            b = document.querySelector('.attack').getBoundingClientRect().x;
            var son = b-c;
            document.querySelector('.netice').innerHTML = Math.ceil(son);
         }, 500);
        
    };

    document.querySelector('.start').onclick = function(){
        att.style.animationPlayState = 'running';
        
    }

