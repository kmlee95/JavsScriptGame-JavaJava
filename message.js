

/*떨어지는 메세지 이벤트 구현*/
var aastart=1;
var astart=1;
var bstart=1;
var cstart=1;
var dstart=1;
var bbstart=1;
var ccstart=1;
var fstart=1;
var item2start =1;
var itemstart=1;


var fall_pst=0;/*떨어지는 메세지 초기위치*/
var moveNot=0;/*움직이지 않는 상태*/
//현재위치높이

var speeda=20;
var speed0=10;/*떨어지는 속도조절*/
var speed1=20;
var speed2=40;
var speed3=50;
var speed4=60;
var speed5=20;
var speed6=10;
var speed7=20;
var speed8=40;

var position_bot=window.innerHeight-170;/*현재 위치 변수 , 변수로한거번에 담으면 안됨..*/
var position_bot0=window.innerHeight-170;
var position_bot1=window.innerHeight-170;
var position_bot2=window.innerHeight-170;
var position_bot3=window.innerHeight-170;
var position_bot4=window.innerHeight-170;
var position_bot5=window.innerHeight-170;
var position_bot6=window.innerHeight-170;
var position_bot7=window.innerHeight-170;
var position_bot8=window.innerHeight-170;

var position_left=move_x;
var position_left0=Math.random()*470;/*현재위치변수 초기화(left)*/
var position_left1=Math.random()*470;
var position_left2=Math.random()*470;
var position_left3=Math.random()*470;
var position_left4=Math.random()*470;
var position_left5=Math.random()*470;
var position_left6=Math.random()*470;
var position_left7=Math.random()*470;
var position_left8=Math.random()*470;

var timeID=0;
var timeID0=0;/*종료시 clearinterval(time)해주기*/
var timeID1=0;
var timeID2=0;
var timeID3=0;
var timeID4=0;
var timeID5=0;
var timeID6=0;
var timeID7=0;
var timeID8=0;

var timeitem0=0;
var timeitem1=0;
var timeitem2=0;
var timeitem3=0;
var timeitem4=0;
var timeitem5=0;
var timeitem6=0;
var timeitem7=0;
var timeitem8=0;

function clear_hawk(){/*학점 전체 멈추는 함수*/
    clearInterval(timeID);
    clearInterval(timeID0);
    clearInterval(timeID1);
    clearInterval(timeID2);
    clearInterval(timeID3);
    clearInterval(timeID4);
    clearInterval(timeID5);
    clearInterval(timeID6);
    clearInterval(timeID7);
    clearInterval(timeID8);
}

function hawk_init(){
    timeID=setInterval(restart,speeda);/*일단 예시로 학점떨어지는거 적어둠*/
    timeID0=setInterval(restart0,speed0);
    timeID1=setInterval(restart1,speed1);
    timeID2=setInterval(restart2,speed2);
    timeID3=setInterval(restart3,speed3);
    timeID4=setInterval(restart4,speed4);
    timeID5=setInterval(restart5,speed5);
    timeID6=setInterval(restart6,speed6);
    timeID8=setInterval(restart8,speed8);
}
function restart(){/*A+*/
    position_left=move_x;
    if(aastart==1){
        position_bot=window.innerHeight-170;
    }
    $("#img_alp").show();
    $("#img_alp").css("left", position_left +"px");
    speeda = Math.floor(Math.random()*30)+15;
    if(position_bot>=window.innerHeight-170){
        aastart=0;
        moveNot=1;
    }else if(position_bot<=window.innerHeight-580){
        $("#img_alp").hide();
        position_bot=window.innerHeight-170;
        position_left=move_x;

        clearInterval(timeID);
        timeID=setInterval(restart, speeda);
    }

    position_bot-=5*moveNot;
    $("#img_alp").css("bottom", position_bot + "px");
}

function restart0(){/*A*/
    if(astart==1){
        position_bot0=window.innerHeight-170;
    }
    $("#img_alp0").show();
    $("#img_alp0").css("left", position_left0 + "px");/*랜덤위치에서 떨어지게*/
    speed0 = Math.floor(Math.random()*30)+15;
    if(position_bot0>=window.innerHeight-170){
        astart=0;
        moveNot=1;
    }else if(position_bot0<=window.innerHeight-580){
        $("#img_alp0").hide();
        position_bot0=window.innerHeight-170;
        position_left0=Math.random()*470;
        
        clearInterval(timeID0);
        timeID0=setInterval(restart0, speed0);   
    }
    
    position_bot0-=5*moveNot;
    $("#img_alp0").css("bottom", position_bot0 + "px");
}

function restart1(){/*B*/
    if(bstart==1){
        position_bot1=window.innerHeight-170;
    }
    $("#img_alp1").show();
    $("#img_alp1").css("left", position_left1 + "px");/*랜덤위치에서 떨어지게*/
    speed1 = Math.floor(Math.random()*30)+15;
    if(position_bot1==window.innerHeight-170){
        bstart=0;
        moveNot=1;
    }else if(position_bot1<=window.innerHeight-580){
        $("#img_alp1").hide();
        position_bot1=window.innerHeight-170;
        position_left1=Math.random()*470;
        
        clearInterval(timeID1);
        timeID1=setInterval(restart1, speed1);   
    }
    position_bot1-=5*moveNot;
    $("#img_alp1").css("bottom", position_bot1 + "px");
}

