//* 주사위의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box, n) {
    const [width, height, depth] = box; // 상자의 가로, 세로, 높이 길이
    const maxWidth = Math.floor(width / n);  // 가로 방향에 들어가는 주사위 개수
    const maxHeight = Math.floor(height / n); // 세로 방향에 들어가는 주사위 개수
    const maxDepth = Math.floor(depth / n);  // 높이 방향에 들어가는 주사위 개수

    return maxWidth * maxHeight * maxDepth;  // 총 주사위 개수
}

/**
 ** 각 방향별로 최대 주사위 개수 계산 : 각 차원(가로, 세로, 높이)에서 주사위가 들어갈 수 있는 최대 개수는 상자의 해당 차원을 주사위의 변 길이로 나눈 몫
 ** 총 주사위 개수 : 각 차원별 최대 주사위 개수를 모두 곱한다. (가로 방향 개수) * (세로 방향 개수) * (높이 방향 개수) = 최대 주사위 개수
*/

// 시간 복잡도 : O(1)