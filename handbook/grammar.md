## **알고리즘 풀이를 위한 JavaScript 필수 문법**



### **빌트인 데이터 타입**

JavaScript는 데이터를 **원시 타입**(Primitive Type)과 **참조 타입**(Reference Type)으로 나눈다. 이 두 가지는 **메모리 참조 방식**에서 큰 차이를 보이며, 알고리즘 문제를 해결할 때 이를 이해하는 것이 중요하다.

---

### **원시 타입 (Primitive Type)**

원시 타입은 값을 직접 저장하며, **값을 복사**하거나 비교할 때 **값 자체를 비교**한다. JavaScript의 7가지 원시 타입은 다음과 같다.

#### 1. **숫자 타입**
- 모든 숫자는 부동소수점(Double-precision floating point)으로 표현된다.
- 정수와 실수를 구분하지 않으며, 기본적으로 64비트 부동소수점 형식을 따른다.

##### **부동소수점 문제와 엡실론**
- 부동소수점 연산은 **정확한 결과를 보장하지 않는다**.
  ```javascript
  console.log(0.1 + 0.2 === 0.3); // false
  ```

- 이를 해결하기 위해 `Number.EPSILON`을 활용할 수 있다.
  ```javascript
  const isEqual = (a, b) => Math.abs(a - b) < Number.EPSILON;
  console.log(isEqual(0.1 + 0.2, 0.3)); // true
  ```

#### 2. **문자열 타입**
- 문자열은 `"`(큰따옴표), `'`(작은따옴표), `` `(백틱)으로 선언 가능하다.
- JavaScript는 문자열을 **유니코드**로 처리하며, **불변**(Immutable)하다.
  ```javascript
  const str = "Hello";
  console.log(str[0]); // "H"
  ```

#### 3. **Boolean 타입**
- 참/거짓을 표현하는 `true`와 `false` 값만을 가진다.

#### 4. **BigInt 타입**
- 큰 정수를 처리하기 위한 타입으로, `n` 접미사를 사용한다.
  ```javascript
  const big = 1234567890123456789012345678901234567890n;
  console.log(big);
  ```

#### 5. **null**
- 개발자가 의도적으로 값이 없음을 나타내는 값이다.
  ```javascript
  let value = null;
  ```

#### 6. **undefined**
- 변수를 선언했지만 값을 할당하지 않았을 때 기본적으로 `undefined`가 할당된다.
  ```javascript
  let value;
  console.log(value); // undefined
  ```

#### 7. **Symbol**
- 고유한 식별자를 생성할 때 사용된다.
  ```javascript
  const uniqueKey = Symbol("key");
  ```

---

### **참조 타입 (Reference Type)**

참조 타입은 메모리 상에 **참조값**(주소)를 저장하며, 값 자체가 아닌 참조값을 복사하거나 비교한다.

#### 1. **오브젝트**
- 객체는 키-값 쌍으로 구성된 데이터 타입이다.
  ```javascript
  const person = { name: "Alice", age: 25 };
  console.log(person.name); // Alice
  ```

#### 2. **배열**
- 배열은 순서가 있는 리스트이며, 다양한 데이터 타입을 포함할 수 있다.
  ```javascript
  const arr = [1, 2, 3];
  console.log(arr[0]); // 1
  ```

---

### **함수**
JavaScript의 함수는 **일급 객체**(First-class Citizen)로 취급되며, 다음과 같은 특징을 가진다.

#### **일급 객체란?**
- 함수를 변수에 할당할 수 있다.
  ```javascript
  const greet = () => "Hello!";
  ```
- 함수를 다른 함수의 매개변수로 전달할 수 있다.
  ```javascript
  const execute = fn => fn();
  console.log(execute(greet)); // Hello!
  ```
- 함수를 반환값으로 사용할 수 있다.
  ```javascript
  const createMultiplier = n => x => x * n;
  const double = createMultiplier(2);
  console.log(double(5)); // 10
  ```

---

### **원시 타입과 참조 타입의 메모리 참조 방식 차이**

#### **원시 타입**
- 값 자체가 메모리에 저장된다.
- 복사 시 값을 독립적으로 복사한다.
  ```javascript
  let a = 10;
  let b = a; // 값 복사
  b = 20;
  console.log(a); // 10 (영향 없음)
  ```

#### **참조 타입**
- 참조값(메모리 주소)이 저장된다.
- 복사 시 참조값을 복사하므로, 원본과 복사본이 동일한 객체를 참조한다.
  ```javascript
  const obj1 = { name: "Alice" };
  const obj2 = obj1; // 참조 복사
  obj2.name = "Bob";
  console.log(obj1.name); // Bob (동일한 객체를 참조)
  ```

---

### **구조 분해 할당**

#### **1. 배열 구조 분해**
```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1, 2, 3
```

#### **2. 객체 구조 분해**
```javascript
const obj = { name: "Alice", age: 25 };
const { name, age } = obj;
console.log(name, age); // Alice, 25
```

#### **3. 값 교환하기**
```javascript
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1
```

---

### **비구조화 할당**
구조 분해와 비슷하지만, 일부 속성만 추출할 때 사용한다.
```javascript
const person = { name: "Alice", age: 25, job: "Developer" };
const { name, ...rest } = person;
console.log(name); // Alice
console.log(rest); // { age: 25, job: "Developer" }
```

---

### **스프레드 연산자**

#### **1. 스프레드 연산자를 사용한 배열 복사**
```javascript
const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy); // [1, 2, 3]
```

#### **2. 배열 내 중복 제거**
```javascript
const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3]
```

---

### **&&와 || 연산자로 조건문 대체하기**

#### **1. Truthy와 Falsy**
- JavaScript에서 `false`로 평가되는 값:
  - `false`, `0`, `""`, `null`, `undefined`, `NaN`.
- 나머지 값은 모두 `true`로 평가된다.

#### **2. && 연산자로 조건문 대체**
```javascript
const isLoggedIn = true;
isLoggedIn && console.log("Welcome!"); // Welcome!
```

#### **3. || 연산자로 기본값 설정**
```javascript
const username = null;
const displayName = username || "Guest";
console.log(displayName); // Guest
```
---

#### [숏서킷 자세한 내용](https://velog.io/@wayandway/short-circuit)