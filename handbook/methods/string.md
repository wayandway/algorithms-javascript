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

### `charAt()`
- 특정 인덱스의 문자를 반환

### `substring()`
- 문자열의 특정 부분을 추출

- ```js 
  const str = "hello";
  console.log(str.substring(1, 4)); // 출력: "ell"
  ```

### `.toUpperCase()` / `.toLowerCase()`

- 문자열을 대문자 또는 소문자로 변환

### `replace()`

- 특정 문자열을 다른 문자열로 대체

- ```js 
  const str = "hello world";
  console.log(str.replace("world", "JavaScript")); // 출력: "hello JavaScript"
  ```

### `repeat()`
- 주어진 문자열을 특정 횟수만큼 반복하여 새로운 문자열을 생성

- ```js 
   string.repeat(count)
  ```
  - count: 반복할 횟수 (0 이상 2³¹ - 1 이하의 정수)
     - 정수 값이어야 하며, 소수일 경우 소수점 이하를 잘라냄
     - count 값이 0이면 빈 문자열을 반환
     - count 값이 음수이거나 무한대일 경우 RangeError를 발생시킴

  - 리턴값 : 주어진 문자열을 count 횟수만큼 반복한 새로운 문자열