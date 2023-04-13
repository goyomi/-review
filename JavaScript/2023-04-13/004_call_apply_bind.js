// apply, call, bind

// call
// call() 메서드의 인수에 this로 사용할 값을 전달할 수 있다.
var peter = {
  name: 'Peter Parker',
  sayName: function () {
    console.log(this.name);
  }
}

var bruce = {
  name: 'Bruce Wayne',
}
peter.sayName()
peter.sayName.call(bruce);

///
var peter = {
  name: 'Peter Parker',
  sayName: function (감탄사) {
    console.log(this.name + 감탄사);
  }
}

var bruce = {
  name: 'Bruce Wayne',
}
peter.sayName.call(bruce, '!');
// Bruce Wayne!
peter.sayName('!')
// peter Parker!
peter.sayName
// peter Parkerundefined

// apply 
var peter = {
  name: 'Peter Parker',
  sayName: function (is, is2) {
    console.log(this.name + ' is ' + is + ' or ' + is2);
  }
}

var bruce = {
  name: 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);

// call과 apply 비교
var peter 