function f01(){
  //js
  // const x =document.querySelector("#target01");
  // x.style.visibility = "hidden";

  //jquery
  $("#target01").hide(1000);//hide안 인자값은 사라지는데 걸리는 시간
}
function f02(){
  $("#target01").show(2000);
}
function f03(){
  $("#target01").toggle(1000);
}
function f04(){
  $("#target01").fadeIn();
}
 function f05(){
  $("#target01").fadeOut();
} 
  function f06(){
  $("#target01").fadeToggle();
}

function f07(){
  $("#target01").slideDown();
}
function f08(){
  $("#target01").slideUp();
}
function f09(){
  $("#target01").slideToggle();
}