let x = [];
x[0]='사과';
x[1]='3.14';
x[2]='10';
x[3]= true;

// console.log(x); 웹 f12 개발자도구 콘솔창 보면 배열에 저장된 요소들이 보임

//indexOf 몇번째 인덱스에 있는지 반환해주는 메소드. 없으면 -1 리턴
var arr= ["aaa","bbb",'ccc','ddd'];
// let result = arr.indexOf('ddd');

//splice() : 매개변수로 받은 인덱스의 요소를 삭제. 
// let result = arr.splice(1);
var result = arr.splice(2,1);
console.log(result);