var userName = "";
var selectHero = "";
var secildi = 0;
var secildi2=0;
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
    document.getElementById("h"+1).onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h"+1).dataset.hero);
        seciliHeroIcon(secildi);
    };

    document.getElementById("h2").onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h2").dataset.hero);
        seciliHeroIcon(secildi);
    };

    document.getElementById("h3").onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h3").dataset.hero);
        seciliHeroIcon(secildi);
    };

    document.getElementById("h4").onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h4").dataset.hero);
        seciliHeroIcon(secildi);
    };

    function seciliHeroIcon(z){
        document.getElementById("h"+z).style.boxShadow = "1px 0px 10px 1px red";
        document.getElementById("h"+secildi2).style.boxShadow = "0px 0px 0px 0px white";
    }

    document.querySelector('.userstartbtn').onclick = function(){
        if(userName.length >=3 && secildi != 0){
            alert("Hersey duzdu");
            document.querySelector('.startcont').style.display = "none";
        }else{
            if(userName < 3){
                alert("IStifadeci adi minimum 3 simvol olmalidir");
            }else if(secildi === 0){
                alert("Select your hero");
            }
        }
    }