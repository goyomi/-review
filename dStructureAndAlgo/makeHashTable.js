// array를 이용해서 hash table을 만들기
// 배열은 값이 순서대로 저장됨 해쉬는 순서라는게 없음 ==> 해쉬테이블에 의해 저장될 위치를 지정해줌! 해쉬테이블이 어떤 기준으로 하는지 알 수 없음 

class SuperHash {
  constructor(size) {
    this.data = new Array(size);
    // Array(숫자) 배열의 크기 어느정도 길이의 배열 ?
    // [['cat':'is cute']], [['dog':'is cool']], [['pig': 'is smart']]
  }
  // 해쉬함수
  generateRandomHash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      // 0 + 10 * 0
      // 나머지 연산자는 일정한 숫자의 범위 안으로 값을 제어하는 특징이 있다
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash
  }

  set(key, value) {
    // 값을 넣을 위치를 해쉬함수를 통해서 설정합니다
    const address = this.generateRandomHash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      // 기존 주소에 데이터가 있을 경우  
    } else {
      // 같은 키를 사용하는 데이터가 없을 경우 ==> list에 데이터를 추가한다
      for (let i = 0; i < this.data[address].length; i++) {
        // 같은 키를 사용하는 데이터가 있는 경우 ==> 덮어 씌운다 
        if (this.data[address][i][0] === key) {
          this.data[address][i][1] = value;
          return value
        }
      }
      this.data[address].push([key, value]);
      return value
    }
    return value
  }
  // search를 구현해 봅니다
  get(key) {
    // key를 받아올 때 먼저 주소를 받아와야함 값 받기전에
    const address = this.generateRandomHash(key);
    const targetEl = this.data[address];
    if (targetEl) {
      // link list를 확인합니다
      for (let i = 0; i < targetEl.length; i++) {
        // 찾고자하는 대상의 key와 내가 전달한 key가 일치하는지 확인 
        if (targetEl[i][0] === key) {
          return targetEl[i][1]
        }
      }
    }
  }

  // 
  keys() {
    const keyArray = [];
    // 우선 해쉬테이블 안의 모든 데이터를 순회 
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // link list가 존재한다면 
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keyArray.push(this.data[i][j][0]);
          }
        } else {
          keyArray.push(this.data[i][0][0]);
        }
      }
    }
    return keyArray
  }

}

const myHash = new SuperHash(3);
myHash.set('cat', 'is cute');
myHash.set('dog', 'is cool');
myHash.set('pig', 'is smart');
myHash.set('rat', 'is small');
myHash.set('호준', 'is handsome');

console.log(myHash.keys());

// 정리
// 해쉬테이블은 데이터를 검색하거나 추가할때 보통 빠른속도가 보장됩니다. 단, 조건은 데이터 공간이 넉넉하거나 link list를 탐색하는 알고리즘이 빠르다는 전제하에
// 단점은 데이터가 저장되는 순서가 보장되지 않으며 key 탐색의 경우 속도가 느립니다.
// 때문에 object를 순환하는데 사용되는 for in 문이 우리가 작성한 객체의 프로퍼티를 만들어진 순서대로 순환하지 못하는 이유이기도 합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in