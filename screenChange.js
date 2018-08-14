var mode;
var turn=0;

$(function(){ /*초기 실행*/
    $("#sub_style").hide();
    $("#sub2_style").hide();
    $("#sub3_style").hide();
    $("#sub4_style").hide();
    $("#main_score").hide();/*학점사진 숨기기*/
    $("#advice").hide();/*설명서 숨기기*/
    $("#main_return").hide();/*메인돌아가는버튼숨기기*/
    $("#progress_g").hide();

    $("#user_id").focus(function(){ /*상자박스 클릭시 색변환*/
        $(this).css("background-color", "#cccccc");
    });
    $("#user_id").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
    $("#time_set").focus(function(){ /*상자박스 클릭시 색변환*/
        $(this).css("background-color", "#cccccc");
    });
    $("#time_set").blur(function(){
        $(this).css("background-color", "#ffffff");
    });


    testhide();
    $("#img_alp7").hide();/*아이템 숨겨둠-처음에*/
    $("#img_alp8").hide();
});



$(function(){ /*게임 설명 보여주는 함수*/
    $("#game_exp").click(function(){
        $("#bg_style").hide(1000);
        $("#game_expturn").show();
        $("#sub2_style").show();
    });
});

$(function(){ /* 처음 시작화면으로 돌아가는 함수*/
    $("#game_expturn").click(function(){
        $("#game_expturn").hide();
        $("#sub2_style").hide(1000);
        $("#sub3_style").hide(1000);
        $("#bg_style").show();
    });
});

$(function(){ /*게임화면에서 메인화면으로 돌아가는 함수*/
    $("#main_return").click(function(){
        $("#sub_turn").hide(1000);
        $("#sub1_turn").hide(1000);
        $("#bg_style").show();

        clearInterval(tid);/*처음으로 돌아갈때 진행중인거 멈추기*/
        clearInterval(cib);
        clearInterval(sang);
        clearInterval(zo);
        clear_hawk();
        turn=1;

        if($(":input:radio[name=level]:checked").val()!="hard"){
            $(".jo_photo").hide();
            $("#hard_click").hide();
            $("#progress_g").show();
        }else{
            $(".sang_photo").hide();
            $("#normal_click").hide();
            $("#progress_g").css("left", 450).show();
        }

    });
});



$(function(){/*게임 난이도 선택*/
    $("#game_start").click(function(){
        if(name_id==undefined && SetTime==undefined){ /*시간 입력해야지만 입장가능*/
            alert("아이디, 시간을 입력해 주세요");
            return ;
        }else if(name_id==undefined || name_id==0){
            alert("아이디를 입력해 주세요");
            return;
        }else if(SetTime==undefined || SetTime==0){
            alert("시간을 입력해 주세요");
            return;
        }

        if($(":input:radio[name=level]:checked").val()!="hard"){
            $(function(){ /* 게임화면으로 가는 함수*/
                mode = 0;
                $("#bg_style").hide(1000);
    
                if(turn==1){
                    $("#sub_turn").show(1000);
                    $("#sub1_turn").show(1000);
                }
    
                $("#sub_style").show();
                $("#advice").show();
                $("#main_return").show();
                sone_click();
                tid=setInterval('msg_time()',1000);/*시간초*/
                setTimeout(function(){msg_id()},'1000');/*아이디*/
                setTimeout(function(){$("#main_score").show()}, '3000');/*학점*/
                cib=setInterval('score_cir()',10);
                
            });
        }else{
            $(function(){ /* 게임화면으로 가는 함수*/
                $("#bg_style").hide(1000);
                mode =1;
                if(turn==1){
                    $("#sub_turn").show(1000);
                    $("#sub1_turn").show(1000);
                }
                
                $("#sub3_style").show();
                $("#advice").show();
                $("#main_return").show();
                zone_click();
                tid=setInterval('msg_time()',1000);/*시간초*/
                setTimeout(function(){msg_id()},'1000');/*아이디*/
                setTimeout(function(){$("#main_score").show()}, '3000');/*학점*/
                cib=setInterval('score_cir()',10);
            });
        }
    });
});

$(function(){/*게임 마지막 화면 칠판 이동*/
    $("#showbutton").click(function(){
        $(".grade").css("visibility", 'visible');
        $("#Viewfinal").css("visibility", 'visible');
        $("#Viewgrade").css("visibility", 'visible');
    });
});


$(function(){/*게임아이디와 시간 버튼 클릭시 변경해주는 함수*/
    $("#id_button").click(function(){
        if($('#user_id').val()==undefined || $('#user_id').val()==0){
            alert("아이디를 입력해 주세요");
            return;
        }
        $("#user_id").hide();
        $("#id_button").hide();
        var name_ch=$('#user_id').val()
        var chname = "게임 아이디 : <font color='red'>" + name_ch + "</font>";
        document.all.viewName.innerHTML = chname; 
    });
});

