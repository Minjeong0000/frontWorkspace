console.log("hi world");

function sayHello (){
 alert("hello");
}
// const x = document.querySelector("#target");//현재 문서에 아이디가 target인 요소를 가져옴
// x.style.backgroundColor="red";

function changeColor(){
  const x = document.querySelector("#target");//현재 문서에 아이디가 target인 요소를 가져옴
  x.style.backgroundColor="red";
  // console.log(x.innerText);
  x.innerText = "JavaScript";
}

function setBox(){
  const boxArr = document.querySelectorAll(".box");
  console.log(boxArr);
  for(let i =0; i <boxArr.length; i++){
    
  boxArr[i].style.width = "100px";
  boxArr[i].style.height = "100px";
  boxArr[i].style.backgroundColor = "green";
  }

  }

  // boxArr[0].style.width = "100px";
  // box[0].style.height = "100px";
  // boxArr[0].style.backgroundColor = "green";

function checkDup(){
  //유저가 입력한 아이디 가져오기
const userIdTag = document.querySelector("#userId");
console.log(userIdTag);
console.log(userIdTag.placeholder);
console.log(userIdTag.id);
console.log(userIdTag.value);
console.log(userIdTag.value);

userIdTag.placeholder = "zzz바꿈 ㅋ";
userIdTag.value ="JS로 넣어주는 valueㅋㅋㅋ";
userIdTag.type ="checkbox";
  //중복인지 확인하기
}