function restart2(){/*C*/
    if(cstart==1){
        position_bot2=window.innerHeight-170;
    }
    $("#img_alp2").show();
    $("#img_alp2").css("left", position_left2 + "px");/*랜덤위치에서 떨어지게*/
    speed2 = Math.floor(Math.random()*30)+15;
    if(position_bot2==window.innerHeight-170){
        cstart=0;
        moveNot=1;
    }else if(position_bot2<=window.innerHeight-580){
        $("#img_alp2").hide();
        position_bot2=window.innerHeight-170;
        position_left2=Math.random()*470;
        
        clearInterval(timeID2);
        timeID2=setInterval(restart2, speed2);   
    }
    position_bot2-=5*moveNot;
    $("#img_alp2").css("bottom", position_bot2 + "px");
}

function restart3(){/*D*/
    if(dstart==1){
        position_bot3=window.innerHeight-170;
    }
    $("#img_alp3").show();
    $("#img_alp3").css("left", position_left3 + "px");/*랜덤위치에서 떨어지게*/
    speed3 = Math.floor(Math.random()*30)+15;
    if(position_bot3==window.innerHeight-170){
        dstart=0;
        moveNot=1;
    }else if(position_bot3<=window.innerHeight-580){
        $("#img_alp3").hide();
        position_bot3=window.innerHeight-170;
        position_left3=Math.random()*470;
        
        clearInterval(timeID3);
        timeID3=setInterval(restart3, speed3);   
    }
    position_bot3-=5*moveNot;
    $("#img_alp3").css("bottom", position_bot3 + "px");
}

function restart4(){/*B+*/
    if(bbstart==1){
        position_bot4=window.innerHeight-170;
    }
    $("#img_alp4").show();
    $("#img_alp4").css("left", position_left4 + "px");/*랜덤위치에서 떨어지게*/
    speed4 = Math.floor(Math.random()*30)+15;
    if(position_bot4==window.innerHeight-170){
        bbstart=0;
        moveNot=1;
    }else if(position_bot4<=window.innerHeight-580){
        $("#img_alp4").hide();
        position_bot4=window.innerHeight-170;
        position_left4=Math.random()*470;
        
        clearInterval(timeID4);
        timeID4=setInterval(restart4, speed4);   
    }
    position_bot4-=5*moveNot;
    $("#img_alp4").css("bottom", position_bot4 + "px");
}

function restart5(){/*C+*/
    if(ccstart==1){
        position_bot5=window.innerHeight-170;
    }
    $("#img_alp5").show();
    $("#img_alp5").css("left", position_left5 + "px");/*랜덤위치에서 떨어지게*/
    speed5 = Math.floor(Math.random()*30)+15;
    if(position_bot5==window.innerHeight-170){
        ccstart=0;
        moveNot=1;
    }else if(position_bot5<=window.innerHeight-580){
        $("#img_alp5").hide();
        position_bot5=window.innerHeight-170;
        position_left5=Math.random()*470;
        
        clearInterval(timeID5);
        timeID5=setInterval(restart5, speed5);   
    }
    position_bot5-=5*moveNot;
    $("#img_alp5").css("bottom", position_bot5 + "px");
}

function restart6(){/*F*/
    if(fstart==1){
        position_bot6=window.innerHeight-170;
    }
    $("#img_alp6").show();
    $("#img_alp6").css("left", position_left6 + "px");/*랜덤위치에서 떨어지게*/
    speed6 = Math.floor(Math.random()*30)+15;
    if(position_bot6==window.innerHeight-170){
        fstart=0;
        moveNot=1;
    }else if(position_bot6<=window.innerHeight-580){
        $("#img_alp6").hide();
        position_bot6=window.innerHeight-170;
        position_left6=Math.random()*470;
        
        clearInterval(timeID6);
        timeID6=setInterval(restart6, speed6);   
    }
    position_bot6-=5*moveNot;
    $("#img_alp6").css("bottom", position_bot6 + "px");
}

function restart7(){/*item*/
    if(itemstart==1){
        position_bot7=window.innerHeight-170;
    }
    $("#img_alp7").show();
    $("#img_alp7").css("left", position_left7 + "px");/*랜덤위치에서 떨어지게*/
    speed7 = Math.floor(Math.random()*30)+15;
    if(position_bot7==window.innerHeight-170){
        itemstart=0;
        moveNot=1;
    }else if(position_bot7<=window.innerHeight-580){
        $("#img_alp7").hide();
        position_bot7=window.innerHeight-170;
        position_left7=Math.random()*470; 
        
        clearInterval(timeID7);
        //timeID7=setInterval(restart7, speed7); /*처음 한번만호출.. */ 
    }
    position_bot7-=5*moveNot;
    $("#img_alp7").css("bottom", position_bot7 + "px");
}
function restart8(){/*item2*/
    if(item2start==1){
        position_bot8=window.innerHeight-170;
    }
    $("#img_alp8").show();
    $("#img_alp8").css("left", position_left8 + "px");/*랜덤위치에서 떨어지게*/
    speed8 = Math.floor(Math.random()*30)+15;
    if(position_bot8==window.innerHeight-170){
        item2start=0;
        moveNot=1;
    }else if(position_bot8<=window.innerHeight-580){
        $("#img_alp8").hide();
        position_bot8=window.innerHeight-170;
        position_left8=Math.random()*470;
        
        clearInterval(timeID8);
        timeID8=setInterval(restart8, speed8);   
    }
    position_bot8-=5*moveNot;
    $("#img_alp8").css("bottom", position_bot8 + "px");
}