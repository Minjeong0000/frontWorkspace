/*
//key,value값으로 저장, 내 컴퓨터 브라우저에 저장됨
// localStorage는 문자열만 다룰 수 있음
localStorage.setItem("first","사과");
localStorage.setItem("second","딸기");
localStorage.setItem("third","망고");

const len = localStorage.length;
console.log(len);

const x = localStorage.getItem("first");
console.log(x);


localStorage.removeItem("second");//키값지정,삭제

localStorage.clear();//전부삭제
*/

const btnTodoInsert = document.querySelector("#btn-todo-insert");
const btnTodoSelect = document.querySelector("#btn-todo-select");
const inputTag = document.querySelector("input[name=todo]");
// 로컬스토리지 초기셋팅. setItem(key,value);
localStorage.setItem("todo", JSON.stringify([]));
//TODO insert
btnTodoInsert.addEventListener("click", function(){
  const todoListStr = localStorage.getItem("todo");
  const todoList = JSON.parse(todoListStr);
  todoList.push(inputTag.value);
  localStorage.setItem("todo", JSON.stringify(todoList));
});

//TODO select
btnTodoSelect.addEventListener("click",function(){
  const todoListStr = localStorage.getItem("todo");
  const todoList = JSON.parse(todoListStr);
  //todoList를 화면에 보여주기
  const todoListArea = document.querySelector("#todo-list-area");//todo 붙일 영역

  //화면지우기
  todoListArea.innerHTML = "";


  //todo만들기(div)
  // 화면(todoListArea)에 붙이기
  for(const x of todoList){
  const divTag = document.createElement("div");
  const todoText = document.createTextNode(x);
  divTag.appendChild(todoText);
  todoListArea.appendChild(divTag);
  }
})




//json: 자바스크립트에서 객체를 표현하는 방식 