//* 주식 가격 https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = []; // 가격의 인덱스를 저장하는 스택

    for (let i = 0; i < prices.length; i++) {
        // 현재 가격이 스택 top보다 낮다면, 가격이 떨어진 것이므로 정리
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            let top = stack.pop();
            answer[top] = i - top; // 지속 시간 계산
        }
        stack.push(i); // 현재 인덱스 저장
    }

    // 스택에 남아있는 값 처리 (끝까지 가격이 안 떨어진 경우)
    while (stack.length > 0) {
        let top = stack.pop();
        answer[top] = prices.length - 1 - top;
    }

    return answer;
}

// 총 시간 복잡도 O(N)