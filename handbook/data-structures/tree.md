## **트리**

### **1. 트리의 개념**

- **트리**(Tree)는 데이터를 **계층 구조**로 저장하고 탐색하기에 유용한 자료구조이다.
- 트리는 하나의 **루트 노드**를 중심으로, 여러 **자식 노드**가 연결된 계층적인 구조를 가진다.
- 트리의 대표적인 활용 사례는 **파일 시스템**, **디렉터리 구조**, **웹 페이지의 DOM 구조** 등이다.

---

### **2. 트리 활용 분야**

- **인공지능(AI)**: 미니맥스 알고리즘, 게임 트리
- **자동완성 기능**: **트라이(Trie)** 자료구조로 구현
- **데이터베이스**: **B-트리**와 **B+ 트리**를 활용하여 데이터를 빠르게 검색 및 정렬

---

### **3. 트리 구조**

1. **노드(Node)**
   - 트리의 데이터가 저장되는 기본 구성 요소
   - 루트 노드: 트리의 시작점

2. **에지(Edge)**
   - 두 노드를 연결하는 선. 부모-자식 관계를 나타냄

3. **레벨(Level)**
   - 트리에서 루트 노드로부터의 거리

4. **부모-자식 관계**
   - 부모 노드는 자식 노드와 연결됨
   - 자식 노드가 없으면 **리프 노드**(Leaf Node)라 함

5. **형제 관계**
   - 동일한 부모 노드를 가진 노드들

6. **차수(Degree)**
   - 한 노드가 가지는 자식 노드의 개수

7. **가중치(Weight)**
   - 에지에 부여된 값(선택적)

---

### **4. 이진 트리(Binary Tree)**

- **이진 트리**는 모든 노드가 최대 **2개의 자식 노드**만 가질 수 있는 트리를 말한다.
- 이진 트리는 **코딩 테스트**에서 자주 등장하는 중요한 자료구조이다.

#### **표현 방법**

1. **배열로 표현하기**
   - 루트 노드는 인덱스 `0`에 위치
   - 왼쪽 자식 노드: 부모 인덱스 × 2 + 1
   - 오른쪽 자식 노드: 부모 인덱스 × 2 + 2

   **예시**
   ```
   배열: [1, 2, 3, 4, 5]
   트리 구조:
          1
         / \
        2   3
       / \
      4   5
   ```

2. **포인터로 표현하기**
   - 각 노드는 왼쪽, 오른쪽 자식 노드를 가리키는 포인터를 가짐

---

### **5. 이진 트리 순회**

**순회**: 트리의 모든 데이터를 방문하는 작업

1. **전위 순회 (Pre-order)**
   - 방문 순서: **루트 → 왼쪽 → 오른쪽**
   - 주로 **트리 복사**에 사용

2. **중위 순회 (In-order)**
   - 방문 순서: **왼쪽 → 루트 → 오른쪽**
   - **이진 탐색 트리**에서 정렬된 데이터를 얻을 때 사용

3. **후위 순회 (Post-order)**
   - 방문 순서: **왼쪽 → 오른쪽 → 루트**
   - 트리 삭제에 주로 사용

---

### **6. 이진 탐색 트리 (Binary Search Tree, BST)**

#### **구조**
- 이진 탐색 트리는 데이터를 효율적으로 검색하기 위해 만들어진 트리이다
- **특징**
  - 왼쪽 서브 트리: 현재 노드보다 작은 값을 저장
  - 오른쪽 서브 트리: 현재 노드보다 큰 값을 저장

---

#### **탐색 및 삽입**

1. **탐색 과정**
   - 현재 노드와 찾는 값을 비교
     - 같으면 탐색 종료
     - 찾는 값이 작으면 왼쪽 자식으로 이동
     - 찾는 값이 크면 오른쪽 자식으로 이동
   - 값을 찾지 못하면 탐색 실패

2. **삽입 과정**
   - 값을 비교하며 탐색
   - 적절한 위치(왼쪽 또는 오른쪽 자식)가 비어 있으면 삽입

**예시**
```
삽입 순서: [10, 5, 15, 3, 7]
트리 구조:
       10
      /  \
     5   15
    / \
   3   7
```

---

### **7. 시간 복잡도**

- **탐색, 삽입, 삭제**
  - 트리가 균형을 이루고 있다면  `O(log N)`
  - 하지만 트리가 편향되면(한쪽으로 치우침) 최악의 경우 `O(N)`

---

### **8. 이진 탐색 트리와 배열 탐색 비교**

1. **배열 탐색**
   - 선형 탐색:  `O(N)` 
   - 이진 탐색(정렬된 배열):  `O(log N)`

2. **이진 탐색 트리**
   - 균형 유지 시:  `O(log N)` 
   - 균형이 깨진 경우(편향 트리):  `O(N)` 

---

### **9. 균형 이진 탐색 트리**

- 균형이 유지된 이진 탐색 트리는 탐색 성능을 항상 `O(log N)`으로 보장
- 대표적인 균형 이진 탐색 트리
  - **AVL 트리**
  - **레드-블랙 트리**
- 균형 유지 알고리즘이 복잡해 코딩 테스트에서는 잘 나오지 않음

---

### **요약**

| 항목                   | 설명                                                                 |
|------------------------|----------------------------------------------------------------------|
| **트리 구조**           | 계층 구조를 가진 자료구조로 노드, 에지, 레벨, 부모-자식 관계로 구성 |
| **이진 탐색 트리**       | 왼쪽 자식은 작은 값, 오른쪽 자식은 큰 값으로 구성                  |
| **이진 탐색 트리 시간 복잡도** | 균형일 때  `O(log N)`, 편향 시  `O(N)`                       |
| **순회 방식**           | 전위, 중위, 후위 순회                                             |
| **활용 사례**           | 데이터베이스(B-트리), 자동완성(트라이), 검색 알고리즘               |

트리는 데이터를 계층적으로 저장하고 효율적으로 탐색할 때 매우 유용한 자료구조이다.