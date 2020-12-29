var score=0;

var digit = document.querySelector('.number');
colorCode();
document.querySelector('#btn-0').addEventListener('click', function(){
    score +=1;
    digit.textContent=score;
    colorCode();
});

document.querySelector('#btn-1').addEventListener('click', function(){
    score -=1;
    digit.textContent=score;
    colorCode();
});

document.querySelector('.reset').addEventListener('click', function(){
    score=0;
    digit.textContent=score;
    digit.style.color="black";
});




function colorCode(){
    if(score===0){
        digit.style.color="black";
    }else if(score>0){
        digit.style.color="green";
    }
    else if(score<0) {
        
        digit.style.color="black";
    }
}