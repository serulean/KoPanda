// 출처 : https://moonsiri.tistory.com/71
// 수정 : 22.12.09


$('#create_pdf').click(function() {

    //pdf_wrap을 canvas객체로 변환
    html2canvas($('#gradecard_pdf')[0]).then(function(canvas) {
        var doc = new jsPDF({
            orientation: "landscape",
            // orientation: "portrait",
            format: "a4"
            // format: [4, 2]
        }); //jspdf객체 생성

        var imgData = canvas.toDataURL('image/png'); //캔버스를 이미지로 변환
        
        doc.addImage(imgData, 'PNG', 0, 0); //이미지를 기반으로 pdf생성
        doc.save('sample-file.pdf'); //pdf저장

    });
  });