/*
//선언적 함수
function f01(){
  console.log("f01 called");
}
//익명함수
const f02 = function(){
  console.log("anonymous called");
}
//화살표 함수
const f03 = ()=>{
  console.log("arrow function called");
}

*/
//선언적 함수
function f01(x){
  return x+1;
}
//익명함수
const f02 = function(x){
 return x+1;
}
//화살표 함수
// const f03 = (x)=> {return x+1;}
const f03 = x=>x+1;
result01 = f01(10);
result02 =  f02(10);
result03 = f03(10);
console.log(result01);
console.log(result02);
console.log(result03);


//=============================
//선언적 함수
function printNum(x){
  console.log(x);
  console.log(arguments);//전달받은 모든 인자는 argument에 있음
}

/*같음(익명함수)
const printNum =function(x){
  console.log(x);
  console.log(arguments);//전달받은 모든 인자는 argument에 있음
}
*/

// printNum(100,102,104);

//==========================
function getTen(){
  return printNum;
}
console.log(getTen());


function hello(){
  console.log("안녕~~");
}

hello();

const hi = hello();//hello라는 함수를 변수 hi에 넣음. 주의::const hi = hello();가 아님

console.log(hi); //undefined

const x =undefined;
console.log(typeof x);

//=======내장함수==============================================

// const calcResult = 3/2; //1.5==일반적인 숫자==Finite ===인피니티 아님
// const calcResult =3/0;//Infinity
// const isFiniteResult = isFinite(calcResult);
// console.log(isFiniteResult); //false

// const calcResult = 1/"hello";
// console.log(isNaN(calcResult));
// isNaN(1+2);

console.log("abx"*2);
console.log(0=="0");
console.log(0==[]);
console.log("0"==[]);










