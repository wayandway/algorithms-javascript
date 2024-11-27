## Array
### `sort()`
- `sort((a, b) => a - b)` : 오름차순 정렬

- `sort((a, b) => a.localeCompare(b))` : 알파벳 오름차순 정렬

### `reverse()`
원본 배열의 순서를 반대로 뒤집음

### `filter()`
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

### `find()`
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

### `indexOf()`
배열 또는 문자열에서 주어진 값이 처음으로 등장하는 위치(인덱스)를 반환한다. 값이 없으면 -1을 반환한다.

### `reduce()`
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

### `splice()`
 - ```js
    array.splice(start, deleteCount, item1, item2, ...);
   ```
    - `start` : 배열에서 수정(추가/제거) 시작 지점의 인덱스
    - `deleteCount` : 배열에서 제거할 요소의 개수 → 0이면 아무 것도 삭제되지 않고, 새로운 요소만 추가
    - `item1, item2, ...` : 추가할 새로운 요소들 (선택사항) → 생략하면 제거만 함.
    - 파괴적 메소드 (원본 배열 수정)
    
### `push()`, `pop()`
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