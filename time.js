var tib;
var SetTime;
var name_id;
var time;


$(function(){
	$("#time_button").click(function(){/*시간 버튼 클릭시*/
        SetTime = $('#time_set').val();
        time = SetTime;
    });

    $("#id_button").click(function(){/*아이디 버튼 클릭시*/
        name_id = $('#user_id').val();
     
    });
});

function msg_time() {  
   var msg = "남은 시간: <font color='red'>" + SetTime + "</font> 초.";
   document.all.ViewTimer.innerHTML = msg;      // div 영역에 보여줌       
   SetTime--;               // 1초씩 감소
   if (SetTime < 0) {         // 시간이 종료 되었으면..   
        clearInterval(tid);      // 타이머 해제
        alert("종료");

        bubbleSort();
        totalscore();

        $(function(){ /*게임화면에서 메인화면으로 돌아가는 함수*/
            $("#sub_turn").hide(1000);
            $("#sub1_turn").hide(1000);

            $("#sub4_style").show();

            clearInterval(tid);/*처음으로 돌아갈때 진행중인거 멈추기*/
            clearInterval(cib);
            clearInterval(sang);
            clearInterval(zo);
            clear_hawk();
            turn=1;
        });

   }
}
function msg_id(){
    var gameid = "아이디 : " + name_id + " ";
    document.all.Viewgameid.innerHTML = gameid; 
}
