let playing = false;
let score;
let action;
let timeremaining;
let correctanswer;

//if we click start/reset button
document.getElementById("startreset").onclick=function(){
if (playing== true){
location.reload();

}
else{//if we are not playing
    playing=true;
score=0;
document.getElementById("scorevalue").innerHTML=score;
show("timeremaining");
timeremaining=60;
document.getElementById("timeremaningvalue").innerHTML=timeremaining;
hide("gameOver");
document.getElementById("startreset").innerHTML="reset game";

startCountdown();
generatequestionandanswer();
}
}

 
document.getElementById("box1").onclick=function(){
    if(playing==true){
        if(this.innerHTML==correctanswer){
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generatequestionandanswer();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000)
        }
    }
}

for(let i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
        if(playing==true){
            if(this.innerHTML==correctanswer){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000);
                generatequestionandanswer();
            }
            else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000)
            }
        }
    }
}




function startCountdown(){
action=setInterval(function(){
timeremaining -=1;
document.getElementById("timeremaningvalue").innerHTML=timeremaining;
if (timeremaining==0){
    stopcountdown();
    show("gameOver");
    document.getElementById("gameOver").innerHTML="<P>game over!</P> <p>your score is " + score+   "</p>";
    hide("timeremaining");
    hide("correct");
    hide("wrong");
    palaying=false;
    document.getElementById("startreset").innerHTML="start game";
}

}, 1000);
}


function stopcountdown(){
    clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display="none";
}
function show(Id){
    document.getElementById(Id).style.display="block";
}

function generatequestionandanswer(){
let x=1+Math.round(9*Math.random());
let y=1+Math.round(9*Math.random());
correctanswer=x*y;
document.getElementById("question").innerHTML=x + "x" + y;

let correctposition=1+Math.round(3*Math.random());
document.getElementById("box"+correctposition).innerHTML=correctanswer;//fill one box with the correct answer
let answers=[correctanswer]
for(i=1;i<5;i++){
    if(i!== correctposition){
     let wronganswer;
do{
    wronganswer=(1+Math.round(9*Math.random())) * (1+Math.round(9*Math.random()));

}
while(answers.indexOf(wronganswer)>-1)
     
     
     wronganswer=(1+Math.round(9*Math.random())) * (1+Math.round(9*Math.random()));
     document.getElementById("box"+i).innerHTML=wronganswer;
     answers.push(wronganswer);
    }
}



}