document.getElementById("userId").addEventListener("focus", function() {
  var userIdValue = document.getElementById("userId").value;
  if (!userIdValue) {
    document.getElementById("userIdMessage").innerText = "필수 입력 항목입니다.";
  } else {
    document.getElementById("userIdMessage").innerText = "";
  }
});

document.getElementById("userPwd").addEventListener("focus", function() {
  var userPwdValue = document.getElementById("userPwd").value;
  if (!userPwdValue) {
    document.getElementById("userPwdMessage").innerText = "필수 입력 항목입니다.";
  } else {
    document.getElementById("userPwdMessage").innerText = "";
  }
});

document.getElementById("confirmPwd").addEventListener("focus", function() {
  var confirmPwdValue = document.getElementById("confirmPwd").value;
  if (!confirmPwdValue) {
    document.getElementById("confirmPwdMessage").innerText = "필수 입력 항목입니다.";
  } else {
    document.getElementById("confirmPwdMessage").innerText = "";
  }
});


document.getElementById("userPwd").addEventListener("focus", function() {
  
  document.getElementById("userPwdMessage").innerText = "영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자";
});

document.getElementById("myForm").addEventListener("submit", function(event) {
  var userId = document.getElementById("userId").value;
  var userPwd = document.getElementById("userPwd").value;
  var confirmPwd = document.getElementById("confirmPwd").value;

  if (!userId || !userPwd || !confirmPwd) {
    event.preventDefault();

    if (!userId) {
      document.getElementById("userIdMessage").innerText = "필수 입력 항목입니다.";
    }
    if (!userPwd) {
      document.getElementById("userPwdMessage").innerText = "필수 입력 항목입니다.";
    }
    if (!confirmPwd) {
      document.getElementById("confirmPwdMessage").innerText = "필수 입력 항목입니다.";
    }
    
    
  }
});