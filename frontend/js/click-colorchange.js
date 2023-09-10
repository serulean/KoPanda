/*
원본 출처 : https://ts2ree.tistory.com/5
수정함 22.12.4
*/

var currentMenu;
var wrongLinks = document.querySelectorAll('.quiz-wrong');
var correctLinks = document.querySelectorAll('.quiz-correct'); 

// 틀린 답 골랐을 때 함수
function clickWrongHandler(){
    if (currentMenu){
        currentMenu.classList.remove('quiz-wrong-active');
        currentMenu.classList.remove('quiz-correct-active');
    }   
    this.classList.add('quiz-wrong-active');
    currentMenu = this;
}

// 정답 골랐을 때 함수
function clickCorrectHandler(){
    if (currentMenu){
        currentMenu.classList.remove('quiz-wrong-active');
        currentMenu.classList.remove('quiz-correct-active');
    }   
    this.classList.add('quiz-correct-active');
    currentMenu = this;
}


for (var i = 0; i < wrongLinks.length; i++){
    wrongLinks[i].addEventListener('click', clickWrongHandler);
}

for (var i = 0; i < correctLinks.length; i++){
    correctLinks[i].addEventListener('click', clickCorrectHandler);
}


// 꽃가루 날리다, 오답 고르면 멈춤

$(document).ready(function(){

    function reAction(){
        $("#stopButton").trigger("click");
    }

    $(".quiz-wrong").on('click', function(){
        reAction();
    }); 
    
});