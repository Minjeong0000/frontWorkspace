function openTest(){
  //버튼클릭하면 새 창 열림.파라미터1 :주소값, 파라미터2: 새 창의 이름
  window.open("https://www.naver.com","abc","width = 500 , height = 500 , resizeable=no ,left=100, top =500");
  
}


function timeoutTest(){
  timer01= setTimeout(() => {
    alert("helloWorld~~");
  },1000);

}

function intervalTest(){
 timer02 = setInterval(()=>{
    console.log("2초 지남...")
  },2000);
}


function clearTimeoutTest(){
  //clearTimeout(타임아웃객체의리턴값넣기);
  clearTimeout(timer01);
}

function clearIntervalTest(){
clearInterval(timer02);
}
function locationTest(){
  // location.href = "https://naver.com";
  location.reload();
}

function navigatorTest(){
  console.log(navigator);
}

function screenTest(){
  console.log(screen);
  
}