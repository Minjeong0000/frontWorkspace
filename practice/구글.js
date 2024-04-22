//배경색변화
const partyTime = document.querySelector("#pt");
partyTime.addEventListener("click",function(){
  const bodycolor = document.querySelector("#body");
bodycolor.classList.toggle("active");
});

//미니메뉴열고닫기
const toggleMenu = document.getElementById('toggleMenu');
const smallMenu = document.getElementById('smallMenu');

toggleMenu.addEventListener('click', function() {
    smallMenu.classList.toggle('show');
});

//검색창 focus->shadow
const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("focus",function(){
  const searchWrap = document.querySelector("#searchbarWrap");
  searchWrap.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
});

searchInput.addEventListener("blur",function(){
  const searchWrap = document.querySelector("#searchbarWrap");
  searchWrap.style.boxShadow = "";
});


// const searchInput = document.querySelector("#searchInput");
// const searchWrap = document.querySelector(".searchbar-wrap");
// searchInput.addEventListener("focus",function(){
// searchWrap.classList.add("focused");
// });

// searchInput.addEventListener("blur",function(){
//   searchWrap.classList.remove("focused");
// });