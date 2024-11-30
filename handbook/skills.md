
### 각 자릿수를 배열로 변환하기
```js
const age = 14
const array = String(age).split('').map(Number)
// 14 -> "14" -> ["1", "4"] -> [1, 4]
```

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

### 최대공약수, 최소공배수
```js
// 최대공약수(GCD) - 유클리드 알고리즘
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

// 최소공배수(LCM)
const lcm = (a * b) / gcd(a, b)
```

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