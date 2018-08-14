var score=[];
var nwscore=[];
nwscore = score;

function swap(score, i, j) {
    var t = score[i];
    score[i] = score[j];
    score[j] = t;
}
              
function bubbleSort() {
    var i, j;
    for (i = 0; i < score.length; i++) {
        for (j = 0; j < score.length - i; j++) {
            if (score[j] > score[j+1]) {
                swap(score, j, j+1);
            }
        }
    }
    return score;
}


function totalscore(){ 
    var total=0;
    var final;
    var grade;
    
    for(var i=0;i<score.length;i++){
        total+=score[i]
    }
    
    final = total/score.length;
   
    
    if(final>= 4.5){
    grade="A+";
    } else if(final>=4.0){
        grade="A";
    }else if(final>=3.5){
    grade="B+";
    }else if(final>=3.0){
        grade="B";
    }else if(final>=2.5){
        grade="C+";
    }else if(final>=2.0){
        grade="C";
    }else if(final>=1.5){
        grade="D+";
    }else if(final>=1.0){
        grade="D";
    }else{
        grade ="F";
    }
    
    document.all.Viewfinal.innerHTML = final.toFixed(2);
    document.all.Viewgrade.innerHTML = grade;
}