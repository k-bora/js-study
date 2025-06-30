/* -------------------------------------------------------------------------- */
/*                                  Prototype                                 */
/* -------------------------------------------------------------------------- */

// const hobby = ["photo", "swim", "trip", "movie"];

// const hobby = new Array("photo", "swim", "trip", "movie");
// console.log(hobby);
// console.log(hobby.length);
// console.log(hobby.includes("photo"));

// 반드시 일반 함수 : 활살표 함수 X
// Array.prototype.kimbora = function () {
//   console.log(this);
// };

// hobby.kimbora();

// const user = {
//   firstname: "ha",
//   lastname: "sungpil",
//   // 메소드 함수는 반드시 함수로 화살표 함수 X
//   getFullName: function () {
//     console.log(this.firstname, this.lastname);
//   },
// };

// const user2 = {
//   firstname: "rebe",
//   lastname: "hayan",
//   // getFullName: function () {
//   //   console.log(this.firstname, this.lastname);
//   // },
// };

// user.getFullName(); // ha sungpil
// user.getFullName.call(user2); // ha sungpil

// 첫문자 대문자로
// function User(first, last) {
//   this.firstname = first;
//   this.lastname = last;
// }

//prototype 을통해 메소드 생성 (공유하는 저장소)
// User.prototype.getFullName = function () {
//   return `${this.firstname}${this.lastname}`;
// };

// // 변수로 등록(할당)해야함 : 인스턴스
// const isName = new User("kim", "bora");
// console.log(isName);
// console.log(isName.getFullName());

/* -------------------------------------------------------------------------- */
/*                                  ES6 Class                                 */
/* -------------------------------------------------------------------------- */

// Prototype방식
// function User(first, last) {
//   this.firstname = first;
//   this.lastname = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstname}${this.lastname}`;
// };

// 똑같이 대문자로 시작
// class User {
//   // 컨스턱쳐 함수랑 비슷하게 사용 // new로 객체 만들 때 실행되는 함수
//   constructor(first, last) {
//     this.firstname = first;
//     this.lastname = last;
//   }
//   // 클래스 안의 함수 prototype 없이 자동으로 메소드 생성
//   getFullName() {
//     return `${this.firstname}${this.lastname}`;
//   }
// }

// const isName = new User("ha", "sungpil");
// const isNickName = new User("rebe", "hayan");

// console.log(isName);
// console.log(isNickName);
// console.log(isName.getFullName());
// console.log(isNickName.getFullName());

/* -------------------------------------------------------------------------- */
/* Getter(값을 꺼낼 때 자동으로 실행되는 함수), Setter (값을 넣을 때 자동으로 실행되는 함수) */
/* -------------------------------------------------------------------------- */

// class User {
//   // 내부에서 쓰는 실제 변수 (앞에 _ 자주 붙임)
//   constructor(first, last) {
//     this._firstname = first;
//     this._lastname = last;
//   }
//   // Getter   // 값을 꺼낼 때
//   get fullName() {
//     console.log("test");
//     return `${this._firstname}${this._lastname}`;
//   }
//   // Setter  // 값을 설정할 때
//   set fullName(value) {
//     // console.log(value.split(" "));
//     [this._firstname = first, this._lastname = last] = value.split(" ");
//   }
// }

// const isName = new User("ha", "sungpil");

// console.log(isName.fullName); // hasungpil

// isName.fullName = "kim bora";

// console.log(isName);

/* -------------------------------------------------------------------------- */
/*                                   Static 이 클래스 전체가 공통으로 쓸 함수"를 만드는 키워드야.
객체 하나하나마다 따로 만들 필요 없이, 그냥 클래스 이름으로 바로 씀!                                  */
/* -------------------------------------------------------------------------- */

class User {
  constructor(first, last) {
    this.firstname = first;
    this.lastname = last;
  }

  getFullName() {
    return `${this.firstname}${this.lastname}`;
  }

  // 안에 구조를 파악할때 사용.. 클래스자체
  static name(value) {
    if (value.firstname && value.lastname) {
      return "성공";
    }
    return "실패";
  }
}

const isName = new User("rebe", "hayan");
const isCheck = {
  age: 20,
  city: "seoul",
};

// console.log(isName.getFullName());
// console.log(isName.name());
// console.log(User.name(isName));
console.log(User.name(isCheck));

class Cake {
  constructor(flavor) {
    this.flavor = flavor;
  }

  describe() {
    console.log(`${this.flavor} 맛 케이크입니다.`);
  }

  static storeInfo() {
    console.log("이 케이크 가게는 서울에 있어요!");
  }
}
const cake1 = new Cake("딸기");
const cake2 = new Cake("초코");

cake1.describe(); // 딸기 맛 케이크입니다.
cake2.describe(); // 초코 맛 케이크입니다.

Cake.storeInfo(); // 이 케이크 가게는 서울에 있어요!

// 부모 클래스: Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name}이(가) 소리를 냅니다.`);
  }
}

// 자식 클래스: Dog
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 부모 클래스의 생성자 호출
    this.breed = breed; // 자식 클래스만의 속성
  }

  sound() {
    super.sound(); // 부모 클래스의 메서드 호출
    console.log(`${this.name} (${this.breed} 종): 멍멍!`);
  }
}

// 인스턴스 생성
const dog = new Dog("뽀삐", "푸들");
dog.sound(); // 뽀삐이(가) 소리를 냅니다. 뽀삐 (푸들 종): 멍멍!

console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
