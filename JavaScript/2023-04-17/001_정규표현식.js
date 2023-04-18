// 어디서든(어떤언어든) 정규표현식은 같다
// 검색엔진에서 주로 사용

// 1. 정규표현식 
// https://regexr.com/5nvc2

// 2. 환경설정
// 정규표현식을 입력하는 공간입니다. 뒤에 gm이라 붙어있는 것은 flag입니다. flag 설정은 오른쪽 상단에서 할 수 있습니다. g는 global로 모든 문자열에서, m은 multiline으로 여러 라인에서 패턴을 찾겠다는 옵션입니다.
// 대, 소문자 동시 선택도 설정가능 

// 3. 문자열
// 정규표현식에서는 대소문자 구분을 하지만 gim flag를 주면 대소문자 구분을 하지 않는다.
// /hello/gm
//  / hello world / gm
//  / Hello / gm
//  / Hello / gim

// 4. 처음과 끝
// ^를 사용하면 hello로 시작하는 것을 찾을 수 있고 $를 사용하면 헬로우로 끝나는 단어를 찾을 수 있다. 
// /^ hello / gm : 처음에 hello
// / hello$ / gm : 끝에 hello

// 5. 모든 문자를 선택하는 법
// .(dot)사용
// h.llo 하면 hello, hallo, hollo 모두 선택됨

// 6. 택1
// [ ](대괄호)사용하면 대괄호 안에 있는 텍스트를 하나 선택할 수 있음
// 대괄호 안의 값은 무조건 한 개만 선택함!!!

// 7. 범위
// h[a-zA-Z0-9]llo, 범위를 지정하고 싶을 때에는 -(대쉬)를 사용한다.
// h1llo, h2llo, h3llo 선택됨

// 8. 부정
// 해당 문자열을 제외하고 찾고 싶을 때는 [^], 대괄호 안에 있을 때는 부정의 의미!

// 9. 서브패턴
// 서브패턴은 그룹으로 묶을 수 있다.
// 

// 10. 수량자
// 해당 문자가 몇 개 있는지를 명시해서 패턴을 찾는다
// ** 유저가 마음대로 입력하기 때문에(폼에 맞춰서 내지 않음) 여러가지 수를 고려해야 함. 그리고 번호의 경우 0으로 시작하기때문에 자바스크립트에서 8진수로 받아들일 수 있기 때문에 문자로 바꾸어 주어야 하는 이슈가있다. 
// ? : ~ 일수도 있고 아닐수도 있고 
// *(거의안씀)
// + : 한 개이상은 있어야 한다, @naver.com 안됨 a@naver.com은 되야된다는 말
// {} : ~ 이상을 쓸때, {1,} 한 문자 이상 
// ** 특수문자를 쓸 때는 \(역슬래쉬)로 구분 해주는 것을 권장 [a-zA-Z\-\.]+@[a-zA-Z]+.com

// 11. 캐릭터 클래스
// w{5} : 5글자씩
// \d : 숫자만 잡아낸다 (소문자)
// \D : not의 의미가 들어가게 됨 (대문자)

// 12. 이스케이프 문자
// 이미 사용되고 있는 특수문자를 표현할 때 
// \[.*\] : 대괄호 안에 감싸여진 문자열을 표현하려고 할 때

// 13. 한글 정규표현식 
// [ㄱ-ㅎ|ㅏ-ㅣ|가-힣]    # 모든 한글
// [^[가-힣]+$]           # 한글만 허용
// [^[가-힣\\s]+$]        # 공백 허용

// 정규표현식 잘 되어있는 블로그 
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC 

'paullab CEO leehojun hello CEO'
// 문자열 한개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO')
// flag로 global을 주어서 전체 변경(m-다중라인, i-대소문자 구분X)
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO')
'paullab CEO leehojun hello CEO'.match(/CEO/g)
'paullab CEO leehojun hello CEO'.split(/CEO/g)
  // 패턴이 들어가 있으면 true 없으면 false
  (/CEO/g).test('paullab CEO leehojun hello CEO')

// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!')
'!!!'.split('!') // 4개
'!a!a!a'.split('!') // 4개
'a!a!a!'.split('!') // 4개

'!a!a!a'.split('!').length - 1

// https://codepen.io/kvendrik/pen/bGKeEE