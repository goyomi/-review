// 간단한 투두 리스트기능 구현해보기
// 1. 해야할 일 Todo 클래스 (내용, 상태 두 가지 프로퍼티를 가집니다.)
// 2. Todo 클래스는 상태를 변경하는 changeState 메서드를 가집니다.
// 3. 할일의 목록을 관리하는 관리자를 추상화한 TodoManager 클래스 (할일 목록을 프로퍼티로 가집니다.)
// 4. 할 일을 저장하고(addItem), 할 일의 목록을 보여주며(getItems), 할 일의 남은 갯수를 반환하는(getLeftTodoCount) 세 가지 메소드를 가집니다. 


// 1. 할 것 객체를 만든다
// 추상화를 거쳐서 class를 만든다 

class Todo {
  constructor(content, state) {
    this.content = content;
    this.state = state;
  }

  // 상태전환 : 부정연산자 쓰면 됨 
  changeState() {
    this.state = !this.state;
  }
}

class TodoManager {
  constructor() {
    this.todoList = [];
  }

  addItem(content, state) {
    const newTodo = new Todo(content, state);
    this.todoList.push(newTodo);
  }

  getItems() {
    return this.todoList;
  }

  getLeftTodoCount() {
    let count = 0;
    for (const todo of this.todoList) {
      if (!todo.state) {
        count++;
      }
    }
    return count;
  }
}

// 사용 예시
const todoManager = new TodoManager();
todoManager.addItem("청소하기", false);
todoManager.addItem("운동하기", true);
todoManager.addItem("코딩하기", false);

console.log(todoManager.getItems());
// [Todo { content: "청소하기", state: false }, Todo { content: "운동하기", state: true }, Todo { content: "코딩하기", state: false }]

console.log(todoManager.getLeftTodoCount()); // 2

todoManager.todoList[0].changeState();
console.log(todoManager.getItems());
// [Todo { content: "청소하기", state: true }, Todo { content: "운동하기", state: true }, Todo { content: "코딩하기", state: false }]

console.log(todoManager.getLeftTodoCount()); // 1
