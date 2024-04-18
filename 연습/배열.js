// let fruits = []; // 빈 배열 생성

// // 배열의 첫 번째 인덱스에 값 할당
// fruits[0] = "사과";
// // 배열의 두 번째 인덱스에 값 할당
// fruits[1] = "바나나";
// // 배열의 세 번째 인덱스에 값 할당
// fruits[2] = "딸기";

// console.log(fruits); // ["사과", "바나나", "딸기"] 출력


let fruits = ["사과", "바나나", "딸기"]; // 배열 생성 및 초기값 할당

// 인덱스 1에 "수박" 추가
fruits.splice(1, 0, "수박");
console.log(fruits); // ["사과", "수박", "바나나", "딸기"]

// 인덱스 2의 값을 "망고"로 변경
fruits.splice(2, 1, "망고");
console.log(fruits); // ["사과", "수박", "망고", "딸기"]

// 인덱스 0의 요소 제거
fruits.splice(0, 1);
console.log(fruits); // ["수박", "망고", "딸기"]