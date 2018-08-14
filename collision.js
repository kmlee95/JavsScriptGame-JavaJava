/*부딪혔을때 이벤트 구현*/
var hscore=0;
var num_score=0;
var cib;
var h_b=window.innerHeight-555;

function score_cir() {  
   if(h_b!=window.innerHeight-555){//창 높이 재설정(창크기변화고려)
       h_b=window.innerHeight-555;
   }
   num_score = "점수 : <font color='blue'>" + hscore + " ";
   document.all.ViewScore.innerHTML = num_score;      // div 영역에 보여줌    

   if(position_bot<=h_b && position_bot>=h_b-10){/*B*/
        if(left_px+120<=position_left + 25 && left_px+133>=position_left -25){
            position_bot=30;
            hscore+=4.5;
            score.push(4.5);
            return ;
        }
    }
    if(position_bot0<=h_b && position_bot0>=h_b-10){/*A*/
        //alert(position_bot0);
        //alert(position_left0);
       // alert(left_px+120);
        if(left_px+120<=position_left0 + 25 && left_px+133>=position_left0 -25){
            position_bot0=30;
            hscore+=4.0;
            score.push(4);
            return ;
            
        }
    }
    if(position_bot1<=h_b && position_bot1>=h_b-10){/*B*/
        if(left_px+120<=position_left1 + 25 && left_px+133>=position_left1 -25){
            position_bot1=30;
            hscore+=3.0;
            score.push(3);
            return ;
            
        }
    }
    if(position_bot2<=h_b && position_bot2>=h_b-10){/*C*/
        if(left_px+120<=position_left2 + 25 && left_px+133>=position_left2 -25){
            position_bot2=30;
            hscore+=2.0;
            score.push(2);
            return ;
            
        }
    }
    if(position_bot3<=h_b && position_bot3>=h_b-10){/*D*/
        if(left_px+120<=position_left3 + 25 && left_px+133>=position_left3 -25){
            position_bot3=30;
            hscore+=1;
            score.push(1);
            return ;
            
        }
    }
    if(position_bot4<=h_b && position_bot4>=h_b-10){/*B+*/
        if(left_px+120<=position_left4 + 25 && left_px+133>=position_left4 -25){
            position_bot4=30;
            hscore+=3.5;
            score.push(3.5);
            return ;
            
        }
    }
    if(position_bot5<=h_b && position_bot5>=h_b-10){/*C+*/
        if(left_px+120<=position_left5 + 25 && left_px+133>=position_left5 -25){
            position_bot5=30;
            hscore+=2.5;
            score.push(2.5);
            return ;
            
        }
    }

    if(position_bot6<=h_b && position_bot6>=h_b-10){/*F*/
        if(left_px+120<=position_left6 + 25 && left_px+133>=position_left6 -25){
            position_bot6=30;
            hscore+=0;
            score.push(0);
            return ;
            
        }
    }
    if(position_bot8<=h_b && position_bot8>=h_b-10){/*초기화 아이템*/
        if(left_px+120<=position_left8 + 25 && left_px+133>=position_left8 -25){
            position_bot8=30;
            hscore=0;
            for(var i = score.length; i > 0; i--){
                score.pop();
            }
            return ;
            
        }
    }

    if(position_bot7<=h_b && position_bot7>=h_b-10){/*아이템*/
        if(left_px+120<=position_left7 + 25 && left_px+133>=position_left7 -25){
    
            position_bot7=30;
            hawkhide();//학점 숨기기
            itemclear();//변환된 학점 위치 초기화
            $("#test_alp0").css("left", test0_left + "px");
            $("#test_alp1").css("left", test1_left + "px");//css만들어두기
            $("#test_alp2").css("left", test2_left + "px");
            $("#test_alp3").css("left", test3_left + "px");
            $("#test_alp4").css("left", test4_left + "px");
            $("#test_alp5").css("left", test5_left + "px");
            $("#test_alp6").css("left", test6_left + "px");

            $("#test_alp0").show(1000);
            $("#test_alp1").show(1000);
            $("#test_alp2").show(1000);
            $("#test_alp3").show(1000);
            $("#test_alp4").show(1000);
            $("#test_alp5").show(1000);
            $("#test_alp6").show(1000);

            timeitem0=setInterval(chimg0, test0_speed);
            timeitem1=setInterval(chimg1, test1_speed);
            timeitem2=setInterval(chimg2, test2_speed);
            timeitem3=setInterval(chimg3, test3_speed);
            timeitem4=setInterval(chimg4, test4_speed);
            timeitem5=setInterval(chimg5, test5_speed);
            timeitem6=setInterval(chimg6, test6_speed);
            return ;
        }
    }

    if(test0_bot<=h_b && test0_bot>=h_b-10){/*아이템*/
        if(left_px+120<=test0_left + 25 && left_px+133>=test0_left -25){
            test0_bot=30;
            hscore+=4.5
            score.push(4.5);
            return;
        }
    }
    if(test1_bot<=h_b && test1_bot>=h_b-10){/*아이템*/
        if(left_px+120<=test1_left + 25 && left_px+133>=test1_left -25){
            test1_bot=30;
            hscore+=4.5
            score.push(4.5);
            return;
        }
    }
    if(test2_bot<=h_b && test2_bot>=h_b-10){/*아이템*/
        if(left_px+120<=test2_left + 25 && left_px+133>=test2_left -25){
            test2_bot=30;
            hscore+=4.5
            score.push(4.5);
            return;
        }
    }
    if(test3_bot<=h_b && test3_bot>=h_b-10){/*아이템*/
        if(left_px+120<=test3_left + 25 && left_px+133>=test3_left -25){
            test3_bot=30;
            hscore+=4.5
            score.push(4.5);
            return;
        }
    }
    if(test4_bot<=h_b && test4_bot>=h_b-10){/*아이템*/
        if(left_px+120<=test4_left + 25 && left_px+133>=test4_left -25){
            test4_bot=30;
            hscore+=4.5
            score.push(4.5);
            return;
        }
    }
    if(test5_bot<=h_b && test5_bot>=h_b-10){/*아이템*/
        if(left_px+120<=test5_left + 25 && left_px+133>=test5_left -25){
            test5_bot=30;
            hscore+=4.5
            score.push(4.5);
            return;
        }
    }
    if(test6_bot<=h_b && test6_bot>=h_b-10){/*아이템*/
        if(left_px+120<=test6_left + 25 && left_px+133>=test6_left -25){
            test6_bot=30;
            hscore+=4.5
            score.push(4.5);
            return;
        }
    }
    

}