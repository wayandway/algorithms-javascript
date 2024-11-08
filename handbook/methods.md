## Math
### `Math.ceil()`
천장 함수. 높은 정수로 올림

### `Math.floor()`
바닥 함수. 낮은 정수로 내림

### `Math.trunc()`
양수와 음수에 상관없이 정수 부분만 남김


<br/>


## Array
### `sort()`
- `sort((a, b) => a - b)` : 오름차순 정렬

- `sort((a, b) => a.localeCompare(b))` : 알파벳 오름차순 정렬

### `reverse()`
원본 배열의 순서를 반대로 뒤집음

### `filter()`
- ```js
  array.filter(callback(element, index, array), thisArg);
  ```
  - callback: 각 요소에 대해 호출되는 함수. 다음 인자를 받는다.
    - element: 현재 처리 중인 요소
    - index (선택): 현재 요소의 인덱스
    - array (선택): 호출한 원본 배열
    - thisArg (선택): callback 함수 내에서 사용될 this 값
    - ex) `numbers.filter(num => num % 2 === 0)`


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


<br/>

## String

### `split()`
- ```js
  string.split(separator, limit);
  ```

  - separator (선택)
    - 문자열을 나눌 기준이 되는 구분자. 문자열 또는 정규식을 사용 가능
    - 지정하지 않으면 문자열 전체가 하나의 요소로 담긴 배열을 반환

  - limit (선택)
    - 분할할 최대 횟수를 지정. 또한 배열의 길이가 limit 이하로 제한됨
  
  - 빈 문자열("")을 구분자로 사용하면 문자열을 하나씩 나눠 배열로 반환


### `slice()`
- ```js
  const str = "Hello, world!";
  console.log(str.slice(7, 12));  // "world"
  ```
  - `slice(7, 12)`: 인덱스 7부터 12 이전까지 추출
  - 비파괴적 메소드



<br/>

## Date 
```js
const currentYear = new Date().getFullYear();
console.log(currentYear);  // 예: 2024
```

### `new Date()`
현재 날짜와 시간을 Date 객체로 생성

### `.getFullYear()`
4자리 연도를 반환




<br/>

## parseInt
```js
parseInt(string, radix)
```

- `string`: 문자열의 앞부분에서부터 숫자로 해석할 수 있는 부분만 변환

- `radix`: (선택) 2 ~ 36 사이의 정수로, 숫자를 해석할 진수(기수)를 지정. 기본값은 10

