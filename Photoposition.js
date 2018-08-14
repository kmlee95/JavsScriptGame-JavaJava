/*교수 사진 제어*/
var move_x=10;
var step=10;/*움직임 속도조절*/
/*var autoBt;*/
var sanggwi;
var zosehyung;
var talk1_id;/*상귀교수님 대화*/
var talk2_id;/*조세 교수님 대화*/

var sang;
var zo;

$(function(){
 /*autoBt=document.getElementById("autoBt");*/
    sanggwi=document.getElementById("sanggwi");
    zosehyung=document.getElementById("zosehyung");
    talk1_id=document.getElementById("talk1_id");
    talk2_id=document.getElementById("talk2_id");
});

/*상귀 교수님 움직임*/
function smanual(){
    move_x += step;
    step=(move_x>=400 || move_x<=10)? -step:step;
    sanggwi.style.left=move_x + "px";/*left를 이용하기 위해선 px를 적용시켜줘야함*/
}

function sang_talk(){
   talk1_id.style.display="none";
}

function smoveAuto(){
   sang= setInterval("smanual()",50);/*0.05초 마다 manual함수를 알림*/
}

/*조세형 교수님 움직임*/
function zmanual(){
    move_x += step;
    step=(move_x>=400 || move_x<=10)? -step:step;
    zosehyung.style.left=move_x + "px";/*left를 이용하기 위해선 px를 적용시켜줘야함*/
}

function zose_talk(){
   talk2_id.style.display="none";
}

function zmoveAuto(){
    zo= setInterval("zmanual()",20);/*0.02초 마다 manual함수를 알림*/
}


/*버튼 클릭시 이벤트*/
function sone_click(){
    setTimeout(function(){smoveAuto()}, '3000');
    setTimeout(function(){sang_talk()}, '3000');
    setTimeout(function(){hawk_init()}, '3000');/*학점*/
    
    (function itemloop() {
        var rand = Math.round(Math.random() * 10000)+8000;
        setTimeout(function() {
                itemtime();
                itemloop();  
        }, rand);
    }());
}

function zone_click(){
    setTimeout(function(){zmoveAuto()}, '3000');
    setTimeout(function(){zose_talk()}, '3000');
    setTimeout(function(){hawk_init()}, '3000');/*학점*/

    (function itemloop() {
        var rand = Math.round(Math.random() * 10000)+8000;
        setTimeout(function() {
                itemtime();
                itemloop();  
        }, rand);
    }());
    
}


