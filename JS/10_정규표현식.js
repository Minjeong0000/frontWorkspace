// const x = new RegExp("~~~"); 혹은
const reg01 = /abc/;

const str ="hello abc";

const result = reg01.test(str);

console.log(result);//true

//정규표현식 : 어떤문자열과 비교해서 매칭되는지 판단해줌
const reg02 = /abc/;

const str02 ="helloa bc";

const result02 =str02.replace(reg02, 'ㅋ');

console.log(result02);//helloa bc

//------------------------------------
const reg03 = /script/;  

const str03 ="javascript shellscript";

const result03 =str03.replace(reg03, 'ㅋ');

console.log(result03);//javaㅋ shellscript 하나만replace됨.

//----------------------------------------------------
const reg04 = /script/g; //g:전역비교

const str04 ="javascript shellscript";

const result04 =str04.replace(reg04, 'ㅋ');

console.log(result04);//javaㅋ shellㅋ
//-----------------------------------------------------
const reg05 = /script/gi;//g:전역비교, i :대소문자구분하지말고  

const str05 ="javaScript shellscript"; //대문자일경우

const result05 =str05.replace(reg05, 'ㅋ');

console.log(result05);//javaㅋ shellㅋ
//------------------------------------------------------------


//
/*
정규식.test(문자열)
정규식.exec(문자열)
문자열.match(정규식)
문자열.replace(정규식)
문자열.search(정규식)
문자열.split(정규식)
*/
/*
    RegExp 객체에서 제공하는 메소드
        객체.test(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴한다.
        객체.exec(문자열) : 문자열에 정규식 패턴을 만족하는 값이 있으면 처음 매치된 문자열 리턴한다.
    
    String 객체에서 정규 표현식 객체를 이용하는 메소드
        문자열.match(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 값을 리턴한다.
        문자열.replace(정규식, 바꿀값) : 문자열에서 정규식 패턴의 값과 일치하는 부분을 바꿀값으로 변경한다.
        문자열.search(정규식) : 문자열에서 정규식 패턴의 값과 일치하지 부분의 시작 인덱스를 리턴한다.
        문자열.split(정규식) : 문자열에서 정규식 패턴의 값과 일치하는 값을 구분자로 하여 배열을 생성하여 리턴한다.
*/


/*
    반복 검색
    {m,n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다.
    +는 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다.
    ?는 앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미한다.

    
    문자열의 앞, 뒤 구분
    ^는 문자열의 시작을 의미한다.
    $는 문자열의 마지막을 의미한다.

        
    OR 검색
    [...] 내의 문자들 중 하나라도 존재할 경우를 의미한다.

    
    임의의 문자열 검색
    .(온점)은 임의의 문자 한 개를 의미하고, 문자 내용은 무엇이든 상관없다.

  \d : 숫자를 의미한다.
  \D : 숫자가 아닌 문자를 의미한다.
  \w : 알파벳, 숫자, 언더 스코어(_)를 의미한다.
  \W : 알파벳, 숫자, 언더 스코어(_)가 아닌 문자를 의미한다.
  \s : 공백 문자를 의미한다. (띄어쓰기, 탭, 줄바꿈)
  \S : 공백 문자가 아닌 문자를 의미한다.
*/
//----------------------------------------
const reg06 = /\d/gi; 

const str06 ="javaScript es6 shellscript"; 

const result06 =str06.replace(reg06, 'ㅋ');

console.log(result06);//javaScript esㅋ shellscript

//----------------------------------------------
const reg07 = /\s/gi; 

const str07 ="javaScript es6 shellscript"; 

const result07 =str07.replace(reg07, 'ㅋ');

console.log(result07);// javaScriptㅋes6ㅋshellscript

//-----------------------------------------------
const reg08 = /./gi; 

const str08 ="hello abc"; 

const result08 = str08.replace(reg08, 'ㅋ');

console.log(result08);//ㅋㅋㅋㅋㅋㅋㅋㅋㅋ  (띄어쓰기도 치환됨)

//------------연속되지않은 문자 여러개 바꾸기---------
const reg09 = /[alc]/ig;  

const str09 ="hello abc"; 

const result09 = str09.replace(reg09, 'ㅋ');

console.log(result09);//heㅋㅋo ㅋbㅋ

//$(달러사인)----------------------------
const reg10 = /com$/ig;//com으로 끝나는것만 찾음  

const str10 ="hello@naver.computer"; 

const result10 = str10.replace(reg10, 'ㅋ');

console.log(result10);//hello@naver.computer

//-----------------------------------------
const reg11 = /l{2}/ig;

const str11 ="hello"; 

const result11 = str11.replace(reg11, 'ㅋ');

console.log(result11);//heㅋo

//----------------------------------
const reg12 = /\d{2,}/ig;  

const str12 ="hello123"; 

const result12 = str12.replace(reg12, 'ㅋ');

console.log(result12);