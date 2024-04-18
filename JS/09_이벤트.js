//===============고전 이벤트 모델 
const btn01 =  document.querySelector("#btn01");
btn01.onclick = f01;


function f01(){
console.log("f01 called..")
}

//================**표준 이벤트 모델**
const btn02 = document.querySelector("#btn02");
btn02.addEventListener('click',f02);


function f02(){
console.log("f02called");
}

//이벤트가 발생한 요소에 접근하기
const btn03 = document.querySelector("#btn03");
btn03.addEventListener('click', f03);//첫번째 매개변수:이벤트 두번째매개변수:이벤트가 발생하면 호출할 함수
//

function f03(x){//x는 이벤트 객체
  console.log(x); //이벤트 객체 출력
}

//이벤트 제거 preventDefault() 이벤트의 기본 동작을 중단시키는 메서드
const aTagToNaver = document.querySelector("#naver");
aTagToNaver.addEventListener("click", f04);
function f04(evt){
  evt.preventDefault();
}

//이벤트 전파 (리스너하나)/박스이용한 실습
const outer = document.querySelector("#outer");
outer.addEventListener("click",f05);

function f05(){
console.log("f05 called");
}

const div01 = document.querySelector("#div01").addEventListener("click",function(){console.log("div01 clicked");});
const div02 = document.querySelector("#div02").addEventListener("click",function(){console.log("div02 clicked");});
const div03 = document.querySelector("#div03").addEventListener("click",function(){console.log("div03 clicked");});


