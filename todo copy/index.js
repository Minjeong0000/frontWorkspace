const btnTodoInsert = document.querySelector("#btn-todo-insert");
const btnTodoSelect = document.querySelector("#btn-todo-select");
const inputTag = document.querySelector("input[name=todo]");

// 로컬 스토리지 초기화
if (!localStorage.getItem("todo")) {
  localStorage.setItem("todo", JSON.stringify([]));
}

//TODO insert
btnTodoInsert.addEventListener("click", function(){
  const todoListStr = localStorage.getItem("todo");
  const todoList = JSON.parse(todoListStr);
  todoList.push(inputTag.value);
  localStorage.setItem("todo", JSON.stringify(todoList));
  add(inputTag.value); // 새로운 TODO를 화면에 추가
  inputTag.value="";
});

// add 함수 정의
function add(todoText) {
  const todoListArea = document.querySelector("#todo-list-area");
  const divTag = document.createElement("div");

  // 체크박스 생성
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "todoItem";
  checkbox.value = todoText;
  divTag.appendChild(checkbox);
  checkbox.addEventListener("change",function(){
    if(checkbox.checked){
      checkbox.value.classList.add(".checked");
    }
    else{
      checkbox.value.classList.remove(".checked");
    }


  })




  // 항목 텍스트 생성
  const todoTextNode = document.createTextNode(todoText);
  divTag.appendChild(todoTextNode);

  // 삭제 버튼 생성
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", function () {
    const todoListStr = localStorage.getItem("todo");
    const todoList = JSON.parse(todoListStr);
    const index = todoList.indexOf(todoText);
    if (index !== -1) {
      todoList.splice(index, 1); // 배열에서 해당 인덱스의 요소를 삭제
      localStorage.setItem("todo", JSON.stringify(todoList)); // 업데이트된 TODO 리스트를 로컬 스토리지에 저장
      // 다시 TODO 리스트를 조회하여 화면에 표시
      btnTodoSelect.click();
    }
  });
  divTag.appendChild(deleteBtn);

  todoListArea.appendChild(divTag);
}

//TODO select
btnTodoSelect.addEventListener("click",function(){
  const todoListStr = localStorage.getItem("todo");
  const todoList = JSON.parse(todoListStr);

  const todoListArea = document.querySelector("#todo-list-area");//todo 붙일 영역

  todoListArea.innerHTML = "";
  for (const todo of todoList) {
    add(todo); // 각 TODO를 화면에 추가
  }
});