var windowsanta = window.innerWidth + 500;
var windowbackground = window.innerWidth +600;

function setCss(){
    $('#backgroundimg').css("right", windowbackground-(2*windowbackground));
    return showApp();
}

function showApp(){
    $('#buttonstart').remove();
    $('#app').addClass('app');
    return moveLeft();
}

//Di chuyển đối tượng từ phải sang trái
function moveLeft(){
    $('#imgsantaclaus').animate({left: "-="+windowsanta}, 15000)
    $('#backgroundimg').animate({left: "-="+windowbackground}, 15000, showGift)
}

function showGift(){
    $('#snowmanimg').addClass('snowmanimg');
    setTimeout(()=>{
        $('#textalert').addClass('textalert');
    },3000)
}

var i1= 0;
var i2= 0;
var i3= 0;
var i4= 0;
var text1 = 'Chúc em niềm vui để em ngọt ngào!';
var text2 = 'Chúc em nụ cười để em rạng rỡ!';
var text3 = 'Chúc em nhiều điều tốt lành nhất!';
var text4 = 'Em mãi là người xinh đẹp, hạnh phúc nhất!';
var tocDo = 50;
function wish1write() {
    if (i1 < text1.length) {
    document.getElementById("wish1").innerHTML += text1.charAt(i1);
    i1++;
    setTimeout(wish1write, tocDo );
    }else{
        wish2write();
    }
}
function wish2write() {
    if (i2 < text2.length) {
    document.getElementById("wish2").innerHTML += text2.charAt(i2);
    i2++;
    setTimeout(wish2write, tocDo );
    }else{
        wish3write();
    }
}
function wish3write() {
    if (i3 < text3.length) {
    document.getElementById("wish3").innerHTML += text3.charAt(i3);
    i3++;
    setTimeout(wish3write, tocDo );
    }
    else{
        wish4write();
    }
}
function wish4write() {
    if (i4 < text4.length) {
    document.getElementById("wish4").innerHTML += text4.charAt(i4);
    i4++;
    setTimeout(wish4write, tocDo );
    }else{
        shownameend();
    }
}

function shownameend(){
    $('#textnamewish').addClass('shownameend');
}


$(document).ready(function() {
    $("#btnstart").click(function() {
        setCss();
        const audio = new Audio("./asset/audio.mp3");
        audio.loop = true;
        audio.play();
    })

    $("#snowmanimg").click(function() {
        wish1write();
        $('#textalert').addClass('forcehidden');
    });
});

