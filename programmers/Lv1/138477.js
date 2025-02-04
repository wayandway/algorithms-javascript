//* 명예의 전당(1) https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
    const topList = [];
    const lowList = [];

    for (let i = 0; i < score.length; i++) {
        topList.push(score[i]);
        topList.sort((a, b) => b - a); // 내림차순 정렬
        
        if (topList.length > k) {
            topList.pop(); // 상위 k개를 유지하기 위해 가장 작은 점수를 제거
        }

        lowList.push(topList[topList.length - 1]); // 현재 가장 작은 점수를 기록
    }

    return lowList;
}

/**
 * 전체 시간 복잡도는 O(N * K log K)
 * N은 score 배열의 길이 (즉, 점수의 개수)
 * K는 상위 K개의 점수를 유지해야 하는 개수
*/