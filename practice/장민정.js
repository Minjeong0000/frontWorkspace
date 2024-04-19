

const pwdTag = document.querySelector("input[type=password]");
pwdTag.addEventListener("click",checkMsg);

function checkMsg(){
  const target = document.querySelector("#target");
  target.innerText = "영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자";
}


const idTag = document.querySelector("input[type=text]");
idTag.addEventListener("click",checkEmptyId);

function checkEmptyId(){
  const idTag=document.querySelector("#idtarget");
  if(idTag.value ===""){
    const target = document.querySelector("#idtarget");
    target.innerText = "필수 입력 항목입니다.";
  }
}