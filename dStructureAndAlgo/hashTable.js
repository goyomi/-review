// access, search, insertion, deletion

const myHash = { two: 2, three: 3 };
// 값을 insertion
myHash.one = 1;
// 값을 access 변경
myHash.one = 2;
myHash.two = 10;

// 값을 search
myHash.three

// 값을 delete
delete myHash.three

console.log(myHash)

// 해쉬함수가 잘못된 경우 해쉬충돌 가능성이 있음
// 서로다른 키가 동일한 해쉬값을 가질때 생김, 해쉬값 => 메모리주소
// 같은 해쉬주소에 계속해서 데이터가 쌓인다면...? 값을 찾을때 해쉬 안에 저장된 값을 다 봐야함 ==> 배열과 비슷함 (Linear time): O(n)