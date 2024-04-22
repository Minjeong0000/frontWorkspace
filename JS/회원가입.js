// function checkDup(){
//   const idTag = document.querySelector("input[name=memberId]");
//   if(idTag.value === "admin"){
//     alert("관리자 사칭 ㄴㄴ");
//     idTag.value = "";
//   }
// }

// const pwdTag = document.querySelector("input[name=memberPwd]");
// console.log(pwdTag);
// pwdTag.addEventListener("dblclick",f01);

// function f01(){
//   const target = document.querySelector("#target");
//   target.innerText = "비밀번호는 8~20글자";
// }

const pwdTag=  document.querySelector("input[type=password]");
pwdTag.addEventListener("click",function(){
  const pwdText = document.querySelector('#pwdText');
  pwdText.classList.add("active");
});
// pwdTag.addEventListener(이벤트,함수);
pwdTag.addEventListener("blur",function(){
  const pwdText = document.querySelector('#pwdText');
  pwdText.classList.remove("active")
});

const pwdCheckTag = document.querySelector("input[name=pwdCheck]");
pwdCheckTag.addEventListener("focus",function(){
  const pwdCheckText = document.querySelector("#pwdCheckText");
  pwdCheckText.classList.add("active");
});
