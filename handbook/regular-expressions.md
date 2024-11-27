## **JavaScript 정규식 (Regular Expressions)**

정규식(Regular Expressions, RegExp)은 **문자열에서 특정 패턴을 검색, 추출, 또는 치환**하기 위한 도구이다. JavaScript에서 정규식은 **`RegExp` 객체**로 구현되며, 문자열과 관련된 작업을 효율적으로 처리할 수 있다.



### **1. 정규식의 기본 문법**

#### **1-1. 정규식 작성 방법**
JavaScript에서는 두 가지 방식으로 정규식을 작성할 수 있다.

1. **리터럴 방식**
   - `/pattern/flags` 형태로 작성
   ```javascript
   const regex = /hello/gi; // "hello"를 대소문자 무시(g)하며 모든 곳에서(i) 찾음
   ```

2. **RegExp 생성자 방식**
   - 문자열로 패턴을 전달
   ```javascript
   const regex = new RegExp("hello", "gi");
   ```

<br/>

#### **1-2. 플래그(Flags)**

정규식에 추가적으로 설정할 수 있는 플래그는 아래와 같다.

| 플래그 | 설명                                             |
|--------|--------------------------------------------------|
| `g`    | **Global**: 문자열 내 모든 매칭을 찾음          |
| `i`    | **Ignore case**: 대소문자 구분 없이 매칭         |
| `m`    | **Multiline**: 여러 줄을 처리하도록 설정         |
| `s`    | **Dotall**: `.`가 줄바꿈 문자(`\n`)도 포함      |
| `u`    | **Unicode**: 유니코드 모드 활성화              |
| `y`    | **Sticky**: 매칭이 문자열의 현재 위치부터 시작 |

---

### **2. 정규식에서 사용하는 특수 문자**

정규식은 특수 문자를 통해 패턴 매칭을 지원한다.

#### **2-1. 메타 문자**

| 메타 문자 | 설명                                                   |
|-----------|--------------------------------------------------------|
| `.`       | 줄바꿈을 제외한 모든 문자와 매칭                      |
| `^`       | 문자열의 시작과 매칭                                   |
| `$`       | 문자열의 끝과 매칭                                     |
| `*`       | 앞의 문자가 0번 이상 반복                              |
| `+`       | 앞의 문자가 1번 이상 반복                              |
| `?`       | 앞의 문자가 0번 또는 1번 반복                          |
| `{n}`     | 정확히 `n`번 반복                                      |
| `{n,}`    | 최소 `n`번 이상 반복                                   |
| `{n,m}`   | 최소 `n`번, 최대 `m`번 반복                            |
| `\`       | 이스케이프 문자로 메타 문자를 일반 문자로 취급          |
| `|`       | OR 연산자. 패턴 중 하나와 매칭                         |
| `()`      | 그룹을 생성하며 캡처에도 사용                          |
| `[]`      | 문자 클래스 정의                                       |
| `[^]`     | 문자 클래스를 제외한 문자와 매칭                       |

#### **2-2. 문자 클래스**

| 문자 클래스 | 설명                                |
|-------------|-------------------------------------|
| `\d`        | 숫자(`0-9`)                         |
| `\D`        | 숫자가 아닌 문자                    |
| `\w`        | 단어 문자(영문자, 숫자, `_`)        |
| `\W`        | 단어 문자가 아닌 문자               |
| `\s`        | 공백 문자(스페이스, 탭 등)          |
| `\S`        | 공백이 아닌 문자                    |

---

### **3. 주요 정규식 메서드**

#### **3-1. 문자열 메서드와 정규식**

1. **`match()`**
   - 문자열에서 정규식과 매칭되는 값을 찾는다.
   - `g` 플래그가 있으면 배열로 반환, 없으면 첫 번째 매칭 결과와 관련된 정보를 반환한다.
   ```javascript
   const str = "hello world";
   console.log(str.match(/o/g)); // ["o", "o"]
   console.log(str.match(/z/));  // null
   ```

2. **`replace()`**
   - 정규식 또는 문자열로 매칭된 부분을 다른 문자열로 치환
   ```javascript
   const str = "hello world";
   console.log(str.replace(/world/, "JavaScript")); // "hello JavaScript"
   ```

3. **`search()`**:
   - 정규식과 일치하는 첫 번째 위치의 인덱스를 반환.
   ```javascript
   const str = "hello world";
   console.log(str.search(/world/)); // 6
   ```

4. **`split()`**:
   - 정규식을 기준으로 문자열을 나눈다.
   ```javascript
   const str = "1,2,3,4,5";
   console.log(str.split(/,/)); // ["1", "2", "3", "4", "5"]
   ```



#### **3-2. `RegExp` 메서드**

1. **`test()`**
   - 정규식이 문자열에 매칭되는지 Boolean으로 반환
   ```javascript
   const regex = /hello/;
   console.log(regex.test("hello world")); // true
   console.log(regex.test("hi there"));    // false
   ```

2. **`exec()`**
   - 정규식이 문자열과 매칭되면 결과를 배열로 반환하며, 매칭되지 않으면 `null` 반환한다.
   - `g` 플래그를 사용하면 매번 호출 시 새로운 매칭을 찾는다.
   ```javascript
   const regex = /hello/g;
   const str = "hello hello";
   console.log(regex.exec(str)); // ["hello"]
   console.log(regex.exec(str)); // ["hello"]
   console.log(regex.exec(str)); // null
   ```

---

### **4. 정규식 예제**

#### **4-1. 이메일 유효성 검사**
```javascript
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regex.test("user@example.com")); // true
console.log(regex.test("invalid-email"));    // false
```

#### **4-2. 전화번호 형식 검증**
```javascript
const regex = /^\d{3}-\d{3,4}-\d{4}$/;
console.log(regex.test("010-1234-5678")); // true
console.log(regex.test("123-45-6789"));  // false
```

#### **4-3. 문자열에서 숫자 추출**
```javascript
const str = "I have 2 apples and 3 oranges.";
const numbers = str.match(/\d+/g).map(Number);
console.log(numbers); // [2, 3]
```

#### **4-4. HTML 태그 제거**
```javascript
const str = "<p>Hello, <b>world</b>!</p>";
const clean = str.replace(/<[^>]*>/g, "");
console.log(clean); // "Hello, world!"
```

---

### **5. 정규식의 주요 사용 사례**

1. **문자열 유효성 검사**:
   - 이메일, 전화번호, 비밀번호 등 입력 값이 올바른지 확인할 수 있다.

2. **문자열 검색**:
   - 특정 패턴이 문자열에 존재하는지 확인할 수 있다.

3. **문자열 추출**:
   - 숫자, 특정 단어, 구문 등을 문자열에서 추출할 수 있다.

4. **문자열 치환**:
   - 텍스트를 대체하거나 포맷을 수정할 수 있다.

5. **데이터 전처리**:
   - HTML 태그 제거, 공백 제거 등

---

### **6. 주의 사항**

1. **정규식의 복잡성**
   - 정규식이 복잡해질수록 가독성이 떨어질 수 있다. 주석(`x` 플래그 사용)이나 적절한 분리를 통해 가독성을 높이는 것이 중요하다.

2. **무한 루프 방지**
   - 잘못된 정규식(특히 `.*` 같은 탐욕적 패턴)을 사용하면 성능 문제가 발생할 수 있다.

3. **`g` 플래그 사용 시 상태 유지**
   - `g` 플래그를 사용하면 `RegExp` 객체는 상태를 유지하므로 주의해야 한다.