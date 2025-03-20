//* 타켓 넘버 https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
    let count = 0;

    function dfs(index, sum) {
        if (index === numbers.length) { // 모든 숫자를 사용한 경우
            if (sum === target) count++; // 목표값을 만들었으면 경우의 수 증가
            return;
        }
        
        // 현재 숫자를 더하는 경우
        dfs(index + 1, sum + numbers[index]);
        // 현재 숫자를 빼는 경우
        dfs(index + 1, sum - numbers[index]);
    }

    dfs(0, 0); // 시작: index 0부터, sum은 0에서 시작
    return count;
}

/*
각 숫자에 대해 + 또는 - 두 가지 선택이 가능 → O(2^N)
N ≤ 20 이고, 최악의 경우 ≈ 1,048,576 이므로 충분히 완전 탐색이 가능
*/