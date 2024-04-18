/*const x = document.querySelector("#result");
console.log(x);
x.classList.add("box");*/

/* //클래스추가하기 
x.classList.add("aaa");
x.classList.add("bbb");
x.classList.add("ccc");
*/
/*
a.style.backgroundColor = "gray";
a.style.width = "100px";
a.style.height  = "100px";
a.style.border  = "1px solid black";
*/

function addRed(){
  const divTag = document.querySelector("#result");
  divTag.classList.add("red");
}

function addBlue(){
  const divTag = document.querySelector("#result");
  divTag.classList.add("blue");
}

function addGreen(){
  const divTag = document.querySelector("#result");
  divTag.classList.add("green");
}

function removeRed(){
  const divTag = document.querySelector("#result");
  divTag.classList.remove("red");
}
function removeGreen(){
  const divTag = document.querySelector("#result");
  divTag.classList.remove("green");
}
function removeBlue(){
  const divTag = document.querySelector("#result");
  divTag.classList.remove("blue");
}
//===================================================================

/*
//요소 만들기
const x = document.createElement('h1');
console.log(x);


//텍스트 노드 만들기 

const y = document.createTextNode("안녕 ㅋㅋ");
console.log(y);

x.appendChild(y);
console.log(x);

//콘솔창뿐만 아니라 화면에 추가한 노드가 보이게 만들고싶다=>바디태그에 무슨 작업을 해야 함
//직접 만든 노드를 화면에 부착
const bodyTag = document.querySelector("body");
bodyTag.appendChild(x);

*/

function f01(){
  //요소 만들기
  const x = document.createElement('h1');
  //텍스트 노드 만들기 
  const y = document.createTextNode("안녕 ㅋㅋ");
  x.appendChild(y);
  //콘솔창뿐만 아니라 화면에 추가한 노드가 보이게 만들고싶다=>바디태그에 무슨 작업을 해야 함
  //직접 만든 노드를 화면에 부착
  const bodyTag = document.querySelector("body");
  bodyTag.appendChild(x);
}

//버튼누르면 이미지나오게하고싶음
function f02(){
  //요소 노드 만들기
  const imgTag = document.createElement('img');
  //속성 셋팅
  imgTag.setAttribute('src',"../resources/img/강아지.jpg");
  imgTag.setAttribute('alt', "뗀두이");
  imgTag.setAttribute('width', "150px");
  imgTag.setAttribute('height', "auto");
  //연결됐는지 확인 console.log(imgTag);
  //화면에 요소노드 부착하기
  const target = document.querySelector("#target");
  target.appendChild(imgTag);
}
//이미지 삭제하기 
function f03(){
const target = document.querySelector("#target");
//문서에서 이미지태그를 가져오기
const imgTag= document.querySelector("img");
//문서에서 요소노드 자체를 삭제하기 
// target.removeChild(imgTag);
//혹은 
imgTag.remove();
}