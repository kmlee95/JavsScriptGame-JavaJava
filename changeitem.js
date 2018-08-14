var test0_bot;
var test1_bot;
var test2_bot;
var test3_bot;
var test4_bot;
var test5_bot;
var test6_bot;

var test0_left;
var test1_left;
var test2_left;
var test3_left;
var test4_left;
var test5_left;
var test6_left;

var test0_speed;
var test1_speed;
var test2_speed;
var test3_speed;
var test4_speed;
var test5_speed;
var test6_speed;

function itemclear(){
    test0_bot=position_bot0;
    test1_bot=position_bot1;
    test2_bot=position_bot2;
    test3_bot=position_bot3;
    test4_bot=position_bot4;
    test5_bot=position_bot5;
    test6_bot=position_bot6;

    test0_left=position_left0;
    test1_left=position_left1;
    test2_left=position_left2;
    test3_left=position_left3;
    test4_left=position_left4;
    test5_left=position_left5;
    test6_left=position_left6;


    test0_speed=speed0;
    test1_speed=speed1;
    test2_speed=speed2;
    test3_speed=speed3;
    test4_speed=speed4;
    test5_speed=speed5;
    test6_speed=speed6;
    
    clearInterval(timeID0);
    clearInterval(timeID1);
    clearInterval(timeID2);
    clearInterval(timeID3);
    clearInterval(timeID4);
    clearInterval(timeID5);
    clearInterval(timeID6);
}

function itemtime(){/*아이템 떨어지는거 진행- 건들지말자*/
    $("#img_alp7").show();
    timeID7=setInterval(restart7,speed7);
}

function hawkhide(){
    $("#img_alp0").hide();
    $("#img_alp1").hide();
    $("#img_alp2").hide();
    $("#img_alp3").hide();
    $("#img_alp4").hide();
    $("#img_alp5").hide();
    $("#img_alp6").hide();
}
function testhide(){
    $("#test_alp0").hide();
    $("#test_alp1").hide();
    $("#test_alp2").hide();
    $("#test_alp3").hide();
    $("#test_alp4").hide();
    $("#test_alp5").hide();
    $("#test_alp6").hide();
}
function chimg0(){
    moveNot=1;
    if(test0_bot<=window.innerHeight-580){
        $("#test_alp0").hide();
        position_bot0=window.innerHeight-170;
        position_left0=Math.random()*470;
        clearInterval(timeitem0);
        timeID0=setInterval(restart0,speed0);
    }
    test0_bot-=5*moveNot;
    $("#test_alp0").css("bottom", test0_bot + "px");
}

function chimg1(){
    moveNot=1;
    if(test1_bot<=window.innerHeight-580){
        $("#test_alp1").hide();
        position_bot1=window.innerHeight-170;
        position_left1=Math.random()*470;
        clearInterval(timeitem1);
        timeID1=setInterval(restart1,speed1);
    }
    test1_bot-=5*moveNot;
    $("#test_alp1").css("bottom", test1_bot + "px");
}

function chimg2(){
    moveNot=1;
    if(test2_bot<=window.innerHeight-580){
        $("#test_alp2").hide();
        position_bot2=window.innerHeight-170;
        position_left2=Math.random()*470;
        clearInterval(timeitem2);
        timeID2=setInterval(restart2,speed2);
    }
    test2_bot-=5*moveNot;
    $("#test_alp2").css("bottom", test2_bot + "px");
}

function chimg3(){
    moveNot=1;
    if(test3_bot<=window.innerHeight-580){
        $("#test_alp3").hide();
        position_bot3=window.innerHeight-170;
        position_left3=Math.random()*470;
        clearInterval(timeitem3);
        timeID3=setInterval(restart3,speed3);
    }
    test3_bot-=5*moveNot;
    $("#test_alp3").css("bottom", test3_bot + "px");
}
function chimg4(){
    moveNot=1;
    if(test4_bot<=window.innerHeight-580){
        $("#test_alp4").hide();
        position_bot4=window.innerHeight-170;
        position_left4=Math.random()*470;
        clearInterval(timeitem4);
        timeID4=setInterval(restart4,speed4);
    }
    test4_bot-=5*moveNot;
    $("#test_alp4").css("bottom", test4_bot + "px");
}
function chimg5(){
    moveNot=1;
    if(test5_bot<=window.innerHeight-580){
        $("#test_alp5").hide();
        position_bot5=window.innerHeight-170;
        position_left5=Math.random()*470;
        clearInterval(timeitem5);
        timeID5=setInterval(restart5,speed5);
    }
    test5_bot-=5*moveNot;
    $("#test_alp5").css("bottom", test5_bot + "px");
}
function chimg6(){
    moveNot=1;
    if(test6_bot<=window.innerHeight-580){
        $("#test_alp6").hide();
        position_bot6=window.innerHeight-170;
        position_left6=Math.random()*470;
        clearInterval(timeitem6);
        timeID6=setInterval(restart6,speed6);
    }
    test6_bot-=5*moveNot;
    $("#test_alp6").css("bottom", test6_bot + "px");
}