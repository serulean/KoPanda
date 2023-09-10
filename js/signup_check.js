// 출처 : https://goddino.tistory.com/52
// 수정일 : 2022.12.8

function signform_check() {
    var email_id = document.getElementById("user_id");
    var pwd = document.getElementById("user_pwd");
    var repwd = document.getElementById("user_repwd");
    var user_nickname = document.getElementById("user_nickname");

    var nation1 = document.getElementById("nation1");
    var nation2 = document.getElementById("nation2");
    var nation3 = document.getElementById("nation3");
    var nation4 = document.getElementById("nation4");

    var grade1 = document.getElementById("grade1");
    var grade2 = document.getElementById("grade2");
    var grade3 = document.getElementById("grade3");
    var grade4 = document.getElementById("grade4");
    var grade5 = document.getElementById("grade5");
    var grade6 = document.getElementById("grade6");


    if (email_id.value == "") {
      alert("아이디를 입력하세요.");
      email_id.focus();
      return false;
    };

    var emailCheck = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (!emailCheck.test(email_id.value)) {
      alert("올바른 이메일 형식이 아닙니다.");
      email_id.focus();
      return false;
    };

    if (pwd.value == "") {
      alert("비밀번호를 입력하세요.");
      pwd.focus();
      return false;
    }
    
    if (pwd.value.length < 8) {
        alert("비밀번호는 8자 이상이어야 합니다.");
        pwd.focus();
        return false;
    };
    
    if (repwd.value !== pwd.value) {
        alert("비밀번호가 일치하지 않습니다.");
        repwd.focus();
        return false;
    };

    if (user_nickname.value == "") {
        alert("닉네임을 입력하세요.");
        user_nickname.focus();
        return false;
    };

    if (user_nickname.value.length < 2) {
        alert("닉네임은 2자 이상이어야 합니다.");
        user_nickname.focus();
        return false;
    };
  
    if (!nation1.checked && !nation2.checked && !nation3.checked && !nation4.checked) {
      alert("국적을 골라주세요.");
      nation1.focus();
      return false;
    }

    if (!grade1.checked && !grade2.checked && !grade3.checked && !grade4.checked && !grade5.checked && !grade6.checked) { //둘다 미체크시
        alert("목표 등급을 골라주세요.");
        grade1.focus();
        return false;
      }
  
      
    // 입력 값 전송
    // document.signup_form.submit();

    $("#signupinform").modal('show')
}
