//* 예산 https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    d.sort((a, b) => a - b); // 신청 금액이 적은 순으로 정렬
    let count = 0; // 지원 가능한 부서 수

    for (let cost of d) {
        if (budget >= cost) { // 예산이 남아 있으면 지원 가능
            budget -= cost;
            count++;
        } else {
            break; // 예산이 부족하면 종료
        }
    }

    return count;
}

/**
총 시간 복잡도 : O(n). n은 d 배열의 길이

알고리즘 : 그리디
- 매 순간 가장 작은 금액을 요청한 부서부터 지원하는 것이 최적의 선택
- 순간순간 최적의 결정을 내리면서 전체적으로도 최적의 해를 도출할 수 있음
- 정렬 후, 작은 것부터 차례로 예산을 차감하는 방식
*/