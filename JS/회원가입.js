function checkDup(){
  const idTag = document.querySelector("input[name=memberId]");
  if(idTag.value === "admin"){
    alert("관리자 사칭 ㄴㄴ");
    idTag.value = "";
  }
}

const pwdTag = document.querySelector("input[name=memberPwd]");
console.log(pwdTag);
pwdTag.addEventListener("dblclick",f01);

function f01(){
  const target = document.querySelector("#target");
  target.innerText = "비밀번호는 8~20글자";
}