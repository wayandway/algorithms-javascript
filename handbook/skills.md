
### 각 자릿수를 배열로 변환하기
```js
const age = 14
const array = String(age).split('').map(Number)
// 14 -> "14" -> ["1", "4"] -> [1, 4]
```

---

### n! (팩토리얼)
```js
// 재귀 방식 (작은 입력)
const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1)
```
```js
// 반복문 방식 (큰 입력)
const factorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
```

---

### 최대공약수, 최소공배수
```js
// 최대공약수(GCD) - 유클리드 알고리즘
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

// 최소공배수(LCM)
const lcm = (a * b) / gcd(a, b)
```

---

### 약수 구하기
```js
// 시간복잡도 : O(√n)
function getDivisors(n) {
    const divisors = [];

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);  // 작은 약수 추가
            if (i !== n / i) {
                divisors.push(n / i);  // 큰 약수 추가 (중복 방지)
            }
        }
    }
}
```

---

### 소수 판별
```js
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
```

---

### 소인수 분해 
```js
function primeFactorization(n) {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        // 나누어떨어지면 해당 수를 소인수로 추가
        while (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        }
        divisor++;
    }

    return factors;
}
```

---

### 조합
```js
function getCombinations(arr, r) {
    const results = [];

    // Base case: r이 0이면 빈 배열 반환
    if (r === 0) return [[]];

    // Base case: 배열이 비어 있으면 빈 결과 반환
    if (arr.length === 0) return [];

    const [first, ...rest] = arr;

    // 첫 번째 원소를 선택한 경우
    const combinationsWithFirst = getCombinations(rest, r - 1).map(comb => [first, ...comb]);

    // 첫 번째 원소를 선택하지 않은 경우
    const combinationsWithoutFirst = getCombinations(rest, r);

    // 결과 합치기
    return [...combinationsWithFirst, ...combinationsWithoutFirst];
}

// 테스트
const arr = [1, 2, 3, 4];
const r = 2;
console.log(getCombinations(arr, r));
// 출력: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
```

---

### 공백으로 구분하기

```js
function solution(my_string) {
//  return my_string.split(/\s+/); // 정규식 활용
    return my_string.split(' ');
}
```