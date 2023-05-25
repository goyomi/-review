// push와 pop을 class로 구현해보기

class UltraArray {

  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    // obj.1 X , obj[1] O
    this.data[this.length] = item; // {0:item, 1:item, 2:item} => 유사배열객체를 만듬
    this.length += 1; // ++ 써도됨
    return this.length;
    // 배열에 push하면 배열의 길이값이 리턴됨 
  }
  pop() {
    const lastState = this.data[this.length - 1];
    delete this.data[this.length - 1];
    // delete 가장 마지막 속성을 지워줌
    this.length -= 1;
    return lastState
    // 지워지는 요소를 반환 
  }

  // 인덱스 숫자로 속성을 제거합니다.
  deleteWithIndex(index) {
    const removedItem = this.data[index];
    delete this.data[index];
    return removedItem;
  }

  // 인덱스를 정리하고 속성을 제거합니다. => 삭제하는 인덱스 요소 뒤에만 정리해주면 된다.
  changeOrderOfItems(index) {
    // 받아오는 인덱스부터 시작하기. index=제거될녀석
    // 길이를 하나 줄입니다
    this.length--;
    for (let i = index; i < this.length; i++) {
      // 뒤에 있는 인덱스를 앞으로 당겨오게 하기 
      // [0,1,2] ==> [0,2]
      this.data[i] = this.data[i + 1];
    }
    // 대상을 제거합니다 
    delete this.data[this.length];
  }

}

const myArray = new UltraArray();

myArray.push(1);
myArray.push(2);
myArray.push(3);

// myArray.pop();
// console.log(myArray);

myArray.pop();
console.log(myArray);