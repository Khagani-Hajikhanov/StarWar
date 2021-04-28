var userName = "";
var selectHero = 0;
var secildi = 1;
var secildi2 = 1;
var userLife = 1000;
var computerLife = 1000;
var attackScore = 0;
var lvl =1;
var computerRandom = 400;

            var bgSound = document.getElementById("bg");
            function playAudio() { 
                bgSound.play(); 
            } 
            playAudio();

document.querySelector('.solHealthCount').innerHTML = userLife;
document.querySelector('.sagHealthCount').innerHTML = computerLife;


document.querySelector(".delete").onclick = function(){
    userName = "";
    document.querySelector('.userlogininput').innerHTML = "_";
}

document.querySelector(".backs").onclick = function(){
    userName = userName.substring(0, userName.length - 1);
    if(userName.length !=0){
        document.querySelector('.userlogininput').innerHTML = userName;
    }
    else{
        document.querySelector('.userlogininput').innerHTML = "_";
    }
}

window.onkeypress = function(e){
    if("ABCDEFGHIJKLMNOPQRSTVUWXYZ".indexOf(e.key.toUpperCase()) !=-1 ){
        userName +=e.key.toUpperCase();
        document.querySelector('.userlogininput').innerHTML = userName;
    }else{
        console.log(e.key);
    }
}


    document.getElementById("h1").onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h1").dataset.hero);
        seciliHeroIcon();
    };

    document.getElementById("h2").onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h2").dataset.hero);
        seciliHeroIcon();
        
    };

    document.getElementById("h3").onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h3").dataset.hero);
        seciliHeroIcon();
    };

    document.getElementById("h4").onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h4").dataset.hero);
        seciliHeroIcon();
    };



    function seciliHeroIcon(){
        console.log(secildi);
        document.getElementById("h"+secildi2).style.boxShadow = "0px 0px 0px 0px white";
        document.getElementById("h"+secildi).style.boxShadow = "1px 0px 10px 1px red";
    }

    document.querySelector('.userstartbtn').onclick = function(){
        if(userName.length >=3 && secildi != 0){

            if(userName == "ELSHAD"){
                alert("Xos gelmisiniz " +userName +" muellim");
            }else{
                alert("Xos gelmisiniz " +userName);
            }

            
            document.querySelector('.startcont').style.display = "none";
            anaSehifeStart();
        }else{
            if(userName.length < 3){
                alert("IStifadeci adi minimum 3 simvol olmalidir");
            }
            else if(secildi === 0){
                alert("Select your hero");
            }
        }
    }

function anaSehifeStart(){
    document.querySelector('.solUserName').innerHTML = userName;
    console.log(secildi);
    switch(secildi){
        case 1:
            document.querySelector('.homePageImage').setAttribute('src', '../images/hero1.jpg');
            document.querySelector('.yourHeroIcon').setAttribute('src', '../images/hero1.jpg');
        break;
        case 2:
            document.querySelector('.homePageImage').setAttribute('src', '../images/hero2.jpg');
            document.querySelector('.yourHeroIcon').setAttribute('src', '../images/hero2.jpg');
        break;
        case 3:
            document.querySelector('.homePageImage').setAttribute('src', '../images/hero3.png');
            document.querySelector('.yourHeroIcon').setAttribute('src', '../images/hero3.png');
        break;
        case 4:
            document.querySelector('.homePageImage').setAttribute('src', '../images/hero 4.jpg');
            document.querySelector('.yourHeroIcon').setAttribute('src', '../images/hero 4.jpg');
        break;
    }
    
}



var a = 0;
var att = document.querySelector('.attack');
var updateattack =0;



document.querySelector('.pause').onclick = function(){
        att.style.animationPlayState = 'paused';
        setTimeout(function() { 
            var c = document.querySelector('.range').getBoundingClientRect().x
            b = document.querySelector('.attack').getBoundingClientRect().x;
            var zz = Math.ceil(b-c);
            if( zz > 200){
                attackScore = 400-zz;
            }else{
                attackScore = zz;
            }
            
            var computerScore = Math.ceil(Math.random() * computerRandom);
            document.querySelector('.scoreUser').innerHTML = attackScore;
            document.querySelector('.scoreComp').innerHTML = computerScore;

            userLife  -= computerScore;
            computerLife -=attackScore;
            

            att.style.animationPlayState = 'running';
            
            if(computerLife < 1 ){
                var x = document.getElementById("trueAudio");
                function playAudio() { 
                x.play(); 
            } 
        playAudio();
                levelUp();
            }
            else if(userLife < 1){
                var x = document.getElementById("falseAudio");
            function playAudio() { 
                x.play(); 
            } 
            playAudio();
                levelLose();
            }
                document.querySelector('.solHealthCount').innerHTML = userLife;
                document.querySelector('.sagHealthCount').innerHTML = computerLife;

                var computerMeter2 = document.querySelector('.sagMeter');
                computerMeter2.setAttribute('max', lvl*1000);
                computerMeter2.setAttribute('value', computerLife);

                var userMeter2 = document.querySelector('.solMeter');
                userMeter2.setAttribute('max', lvl*1000);
                userMeter2.setAttribute('value', userLife);

                
                

         }, 500);
        
    };

    document.querySelector('.start').onclick = function(){
        att.style.animationPlayState = 'running';
        
    }


    function levelUp(){
        
        
        alert("YOU WIN !!!");
        lvl ++;
        document.querySelector('.level').innerHTML = "LEVEL: " +lvl;
        userLife = lvl *1000;
        computerLife = lvl *1000;
                document.querySelector('.scoreUser').innerHTML = "-";
                document.querySelector('.scoreComp').innerHTML = "-";
    }

    function levelLose(){
        
        
        alert("YOU LOSE !!!");
        userLife = lvl *1000;
        computerLife = lvl *1000;
                document.querySelector('.scoreUser').innerHTML = "-";
                document.querySelector('.scoreComp').innerHTML = "-";
    }
