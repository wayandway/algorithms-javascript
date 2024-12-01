## 큐 (Queue)

### **1. 큐의 개념**
- **큐**(Queue)는 **FIFO(First In, First Out)** 구조를 가진 자료구조로, **가장 먼저 들어간 데이터가 가장 먼저 나오는** 구조이다.
- 큐는 **입력 방향**(rear)과 **출력 방향**(front)이 정해져 있어, 한쪽 끝에서 데이터를 삽입하고, 반대쪽 끝에서 데이터를 제거한다.

---

### **2. 큐에서 데이터 이동 과정**
1. **삽입(push)**
   - 데이터를 **rear**(끝)에 추가한다.
   - 데이터가 추가되면 `rear` 포인터가 한 칸 이동한다.

2. **삭제(pop)**
   - 데이터를 **front**(처음)에서 제거한다.
   - 데이터가 제거되면 `front` 포인터가 한 칸 이동한다.

---

### **3. 큐의 활용 예시**

1. **작업 대기열**
   - 네트워크 통신, CPU 스케줄링에서 다수의 요청이 순차적으로 처리될 때 사용
   - 예: **프린터 대기열**, **네트워크 요청 처리**

2. **이벤트 처리**
   - 이벤트 기반 시스템에서 발생한 이벤트를 순서대로 처리
   - 예: **키 입력 처리**, **GUI 이벤트 처리**

3. **BFS(너비 우선 탐색)**
   - 그래프 탐색에서 **방문할 노드**를 저장하는 데 큐를 사용

---

### **4. 큐의 ADT (추상적 자료형)**

1. **연산**
   - **`isFull`**
     - 큐가 가득 찼는지 확인
   - **`isEmpty`**
     - 큐가 비었는지 확인
   - **`push(item)`**
     - 큐의 **rear**에 데이터를 추가
   - **`pop()`**
     - 큐의 **front**에서 데이터를 제거하고 반환

2. **상태**
   - **`front`**
     - 가장 먼저 들어온 데이터를 가리키는 포인터
   - **`rear`**
     - 가장 마지막으로 삽입된 데이터를 가리키는 포인터
   - **`data`**
     - 큐의 데이터를 저장하는 배열

---

### **5. 큐의 세부 동작**

#### (1) **삽입 (Push)**
- 데이터를 **rear**에 추가하고, `rear` 포인터를 다음 위치로 이동
- 큐가 가득 찼다면 **`isFull`** 상태를 반환

#### (2) **삭제 (Pop)**
- 데이터를 **front**에서 제거하고, `front` 포인터를 다음 위치로 이동
- 큐가 비었다면 **`isEmpty`** 상태를 반환

#### (3) **순환 큐 (Circular Queue)**
- 큐의 메모리를 고정된 크기로 사용할 경우, 배열의 끝에 도달하면 다시 시작점으로 돌아가는 **순환 구조**를 사용

---

### **6. 큐 구현 방법**

#### (1) **`shift()` 메소드 사용**
- JavaScript의 `shift()` 메소드를 사용하여 배열의 첫 번째 요소를 제거

```javascript
class Queue {
    constructor() {
        this.data = [];
    }

    push(item) {
        this.data.push(item); // rear에 추가
    }

    pop() {
        return this.data.shift(); // front에서 제거
    }

    isEmpty() {
        return this.data.length === 0;
    }
}

// 사용 예시
const queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // 1
console.log(queue.isEmpty()); // false
```

**단점**: `shift()`는 배열의 첫 번째 요소를 제거하며 나머지 요소를 이동시키므로 비효율적이다.

---

#### (2) **배열 이용**
- `front`와 `rear` 포인터를 직접 관리하여 배열을 큐로 사용

```javascript
class Queue {
    constructor(size) {
        this.data = new Array(size);
        this.front = 0;
        this.rear = 0;
        this.size = size;
    }

    isFull() {
        return this.rear === this.size;
    }

    isEmpty() {
        return this.front === this.rear;
    }

    push(item) {
        if (this.isFull()) throw new Error("Queue is full");
        this.data[this.rear++] = item; // rear에 추가
    }

    pop() {
        if (this.isEmpty()) throw new Error("Queue is empty");
        return this.data[this.front++]; // front에서 제거
    }
}

// 사용 예시
const queue = new Queue(5);
queue.push(1);
queue.push(2);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
```

---

#### (3) **연결 리스트 이용**
- 노드(Node)를 연결하여 큐를 구현. `front`와 `rear` 포인터는 각각 첫 번째와 마지막 노드를 가리킴

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        return this.front === null;
    }

    push(item) {
        const newNode = new Node(item);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    pop() {
        if (this.isEmpty()) throw new Error("Queue is empty");
        const value = this.front.value;
        this.front = this.front.next;
        if (this.front === null) this.rear = null; // 큐가 비면 rear도 null로
        return value;
    }
}

// 사용 예시
const queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
```

---

### **7. 큐의 활용 예시**

| 활용 예시          | 설명                                                                 |
|--------------------|----------------------------------------------------------------------|
| **작업 대기열**    | 네트워크 요청 처리, 프린터 작업 스케줄링                            |
| **이벤트 처리**    | 이벤트가 발생한 순서대로 처리 (키 입력, 클릭 이벤트)                |
| **BFS 탐색**       | 그래프나 트리의 너비 우선 탐색                                   |
| **데이터 버퍼**    | 데이터 스트림을 순서대로 처리하는 버퍼 (예: 영상 스트리밍)           |

---

### **요약**
| 연산     | 설명                           | 시간 복잡도 |
|----------|--------------------------------|-------------|
| **Push** | 데이터를 큐의 끝(rear)에 추가   | \( O(1) \)  |
| **Pop**  | 데이터를 큐의 앞(front)에서 제거| \( O(1) \)  |
| **Peek** | 큐의 앞(front) 데이터 반환      | \( O(1) \)  |
| **isEmpty** | 큐가 비어 있는지 확인        | \( O(1) \)  |

큐는 작업 대기열이나 이벤트 처리 등 **순서를 보장해야 하는 문제**에서 효과적으로 사용된다.