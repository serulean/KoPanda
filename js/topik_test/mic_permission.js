/* <여기서부터는 마이크 권한 단순 취득용 스크립트 코드> */

function getLocalStream() {
    // audio 엘리먼트 취득
    const $audio = document.querySelector("audio");

    // 마이크 MediaStream 취득(audio를 true로 설정)
    navigator.mediaDevices
        .getUserMedia({audio: true})
        .then((mediaStream)=>{
    // Promise이므로 then으로 받아서 사용(async/await를 사용해도 된다.)

    // // 마이크에서 입력받은 MediaStream으로 오디오 재생
    // $audio.srcObject = mediaStream;
    // $audio.onloadedmetadata = (event)=>{
    //     $audio.play();
    // }
})

.catch((err)=>{
    console.error(`에러 발생: ${err}`);
});
}

getLocalStream();
