/*키보드 제어*/
var left_px=0;
var move_d=2;/*속도조절*/
var savex_key;
var movex_time;
var x_on=0;

document.onkeyup=key_clear;
document.onkeydown=onkey_press;/*key.code 번호 확인*/


function onkey_press(){
    if(event.keyCode==37 || event.keyCode==39){
        savex_key=event.keyCode;
        if(x_on!=1){
            x_on=1;
            movex_time=setInterval(keyx_move,1);
        }
    }
}
function key_clear(){
    if(event.keyCode==37 || event.keyCode==39){
        clearInterval(movex_time);
        x_on=0;
    }
}
function keyx_move() {
    if(savex_key==37){
        left_px=left_px-move_d;
        document.styleSheets[0].rules[0].style.marginLeft=left_px+'px';
        if(left_px<-90){
            left_px=-90;
        }	
    }
    else if(savex_key==39){
        left_px=left_px+move_d;
        document.styleSheets[0].rules[0].style.marginLeft=left_px+'px';
        if(left_px>340){
            left_px=340;
        }
    }
}

/*$(function(){
	var keypress = {}, // 어떤 키가 눌려 있는지 저장
	p2x = 0, p2y = 0, speed = 5, $p2 = $('#people1');
	setInterval(function(){ // 주기적으로 검사
		if(keypress['87']) p2y -= speed; // up - w
		if(keypress['83']) p2y += speed; // down - s
		if(keypress['65']) p2x -= speed; // left - a
		if(keypress['68']) p2x += speed; // right - d
 
		$p2.css({top: p2y, left: p2x});
	}, 10); // 매 0.01 초마다 실행
 
	$(document).keydown(function(e){ // 어떤 키가 눌렸는지 저장 
		keypress[e.which.toString()] = true;
	});
	$(document).keyup(function(e){ // 눌렸던 키를 해제
		keypress[e.which.toString()] = false;
	});
});*/