### **JavaScript의 Set 객체**

**`Set` 객체**는 **값들의 집합**(collection)을 저장하는 자료구조로, **중복된 값을 허용하지 않는 특징**을 가지고 있다. 배열과 비슷하지만, 중복을 제거하거나 고유한 값을 처리할 때 더 효율적으로 사용할 수 있다.

---

## **1. Set의 특징**

1. **중복된 값이 허용되지 않음**
   - 동일한 값을 추가하면 무시된다다.
   - 예: `Set`에 `[1, 1, 2]`를 추가하면 `[1, 2]`만 저장된다.

2. **삽입 순서를 유지**
   - `Set` 객체는 삽입된 값의 순서를 유지한다.
   - 값들이 순차적으로 저장되어 `for...of` 문으로 순회 시 삽입 순서대로 값을 가져온다.

3. **데이터 타입 상관없이 고유한 값으로 저장**
   - 숫자, 문자열, 객체 등 모든 데이터 타입을 값으로 저장할 수 있다.

---

## **2. Set 생성 및 기본 사용법**

### **2-1. Set 생성**
```javascript
const mySet = new Set(); // 빈 Set 생성
```

### **2-2. 값 추가**
```javascript
const mySet = new Set();
mySet.add(1);        // Set에 1 추가
mySet.add(2);        // Set에 2 추가
mySet.add(1);        // 중복된 값 추가 -> 무시됨
console.log(mySet);  // 출력: Set(2) { 1, 2 }
```

### **2-3. 값 삭제**
```javascript
mySet.delete(1);     // 1 삭제
console.log(mySet);  // 출력: Set(1) { 2 }
```

### **2-4. 값 존재 여부 확인**
```javascript
console.log(mySet.has(1)); // false (1은 삭제됨)
console.log(mySet.has(2)); // true
```

### **2-5. Set 크기 확인**
```javascript
console.log(mySet.size); // 1
```

---

## **3. Set의 주요 메서드**

| 메서드           | 설명                                                    |
|------------------|---------------------------------------------------------|
| `add(value)`     | Set에 값을 추가. 이미 존재하면 무시됨                  |
| `delete(value)`  | Set에서 값을 제거. 성공하면 `true`, 실패하면 `false`   |
| `has(value)`     | Set에 값이 존재하는지 확인                             |
| `clear()`        | 모든 값을 제거하여 빈 Set으로 만듦                     |
| `size`           | Set에 저장된 값의 개수를 반환                          |

---

## **4. Set 순회**

### **4-1. `for...of` 사용**
```javascript
const mySet = new Set([1, 2, 3]);
for (const value of mySet) {
  console.log(value); // 1, 2, 3
}
```

### **4-2. `forEach` 사용**
```javascript
mySet.forEach(value => {
  console.log(value); // 1, 2, 3
});
```

### **4-3. Spread 연산자**
```javascript
const mySet = new Set([1, 2, 3]);
const arr = [...mySet]; // Set을 배열로 변환
console.log(arr); // [1, 2, 3]
```

---

## **5. Set 활용 예제**

### **5-1. 배열에서 중복 제거**
```javascript
const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4, 5]
```

### **5-2. 두 배열의 교집합**
```javascript
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
const intersection = [...setA].filter(value => setB.has(value));
console.log(intersection); // [3, 4]
```

### **5-3. 두 배열의 합집합**
```javascript
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
const union = new Set([...setA, ...setB]);
console.log([...union]); // [1, 2, 3, 4, 5, 6]
```

### **5-4. 두 배열의 차집합**
```javascript
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
const difference = [...setA].filter(value => !setB.has(value));
console.log(difference); // [1, 2]
```

---

## **6. Set vs Array**

| **Set**                      | **Array**                                |
|-------------------------------|------------------------------------------|
| 중복된 값을 허용하지 않음     | 중복된 값 허용                           |
| 삽입/삭제가 빠름              | 삽입/삭제는 느림 (인덱스 기반 조작 필요) |
| 값의 존재 여부 확인이 빠름     | 값의 존재 여부 확인이 느림 (`includes`) |
| 순회는 배열과 동일            | 순회는 동일                              |

---

## **7. 주의 사항**

1. **객체 비교**
   - `Set`은 **객체의 참조값**을 비교하므로, 같은 내용의 객체라도 다른 객체로 취급된다.
   ```javascript
   const set = new Set();
   set.add({ a: 1 });
   set.add({ a: 1 }); // 다른 참조값이므로 중복 아님
   console.log(set.size); // 2
   ```

2. **중복 제거의 범위**
   - `Set`은 동일한 값만 제거하므로, **데이터 타입이 다른 경우** 중복으로 간주되지 않는다.
   ```javascript
   const set = new Set([1, "1"]);
   console.log(set.size); // 2
   ```