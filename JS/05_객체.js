/*  객체 만들기 
    const x={};
 혹은 consst x= new Object();
console.log(x);
*/


//******객체에 속성 집어넣기********
const x={
  atk:100,//문자열로 처리됨
  def:50,
  isDead : false,
  skill:function(){},
  foods:["사과","딸기","망고"]
};
x.name = "홍길동";
//위와같음 x["name"]="홍길동";
//혹은 const str = "name";
//x[str] ="홍길동";
x["max-level"] = 250;
x.age = 20;
x.isProgrammer = true;
x.hobby= ["코딩","프로그래밍","개발"];//배열도 저장 가능

//hello라는 속성에 함수 저장
x.hello = function(){
  console.log("hello!!");
}

console.log(x);
// console.log(x["max-level"]);
// console.log(x.name);
// console.log(x.age);
// console.log(x.isProgrammer);
// console.log(x.hobby);
x.hello();
//x에 있는 키값들을 꺼내 변수 k에 저장한다.
for(const k in x){ //const로 선언해 변수의 범위를 확실하게 만드는 것이 좋음
  console.log(k);
}

//객체에 들어있는 속성을 삭제하는 법 : delete함수 사용
delete(x.name);