## **스택**

### **1. 스택 개념**
- **스택**(Stack)은 **LIFO(Last In, First Out)** 구조를 가진 자료구조로, 마지막에 삽입된 데이터가 가장 먼저 삭제되는 구조이다.
- 스택은 한쪽 끝에서만 삽입과 삭제가 이루어지며, 이를 **Top**으로 지정한다.

---

### **2. 스택의 동작 원리**
- **Push**: 데이터를 스택의 맨 위에 삽입
- **Pop**: 데이터를 스택의 맨 위에서 제거
- **Peek/Top**: 스택의 맨 위 데이터를 확인하지만 제거하지 않음

#### 스택의 동작 예시:
1. 초기 상태: `[]` (빈 스택)
2. **Push(1)** → `[1]`
3. **Push(2)** → `[1, 2]`
4. **Pop()** → `[1]` (2 제거)
5. **Peek/Top()** → `1` (스택은 그대로)

---

### **3. 스택의 ADT (추상적 자료형)**
스택은 다음과 같은 연산을 제공한다.

1. **Push(item)**: 스택에 데이터를 삽입
2. **Pop()**: 스택의 마지막 데이터를 제거하고 반환
3. **isFull()**: 스택이 가득 찼는지 확인 (주로 배열 기반 구현에서 사용)
4. **isEmpty()**: 스택이 비어 있는지 확인
5. **Top()**: 스택의 마지막 데이터를 반환

---

### **4. JavaScript로 스택 구현 및 활용**

#### (1) **JavaScript의 `push`와 `pop` 메서드 활용**
JavaScript의 배열은 기본적으로 스택처럼 동작할 수 있다.
```javascript
const stack = [];

// Push 연산
stack.push(1); // [1]
stack.push(2); // [1, 2]

// Pop 연산
console.log(stack.pop()); // 2
console.log(stack);       // [1]

// Peek/Top 연산
console.log(stack[stack.length - 1]); // 1
```

#### (2) **스택 클래스 구현**
```javascript
class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    top() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length - 1];
    }
}

// 사용 예시
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.top()); // 20
stack.pop();
console.log(stack.isEmpty()); // false
```

---

### **5. 스택 자료구조를 활용할 수 있는 예시**

1. **문자열 괄호 유효성 검사**
   - 예: `({[]})`는 올바른 괄호 문자열이고, `([)]`는 그렇지 않음
   - 스택을 이용해 열린 괄호를 저장하고, 닫힌 괄호가 올 때 스택에서 제거하여 유효성을 검증

2. **수식 계산**:
   - 중위 표기법 → 후위 표기법 변환
   - 후위 표기법 계산 (예: `3 4 + 2 *`)

3. **DFS (깊이 우선 탐색)**:
   - 그래프나 트리 탐색에서 재귀 대신 스택을 사용해 구현

4. **Undo/Redo 기능**:
   - 텍스트 편집기에서 실행 취소(Undo) 및 다시 실행(Redo) 기능 구현

5. **함수 호출 기록**:
   - 프로그램에서 함수 호출 스택은 함수의 호출 순서를 관리
   - 함수가 종료되면 스택에서 제거

6. **백트래킹 문제 해결**:
   - 예: 미로 탐색, 퍼즐 문제

7. **웹 브라우저의 뒤로/앞으로 이동**:
   - 방문한 페이지는 스택에 저장하고, 뒤로 가거나 앞으로 가는 작업을 처리

---

### **6. 스택의 장단점**

#### 장점
- 간단한 구현과 빠른 데이터 삽입/삭제
- 재귀 문제를 스택으로 변환 가능 (재귀 호출 관리)

#### 단점
- 제한적인 접근: 스택의 중간 데이터에 접근 불가
- 크기 제한(배열 기반 구현 시)

---

### **요약**

| 연산       | 설명                           | 시간 복잡도 |
|------------|--------------------------------|-------------|
| **Push**   | 데이터를 스택에 추가            | \( O(1) \)  |
| **Pop**    | 마지막 데이터를 제거 및 반환     | \( O(1) \)  |
| **Top**    | 마지막 데이터를 반환 (제거 X)   | \( O(1) \)  |
| **isEmpty**| 스택이 비어 있는지 확인         | \( O(1) \)  |