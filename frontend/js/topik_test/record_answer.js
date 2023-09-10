const button = document.querySelector('button');
const recorder = new MicRecorder({
    bitRate: 128
});

startRecording()

function startRecording() {
    recorder.start().then(() => {
    }).catch((e) => {
        console.error(e);
    });
    setTimeout(stopRecording, 30000);
}

function stopRecording() {
    recorder.stop().getMp3().then(([buffer, blob]) => {
        console.log(buffer, blob);
        const file = new File(buffer, 'answer.mp3', {
        type: blob.type,
        lastModified: Date.now()
        });
    })
}