$(function(){
    $("#time_button").click(function(){
        if($('#time_set').val()==undefined || $('#time_set').val()==0){
            alert("시간을 입력해 주세요");
            return;
        }
        $("#time_set").hide();
        $("#time_button").hide();
        var time_ch=$('#time_set').val()
        var chtime = "게임 시간 : <font color='red'>" + time_ch + "</font>";
        document.all.viewgTime.innerHTML = chtime; 
    });
});

$(function() { /*새로고침 */
    $('#game_clear').click(function() {
        location.reload();
    });
});

$(function(){/*처음화면*/
    $("#button1").click(function(){
        location.reload();
    });
});
$(function(){/*게임화면*/
    $("#button2").click(function(){
        $("#img_alp").css("visibility", "hidden");
        $("#img_alp0").css("visibility", "hidden");
        $("#img_alp1").css("visibility", "hidden");
        $("#img_alp2").css("visibility", "hidden");
        $("#img_alp3").css("visibility", "hidden");
        $("#img_alp4").css("visibility", "hidden");
        $("#img_alp5").css("visibility", "hidden");
        $("#img_alp6").css("visibility", "hidden");
        $("#img_alp7").css("visibility", "hidden");
        $("#img_alp8").css("visibility", "hidden");
        
        SetTime = time;
        msg_time();
        new_score = 0;
        nwscore = [];
        hscore = 0; 
        position_bot=window.innerHeight-170;/*현재 위치 변수 , 변수로한거번에 담으면 안됨..*/
        position_bot0=window.innerHeight-170;
        position_bot1=window.innerHeight-170;
        position_bot2=window.innerHeight-170;
        position_bot3=window.innerHeight-170;
        position_bot4=window.innerHeight-170;
        position_bot5=window.innerHeight-170;
        position_bot6=window.innerHeight-170;
        position_bot7=window.innerHeight-170;
        position_bot8=window.innerHeight-170;
        
        $("#Viewfinal").css("visibility", 'hidden');
        $("#Viewgrade").css("visibility", 'hidden');
        if(mode ==0){
        $(function(){ /* 게임화면으로 가는 함수*/
        
            $("#bg_style").hide(1000);

            if(turn==1){
                $("#sub_turn").show(1000);
                $("#sub1_turn").show(1000);
            }
            $("#sub4_style").hide();
            $("#sub_style").show();
            $("#advice").show();
            $("#main_return").show();
            sone_click();
            //clear_hawk();
           
            restart0();
            restart1();
            restart2();
            restart3();
            restart4();
            restart5();
            restart6();
            restart7();
            restart8();
            score_cir();
            tid=setInterval('msg_time()',1000);/*시간초*/
            setTimeout(function(){msg_id()},'1000');/*아이디*/
            setTimeout(function(){$("#main_score").show()
                $("#img_alp").css("visibility", "visible");
                $("#img_alp0").css("visibility", "visible");
                $("#img_alp1").css("visibility", "visible");
                $("#img_alp2").css("visibility", "visible");
                $("#img_alp3").css("visibility", "visible");
                $("#img_alp4").css("visibility", "visible");
                $("#img_alp5").css("visibility", "visible");
                $("#img_alp6").css("visibility", "visible");
                $("#img_alp7").css("visibility", "visible");
                $("#img_alp8").css("visibility", "visible");
            }, '3000');/*학점*/
          
          
            cib=setInterval('score_cir()',10);
            
        });
       } else if(mode == 1){
        $(function(){ /* 게임화면으로 가는 함수*/
            $("#bg_style").hide(1000);

            if(turn==1){
                $("#sub_turn").show(1000);
                $("#sub1_turn").show(1000);
            }
            $("#sub4_style").hide();
            $("#sub3_style").show();
            $("#advice").show();
            $("#main_return").show();
            zone_click();
            //clear_hawk();
           
            restart0();
            restart1();
            restart2();
            restart3();
            restart4();
            restart5();
            restart6();
            restart7();
            restart8();
            score_cir();
            tid=setInterval('msg_time()',1000);/*시간초*/
            setTimeout(function(){msg_id()},'1000');/*아이디*/
            setTimeout(function(){$("#main_score").show()
                  $("#img_alp").css("visibility", "visible");
                  $("#img_alp0").css("visibility", "visible");
                  $("#img_alp1").css("visibility", "visible");
                  $("#img_alp2").css("visibility", "visible");
                  $("#img_alp3").css("visibility", "visible");
                  $("#img_alp4").css("visibility", "visible");
                  $("#img_alp5").css("visibility", "visible");
                  $("#img_alp6").css("visibility", "visible");
                  $("#img_alp7").css("visibility", "visible");
                  $("#img_alp8").css("visibility", "visible");
            }, '3000');/*학점*/
           
            cib=setInterval('score_cir()',10);
            
        });
       }
    });
});

