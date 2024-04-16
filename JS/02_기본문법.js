//함수 외부에 만든 변수는 전역변수
/*
let x= 10;//전역변수
 x =20;//전역변수


const y= 10;
//y =20;//재할당 불가능
function f01(){
  var x =30;//지역변수
  // console.log(x);
  console.log(window.x);//window객체에 있음. 전역변수x를 쓰고싶을때
}
*/

// var x ;
// console.log(x);
// let x = 10;


function f01(){
  if(true){
    x=10; //==var x = 10;
    // let x =10; 
  }
  if(true){
  console.log(x);
  }
}
f01();
//var는 if문 안쪽에서 선언해도 함수 맨 처음에 선언된 것처럼 동작함
//let이나 const를 사용하면 기존 알고있던 스코프 범위에서만 동작