## Date 
```js
const currentYear = new Date().getFullYear();
console.log(currentYear);  // 예: 2024
```

### `new Date()`
현재 날짜와 시간을 Date 객체로 생성

### `.getFullYear()`
4자리 연도를 반환

### `.getDay()`
0(일요일)부터 6(토요일)까지의 숫자를 반환

- 요일 문자열로 변환하기
  - 숫자(0~6)를 요일 문자열로 변환하려면 배열을 활용한다.
  - ```javascript
    function getWeekday(dateString) {
        const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        const date = new Date(dateString);
        return days[date.getDay()];
    }

    console.log(getWeekday('2025-02-04')); // "화요일"
    ```

