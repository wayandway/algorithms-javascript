//* 등굣길 https://school.programmers.co.kr/learn/courses/30/lessons/42898

function solution(m, n, puddles) {
    const MOD = 1_000_000_007;

    // 한 줄짜리 DP 배열 (m 크기)
    let dp = Array(m).fill(0);
    dp[0] = 1; // 시작점 초기화

    // 물웅덩이를 Set으로 변환 (1-based → 0-based 변환)
    const puddleSet = new Set(puddles.map(([x, y]) => `${y-1},${x-1}`));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (puddleSet.has(`${i},${j}`)) {
                dp[j] = 0; // 물웅덩이는 갈 수 없음
            } else if (j > 0) {
                dp[j] = (dp[j] + dp[j-1]) % MOD; // 왼쪽에서 오는 경우 추가
            }
        }
    }

    return dp[m - 1];
}
