/*
원본 출처 : https://kmkblog.tistory.com/292?category=1065511#google_vignette
수정함 22.12.4
*/


$(document).ready(function(){

    function reAction(){
        $("#startButton").trigger("click");
        setTimeout(function(){
            $("#stopButton").trigger("click");
        }, 3500);
    }
    
    // 답을 눌렀을 때만 반응하도록
    $(".quiz-correct").on('click', function(){
        reAction();
    }); 
    
});
