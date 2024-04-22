const menubtn = document.querySelector("#menu-btn");

menubtn.addEventListener("click",function(){
  const side = document.querySelector("#side");
  side.classList.toggle("active");

  // if(기존클래스리스트에 active가 없으면){
  //   side.classList.add("active");
  // }else{
  //   side.classList.remove("active");
  // }

});
