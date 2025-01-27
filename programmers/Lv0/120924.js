//* 다음에 올 숫자 https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
    const n = common.length;
    const [a, b, c] = [common[n - 3], common[n - 2], common[n - 1]];

    // 등차수열 체크
    if (b - a === c - b) {
        return c + (c - b);
    }
    
    // 등비수열 체크
    if (b / a === c / b) {
        return c * (c / b);
    }
}

// 시간복잡도 : O(1)
