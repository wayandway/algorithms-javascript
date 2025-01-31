## Array
### sort()
- `sort((a, b) => a - b)` : 오름차순 정렬

- `sort((a, b) => a.localeCompare(b))` : 알파벳 오름차순 정렬

---

### reverse()
원본 배열의 순서를 반대로 뒤집음

---

### filter()
배열에서 주어진 조건을 만족하는 모든 요소를 모아 새로운 배열로 반환하며, 원본 배열은 변경되지 않는다.
- ```js
  array.filter(callback(element, index, array), thisArg);
  ```
  - callback: 각 요소에 대해 호출되는 함수. 다음 인자를 받는다.
    - element: 현재 처리 중인 요소
    - index (선택): 현재 요소의 인덱스
    - array (선택): 호출한 원본 배열
    - thisArg (선택): callback 함수 내에서 사용될 this 값
    - ex) `numbers.filter(num => num % 2 === 0)`

---

### find()
- find() 메소드는 배열에서 주어진 조건에 맞는 첫 번째 요소를 반환하며, 조건에 맞는 요소가 없으면 undefined를 반환한다.

- ```js
  array.find(callback(element[, index[, array]])[, thisArg])
  ```

1. callback
  - 각 배열 요소에 대해 실행할 함수.
  - 반환값이 true인 첫 번째 요소를 find()가 반환한다.
  - callback 함수는 다음 인수를 받는다.
    - element (필수): 현재 처리 중인 요소
    - index (선택): 현재 처리 중인 요소의 인덱스
    - array (선택): find()가 호출된 배열
2. thisArg (선택)
  - callback 함수 내부에서 this로 사용할 값

3. 반환값
- 조건에 맞는 첫 번째 배열 요소
- 조건에 맞는 요소가 없으면 undefined 반환

---

### indexOf()
배열 또는 문자열에서 주어진 값이 처음으로 등장하는 위치(인덱스)를 반환한다.<br/>
값이 없으면 -1을 반환한다.

- ```js
  array.indexOf(searchElement, fromIndex);
  ```
  - `searchElement`: 찾고자 하는 요소
  - `fromIndex`(옵션): 탐색을 시작할 인덱스 (기본값은 0). 음수일 경우, 배열의 끝에서부터 역방향으로 계산하여 시작 인덱스를 설정 

---

### lastIndexOf()
배열 또는 문자열에서 주어진 값이 마지막으로 등장하는 위치(인덱스)를 반환한다.<br/>
값이 없으면 -1을 반환한다.

- ```js
  arr.lastIndexOf(searchValue, fromIndex)
  ```
  - `searcValue`(필수): 찾고자 하는 요소
  - `fromIndex`(옵션): 탐색을 시작할 인덱스 (기본값은 0). 기본값은 `str.length - 1`로, 문자열 끝에서부터 검색

---

### findIndex()
배열의 요소 중 조건을 만족하는 첫 번째 요소의 인덱스를 반환하는 메소드. <br/>
조건을 만족하는 요소가 없으면 -1을 반환한다.

- ```js
  array.findIndex(callback(element, index, array), thisArg);
  ```
  - `callback`: 각 배열 요소에 대해 호출되는 함수
  - `element`: 현재 처리 중인 배열 요소
  - `index` (옵션): 현재 요소의 인덱스
  - `array` (옵션): 호출된 배열
  - `thisArg` (옵션): callback 실행 시 this로 사용할 값

---

### reduce()
- ```js
  array.reduce(callback(accumulator, currentValue, index, array), initialValue);
  ```
  - callback: 배열의 각 요소에 대해 실행되는 함수
    - accumulator: 누적된 결과를 저장하는 변수
    - currentValue: 현재 순회 중인 배열의 요소
    - index (선택): 현재 순회 중인 요소의 인덱스
    - array (선택): 호출한 원본 배열

  - initialValue (선택): accumulator의 초기값. 주어지지 않으면 배열의 첫 번째 요소가 초기값으로 설정

  - 예시) 숫자 배열 평균값 구하기
      ```js
      function solution(numbers) {
          var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
          return answer;
      }
      ```

---

### splice()
- 배열 내 중간에 있는 데이터 추가/삭제 시 유용
 - ```js
    array.splice(start, deleteCount, item1, item2, ...);
   ```
    - `start` : 배열에서 수정(추가/제거) 시작 지점의 인덱스
    - `deleteCount` : 배열에서 제거할 요소의 개수 → 0이면 아무 것도 삭제되지 않고, 새로운 요소만 추가
    - `item1, item2, ...` : 추가할 새로운 요소들 (선택사항) → 생략하면 제거만 함.
    - 파괴적 메소드 (원본 배열 수정)
  
---
  
### push(), pop()
`push()`
- 배열의 끝에 새로운 요소를 추가

- 배열의 새로운 길이를 반환

- ```js
  const stack = [];
  stack.push(10);    // [10]
  stack.push(20);    // [10, 20]
  stack.push(30);    // [10, 20, 30]

  console.log(stack); // [10, 20, 30]
  ```

`pop()`
- 배열의 마지막 요소를 제거
- 제거된 요소를 반환
- 만약 배열이 비어 있다면 undefined를 반환

- ```js
  const stack = [10, 20, 30];
  const lastItem = stack.pop();  // 30 (제거된 요소)

  console.log(lastItem); // 30
  console.log(stack);    // [10, 20]
  ```

---

### unshift(), shift()
`unshift`
- 배열의 앞쪽에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환

- ```js
  array.unshift(element1, element2, ..., elementN)
  ```

- 배열의 시작 부분에 요소를 추가하며 기존 요소들의 인덱스를 뒤로 밀어낸다. (시간 복잡도 O(n))
- 원본 배열이 수정된다.


`shift`
- 배열의 첫 번째 요소를 제거하고, 제거된 요소를 반환

- ```js
  array.shift()
  ```

- 파라미터 없음
- 배열의 시작 부분에 있는 요소를 제거하면서, 나머지 요소들의 인덱스를 앞으로 당긴다. (시간 복잡도 O(n))
- 원본 배열이 수정된다.

---

### flatMap()
`flatMap`
- 매핑 (Mapping): 배열의 각 요소에 대해 주어진 콜백 함수를 실행하여 새로운 배열을 생성
- 평탄화 (Flattening): 배열 안에 배열이 있을 경우, 이를 하나의 배열로 평탄화 (배열의 깊이는 1단계만 평탄화)
- ```js
  arr.flatMap(callback(currentValue, index, array))
  ```
  - `callback(currentValue, index, array)`: 배열의 각 요소에 대해 실행되는 함수
  - `currentValue`: 현재 처리 중인 요소
  - `index`: 현재 요소의 인덱스
  - `array`: 원본 배열
- 반환값 : 새로운 배열을 반환하며, 평탄화된 형태로 리턴