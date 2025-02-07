//* 멀리 뛰기 https://school.programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {    
    // dp 배열을 생성하고 초기화
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;  // 1칸에 도달하는 방법 1가지
    dp[2] = 2;  // 2칸에 도달하는 방법 2가지 (1칸+1칸, 2칸 한 번)
    
    // 점화식에 따라 dp[i] 값을 구함
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }
    
    return dp[n];
}